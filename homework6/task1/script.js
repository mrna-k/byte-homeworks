let userName;
let userSurname;
let userPass;
let isAuthSuccess = false;

const authorize = () => {

do { 
userName = prompt('Ваше имя?');
    if (!userName){ 
        alert('Введите ваше имя:');
    // return userName;    
    continue;
    }
               
userSurname = prompt('Ваша фамилия?');
    if (!userSurname){
        alert('Введите вашу фамилию:');
        continue;
    }

userPass = prompt('Введите пароль:');
    if (userPass.length > 6 && userPass.search(/[a-z]/) !== -1 && userPass.search(/[A-Z]/) !== -1){
        alert(`${userName[0].toUpperCase()}${userName.slice(1).toLowerCase()} ${userSurname[0].toUpperCase()}${userSurname.slice(1).toLowerCase()}, ваш пароль надёжный!`);
        break;
    }else {
        alert(`Пароль должен содержать больше 6 символов, а также символы верхнего и нижнего регистров`);
    };

}while(!isAuthSuccess);

};

authorize();
