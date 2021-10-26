numlist = range(1,100)


for num in numlist:
    if num % 3 == 0 and num % 5 != 0:
        print("Fizz", end = " ")
    if num % 5 == 0 and num % 3 != 0:
        print("Buzz", end = " ")
    if num % 3 == 0 and num % 5 == 0:
        print("FizzBuzz", end = " ")
    if num % 3 != 0 and num % 5 != 0:
        print(num, end = " ")
