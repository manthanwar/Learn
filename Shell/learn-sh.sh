#!/bin/sh
# Author: Amit Manthanwar
# Copyright (c)2023 Manthanwar

# echo "What is your name?"
# read name
# echo "Hello, $name"

echo $0

echo $#
echo $*
echo $@


a="aa"

if [ $a ]
then
    echo "not empty"
else
    echo "empty"
fi


file="man-sh.md"

if [ -e $file ]
then
    echo "ordinary file exists"
else
    echo "file does not exist"
fi
