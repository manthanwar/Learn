# Github

## Git

### What is git?

Git is a free and open-source distributed version control system (VCS) designed to track changes in files and coordinate work among multiple people. It was created by Linus Torvalds in 2005 to manage the development of the Linux kernel and has since become the industry standard for software development.

### Core Concepts

* Snapshots, Not Deltas: Unlike older systems that track differences between files, Git thinks of its data as a series of snapshots of a miniature filesystem.
* Distributed System: Every user has a complete local copy of the project’s entire history, allowing you to work offline and ensuring no single point of failure.
* Repositories (Repos): A Git Repository is the directory where Git tracks your project's files and history.

### Why Use Git?

* Undo Mistakes: You can "go back in time" to any previous version of your code if something breaks.
* Collaboration: Multiple developers can work on the same codebase simultaneously without overwriting each other's work.
* Branching & Merging: You can create a "branch" to work on a new feature in isolation, then "merge" it back into the main project once it's finished.

## GitHub

### What is GitHub?

GitHub is a cloud-based platform where developers store, share, and collaborate on software code. Think of it like Google Drive, but specifically designed for coding projects.

### How it Works?

GitHub is built on top of Git, which is a "version control" system.

* Save Points: Instead of saving files as `final_code.txt` and `final_final_v2.txt`, Git acts like a checkpoint system in a video game. It takes snapshots of your code and lets you roll back to any previous point if you make a mistake.
* Cloud Hosting: GitHub takes those local files and checkpoints and hosts them on the web, making it accessible from anywhere.

### Key Features

* Collaboration: Multiple developers can work on the same project without overwriting each other's work. They can make copies, safely test new features independently, and merge their changes later.
* Open Source: It is the global home of open-source software. Millions of public projects are hosted there, allowing anyone to view, download, or help improve the code.
* Issue Tracking & Reviews: It includes tools for teams to discuss bugs, request new features, and review code before it goes live.

## Visual Studio Code

### What is VS Code?

Visual Studio Code (VS Code) is a free, lightweight, and highly powerful source code editor developed by Microsoft. It allows you to write, edit, and debug code for almost any programming language, offering the simplicity of a basic text editor alongside the advanced tools of a full Integrated Development Environment (IDE).

### Core Features

* Multi-Language Support: Provides syntax highlighting, auto-indentation, and intelligent code completion (IntelliSense) for hundreds of languages including Python, JavaScript, C++, and Java.
* Built-in Debugger: Allows you to run, inspect, and step through your code directly in the editor to find and fix errors.
* Version Control: Includes native integrations for Git and GitHub, making it easy to track changes, stage files, and commit directly from the sidebar.
* Extensibility: Features a massive library of extensions in its Marketplace, letting you customize your environment with new themes, language tools, and cloud integrations.
* AI Capabilities: Supports advanced AI features like GitHub Copilot, allowing for inline code suggestions, chat assistance, and agent-driven workflows.

### Why Developers Love It?

VS Code is cross-platform (available on Windows, macOS, and Linux) and is famous for being highly customizable. It strikes a perfect balance—it is faster and lighter on system resources than heavy IDEs, but significantly more capable than basic text editors.

To download the software or browse available add-ons, visit the official [Visual Studio Code](https://code.visualstudio.com/) website.

## How to Setup?

Setting up GitHub involves three main phases: creating an online presence, installing local tools, and linking them together.

### 1. Create a GitHub Account

* Sign Up: Visit [GitHub.com](https://github.com/) and click Sign up.
* Verify Email: Check your inbox for a verification email; this is required to perform many actions like pushing code.
* Secure Your Account: Enable Two-Factor Authentication (2FA) in your account settings for security.
* Install [GitHub Mobile](https://github.com/mobile) on your phone to facilitate 2FA.

### 2. Install Git Locally

Git is the underlying tool that manages your code history.

* Download: Get the installer from [git-scm.com](https://git-scm.com/).
* Installation:
  * Windows: Run the .exe installer. It’s generally safe to keep default settings.
  * macOS: Use Homebrew by running brew install git in your terminal, or download the binary package.
* Verify: Open your terminal (or Git Bash on Windows) and type `git --version` to confirm it’s working.

### 3. Configure Git Identity

You must tell Git who you are so your "commits" (code saves) are correctly attributed to you. Open your terminal and run:

* `git config --global user.name "Your Name"`
* `git config --global user.email "your_email@example.com"` (use the same email as your GitHub account)
* `git config --global init.defaultBranch main` (sets your default branch name)

#### Verify Your Configuration

You can check which email Git is currently using by running:

* Check global email: `git config --global user.email`
* Check current project email: `git config user.email`
* View all settings: `git config --list`

### 4. Authentication (SSH or Personal Access Token)

To push code from your computer to GitHub, you need to authenticate.

#### 1. Check for Existing Keys

Before creating a new key, check if your computer already has one. Open your terminal (or Git Bash on Windows) and run:

```bash
ls -al ~/.ssh
```

#### 2. Generate a New SSH Key

If you don't have a key, generate one using this command (replace the email with your GitHub email):

```bash
ssh-keygen -t ed25519 -C "your_email@example.com"
```

* Prompt 1: Press Enter to save it in the default location.
* Prompt 2: Enter a passphrase for extra security, or just press Enter twice for no passphrase.

#### 3. Add Key to your Git Provider (e.g., GitHub)

You need to copy your public key and paste it into your account settings.

* Copy the key:
  * Windows: `cat ~/.ssh/id_ed25519.pub | clip`
  * macOS: `pbcopy < ~/.ssh/id_ed25519.pub`
  * Linux: `cat ~/.ssh/id_ed25519.pub` (then manually copy the output)
* Add to GitHub: Go to [GitHub Settings](https://github.com/settings/keys) > SSH and GPG keys > New SSH key. Paste your key and give it a title (like "My Laptop").

#### 4. Test the Connection

Run the following command to verify everything is working:

```bash
ssh -T git@github.com
```

You should see a message like: "Hi username! You've successfully authenticated...".

#### 5. Update Your Repositories

If you previously cloned repositories using HTTPS, you must switch them to SSH to use your new key:

```bash
git remote set-url origin <git@github.com>:OWNER/REPOSITORY.git
```

You can find the correct SSH URL on the main page of your repository under the "Code" button.

#### 6. Summary: Create new SSH Key

* Generate a key: `ssh-keygen -t ed25519 -C "your_email@example.com"`.
* Add it to your account via GitHub SSH Settings.
* GitHub Desktop (Alternative): If you prefer a visual interface over the command line, download [GitHub Desktop](https://desktop.github.com/download/). It handles authentication automatically during sign-in.

### 5. Create Your First Repository

* On GitHub: Click the + icon in the top-right corner and select New repository.
* Initialize: Give it a name and check the box to Add a README file.
* Connect Locally: Use `git clone <your-repo-url>` in your terminal to download it to your computer.

## Environment Variables
