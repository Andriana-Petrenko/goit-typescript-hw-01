type UserInfo = {
name: string;
surname: string;
email: string;
password: string;
}

function createOrUpdateUser(initialValues: Partial<UserInfo>) {
    return {...initialValues}
}

createOrUpdateUser({ 
  email: 'user@mail.com', 
  password: 'password123', 
});
