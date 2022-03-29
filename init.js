window.onload = function()
{
    const initPerson = personGenerator.getPerson();
    document.getElementById('firstNameOutput').innerText = initPerson.firstName;
    document.getElementById('surnameOutput').innerText = initPerson.surname;
    document.getElementById('MiddleName').innerText = initPerson.middleName;
    document.getElementById('genderOutput').innerText = initPerson.gender;
    document.getElementById('birthYearOutput').innerText = initPerson.birth;
    document.getElementById('work').innerText = initPerson.work;



const submit = document.querySelector('#button')

submit.addEventListener('click', (event) => { // Генерация новых данных
    window.location.reload(); 
})

const reset = document.querySelector('#button2') // Очистка данных

reset.addEventListener('click', (event) => {
    document.getElementById('firstNameOutput').innerText = "";
    document.getElementById('surnameOutput').innerText = "";
    document.getElementById('MiddleName').innerText = "";
    document.getElementById('genderOutput').innerText = "";
    document.getElementById('birthYearOutput').innerText = "";
    document.getElementById('work').innerText = "";
})
};