# Step 1: Base Stage for both Dev and Prod
FROM node:16 AS base

# Set the working directory
WORKDIR /app

# Copy package.json and install dependencies
COPY package*.json ./
RUN npm install

# Install Sass globally
RUN npm install -g sass

# Install npm-run-all globally for running multiple scripts in parallel
RUN npm install -g npm-run-all

# Copy the rest of the application code
COPY . .

# Step 2: Development Stage
FROM base AS dev

# Expose port for the React development server
EXPOSE 3000

# Set up environment variables (optional)
ENV NODE_ENV development

# Command to run React dev server and watch for SCSS changes
CMD ["npm", "start"]

# Step 3: Production Stage
FROM base AS build

# Compile Sass before building the React app
RUN npm run build-css

# Build the React app for production
RUN npm run build

# Step 4: Serve the app with Nginx
FROM nginx:alpine AS prod

# Copy the build output to Nginx
COPY --from=build /app/build /usr/share/nginx/html

# Expose the port Nginx is running on
EXPOSE 80

# Command to run Nginx
CMD ["nginx", "-g", "daemon off;"]
