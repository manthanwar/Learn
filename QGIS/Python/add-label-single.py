#dir(layer)
#dir()
#layer = iface.activeLayer()

layers = iface.layerTreeView().selectedLayers()


for selectedlayer in layers:
    for feature in selectedlayer.getFeatures():
        print(feature['country'])
        
        """
    for layer in selectedlayer:
        layer.setCustomProperty("labeling", "pal")
        layer.setCustomProperty("labeling/enabled", "true")
        layer.setCustomProperty("labeling/fontFamily", "Arial")
        layer.setCustomProperty("labeling/fontSize", "20")
        #layer.setCustomProperty("labeling/isExpression", True)
        layer.setCustomProperty("labeling/fieldName", "COUNTRY")
        #layer.setCustomProperty("labeling/fieldName", "concat( country, '\\n', country )")
        layer.setCustomProperty("labeling/placement", "0")
        iface.mapCanvas().refresh()
        """
        """
        layer_settings  = QgsPalLayerSettings()
        text_format = QgsTextFormat()

        text_format.setFont(QFont("Arial", 12))
        text_format.setSize(12)

        
        buffer_settings = QgsTextBufferSettings()
        buffer_settings.setEnabled(True)
        buffer_settings.setSize(0.10)
        buffer_settings.setColor(QColor("black"))

        text_format.setBuffer(buffer_settings)
        layer_settings.setFormat(text_format)

        layer_settings.fieldName = "fid"
        #layer_settings.placement = 4

        layer_settings.enabled = True

        layer_settings = QgsVectorLayerSimpleLabeling(layer_settings)
        layer.setLabelsEnabled(True)
        layer.setLabeling(layer_settings)
        layer.triggerRepaint()
        """