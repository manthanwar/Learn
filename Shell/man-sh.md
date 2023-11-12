# Shell Script

# To find out which shell 
```sh
echo $0
echo "$SHELL"
ps -p $$

```

# Basic Shell Script
```sh <file.sh>
#!/bin/sh
# Author: Amit Manthanwar
# Copyright (c)2023 Manthanwar

echo "What is your name?"
read name
echo "Hello, $name"
```
run of the script
```sh
$./test.sh
```


# Change Prompt
```bash
export PS1="\u\H "
export PS1="\u@\H :"
export PS1="\u@\H>\t "
export PS1="\u@\H:\t> "
export PS1="\u@\H>\A "
export PS1="\e[0;30;106m\A @ dev # \e[0m "
export PS1="\e[1;35m\A \e[1;32mdev \e[1;33m\w \e[0m "
export PS1="\e[1;35m\A \e[1;32mdev\e[0m "
```