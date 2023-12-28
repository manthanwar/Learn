import os

filepath = 'd:\GIS\River-Elbe'

print('hello')
print(os.getcwd())
os.chdir(filepath)
print(os.getcwd())


fileName = "rivers.txt"
string_to_add = "'"

myArr = []
with open(fileName, 'r') as f:
    fileLines = [''.join(["'", x.strip(), string_to_add, '\n']) for x in f.readlines()]
    print(fileLines)
    myArr.append(fileLines)
    
    
print(myArr)

