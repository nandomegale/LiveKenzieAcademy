var sliderWeight = document.getElementById("sliderWeight");
var weightOutput = document.getElementById("weightOutput");

weightOutput.innerHtml = sliderWeight.value;

sliderWeight.oninput = function () {
    weightOutput.innerHTML = this.value;
}

function showValueWeight(newVal) {
    sliderWeight.value = newVal;
}

sliderWeight.addEventListener("input", updateValueOutPutWeight);

function updateValueOutPutWeight(e) {
    weightOutput.value = e.srcElement.value;
}

var sliderHeight = document.getElementById("sliderHeight");
var heightOutput = document.getElementById("heightOutput");

heightOutput.innerHtml = sliderHeight.value;

sliderHeight.oninput = function () {
    heightOutput.innerHTML = this.value;
}

function showValueHeight(newVal) {
    sliderHeight.value = newVal;
}

sliderHeight.addEventListener("input", updateValueOutPutHeight);

function updateValueOutPutHeight(e) {
    heightOutput.value = e.srcElement.value;
}