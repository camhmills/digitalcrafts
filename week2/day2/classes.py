#pet sim

class Pet:
    def __init__(self, name, fullness = 50, happiness = 50, hunger = 5, mopiness = 5):
        self.name = name
        self.fullness = fullness
        self.happiness = happiness
        self.hunger = hunger
        self.mopiness = mopiness

    def eat_food(self):
        self.fullness += 30

    def get_love(self):
        self.happiness += 30

    def be_alive(self):
        self.happiness -= self.mopiness
        self.fullness -= self.hunger

def welcome_menu():
    userInput = input("""
    Welcome to Pet Sim.
    1. Feed your pet
    2. Love on your pet
    3. Do nothing
    4. View all pets
    5. Press q to quit
    """)
    return userInput

def viewPet():
    nameList = []
    for pet in petList.keys():
        nameList.append(pet)
    return nameList

chowder = Pet("Chowder")
yara = Pet("Yara")

petList = {"Chowder" : chowder.name, "Yara" : yara.name}

while welcome_menu != "q":
    if welcome_menu() == "4":
        print(viewPet())
    if welcome_menu() == "q":
        break