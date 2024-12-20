# Stage 1: Base stage using Node
FROM node:latest AS base

# Set the working directory inside the container
WORKDIR /app

# Copy the package and lock files to the working directory
COPY ./package.json ./package-lock.json ./

# Install openssl
RUN apt-get update -y && apt-get install -y openssl

# Install prisma globally
RUN npm install -g prisma

# Install bun
RUN npm install -g bun

# Install dependencies
RUN npm install

# Copy the rest of the application code to the working directory
COPY . ./

# Generate prisma client
RUN npx prisma generate

# Modify CMD to run migrations on startup and then start the application
CMD ["/bin/sh", "-c", "npx prisma migrate deploy && bun run --watch index.ts"]