FROM node:20-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy package files to the working directory
COPY package.json pnpm-lock.yaml ./

# Install pnpm globally
RUN npm install -g pnpm

# Install dependencies
RUN pnpm install

# Copy the rest of the application code
COPY . .

# Expose the application port
EXPOSE 3000

# Build and start the application in a single command
RUN pnpm run build

# Start the application
CMD ["pnpm", "start"]