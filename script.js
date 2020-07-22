window.onload = generateNumber();

function generateNumber(){
    zeroToNine();
    oneToTen();
    oneToHundred();
    oneToThousand();
    minToMax();
}

function zeroToNine(){
    var zeroToTen = document.getElementById("zeroToNine");
    var zero_to_ten = Math.floor(Math.random() * 10);
    // console.log(zero_to_ten);
    zeroToTen.innerHTML = zero_to_ten;
}

function oneToTen(){
    var oneToTen = document.getElementById("oneToTen");
    var one_to_ten = Math.floor(Math.random() * 10 + 1);
    oneToTen.innerHTML = one_to_ten;
}

function oneToHundred(){
    var oneToHundred = document.getElementById("oneToHundred");
    var one_to_hundred = Math.floor(Math.random() * 100 + 1);
    oneToHundred.innerHTML = one_to_hundred;
}

function oneToThousand(){
    var oneToThousand = document.getElementById("oneToThousand");
    var one_to_thousand = Math.floor(Math.random() * 1000 + 1);
    oneToThousand.innerHTML = one_to_thousand;
}

function minToMax(){
    let min = 1111;
    let max = 9999;
    var minToMax = document.getElementById("minToMax");
    var min_to_max = Math.floor(Math.random() * (max - min + 1)) + min;
    minToMax.innerHTML = min_to_max; 
}