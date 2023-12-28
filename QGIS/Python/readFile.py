import os

filepath = 'd:\GIS\River-Elbe'

print('hello')
print(os.getcwd())
os.chdir(filepath)
print(os.getcwd())

file = open('rivers.txt', 'r')
lines = file.readlines()

print(len(lines))
#for line in Lines:
#    print(line.strip())
 
print(lines[0]) 