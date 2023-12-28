import os

print('hello')
print(os.getcwd())

filepath = 'd:\GIS\River-Elbe'
os.chdir(filepath)
print(os.getcwd())

file = open('rivers.txt', 'r')
fileNames = file.readlines()

extensions = [
'cpg',
'dbf',
'prj',
'qmd',
'shp',
'shx'
]

#for file in fileNames:
#    #print(fileNames[i])
#    print(file, end="")

#print('===============')
#for i in range(len(fileNames)):
#    print(fileNames[i], end="")

for file in fileNames:
    #print(file.replace('\n', ''))
    for ext in extensions:
        fileExt = file.replace('\n', '') + '.' + ext
        #print(fileExt)
        pathFileExt = os.path.join(filepath, fileExt)
        if os.path.isfile(pathFileExt):
            os.remove(pathFileExt)
            #print('file exists')
            print('deleted', fileExt)
        else:
            print('no file', fileExt)

    

