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


