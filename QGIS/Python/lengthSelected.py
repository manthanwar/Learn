import numpy as np

layers = iface.layerTreeView().selectedLayers()

for layer in layers:
    print(layer.name())
    total = []
    for feature in layer.selectedFeatures():
        name = feature["name"]
        length = feature["length"]
        print(name, length)
        total.append(int(length))
    
    a = np.array(total,dtype=int)
    print(np.sum(a)/1000, 'km')
    print(np.sum(a))
    