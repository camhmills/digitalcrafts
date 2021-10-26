
from tkinter import *
import random
from characterclass import Character
evil = Character("Evil", 25, 8, 10, 0)

def makeaChar():
    charName = "Thundrake"
    randomizeStats = "Do you want to randomize your character's stats?"
    if randomizeStats == "Yes":
        charCon = random.randint(5, 20)
        charStam = random.randint(25, 75)
        charStr = random.randint(5, 20)
        charMoney = 0
    else:
        charCon = 12
        charStam = 35
        charStr = 12
        charMoney = 0
    hero = Character(charName, charStam, charCon, charStr, charMoney)
    #print("Here's your character's stats:\n")
    #print("%s \nStamina %s \nConstitution %s \nStrength %s \nMoney %s" % (charName, charStam, charCon, charStr, charMoney))
    return hero


def click():
    enteredText = textentry.get()
    output.delete(0.0, END)
    if enteredText == "Quit":
        window.destroy()
    if enteredText == "1":
        output.insert(END, "Name your character.\n")
        output.insert(END, "Do you want to randomize your character's stats?\n")
        makingaChar = makeaChar()
        outStats = "%s \nStamina %s \nConstitution %s \nStrength %s \nMoney %s" % (makingaChar.name, makingaChar.stamina, makingaChar.constitution, makingaChar.strength, makingaChar.money)
        output.insert(END, outStats)
    


##### main:
window = Tk()
window.title("Simple Dungeon Crawl")
window.geometry("640x480")
window.configure(background = "black")

photo1 = PhotoImage(file = "Z:\VS Code Projects\digitalcrafts\week2\day5\simpledungeoncrawltitle.png")
titleText = Label(window, image = photo1, bg = "black").grid(row = 0, column = 0)
window.columnconfigure(0, weight = 1)

Label(window, text = """Welcome to Simple Dungeon Crawl!
1. Make a character
2. Play
3. View Character
4. Quit
    """, bg = "black", fg = "white", font = "fixedsys 12").grid(row = 1, column = 0)

textentry = Entry(window, width = 20, bg = "white", justify = "center")
textentry.grid(row = 2, column = 0)

#textentry2 = Entry(window, width = 20, bg = "white", justify = "center")

Button(window, text = "OK", width = 4, command = click).grid(row = 3, column = 0)

#output text
output = Text(window, width = 75, height = 12, wrap = WORD, background = "white")
output.grid(row = 4, column = 0)



window.mainloop()