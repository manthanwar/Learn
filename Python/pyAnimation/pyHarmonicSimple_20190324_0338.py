import numpy as np
import matplotlib.pyplot as plt
import matplotlib.animation as animation
import random

fig = plt.figure()
ax1 = fig.add_subplot(1,1,1)

def fun(t):
    return 2*np.sin(4/3*t+2)

x = [0]
y = [fun(x[0])]

def position(x):
    x1 = x-1
    x2 = x+1
    y1 = 1 
    y2 = -1

    p1 = [x1,y2]
    p2 = [x2,y2]
    p3 = [x2,y1]
    p4 = [x1,y1]
    return [p1,p2,p3,p4]

counter = 0

def animate(i):
    global x,y,counter
    ax1.clear()

    # configure  X axes
    plt.xlim(-5,5)
    plt.xticks([-4,-3,-2,-1,0,1,2,3,4])

    # configure  Y axes
    plt.ylim(-5,5)

    # labels
    plt.xlabel("x")
    plt.ylabel("y")
    plt.title("Simple harmonic motion")
    
    # plt.gca().add_line(line)
    p1 = [position(fun(counter))[0][0],position(fun(counter))[0][1]]
    p2 = [position(fun(counter))[1][0],position(fun(counter))[1][1]]
    p3 = [position(fun(counter))[2][0],position(fun(counter))[2][1]]
    p4 = [position(fun(counter))[3][0],position(fun(counter))[3][1]]

    x = [p1[0],p2[0],p3[0],p4[0],p1[0]]
    y = [p1[1],p2[1],p3[1],p4[1],p1[1]]
    linex = [-4,p1[0]]
    liney = [0,0]
    
    plt.plot(x,y,lw=5,color="blue")
    plt.plot(linex,liney,color="red",ls=":",lw=5)
    counter += 0.2

ani = animation.FuncAnimation(fig,animate,interval=1)
plt.show()