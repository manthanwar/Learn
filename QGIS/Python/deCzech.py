def deCzech(old_str):
  accChars = "áčďéěíňóřšťúůýžÁČĎÉĚÍŇÓŘŠŤÚŮÝŽ"
  repChars = "acdeeinorstuuyzACDEEINORSTUUYZ"
  new_str = old_str
  for i in range(len(accChars)):
    new_str = new_str.replace(accChars[i], repChars[i])
  return new_str


layers = iface.layerTreeView().selectedLayers()

for layer in layers:
    print(layer.name())
    with edit(layer):
        counter = 0
        for feature in layer.getFeatures():
            counter = counter + 1
            print(counter)
            oldname = feature['name'].replace(' kraj', '')
            oldname = oldname.replace('Kraj ','')
            newname = deCzech(oldname)
            #print(feature['name'], ' = ', newname)
            print(feature['name'])
            print(newname)
            feature['name_en'] = newname
            feature['name_cz'] = oldname
            layer.updateFeature(feature)
            

print('done')
