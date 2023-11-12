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