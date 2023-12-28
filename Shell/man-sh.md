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
export PS1="\e[1;35m\A \e[1;32mdev\e[0m "


export PS1=$'\u \\[\e[31m\\]\uE0B0 \\[\e[0m\\]'

ls /usr/share/fonts/truetype/

docker exec -u 0 dev whoami

echo black0
export PS1=$'\e[1;37;40m \u \e[0m\\[\e[30m\\]\uE0B0 \\[\e[0m\\]\e[0m'
echo red1
export PS1=$'\e[1;30;41m \u \e[0m\\[\e[31m\\]\uE0B0 \\[\e[0m\\]\e[0m'
echo green2
export PS1=$'\e[1;30;42m \u \e[0m\\[\e[32m\\]\uE0B0 \\[\e[0m\\]\e[0m'
echo yellow3
export PS1=$'\e[1;30;43m \u \e[0m\\[\e[33m\\]\uE0B0 \\[\e[0m\\]\e[0m'
echo purple4
export PS1=$'\e[1;30;44m \u \e[0m\\[\e[34m\\]\uE0B0 \\[\e[0m\\]\e[0m'
echo magenta5
export PS1=$'\e[1;30;45m \u \e[0m\\[\e[35m\\]\uE0B0 \\[\e[0m\\]\e[0m'
echo cyan6
export PS1=$'\e[1;30;46m \u \e[0m\\[\e[36m\\]\uE0B0 \\[\e[0m\\]\e[0m'
echo white7
export PS1=$'\e[1;30;47m \u \e[0m\\[\e[37m\\]\uE0B0 \\[\e[0m\\]\e[0m'

export PS1=$'\e[1;30;46m \u@\H \e[0m\\[\e[36m\\]\uE0B0 \\[\e[0m\\]\e[0m'


export PS1="\033[1;30;43m \u \033[0m\033[1;33m\uE0B0 \033[0m" 
export PS1="\e[1;30;43m \u \e[0m\e[1;33m\uE0B0 \e[0m"

```

# unpack (ungzip, unarchive) a tar.gz file
```bash
# unpack (ungzip, unarchive) a tar.gz file
tar -xzf rebol.tar.gz

# For just .gz (.gzip)
gunzip rebol.gz

# To execute it, add execute permissions to the file
chmod +x rebol

# To run it:
./rebol
```


# If file exists
```sh
#!/bin/sh
 
# Scenario - File exists
if [ -e /home/tutorialkart/sample.txt ];
then
    echo "sample.txt - File exists."
else
    echo "sample.txt - File does not exist."
fi
```