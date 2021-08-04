print("Welcome to my calculator. It can add, subtract, multiply and divide. Type exit when prompted to end the program.")

user_operation = input("Are you adding, subtracting, multiplying or dividing? Or, would you like to exit? ")

if user_operation != "multiplying" or "subtracting" or "multiplying" or "dividing" or "exit":
    print("Please type your desired operation. ")

while user_operation != "exit":
    if user_operation == "adding":
        first_integer = float(input("Enter your first number: "))
        second_integer = float(input("Enter your second number: "))
        print(first_integer + second_integer)

    if user_operation == "subtracting":
        first_integer = float(input("Enter your first number: "))
        second_integer = float(input("Enter your second number: "))
        print(first_integer - second_integer)

    if user_operation == "multiplying":
        first_integer = float(input("Enter your first number: "))
        second_integer = float(input("Enter your second number: "))
        print(first_integer * second_integer)

    if user_operation == "dividing":
        first_integer = float(input("Enter your first number: "))
        second_integer = float(input("Enter your second number: "))
        print(first_integer / second_integer)

    if user_operation == "exit":
        break
    user_operation = input("Are you adding, subtracting, multiplying or dividing? Or, would you like to exit? ")