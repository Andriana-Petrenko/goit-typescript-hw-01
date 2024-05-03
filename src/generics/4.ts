type UserInfo = {
name: string;
surname: string;
email: string;
password: string;
}

function createOrUpdateUser<T extends UserInfo>(initialValues: Partial<T>) {
    return {...initialValues}
}

createOrUpdateUser({ 
  email: 'user@mail.com', 
  password: 'password123', 
});
