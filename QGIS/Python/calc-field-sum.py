layers = iface.layerTreeView().selectedLayers()
for layer in layers:
    print(layer.name())
    total = []
    for feature in layer.getFeatures():
        name = feature["name"]
        length = feature["length"]
        print(name, length)
        total.append(int(length))
#        attr = feature.attributes()[6]
#        if attr == NULL:
#            continue
#        else:
#            total.append((int(attr)))
#        print(attr)
    
    #print('------')
    #print(total)
    #print(type(total))
    
    import numpy as np
    a = np.array(total,dtype=int)
    print(np.sum(a)/1000, 'km')
    