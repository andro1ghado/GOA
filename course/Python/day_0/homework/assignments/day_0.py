from turtle import *

#speed
speed(2)
#painting walls
width(6)
color("green")
begin_fill()
#floor
forward(270)
left(90)
#right wall
forward(155)
left(90)
#ceiling
forward(270)
left(90)
#left wall
forward(155)
end_fill()
#direction for roof
backward(155)
left(135)
#roof
color("red")
begin_fill()
forward(100)
right(45)
forward(130)
right(45)
forward(100)
right(135)
forward(270)
end_fill()
#direction for door
color("green")
backward(270)
forward(273)
left(90)
forward(155)
left(90)
forward(80)
#door
color("brown")
begin_fill()
forward(70)
left(90)
forward(110)
left(90)
forward(70)
left(90)
forward(110)
end_fill()
#direction for window
left(90)
color("green")
forward(76)
backward(80)
forward(120)
left(90)
forward(50)
#window
color("blue")
begin_fill()
forward(50)
right(90)
forward(50)
right(90)
forward(50)
right(90)
forward(50)
end_fill()
#and done!
exitonclick()
#exits when clicked