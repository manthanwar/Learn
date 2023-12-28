from qgis.core import QgsFillSymbol

print(' Hello PyQGIS!\n')

#symbol = QgsSymbolV2.defaultSymbol(layer.geometryType())
#renderer = QgsSingleSymbolRendererV2(symbol)

layers = iface.layerTreeView().selectedLayers()

for layer in layers:
    print(layer.name())
    print(layer.renderer().symbol()[0].color().getRgb())
    #layer.renderer().symbol().setColor(fromRgb(84,200,70))
    #print(layer.renderer().symbol()[0].color())
    layer.renderer().symbol().setWidth(0.66)
    #layer.renderer().symbol().setColor(QColor('red'))
    #layer.renderer().symbol().setColor(QColor.fromRgb(84,176,74,255))
    # qgis colors
    # red   = 219,30,42,255
    # green = 84,200,70,255
    
    layer.renderer().symbol().setColor(QColor.fromRgb(219,30,42,255))#red
    layer.triggerRepaint()