from tkinter import *
import time
import random

WIDTH = 600
HEIGHT = 600

tk = Tk()
canvas = Canvas(tk, width=WIDTH, height=HEIGHT)
tk.title('draw')
canvas.pack()

colors = ["black", "red", "green", "blue", "orange", "yellow", "purple",
		  "cyan", "magenta", "gray", "gold", "pink", "dodgerblue"]


class Ball:
	def __init__(self, color, size):
		self.shape = canvas.create_oval(20,20,size,size, fill=color,width=1)
		self.xspeed = random.randrange(5, 40)
		self.yspeed = random.randrange(5, 40)

	def move(self):
		canvas.move(self.shape, self.xspeed, self.yspeed)

		#pos = [left,top,right,bottom] = [x1,y2,x2,y2] = [0,1,2,3]
		pos = canvas.coords(self.shape) 
	
		if pos[3] >= HEIGHT or pos[1] <= 5:
			self.yspeed = -self.yspeed

		if pos[2] >= WIDTH or pos[0] <= 5: 
			self.xspeed = -self.xspeed


class Spring:
    def __init__(self,startX, startY, noLinks):
        self.shape = canvas.create_line(startX, startY, startX+50, startY-50, width=10, 
            fill="red")
   
        for iii in range(1, 5):
            startY1 = iii  * 100
            startY2 = iii * 100  + 50
            self.shape = canvas.create_line(startX, startY1, startX+100, startY2, width=10, 
                fill="blue")
        
            self.shape = canvas.create_line(startX, startY1+102, startX+100, startY2-2, width=10, 
                fill="green")

        self.shape = canvas.create_line(startX, startY1+102, startX+50, startY2+100, width=10, 
            fill="red")

        

mySpring = Spring(100,100,0)


#	canvas.after(120)

tk.update()
#	time.sleep(0.020)



canvas.mainloop()

