var xhr = new XMLHttpRequest(),
    method = "GET",
    url = "http://yitv.herokuapp.com";

xhr.open(method, url, true);
xhr.onreadystatechange = function () {
        if(xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
            var obj = JSON.parse(xhr.responseText);
            outputData(obj);
        };
    };
xhr.send();

function outputData(obj) {
    var table = document.createElement('table');
    table.className = 'table';

    document.body.appendChild(table);

    for (var i = 0; i < obj.body.length; i++) {

        // создаем две новых строки таблицы

        var tableRowUp = document.createElement('tr');
        tableRowUp.className = 'table-row table__row';
        table.appendChild(tableRowUp);

        var tableRowDown = document.createElement('tr');
        tableRowDown.className = 'table-row table__row';
        table.appendChild(tableRowDown);

        // во вторую сверху вниз title и массив add_values
        console.log(obj.body[i]);

        // в первую колонку пишем value и распираем её на две строки

        var valueCell = document.createElement('td');
        valueCell.setAttribute('rowspan', 2);
        valueCell.innerHTML = obj.body[i].value;
        tableRowUp.appendChild(valueCell);

        // во вторую колонку верхней строки пишем title

        var titleCell = document.createElement('td');
        titleCell.innerHTML = obj.body[i].title;
        tableRowUp.appendChild(titleCell);

        // во вторую колонку нижней строки пишем массив add_values

        var addValuesCell = document.createElement('td');
        addValuesCell.innerHTML = obj.body[i].add_values.toString().replace(/,/g, ', ');
        tableRowDown.appendChild(addValuesCell);

        obj.body[i].value; // число слева
        obj.body[i].title; // описание
        obj.body[i].add_values; // массив чисел
    }
}
