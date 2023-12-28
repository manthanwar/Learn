import os

filepath = 'd:\GIS\River-Elbe'

filenames = [
'cz-river-labe-upa',
'cz-river-labe-upa-mala',
]

extensions = [
'cpg',
'dbf',
'prj',
'qmd',
'shp',
'shx'
]

print(os.getcwd())
os.chdir(filepath)
print(os.getcwd())


print(filenames)

for file in filenames:
    print(file)
    for ext in extensions:
        fileExt = file + '.' + ext
        #print(fileExt)
        pathFileExt = os.path.join(filepath, fileExt)
        if os.path.isfile(pathFileExt):
            os.remove(pathFileExt)
            #print('file exists')
            print('deleted', fileExt)
        else:
            print('no file', fileext)
        
#print(pathFileExt)

#print(os.sep)

    
