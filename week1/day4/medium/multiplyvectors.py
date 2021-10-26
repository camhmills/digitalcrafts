numlist1 = [1, 2, 3, 4, 5, 6, 7, 8, 9]
numlist2 = [1, 2, 3, 4, 5, 6, 7, 8, 9]
newlist = []

for num in range(0, len(numlist1)):
    newlist.append(numlist1[num] * numlist2[num])

print(newlist)