#mw = iface.mainWindow()
#print(mw)
#
#lgd = mw.findChild(QTreeWidget, "Layers") 
#print(lgd)
##lgd.sortItems(0, Qt.AscendingOrder) 

view = iface.layerTreeView()
view.setSortingEnabled(False)
#view.setSortingEnabled(True)

#view.sortByColumn(0, Qt.AscendingOrder) 
# sort first column (Qt.DescendingOrder to reverse)