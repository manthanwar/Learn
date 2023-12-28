filename  = 'cz-river-labe-libechovka.gpkg'
layername = filename
library   = 'ogr'

#layer=iface.addVectorLayer(filename,layername, library)

#iface.layerTreeView().


layers = iface.layerTreeView().selectedLayers()

for layer in layers:
    print(layer.name())
