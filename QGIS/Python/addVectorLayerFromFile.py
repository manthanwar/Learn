import os
import numpy as np 

print('hello')
print(os.getcwd())

filepath = 'd:\GIS\River-Elbe'
os.chdir(filepath)
print(os.getcwd())

file = open('rivers.txt', 'r')
fileNames = file.readlines()

fileNamesA = []
for filename in fileNames:
    newName = filename.replace('\n', '') + '.gpkg'
    fileNamesA.append(newName)
    #print(type(newName))
    

fileNamesNP = np.array(fileNamesA)

fileNames = np.flip(fileNamesNP)
library   = 'ogr'
for filename in fileNames:
    layername = filename[:-5]
    layer=iface.addVectorLayer(filename,layername,library)

print('done')