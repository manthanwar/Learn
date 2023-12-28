styles = QgsStyle.defaultStyle()
#stylenames = styles.symbolNames()
#for stylename in stylenames:
#    print(stylename)


style  = styles.symbol('simple green line')
#style  = styles.symbol('simple red line')
#style  = styles.symbol('simple blue line')

layers = iface.layerTreeView().selectedLayers()
for layer in layers:
    print(layer.name())
    layer.renderer().setSymbol(style)
    layer.triggerRepaint()
    iface.layerTreeView().refreshLayerSymbology(layer.id())
    
