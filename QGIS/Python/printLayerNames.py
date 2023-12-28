layers = iface.layerTreeView().selectedLayers()

for layer in layers:
    print(layer.name())