# # importing pycairo
# import cairo

import drawSvg as draw


d = draw.Drawing(200, 100, origin='center', displayInline=False)

# Draw a rectangle
r = draw.Rectangle(-80, 0, 40, 50, fill='#1248ff')
r.appendTitle("Our first rectangle")  # Add a tooltip
d.append(r)
