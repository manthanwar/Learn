layers = iface.layerTreeView().selectedLayers()

for layer in layers:
    print(layer.name())
    with edit(layer):
        for feature in layer.selectedFeatures():
            #length = feature.geometry().length()*2*np.pi*6371009/360
            #feature['length'] = round(length,0)
            #feature['bank']       = 'left'
            #feature['bank']        = 'right'
#            feature['bank']        = 'main'
#            feature['tributary']  = 'Černá' #'Malše'
#            feature['confluence'] = 401911
#            feature['riverId'] = 1001030100
#            feature['rank'] = 4
#            feature[' thickness'] = 0.5
            #feature['name'] = 'Elbe'
            #feature['riverBasin'] = 'Labe'
            #feature['riverBasin'] = ''
            print(feature['name'])
            #layer.updateFeature(feature)
            

print('done')
