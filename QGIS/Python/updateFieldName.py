layers = iface.layerTreeView().selectedLayers()

old_fieldname = 'thickness'
new_fieldname = 'linewidth'

for layer in layers:
    print(layer.name())
    for field in layer.fields():
        print(field.name())
        if field.name() == old_fieldname:
            with edit(layer):
                idx = layer.fields().indexFromName(field.name())
                layer.renameAttribute(idx, new_fieldname)
                layer.updateFields()
