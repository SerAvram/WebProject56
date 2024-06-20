
document.querySelector('form').addEventListener('submit', function (e) {
    let password = document.getElementById('password').value;
    let birthdate = document.getElementById('date').value;
    let login = document.getElementById('login').value;
    let email = document.getElementById('email').value;
    console.log (birthdate);
    let confirmPassword = document.getElementById('conf-password').value;

    if (!login || !email || !password || !birthdate){
        e.preventDefault();
        alert('Поля не заповнені');
        return;
    }

    if (password !== confirmPassword) {
        e.preventDefault();
        alert('Паролі не співпадають!');
        return;
    }
    // Проверка формата даты
    let datePattern = /^(\d{4})\-(\d{2})\-(\d{2})$/;
    if (!datePattern.test(birthdate)) {
        e.preventDefault();
        alert('Неправильний формат дати. Використовуйте формат дд.мм.гг');
        return;
    }

    var parts = birthdate.match(datePattern);
    var day = parseInt(parts[3], 10);
    var month = parseInt(parts[2], 10);
    var year = parseInt(parts[1], 10);

    if (day < 1 || day > 31 || month < 1 || month > 12) {
        e.preventDefault();
        alert('Неправильна дата.');
    }

});
