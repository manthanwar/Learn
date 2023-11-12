#!/usr/bin/bash

which bash

echo "Today is " `date`

file=helloworld

if [ "$1" = "clean" ]; then
    if [ -f "${file}.exe" ] ; then
      rm "${file}.exe"  
      echo "${file}.exe removed"
    fi
elif [ "$1" = "build" ]; then
    g++ -o "${file}.exe" "${file}.cpp"
    echo "${file}.exe built"
else
  echo "Running ${file}.exe..."
  ./"${file}.exe"
fi

