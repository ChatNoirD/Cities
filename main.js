const towns = [ "Винница", "Днепр", "Донецк", "Житомир", "Запорожье", "Ивано-Франковск", "Киев", "Кропивницкий", "Луганск", "Луцк", "Львов", "Николаев", "Одесса", "Полтава", "Ровно", "Сумы", "Тернополь", "Ужгород", "Харьков", "Херсон", "Хмельницкий", "Черкассы", "Чернигов", "Черновцы"];
const $ul = document.createElement('ul');
const $input = document.querySelector('input');
for (let i = 0; i < towns.length; i++) {
    var $li = document.createElement('li');
    $li.append(towns[i]);
    $ul.append($li);
}
document.body.append($ul);
const cityList = document.querySelectorAll('li');
function findCity(value) {
    cityList.forEach(function(element) {
        if(!value.length) return;
        if(element.innerText.toLowerCase().includes(value.toLowerCase())){
            element.classList.add('active');
        } else {
            element.classList.remove('active');
          }
    });
}
function active(){
    return setInterval(() => {
      findCity($input.value);
    }, 0);
  }
active();