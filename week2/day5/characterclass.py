import random
class Character:
    def __init__(self, name, stamina, constitution, strength, money):
        self.name = name
        self.constitution = constitution
        self.stamina = stamina
        self.strength = strength
        self.inventory = []
        self.money = money

    def acquireItems(self, item, itemBoost, itemTitle):
        self.item = item
        itemBoost = random.randint(2,5)
        item = {"Sword" : itemBoost}
        self.inventory.append(item)

    def addMoney(self):
        self.money += 1

    def damageCalc(self, damage):
        damage = self.strength * 1.5 +- random.randint(2,5)
        self.stamina -= damage

    def attack(self, target):
        target.damageCalc(self.stamina)

    def rest(self, healthRestore):
        healthRestore = 1.25 * self.consitution
        self.stamina += healthRestore