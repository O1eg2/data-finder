const array = [
    "Александр | М | 25.06.1989 | 32 лет ",
    "Таисия | Ж | 24.11.1984 | 36 лет", 
    "Диана | Ж | 06.11.1951 | 69 лет",
    "Максим | М | 20.09.1980 | 41 год",
    "Олег | М | 09.10.2003 | 17 лет",
    "Дина | Ж | 21.03.1992 | 29 лет"
];

// запись данных в список
function showArr(arr, elem) {
     let out = '';
     for (let i = 0; i < arr.length; i++) {
         out += `<li>${arr[i]}</li>`
     }
     document.querySelector(elem).innerHTML = out;
}
showArr(array, '.elastic');

// поиск данных вписанных в поисковик
document.querySelector('#elastic').oninput = function() {
    let val = this.value.trim();
    let elasticItems = document.querySelectorAll('.elastic li');
    if (val != '') {
        elasticItems.forEach(function(elem) {
            if (elem.innerText.search(val) == -1) {
                elem.classList.add('hide');
            } 
            else {
                elem.classList.remove('hide');
            }
        });
    }
    else {
        elasticItems.forEach(function(elem) {
            elem.classList.remove('hide');
        });
    }
}