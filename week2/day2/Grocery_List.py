
myList = []
class Grocery_List:
    def __init__(self, store):
        self.store = store
        self.items = []

    def info(self, title, price, quantity):
        self.title = title
        self.price = price
        self.quantity = quantity

    def __repr__(self):
        return ("%s" % self.store)


def welcomeMessage():
    message = """
    Welcome to your shopping list directory.
    1. Add a list
    2. Add an item to a list
    3. View a list
    4. Press q to quit
    """
    return print(message)

def makingAList():
    listToAdd = []
    userInput = input("What do you want to call your new list? ")
    listInput = Grocery_List(userInput)
    listToAdd.append(listInput)
    myList.append(listToAdd)

def addItemtoList():
    for store in myList:
        print(store)
    itemName = input("What do you want to add?")
    itemQuantity = input("What is the quantity? ")
    itemPrice = input("What is the price? ")
    userInput = int(input("What list do you want to add to? Assign using index. ")) + 1
    itemToAdd = {"title" : itemName, "quantity" : itemQuantity, "price" : itemPrice}
    myList[userInput - 1].append(itemToAdd)
    return itemToAdd


choice = ""
while(choice != "q"):
    welcomeMessage()
    userChoice = input("What do you want to do? ")
    if userChoice == "1":
        makingAList()
    if userChoice == "2":
        addItemtoList()
    if userChoice == "3":
        for store in myList:
            print(store)
    if userChoice == "q":
        print("Thanks for accessing your lists.")
        break

print(myList)