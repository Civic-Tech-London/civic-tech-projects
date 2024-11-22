# Use an official Python runtime as a parent image
FROM python:3.9-slim

# Set the working directory in the container
WORKDIR /app

# Install nodejs needed for the Frontend
RUN apt-get update && apt-get upgrade -y && apt-get install -y nodejs npm

# Copy Front End files to the Docker WORKDIR
COPY /frontend .

# Build Front End files
RUN npm install && npm run build

# Copy Backend End files to the Docker WORKDIR
COPY /backend .

# Build Backend End files
RUN pip install --no-cache-dir -r requirements.txt

# Remove unnecessary files after installation 
########## TODO ################################
# RUN find . ! \( -name '__pycache__' -name 'node_modules' -o -name 'dist' -o -name 'app.py' \) -exec rm -rf {} +
# RUN find . -mindepth 1 -not -name 'app.py' -not -name 'node_modules' -exec rm -rf {} +


# Expose the port the app will run on
EXPOSE 5000

# Define environment variable ENV NAME
ENV NAME World

# Run app.py when the container launches 
CMD ["gunicorn", "--bind", "0.0.0.0:80", "app:app"]