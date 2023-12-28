#layer = iface.activeLayer()

name = "Europe copy" 
layer = QgsProject.instance().mapLayersByName(name)[0]

with edit(layer):   
    for feat in layer.getFeatures():
        layer.deleteFeature(feat.id())
        
        
# Remove layer
root = QgsProject.instance().layerTreeRoot()
#root.removeLayer(layer)
