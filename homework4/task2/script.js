function userInfo() {
    const userName = prompt("Ваше имя?");
    const userAge = Number(prompt("Ваш возраст?"));

    if (userAge < 30) {
        alert("Привет, " + userName);
    }else{
        alert("Здавствуйте, " + userName);
    }
}

userInfo();