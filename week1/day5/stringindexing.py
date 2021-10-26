def stringindexfinder(string):

    for char in string:
        if string.count(char) > 1:
            pass
        if string.count(char) == 1:
            print(string.index(char))
            break
    return

word = input("Type a string to find it's first non-repeating character. \n")

stringindexfinder(word)