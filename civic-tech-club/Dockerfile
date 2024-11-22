# Use an official Python runtime as a parent image
FROM python:3.9-slim

# Set the working directory in the container
WORKDIR /app

# Install nodejs needed for the Frontend
RUN apt-get update && apt-get upgrade -y && apt-get install -y nodejs npm
# Copy package.json and package-lock.json to the working directory
# COPY /frontend/package*.json .

# Copy the rest of the application files
COPY /frontend .

RUN npm install && npm run build

COPY /backend .

RUN pip install --no-cache-dir -r requirements.txt

# Expose the port the app will run on
EXPOSE 5000

# Define the command to run the Flask app
CMD ["python", "app.py"]