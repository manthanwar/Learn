import numpy as np

print('Hello NumPy')

print(np.__version__)

import numpy as np

# Create a 2-D array, set every second element in
# some rows and find max per row:

x = np.arange(15, dtype=np.int64).reshape(3, 5)
print(x)
x[1:, ::2] = -99

print(x)

# Generate normally distributed random numbers:
y = np.random.rand(3,3)
print('y = ', np.around(y,3))



a = np.array([1, 2, 3, 4, 5, 6])
print(*a)

b = np.array([[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12]])
print('b = ', b)
print('b[0] = ', b[:,0])

z = np.ones((3,3)) + 0.234
print('z = ', np.around(z,3))

print('dim = ', z.shape)


a = np.array([11, 11, 12, 13, 14, 15, 16, 17, 12, 13, 11, 14, 18, 19, 20])
unique_values = np.unique(a)
print(unique_values)

unique_values, indices_list, occurrence_count = np.unique(a, return_index=True, return_counts=True)

print(indices_list)

print(occurrence_count)

import matplotlib as mpl

print('version matplotlib = ', mpl.__version__)


import matplotlib.pyplot as plt
a = np.array([2, 1, 5, 7, 4, 6, 8, 14, 10, 9, 18, 20, 22])
# plt.plot(a)
# plt.show()


fig, ax = plt.subplots()  # Create a figure containing a single axes.
line, = ax.plot([1, 2, 3, 4], [1, 4, 2, 3], label = 'my plot', color='red')  # Plot some data on the axes.
ax.set_title(r'$\Sigma_{i=15}^{n}$', fontsize=14, color='red', fontweight='bold')
ax.set_xlabel('axis x', fontsize=14, color='red')
ax.set_ylabel('axis y', fontsize=14, color='red')
# ax.legend(fontsize=14, color='blue')

ax.legend(loc='upper right', fontsize=14, labelcolor='blue')


line.set_color('blue')
line.set_linewidth(4)
plt.gca().get_lines()[0].set_color("black")

ax.set_xlim(1, 4)
ax.set_ylim(1, 4)
# ax.tick_params(axis='x', which='minor', length=2)

# ax.grid(which='minor', color='r', linestyle='-', linewidth=2)
# ax.grid(which = 'both')
ax.minorticks_on()

ax.grid(which = "major", linewidth = 1)
ax.grid(which = "minor", linewidth = 0.2)

ax.set_xtick(color='red')


# Locations for the X-axis, major grid
from matplotlib.ticker import AutoMinorLocator, FixedLocator
# ax.xaxis.set_major_locator(FixedLocator([1, 3, 5]))

# Now hide the minor ticks (but leave the gridlines).
ax.tick_params(which='minor', bottom=False, left=False)

# Minor X-axis divided into 10 parts between each X-axis major grid
ax.xaxis.set_minor_locator(AutoMinorLocator(4))
ax.yaxis.set_minor_locator(AutoMinorLocator(4))

# ax.set_yticks([1, 2, 5, 8])
# import matplotlib.ticker as ticker
# formatter = ticker.FormatStrFormatter('$%1.2f')
# ax.yaxis.set_major_formatter(formatter)

# ax.yaxis.set_major_locator(ticker.FixedLocator([0, 1, 0.2, 0.5]))


plt.show()


