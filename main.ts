game.splash("Let's calculate the area of a rectangle!")
let length = game.askForNumber("enter the length in cm:")
let width = game.askForNumber("enter the width in cm:")
let area = length * width
game.splash("the area of a rectangle with length" + length + "cm and width" + width + "cm is" + area + "cm squared.")
let perimeter = 2 * (length + 2 * width)
