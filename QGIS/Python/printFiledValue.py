layers = iface.layerTreeView().selectedLayers()
for layer in layers:
    print(layer.name())
    for feature in layer.selectedFeatures():
        print(feature['HYRIV_ID'])