# Use the official Node.js image as the base image
FROM node:18-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application files
COPY . .

# Expose the port that Vite uses (default is 5173)
EXPOSE 8000

# Command to run the Vite development server
CMD ["npm", "run", "dev"]
