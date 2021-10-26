
import random
from characterclass import Character

# Start menu
def startMenu():
    menuMessage = ("""
    Welcome to Simple Dungeon Crawl!
    1. Make a character
    2. Play
    3. View Character
    4. Quit
    """)
    return print(menuMessage)

# stock evil
evil = Character("Evil", 25, 8, 10, 0)

# character creator
def makeaChar():
    charName = input("Name your character: ")
    randomizeStats = input("Do you want to randomize your character's stats? ")
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
    print("Here's your character's stats:\n")
    print("%s \nStamina %s \nConstitution %s \nStrength %s \nMoney %s" % (charName, charStam, charCon, charStr, charMoney))
    return hero

def viewStats(hero):
    print("Here's your character's stats:\n")
    print("%s \nStamina %s \nConstitution %s \nStrength %s \nMoney %s" % (hero.name, hero.stamina, hero.constitution, hero.strength, hero.money))
    

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
            hero.addMoney()
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
    if userInput == "3":
        viewStats(hero)
    if userInput == "q":
        break