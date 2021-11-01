const visitorAge = Number(prompt("Пожалуйста, укажите свой возраст:"));
let isWithAdult;

if ((visitorAge >=60 && visitorAge <=80) || (visitorAge >=12 && visitorAge <= 18)) {
    isWithAdult = confirm("У Вас есть разрешение взрослых?") ? alert("Вход разрешён!") : alert("Вход запрещён!");

} else if (visitorAge > 12 && visitorAge < 60 ) {
    alert("Вход разрешён!");

} else {
    alert("Вход запрещён!");
}
