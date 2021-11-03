# -*- coding: utf-8 -*-
"""
Created on Sat Oct 24 12:35:09 2015

This is an experiment for testing the concept of a simple angular rate sensor.
It composes of a mass and a spring inside a rotating bar which angular speed is
to be found. A damping term can be added to the spring.

@author: whymranderson.blogspot.com
"""
import numpy as np
import matplotlib.pyplot as plt
from scipy.integrate import odeint
import matplotlib.animation as animation

def func_derivative(u,t,m,k,x0,c):
    '''The ODE function of system's motion.'''
    omega = integrand(t)
    ders = [np.square(omega)*u[1]-k*(u[1]-x0)/m-c*u[0]/m,u[0]] # [df1/dt = f2, dx/dt = f1]
    return ders

#Initial condition of radial velocity and radial position
u10=0 # v
u20=0.02 # x

#parameters of the system
m=0.1 #kg
k=0.02
x0=0.02
c= 2*m*k #damping control

#array generation
steps=1000
ic0 = np.array([u10,u20])
t = np.linspace(0.1,40,steps)
h = t[1]-t[0]
#omega(t) angular velocity, function of time
def integrand(t):
    if t<=5:    
        omega_of_time_t = t/20
    elif t>5 and t<=15:
        omega_of_time_t = 0.25
    else:
        omega_of_time_t = 0
    return omega_of_time_t

#Solve the ODE
outu = odeint(func_derivative,ic0,t,args=(m,k,x0,c))

#Animation
fig = plt.figure()
ax = plt.subplot(111, polar=True)
#two bars with different width ploted to give a hollow-like bar
blackbar, = ax.plot([0,0],[0,0.04],linewidth=12,c='black')
whitebar, = ax.plot([0,0],[0,0.04],linewidth=10,c='white')
#mass-spring line
animation_line, = ax.plot([0,0],[0,u20],'o-',markersize=9)
#theta calculation
theta = np.zeros(steps)
for thetai in range(steps):
    theta[thetai] = np.sum([integrand(tii) for tii in t[0:thetai]])*h
#trajectory of the mass in space
trajectory = ax.plot(theta,outu[:,1])

def update_line(i, animation_line,whitebar,blackbar,outu,t):
    blackbar.set_data([0,theta[i]],[0,0.04])
    whitebar.set_data([0,theta[i]],[0,0.04])
    animation_line.set_data([0,theta[i]],[0,outu[i,1]])
    return animation_line,whitebar,blackbar

line_ani = animation.FuncAnimation(fig, update_line, range(0,steps,3),
                                   fargs=(animation_line,whitebar,blackbar,outu,t),
                                   interval=150, blit=False,repeat=True)

#%%Solve for omega(t) from x(t)
temp = np.diff(outu[:,1])/h
vel = (np.append(temp,0)+np.append(0,temp))/2
acc = np.diff(temp)/h
omega_exp = np.sqrt(np.absolute(np.divide(m*acc+k*(outu[1:-1,1]-x0)+c*vel[1:-1],m*outu[1:-1,1])))

#%%Plot comparing two omegas
#fig2 = plt.figure()
#plt.plot(omega_exp,label="measured angular speed")
#plt.plot([integrand(tii) for tii in t],label="thearetical angular speed")
#plt.legend()
#plt.title("measured angular speed converted from spring displacement")
#plt.xlabel("time in msec")
plt.show()
#line_ani.save('mechanical_gyro.mp4',writer = 'ffmpeg',fps='24')