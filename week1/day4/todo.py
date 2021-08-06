print("This is your to-do list.")
taskdict = {"High" : [], "Medium" : [], "Low" : []}

user_input = input("1. Add a task \n2. Delete a task \n3. View all tasks ")

if user_input == "q":
    print("Thank you for accessing your to-do list.")
    quit

#if user_input == "1" or "2" or "3":
    #user_input = input("1. Add a task \n2. Delete a task \n3. View all tasks ")

while user_input != "q":

    #adding tasks
    if user_input == "1":
        addtask = input("What is the task you want to add, and its priority? ")
        if "high" in addtask:
            taskdict["High"].append(addtask)
        if "medium" in addtask:
            taskdict["Medium"].append(addtask)
        if "low" in addtask:
            taskdict["Low"].append(addtask)
        user_input = input("1. Add a task \n2. Delete a task \n3. View all tasks ")

    #removing tasks
    if user_input == "2":
        for task, priority in taskdict.items():
            for priority in priority:
                print(priority)
        remove_task = input("What priority task do you want to remove? ")
        if "high" in remove_task:
            print(taskdict["High"])
            for i in range(len(taskdict["High"])):
                print(i, end = " ")
            remove_task2 = int(input("\nWhat task would you like to remove? "))
            del(taskdict["High"][remove_task2])
        if "medium" in remove_task:
            print(taskdict["Medium"])
            for i in range(len(taskdict["Medium"])):
                print(i, end = " ")
            remove_task2 = int(input("\nWhat task would you like to remove? "))
            del(taskdict["Medium"][remove_task2])
        if "low" in remove_task:
            print(taskdict["Low"])
            for i in range(len(taskdict["Low"])):
                print(i, end = " ")
            remove_task2 = int(input("\nWhat task would you like to remove? "))
            del(taskdict["Low"][remove_task2])
        user_input = input("1. Add a task \n2. Delete a task \n3. View all tasks ")

    #viewing tasks
    if user_input == "3":
        for task, priority in taskdict.items():
            for priority in priority:
                print(priority)
        user_input = input("1. Add a task \n2. Delete a task \n3. View all tasks ")

    #quitting
    if user_input == "q":
        print("Thank you for accessing your to-do list.")
        quit
