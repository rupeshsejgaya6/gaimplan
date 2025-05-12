ARG NODE_VERSION=20.17.0-alpine3.20

# Stage 1: Build the application
FROM node:${NODE_VERSION} as builder
USER node:node
WORKDIR /app

# Copy package.json and package-lock.json to install dependencies
COPY package.json package-lock.json /app/
RUN npm ci

# Copy all source files and build the app
COPY . /app/
RUN npm run build

# Stage 2: Run migrations and start the app
FROM node:${NODE_VERSION}
USER node:node
WORKDIR /app

# Copy only production dependencies
COPY package.json package-lock.json /app/
RUN npm ci --omit=dev

# Copy built files from the builder stage
COPY --from=builder /app /app

# Run the migrations first
# CMD ["sh", "-c", "npx typeorm-ts-node-commonjs migration:run -d build/database/data-source.js && node build/main.js"]

