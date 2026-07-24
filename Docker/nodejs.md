# NodeJS


## Run NodeJS Container From GitHub Repository

## Run Docker Nodejs Container From GitHub Repo

To build a Docker container that pulls Node.js code directly from GitHub and updates dynamically when new commits are pushed, you need to use an entrypoint script. This script clones the repository and runs npm install at runtime (when the container starts), rather than during the image build phase.


### Project Structure

Create a local folder with the following three files:

```text
├── Dockerfile
├── entrypoint.sh
└── docker-compose.yml
```

Use code with caution.

### 1. Create the Entrypoint Script (entrypoint.sh)

This script checks if the repository is already cloned. If it is, it pulls the latest commits; otherwise, it performs a fresh clone.

```bash
#!/bin/bash
set -e

TARGET_DIR="/app/repo"

# Clone if empty, otherwise pull latest changes
if [ ! -d "$TARGET_DIR/.git" ]; then
    echo "Cloning repository from $GITHUB_REPO..."
    git clone "$GITHUB_REPO" "$TARGET_DIR"
    cd "$TARGET_DIR"
else
    echo "Repository exists. Pulling latest commits..."
    cd "$TARGET_DIR"
    git pull origin main
fi

# Install dependencies and start the app
echo "Installing dependencies..."
npm install

echo "Starting Node.js application..."
exec npm start
```

Use code with caution.


### 2. Create the Dockerfile

The Dockerfile installs Git, copies the entrypoint script, and prepares the container environment.

```dockerfile
FROM node:20-slim

# Install git
RUN apt-get update && apt-get install -y git && rm -rf /var/lib/apt/lists/*

# Set up the working directory
WORKDIR /app

# Copy the bootstrap script into the container
COPY entrypoint.sh /entrypoint.sh
RUN chmod +x /entrypoint.sh

# Expose the port your Node.js app runs on
EXPOSE 3000

# Set entrypoint script
ENTRYPOINT ["/entrypoint.sh"]
```

Use code with caution.


### 3. Orchestrate with docker-compose.yml

Using Docker Compose allows you to pass your GitHub repository URL as an environment variable and persist the code across container restarts using a volume.

```yaml
version: '3.8'

services:
  node-app:
    build: .
    container_name: github-node-container
    ports:
      - "3000:3000"
    environment:
      - GITHUB_REPO=https://github.com
    volumes:
      - node_code:/app/repo

volumes:
  node_code:
```


Use code with caution.

### How to Run and Update

#### Start the Container

Run the following command to build the image and launch the container:

```bash
docker compose up -d --build
```

Use code with caution.

The container will boot up, clone your GitHub code into the named volume, install dependencies, and start running.

#### Pull the Latest Commits

Whenever you push new updates to GitHub, you do not need to rebuild the Docker image. Simply restart the container to trigger the entrypoint script to run git pull:

```bash
docker compose restart
```

Use code with caution.



### /var/lib/apt/lists/

The directory /var/lib/apt/lists/ stores local cache metadata for all available software packages from your configured repositories. When you reference /var/lib/apt/lists/*, you are targeting all the individual index files inside this location.

What is its Purpose?

* Local Indexing: It acts as a local database containing names, versions, and dependencies of software packages.
* Speed Operations: Commands like apt search or apt-cache look here instead of querying remote repositories over the internet.
* Cache Rebuilding: Running sudo apt update completely repopulates or refreshes this folder.

Common Use Cases

The path is most commonly seen in the command sudo rm -rf /var/lib/apt/lists/*. Users execute this for two primary reasons:

1. Fixing APT ErrorsIf your system throws errors like "Unable to parse package file" or "The package lists or status file could not be parsed", it means these cache files became corrupted. Clearing them out forcing a clean download resolves the issue:

```bash
sudo rm -rf /var/lib/apt/lists/*
sudo apt update
```

Use code with caution.

2. Minimizing Docker Image SizesIn Dockerfiles, leaving these metadata lists intact unnecessarily bloats the container image. Developers chain package installation and list purging in a single layer to save space:

```dockerfile
RUN apt-get update && apt-get install -y \
    curl \
    && rm -rf /var/lib/apt/lists/*
```

Use code with caution.

Important Warning

Never delete the directory itself (/var/lib/apt/lists). Only delete its contents using the trailing asterisk (/*). Removing the base directory entirely will break the apt package system until you manually recreate it along with its mandatory partial subdirectory.Are you currently trying to troubleshoot a corrupted package manager error, or are you looking to optimize a Dockerfile?



## Run Docker NodeJS Container by pulling code from GitHub

To run a Node.js application by pulling code directly from GitHub into a Docker container, you can use a multi-stage Dockerfile. This approach clones the code securely, installs dependencies, and runs the application without leaving your GitHub credentials or Git history inside the final production image.

### 1. Create a Dockerfile

Create a file named Dockerfile in an empty directory on your machine and paste the following configuration:

```dockerfile
# Stage 1: Clone the repository and fetch dependencies
FROM node:20-alpine AS builder

# Install git to pull the code
RUN apk add --no-cache git

# Set the working directory
WORKDIR /app

# Clone your GitHub repository (replace with your actual repository URL)
# For private repos, see the note below
RUN git clone https://github.com .

# Install dependencies (only production to save space)
RUN npm ci --only=production

# Stage 2: Final lightweight runner stage
FROM node:20-alpine

WORKDIR /app

# Copy built files and node_modules from the builder stage
COPY --from=builder /app /app

# Expose the application port (change 3000 to match your app's port)
EXPOSE 3000

# Command to run the application
CMD ["node", "index.js"]
```

Use code with caution.

#### 🔒 Note on Private Repositories:

If your GitHub repository is private, you must pass a GitHub Personal Access Token (PAT) during the build process. Replace the git clone line in the Dockerfile with:RUN git clone https://${GITHUB_TOKEN}@://github.com .


### 2. Build the Docker Image

Open your terminal in the directory containing your Dockerfile and run the docker build command.

#### For Public Repos:

```bash
docker build -t node-github-app .
```

Use code with caution.

#### For Private Repos
(passing your token safely without hardcoding it):

```bash
docker build --build-arg GITHUB_TOKEN=your_personal_access_token -t node-github-app .
```

Use code with caution.

### 3. Run the Docker Container

Launch the container using the docker run command, mapping the internal port to your local machine:

```bash
docker run -d -p 3000:3000 --name my-node-container node-github-app
```
Use code with caution.

## Run AWS EC2 NodeJS Container

To run a containerized Node.js application on an AWS Linux EC2 instance by pulling the code from GitHub, you need to configure your local project with Docker, prepare your EC2 instance, and pull and run the container.

Here is the step-by-step process.

### Step 1: Prepare Your Node.js App Locally

You need a Dockerfile and a .dockerignore file in the root directory of your project.

#### Create a Dockerfile:

```dockerfile
# Use an official lightweight Node image
FROM node:22-alpine

# Set working directory
WORKDIR /usr/src/app

# Copy package configuration files
COPY package*.json ./

# Install production dependencies
RUN npm ci --only=production

# Copy application source code
COPY . .

# Expose the application port (e.g., 3000)
EXPOSE 3000

# Run the application
CMD ["node", "app.js"]
```

Use code with caution.

#### Create a .dockerignore file to prevent copying unnecessary files:

```text
node_modules
npm-debug.log
.git
.env
```

Use code with caution.

#### Commit and push your changes to your repository on GitHub.

### Step 2: Configure Your AWS EC2 Instance

When launching your EC2 instance in the AWS Management Console, ensure you fulfill these specific requirements:

* Operating System: Choose Amazon Linux 2023 (AMI).
* Security Groups: Ensure your Inbound Rules allow SSH (Port 22) for management and the port your app runs on (e.g., Custom TCP Port 3000).

### Step 3: Install Docker and Git on EC2

Connect to your EC2 instance using your terminal or an SSH client:

```bash
ssh -i /path/to/your-key.pem ec2-user@your-ec2-public-ip
```

Use code with caution.

Once inside the server, run the following commands to install dependencies:

#### Update packages:

```bash
sudo dnf update -y
```

Use code with caution.

#### Install Docker and Git:

```bash
sudo dnf install docker git -y
```

Use code with caution.

#### Start and enable the Docker service:

```bash
sudo systemctl start docker
sudo systemctl enable docker
```

Use code with caution.

#### Add your user to the Docker group
(allows running Docker commands without typing sudo):

```bash
sudo usermod -aG docker ec2-user
```

Use code with caution.

#### Apply group changes without logging out:

```bash
newgrp docker
```
Use code with caution.

### Step 4: Pull Code and Run the Container on EC2

Now you can fetch your application from GitHub and spin up the Docker container.

#### Clone your GitHub repository:

```bash
git clone https://github.com
```

Use code with caution.

#### Navigate into the project directory:

```bash
cd your-repo-name
```
Use code with caution.

#### Build the Docker image:
```bash
docker build -t node-ec2-app .
```
Use code with caution.

#### Run the container in detached mode:

```bash
docker run -d -p 3000:3000 --name my-running-app node-ec2-app
```
Use code with caution.

* Note: -p 3000:3000 maps port 3000 of your EC2 instance to port 3000 inside the container.

Your application is now live! You can verify it by opening your web browser and navigating to http://your-ec2-public-ip:3000.Step


### 5: Updating Your App (How to redeploy)

Whenever you push new changes to GitHub, pull the new code and restart the container:

```bash
# Pull new changes
git pull origin main

# Stop and remove the old container
docker stop my-running-app
docker rm my-running-app

# Rebuild and run
docker build -t node-ec2-app .
docker run -d -p 3000:3000 --name my-running-app node-ec2-app
```

Use code with caution.

##