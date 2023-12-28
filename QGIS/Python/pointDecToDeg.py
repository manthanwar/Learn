layers = iface.layerTreeView().selectedLayers()

def decimalDegrees2DMS(value,type):
    """
        Converts a Decimal Degree Value into
        Degrees Minute Seconds Notation.
        
        Pass value as double
        type = {Latitude or Longitude} as string
        
        returns a string as D:M:S:Direction
        created by: anothergisblog.blogspot.com 
    """
    degrees = int(value)
    submin = abs( (value - int(value) ) * 60)
    minutes = int(submin)
    subseconds = abs((submin-int(submin)) * 60)
    direction = ""
    if type == "Longitude":
        if degrees < 0:
            direction = "W"
        elif degrees > 0:
            direction = "E"
        else:
            direction = ""
    elif type == "Latitude":
        if degrees < 0:
            direction = "S"
        elif degrees > 0:
            direction = "N"
        else:
            direction = "" 
    notation = str(degrees) + u"\u00b0" + str(minutes) + "\'" +\
               str(subseconds)[0:5] + "\"" + direction
    return notation


for layer in layers:
    print(layer.name())
    #with edit(layer):
    for feature in layer.selectedFeatures():
        print(feature['name'])
        lines = feature.geometry().asMultiPolyline()
        #print(lines)
        #print('------------>>')
     
        for line in lines:
            print('no lines in multiline =',len(line))
            for pt in line:
                print('x =', pt.x(), 'y =', pt.y())
                
            print('first pt =', line[0].x(), line[0].y())
            print('last  pt =', line[-1].x(), line[-1].y())

            Longitude = decimalDegrees2DMS(line[0].x(),'Longitude')
            print(Longitude)
     
#            for i in range(len(line) - 1):
#                p1 = QgsPointXY(line[i])
#                print('x = ', p1.x(), 'y = ', p1.y())
        
     