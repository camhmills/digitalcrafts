taskdict = {"High" : [], "Medium" : [], "Low" : []}
#user_input = input("1. Add a task \n2. Delete a task \n3. View all tasks ")
#if user_input == "1" or "2" or "3":
    #user_input = input("1. Add a task \n2. Delete a task \n3. View all tasks ")

def addingTasks():
        #adding task
            addtask = input("What is the task you want to add, and its priority? ")
            if "high" in addtask:
                taskdict["High"].append(addtask)
            if "medium" in addtask:
                taskdict["Medium"].append(addtask)
            if "low" in addtask:
                taskdict["Low"].append(addtask)
            if "high" not in addtask or "medium" not in addtask or "low" not in addtask:
                print("That didn't work. Please try again.")

def removingTasks():
        #removing tasks
            for priority in taskdict.items():
                for priority in priority:
                    print(priority)
            remove_task = input("What priority task do you want to remove? ")
            if "high" in remove_task:
                print(taskdict["High"])
                for i in range(len(taskdict["High"])):
                    print(i+1, end = " ")
                remove_task2 = int(input("\nWhat task would you like to remove? ")) - 1
                del(taskdict["High"][remove_task2])
            if "medium" in remove_task:
                print(taskdict["Medium"])
                for i in range(len(taskdict["Medium"])):
                    print(i+1, end = " ")
                remove_task2 = int(input("\nWhat task would you like to remove? ")) - 1
                del(taskdict["Medium"][remove_task2])
            if "low" in remove_task:
                print(taskdict["Low"])
                for i in range(len(taskdict["Low"])):
                    print(i+1, end = " ")
                remove_task2 = int(input("\nWhat task would you like to remove? ")) - 1
                del(taskdict["Low"][remove_task2])
            
def viewingTasks():
        #viewing tasks
            for priority in taskdict.items():
                for task in priority:
                    print(task)

            
def directory(user_input):
    while user_input != "q":
        if user_input == "1":
            addingTasks()
        if user_input == "2":
            removingTasks()
            return
        if user_input == "3":
            viewingTasks()
            return
        if user_input == "q":
            print("Thank you for accessing your to-do list.")
            quit
        user_input = input("1. Add a task \n2. Delete a task \n3. View all tasks ")

print("This is your to-do list.")
directory(input("1. Add a task \n2. Delete a task \n3. View all tasks "))