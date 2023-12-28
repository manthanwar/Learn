myDir = ''

layers = iface.layerTreeView().selectedLayers()

for layer in layers:
    print(layer.name())
    filename = myDir + layer.name() + ".gpkg"
    layername = filename[:-5]
    library   = 'ogr'
    QgsVectorFileWriter.writeAsVectorFormat(layer,filename,"utf-8",layer.crs(),"GPKG")
    #layer=iface.addVectorLayer(filename,layername, library)

    print('done')