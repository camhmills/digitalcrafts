class User:
    def __init__(self, first_name, last_name):
        self.first_name = first_name
        self.last_name = last_name
        self.addresses = []

    def addAddresses(self, addresses):
        self.addresses.append(addresses)

    def displayAddresses(self):
        pass


class Address(User):
    def __init__(self, street, city, state, zip):
        #super().__init__(first_name, last_name)
        self.street = street
        self.city = city
        self.state = state
        self.zip = zip


cameronAddress = Address("123 Lemon Street", "Marietta", "Georgia", "30064")

cameron = User("Cameron", "Mills")

cameron.addAddresses(cameronAddress)
print(cameron.first_name)
for addresses in cameron.addresses:
    print(addresses.street)