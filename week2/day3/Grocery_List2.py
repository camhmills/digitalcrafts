class GroceryList:
    def __init__(self, title, address):
        self.title = title
        self.address = address
        self.items = []

    def addItem(self, title, quantity, price):
        newItem = {"title": title, "quantity" : quantity, "price" : price}
        self.items.append(newItem)
    
    def __str__(self) -> str:
        init = f'{self.title}'
        if len(self.items) == 0:
            init += "no items"
        
        else:
            for item in self.items:
                init += f'\n- {item["quantity"]} {item["title"]} | {item["price"]} '
        return init

shoppingLists = []

print("""
Welcome to your shopping lists.
Enter "new" to create a new list
Enter "add" to add an item to a list
Enter "view" to view your lists
Enter "quit" to quit
""")

while True:
    action = input("> ")

    if action == "new":
        listName = input("Enter the new list name: ")
        listAddress = input("Enter the new list address: ")

        newList = GroceryList(listName, listAddress)
        shoppingLists.append(newList)
        print("You've created a new list.")
    
    elif action == "add":
        listName == input("Enter the list you want to add to: ")

        for list in shoppingLists:
            if list.title == listName:
                itemName = input("Enter the name of the item: ")
                itemQuantity = input("Enter the quantity: ")
                itemPrice = input("Enter the price: ")
            
            newItem = {"title" : itemName, "quantity" : itemQuantity, "price" : itemPrice}
            list.items.append(newItem)

            print(f'New item added to {list.title}')
    elif action == "view":
        for list in shoppingLists:
            print(list)

    elif action == "quit":
        print("Thanks for accessing your lists.")
        break
    