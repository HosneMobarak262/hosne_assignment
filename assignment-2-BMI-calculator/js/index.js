function calculateBtn(){
    var weight = document.getElementById("weight").value;
    var height = document.getElementById("height").value;

    weight = parseFloat(weight);
    height = parseFloat(height);
    height = height ** 2;

    var bmi = weight / height;

    var bmiValue = document.getElementById("bmiValue");
    bmiValue.innerHTML = bmi;

    document.getElementById("bmiId").style.display = "flex";

    console.log(weight, height, bmi);
}

function resetValue(){
    document.getElementById("weight").value = null;
    document.getElementById("height").value = null;
}