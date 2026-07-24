# Bash

## Set Command

The command is actually written as set -e (using a hyphen, not a zero), and it instructs a shell script to exit immediately if any command returns a non-zero exit status (which indicates a failure or error).

By default, shell scripts will continue executing the next line even if a previous command failed. Adding set -e ensures the script stops right away rather than running subsequent steps with corrupt or missing data.


### Key Exceptions

The script will not exit if a command fails inside specific control flows designed to handle testing or conditional logic:

* Part of an if condition or while/until loop test.
* Part of a command list joined by && or || (except for the very last command in the sequence).
* Any command in a pipeline except the last one (unless set -o pipefail is also enabled).
* When a command's exit status is deliberately inverted using the ! operator.

Code Example

```bash
#!/bin/bash
set -e

# This command succeeds
echo "Starting build..."

# If this directory does not exist, the script fails and halts here
cd /nonexistent_directory 

# This line will never execute because of 'set -e'
echo "This will not be printed."
```

Use code with caution.


### Common Variations

* set +e: Disables this behavior, returning the shell to its default mode where it ignores errors and continues executing.

* set -xe: Often combined with -x to print each command to the terminal before executing it, which is highly useful for debugging failures.