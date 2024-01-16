let array = [3, 0, 11, 7, 16, "кот", 30, 40, "?", null, 5]; 

function countOutputElements() {
    let sumOdd = 0;
    let sumPar = 0;

    array.map(function (item, index, array) {
        if (item == null) {
            console.log("Элемент " + index + " равен null.");
            return;
        }

        if (typeof item == "string") {
            console.log("Элемент " + index + " - строка.");
            return;
        }

        if (item % 2 === 0) sumPar++;
        else sumOdd++;
    });

    console.log("Нечетных: " + sumOdd);
    console.log("Четных: " + sumPar);

}

countOutputElements();
