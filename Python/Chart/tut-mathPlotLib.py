
# import matplotlib
# print(matplotlib.__version__)

from matplotlib.patches import Rectangle
import matplotlib.pyplot as plt
import numpy as np

xpoints = np.array([0, 6])
ypoints = np.array([0, 250])

# plt.plot(xpoints, ypoints)


fig, ax = plt.subplots()

# create simple line plot
# ax.plot([0, 10], [0, 10])

# add rectangle to plot
ax.add_patch(Rectangle((1, 1), 2, 6,
             edgecolor='pink',
             facecolor='blue',
             fill=True,
             lw=5))

# display plot
plt.show()
