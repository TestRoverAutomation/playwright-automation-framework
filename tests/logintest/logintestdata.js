export const login_data = {
    login_pageUrl: 'https://practicetestautomation.com/practice-test-login/',
    username: 'student',
    password:'Password123',
    user_logged_in_sucessfully_Url: /.*logged-in-successfully/,
    user_not_Loggedin: /.*practice-test-login/,
    username_Password_Data: [
        {username: 'Test', password: '12345'},
        {username: 'test', password: 'QA1234'},
        {username: 'qatester', password:'ts123'},
        {username: 'Xyz_SRK', password:'$%$%^$^'}
    ]
}
