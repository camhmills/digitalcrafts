array1 = [0, 1, 0, 3, 12]
array2 = [1, 7, 0, 0, 8, 0, 10, 12, 0, 4]

for num in array1:
    if num == 0:
        array1.remove(num)
        array1.append(num)
    else:
        pass

for num in array2:
    if num == 0:
        array2.remove(num)
        array2.append(num)
    else:
        pass

print(array1)
print(array2)
