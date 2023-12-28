layers = iface.layerTreeView().selectedLayers()

for layer in layers:
    print(layer.name())
    #layer.selectByExpression('"HYRIV_ID">=30000000 and "HYRIV_ID"<=40000000')
    idx = layer.fields().indexFromName('HYRIV_ID')
    print(layer.minimumValue(idx), layer.maximumValue(idx))
    
    
    