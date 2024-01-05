layers = iface.layerTreeView().selectedLayers()

for layer in layers:
    print(layer.name())
    #layer.selectByExpression('"HYRIV_ID">=30000000 and "HYRIV_ID"<=40000000')
    #idx = layer.fields().indexFromName('HYRIV_ID')
    #print(layer.minimumValue(idx), layer.maximumValue(idx))
    
    #selectid = [354, 355, 356, 357, 358, 359]
    #layer.select(selectid)
    
    #layer.selectByExpression("name='Berounka'")
    
    #idx = layer.dataProvider().fieldNameIndex('waterway')
    #print(idx)
    
    values = []
    for feature in layer.getFeatures():
        values.append(feature['admin_level'])
        #print(feature['name'])

    print('count = ', len(values))
    uniqueValues = list(dict.fromkeys(values))
    print(uniqueValues)
    #print(len(uniqueValues))
    
    uniqueValuesInt = sorted(list(map(int, uniqueValues)))
    for i in range(len(uniqueValues)):
        print(uniqueValuesInt[i])
    
    #fVal =sorted(uniqueValues)[0] 
    #print(fVal)
    #fStr = 'name=\'' + fVal + '\''
    #print(fStr)
    #layer.selectByExpression(fStr)
    
    
    