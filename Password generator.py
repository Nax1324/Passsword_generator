import random

lower_case = 'abcdefghijklmnopqrstuvwxyz'
upper_case = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
numbers = '1234567890'
symbols = '!@#$%^&*?'

string = lower_case + upper_case + numbers + symbols
length = int(input("Enter your password length: "))
password = "".join(random.sample(string,length))
print(f"Your password is {password}")