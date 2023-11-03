from tkinter import *
from tkinter.ttk import *
import tkinter.font as font

# writing code needs to
# create the main window of 
# the application creating 
# main window object named root
root = Tk()

# giving title to the main window
root.title("First_Program")

# Set geometry(widthxheight)
root.geometry('350x200')

# Define font
myFont = font.Font(size=40,family='Arial')

# Label is what output will be 
# show on the window
label = Label(root, text ="Hello World !", font=myFont).pack()




# frame inside root window
frame = Frame(root)                  
 
# geometry method
frame.pack()                          
 
# button inside frame which is 
# inside root
button = Button(frame, text ='Geek')

# Create button
# button = Button(root, text='My Button', bg='#0052cc', fg='#ffffff')

# Apply font to the button label
# button['font'] = myFont  
button.pack()    



def clicked():
    label.configure(text = "I just got clicked")



# calling mainloop method which is used
# when your application is ready to run
# and it tells the code to keep displaying 
root.mainloop()
