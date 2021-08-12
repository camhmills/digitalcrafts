class Character:
    def __init__(self, name, stamina, constitution, strength):
        self.name = name
        self.consitution = constitution
        self.stamina = stamina
        self.strength = strength
        self.inventory = []
    
    def damageCalc(self, damage):
        damage = self.strength * 1.5 +- random.randint(2,5)
        self.stamina -= damage

    def attack(self, target):
        target.damageCalc(self.stamina)

    def rest(self, healthRestore):
        healthRestore = 1.25 * self.consitution
        self.stamina += healthRestore