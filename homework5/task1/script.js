const LOGIN = 'ADMIN';
const PASSWORD = '1q2w3e';

const authorize = () => {
    let userLogin;
    let userPassword;
    let isAuthSuccess = false;
    let attempt = 3;
    let i = 1;

    while (i<=attempt) {

        userLogin = prompt('Логин:');
        if (!userLogin){
            alert('Введите логин:');
            continue;
        }

        userPassword = prompt('Пароль:');
        if (!userPassword){
            alert('Введите пароль:');
            continue;
        }        
            
        if (userLogin === LOGIN || userPassword === PASSWORD) {
            isAuthSuccess = true;
            alert('Welcome');
        }else{
             alert(`Данные неверны! У вас осталось ${attempt - i} попыток.`);   
               i +=1;
            }             
    }
}

authorize()