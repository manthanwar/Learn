layers = iface.layerTreeView().selectedLayers()

for layer in layers:
    print(layer.name())
    features = layer.getFeatures()
    
    featureList = []
    for feature in features:
        featureList.append(feature['name'])
        
    print(len(featureList))
    
    print(featureList[0])
        