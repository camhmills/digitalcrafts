user_input = int(input("Please type a number: "))

calc = user_input % 2

if calc == 0:
    print("That's an even number.")
else:
    print("That's an odd number.")