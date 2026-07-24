# Git

## Installation

### Optional Unix Tools

When you choose the option "Use Git and optional Unix tools from the Windows Command Prompt" during the Git for Windows installation, it exposes a complete MSYS2 / MinGW-64 Unix-like software environment to your standard Windows paths.

This injects over 250+ standard Linux/Unix utilities directly into your Windows Command Prompt (cmd.exe) and PowerShell environments.

#### The Core Unix Tools Installed

The optional environment populates your PATH (specifically C:\Program Files\Git\usr\bin) with Windows-native .exe ports of traditional Unix utilities:

* File & Directory Management: ls, cp, mv, rm, mkdir, rmdir, pwd, chmod, chown, ln, touch.

* Text Processing & Filtering: grep, sed, awk, cut, tr, head, tail, wc, sort, uniq, diff, patch, tee.

* Terminals & Shells: bash, sh, mintty.

* Archiving & Compression: tar, gzip, gunzip, bzip2, zip, unzip.

* Networking & Data Transfer: ssh, scp, sftp, curl, rsync.

* Process Management: ps, kill, env, printenv, sleep, uname, whoami.

* Text Editors: vim, nano.

#### Critical System Conflict Warning

Checking this optional setting overrides default Windows system behavior. Specifically, Git's Unix utilities will eclipse identical native Windows commands because they share names:

| Overridden Command | What it runs instead | The Risk / Conflict |
| ------------------ | -------------------- | ------------------- |
| find | Unix string finder (grep counterpart) | Breaks classic Windows batch scripts (.bat) that utilize the native Windows find string utility. |
| sort | Unix alphabetical/numerical line sorter | Replaces the native Windows command-line text sorter, occasionally throwing parameter errors. |

#### How to Safely Check if They Are Installed

You can confirm if these utilities are active in your native Windows command line by searching for their execution paths:

```cmd
where git
where ls
where grep
```

Use code with caution.


## Edit Config

### Basic Settings

```bash
git config --global user.email "you@example.com"
git config --global user.name "Your Name"
git config --global core.editor "code --wait"
git config --global diff.tool vscode
git config --global difftool.vscode.cmd 'code --wait --diff $LOCAL $REMOTE'
```

### Edit Config files

```bash
git config --global --edit
git config --local --edit
```



### Open config file
To open your Git configuration file on Windows, you can either use a terminal command or navigate directly to the file paths in File Explorer.

#### Method 1:

Open via Terminal (Recommended)Open Command Prompt, PowerShell, or Git Bash, and execute the command for the specific configuration file level you want to open:

* Global Configuration (User-wide)

```bash
git config --global --edit
```

Use code with caution.

* Local Configuration (Current Repository Only)

(Note: You must be inside your local git repository folder for this to work).

```bash
git config --local --edit
```

Use code with caution.

* System Configuration (All Users)

(Note: You must run your terminal as an Administrator to save changes here).

```bash
git config --system --edit
```
Use code with caution.

