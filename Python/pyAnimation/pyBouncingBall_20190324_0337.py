import numpy as np
import matplotlib.pyplot as plt
import matplotlib.animation as animation
import random

fig = plt.figure()
ax1 = fig.add_subplot(1,1,1)

def fun(x):
    return 2*np.sin(2*x+2)

counter = 1

def animate(i):
    global x,y,counter
    counter += 0.2
    ax1.clear()
    plt.xlim(0,50)
    plt.ylim(-3,3)
    plt.plot([x for x in range(50)],[-2.15 for x in range(50)],lw=2,color="black")
    plt.plot(counter,fun(counter),marker="o",ms=20) 

ani = animation.FuncAnimation(fig,animate,interval=1)
plt.show()