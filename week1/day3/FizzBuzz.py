user_input = int(input("Please type a number. "))

calc1 = user_input % 3
calc2 = user_input % 5

if calc1 == 0 and calc2 == 0:
    print("Fizz Buzz")
if calc1 == 0 and calc2 != 0:
    print("Fizz")
if calc2 == 0 and calc1 != 0:
    print("Buzz")