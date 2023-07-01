import smtplib
import re
import hashlib
import jwt
import sys
from datetime import datetime, timedelta
from email.mime.text import MIMEText
from .data import users, valid_token_list
from .hash import get_hash_of, encode_jwt, decode_jwt
from .errors import InputError, AccessError
from .data_helper import add_account_to_database, password_match

SYSTEM_EMAIL = "pomipomi2023@gmail.com"
EMAIL_PASSWORD = "zlpwyjaxbmfgsvfp"
EMAIL_SUBJECT = 'Your reset code for Pomi'
REGEX = '^[a-z0-9]+[\\._]?[a-z0-9]+@(?:\\w+\\.)+\\w{2,3}$'
SECRET = "HelloWorld2023"


def check_valid_email(email):
    '''
    Checks if an email address is valid. 
    If the email address is valid, return 1, else return 0
    '''
    # If email is valid, return 1
    if re.search(REGEX, email):
        return 1
    # If the email is not valid, return 0
    return 0


def auth_register(input_email, password, first_name, last_name, cardholder_name, card_number,
                  expiry_month, expiry_year, cvv_num):
    '''
    Given a user's first and last name, email address, and password, create
    a new account and return a new token for authentication in their
    session.
    '''

    global users, valid_token_list

    # Raise error if first name is outside the range of 1 - 50 characters
    if len(first_name) > 50 or len(first_name) < 1:
        raise InputError(
            description='First name should be between 1 and 50 characters')

    # Raise error if last name is outside the range of 1 - 50 characters
    if len(last_name) > 50 or len(last_name) < 1:
        raise InputError(
            description='Last name should be between 1 and 50 characters')

    # Check if email is valid
    if check_valid_email(input_email) == 0:
        raise InputError(
            description='Sorry, the email you entered is not valid.')

    # Check if email is already associated with an account
    for user in users:
        if user['login']['email'] == input_email:
            raise InputError(
                description='Email is taken! Please enter another email.')

    # If password is too short, raise error
    if len(password) < 6:
        raise InputError(
            description='Password is too short: password must not be less than 6 characters')

    # If card number entered involves characters other than digits, raise error
    if not card_number.isdigit():
        raise InputError(description='Card number should all be digits')

    # If card number is not exactly 16 digits, raise error
    # (Converts the number to an int, and back to a str, to remove leading zeroes)
    if len(str(int(card_number))) != 16:
        raise InputError(description='Card number should be 16 digits')

    # expiry month should be between 1 and 12
    # if expiry_month < 1 or expiry_month > 12:
    #     raise InputError(description='Month should be between 1 or 12')
    try:
        expiry_month = int(expiry_month)
        if expiry_month < 1 or expiry_month > 12:
            raise InputError(description='Month should be between 1 or 12')
    except:
        raise InputError(description='Month should be between 1 or 12')

    # year should consist of 4 digits
    if len(str(expiry_year)) != 4:
        raise InputError(description='Year should consist of 4 digits')
    
    try:
        expiry_year = int(expiry_year)
        if len(str(expiry_year)) != 4:
            raise InputError(description='Year should consist of 4 digits')
    except:
        raise InputError(description='Year should consist of 4 digits')

    # expiry year must be >= current year
    expiry_month = int(expiry_month)
    expiry_year = int(expiry_year)
    if expiry_year < datetime.today().year:
        raise InputError(description='Expiry year cannot be before this year')
    
    # Expiry date must be after today
    if expiry_year == datetime.today().year and expiry_month < datetime.today().month:
        raise InputError(description='Expiry date cannot be before today')
    
    if len(cvv_num) != 3:
        raise InputError(description='The cvv must be 3 digits')

    try:
        cvv_num = int(cvv_num)
    except:
        raise InputError(description='The cvv should all be digits')

    # return a token to user
    return_info = {
        'email': input_email,
        'token': '',
    }
  
    return return_info


def auth_login(email, password):
    '''
    Given a registered users' email and password, generates a valid token
    for the user to remain authenticated
    '''
    global valid_token_list
    email_registered = False

    return_info = {
        'email': email,
        'token': '',
    }

    # Check if email is valid
    if check_valid_email(email) == 0:
        raise InputError(
            description='Sorry, the email you entered is not valid.')

    # Check if user exists (if user's in the database)
    if password_match(email, hashlib.sha256(password.encode()).hexdigest()):
        email_registered = True
        pass
    else: 
        InputError(description='Incorrect password')

    if not email_registered:
        raise InputError(
            description='Account does not exist: email not registered')

    # Create token
    token_data = {
        'email': email,
        'session': str(datetime.now().timestamp())  # str(float)
    }
    # encoding email and session information as a token
    token = encode_jwt(token_data, SECRET)

    return_info['token'] = token
    
    valid_token_list.append(token)

    return return_info


def auth_logout(token):
    '''
    Given an active token, invalidates the token to log the user out.
    If invalid token is given, AccessError will be thrown
    This function can never return false because of above line
    '''
    global valid_token_list

    if token not in valid_token_list:
        raise AccessError(description='Invalid token')

    valid_token_list.remove(token)

    return {"is_success": True}


if __name__ == '__main__':
    # Some driver code
    # print(check_valid_email("hi@gmail.com"))
    # send_email("@gmail.com", "111")

    # Register user Luya Pan
    registration = auth_register("luyapan1202@gmail.com", "1234567", "Luya", "Pan",
                                 "Luya Pan", "1111222233334444", 12, 2023, "123")
    print("---> User registered: ")
    print(registration)
    
    '''
    # Log user in
    login_success = auth_login("luyapan1202@gmail.com", "1234567")
    print("\n---> User logged in:")
    print(login_success)

    # Log user out using the token
    logout_success = auth_logout(login_success['token'])
    print('\n---> User logging out: ')
    print(logout_success)
    '''
    # Now say Luya forgot her password and would like to request a password reset
    print('\n---> User requesting password reset: ')
    """ secrete_code = auth_passwordreset_request("luyapan1202@gmail.com")
        print(secrete_code['secret'])
        print("\n---> User resets the password:")
        aa = auth_passwordreset_reset(secrete_code['secret'], "7654321")
        print(aa)
        print("\n---> User logged in:")
        print(login_success)
        
        # Login fails since user has already changed the password. An InputError should be raised
        login_fail = auth_login("luyapan1202@gmail.com", "1234567")"""
    """    print("\n---> User logged in:")
        print(login_success)
        login_success = auth_login("luyapan1202@gmail.com", "7654321")"""
