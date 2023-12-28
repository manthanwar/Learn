from qgis.core import QgsProject

layerTarget = QgsProject.instance().mapLayersByName("Copp")[0]
print(layerTarget.name())

for f in layerTarget.getFeatures():
    print(f['country'])
    
#layerTarget.setReadOnly(true)

#layerTarget.setEdi

print("\n===============\n")

features = []

layerSources = iface.layerTreeView().selectedLayers()
i = 0
for selectedlayer in layerSources:
    for feature in selectedlayer.getFeatures():
        i = i + 1
        print(str(i) + " => " + feature['country'])
        features.append(feature)
        
   
print("Total features to copy = " + str(len(features)))   

layerTarget.startEditing()
data_provider = layerTarget.dataProvider()
data_provider.addFeatures(features)
layerTarget.commitChanges()
