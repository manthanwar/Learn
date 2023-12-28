layers = iface.layerTreeView().selectedLayers()
for layer in layers:
    print(layer.name())
    print(layer.featureCount())
    #print(layer.fields().names())
    #print(len(layer.fields().names()))