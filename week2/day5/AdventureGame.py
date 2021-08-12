import random
import pygame
from characterclass import Character

# Start menu
def startMenu():
    menuMessage = ("""
    Welcome to Simple Dungeon Crawl!
    1. Make a character
    2. Play
    3. Quit
    """)
    return print(menuMessage)

# stock evil
evil = Character("Evil", 25, 8, 10)

# character creator
def makeaChar():
    charName = input("Name your character: ")
    randomizeStats = input("Do you want to randomize your character's stats? ")
    if randomizeStats == "Yes":
        charCon = random.randint(5, 20)
        charStam = random.randint(25, 75)
        charStr = random.randint(5, 20)
    else:
        charCon = 12
        charStam = 35
        charStr = 12
    hero = Character(charName, charStam, charCon, charStr)
    print("Here's your character's stats:\n")
    print("%s \nStamina %s \nConstitution %s \nStrength %s " % (charName, charStam, charCon, charStr))
    return hero


# play menu
def actionMenu():
    userInput = input("""
    Attack
    Run
    Rest
    """)
    return userInput

# play loop
def playFunc(hero):
    print("You enter the dungeon...\n")
    print("Before you, a slim, short silhouette creeps towards you...\n")

    while True:
        userInput = actionMenu()
        if userInput == "attack":
            hero.attack(evil)
            if evil.stamina > 0:
                print("The goblin has %d health left!" % (evil.stamina))
            monsterAttackChance = random.randint(1,10)
            if monsterAttackChance > 6 and evil.stamina > 0:
                print("The goblin attacks you!\n")
                evil.attack(hero)
            print("You have %.0f health left." % (hero.stamina))
        if userInput == "rest":
            hero.rest(hero)
            print("You have %.0f health." % (hero.stamina))
        if userInput == "run":
            break
        if evil.stamina <= 0:
            print("You killed the goblin!")
            break
        if hero.stamina <= 0:
            print("You died!")
            break

# main menu

startMenu()
while True:    
    userInput = input("What would you like to do? ")
    if userInput == "1":
        hero = makeaChar()
    if userInput == "2":
        playFunc(hero)
    if userInput == "q":
        break