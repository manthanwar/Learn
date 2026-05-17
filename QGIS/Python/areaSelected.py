import numpy as np

layers = iface.layerTreeView().selectedLayers()

for layer in layers:
    print(layer.name())
    #total_length = []
    total_area = []
    #for feature in layer.selectedFeatures():
    for feature in layer.getFeatures():
        name = feature["name"]
        #fid = feature["fid"]
        #length = feature["length"]
        area = feature["area"]
        #print(name, length, area)
        #print(name,area)
        #total_length.append(int(length))
        total_area.append(int(area))
    
    #sum_total_length = np.array(total_length,dtype=int)
    sum_total_area = np.array(total_area,dtype=int)
    #print('lenght =', np.sum(sum_total_length)/1000, 'km')
    print('area   =', np.sum(sum_total_area)/1000000, 'km2')

    