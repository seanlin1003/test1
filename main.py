def recursion():
    recursion()

def on_gesture_tilt_right():
    basic.show_arrow(ArrowNames.EAST)
input.on_gesture(Gesture.TILT_RIGHT, on_gesture_tilt_right)

def on_forever():
    pass
basic.forever(on_forever)
