# Use an official Node.js runtime as the base image
FROM node:22.14.0-alpine AS build

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the React application
RUN npm run build

# Expose port 80
EXPOSE 3000

# Start Nginx server
CMD ["npm", "start"]