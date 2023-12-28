from qgis.core import QgsProject

# Add vector layer
#from qgis.utils import iface
#layer = iface.addVectorLayer("/path/to/shapefile/file.shp", "layer name you like", "ogr")
#if not layer:
#    print("Layer failed to load!")



#Get active layer
#layerTarget = iface.activeLayer()

# Get selected layers
#layers = iface.layerTreeView().selectedLayers()

# Access checked layers
# iface.mapCanvas().layers()

"""
# Root node
root = QgsProject.instance().layerTreeRoot()
print (root)
print (root.children())

# Access the first child node
from qgis.core import QgsLayerTreeGroup, QgsLayerTreeLayer, QgsLayerTree

child0 = root.children()[0]
print (child0.name())
print (type(child0))
print (isinstance(child0, QgsLayerTreeLayer))
print (isinstance(child0.parent(), QgsLayerTree))
"""

#List all layers
"""
layers = QgsProject.instance().mapLayers().values()
for layer in layers:
    print(layer.name())
"""

# Find layer by name
#layer = QgsProject.instance().mapLayersByName("Europe")[0]
#print(layer.name())

# Set active layer
#layer = QgsProject.instance().mapLayersByName("layer name you like")[0]
#iface.setActiveLayer(layer)


# Get features
#for f in layer.getFeatures():
#    print (f)

# Get selected features
#for f in layer.selectedFeatures():
#    print (f)



# Find group by name
#root = QgsProject.instance().layerTreeRoot()
#print (root.findGroup("My Group"))


# Remove layer
#root.removeLayer(layer1)

# Remove group
#root.removeChildNode(node_group2)




"""

print(layerTarget.name())
for feature in layerTarget.getFeatures():
    print(feature['country'])

"""

"""
root = QgsProject.instance().layerTreeRoot()
mygroup = root.findGroup("EU-Countries-0")
layerList = mygroup.findLayers()

for layer in layerList:
    print(layer.name())
    for feature in layer.features():
        print(feature['country'])
        """