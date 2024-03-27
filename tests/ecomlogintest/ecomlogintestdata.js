export const login_data = {
    login_pageUrl: 'https://ecommerce-playground.lambdatest.io/',
    username: 'pranav@testroverautomation.com',
    password:'Test1234',
    user_logged_in_sucessfully_Url: /.*route=account\/account/,
    user_not_Loggedin: /.*route=account\/login/,
    username_Password_Data: [
        {username: 'Test', password: '12345'},
        {username: 'test', password: 'QA1234'},
        {username: 'qatester', password:'ts123'},
        {username: 'Xyz_SRK', password:'$%$%^$^'}
    ]
}
