const selectTag = document.querySelector(".custom-select");
const selectAfterTag = document.querySelector(".custom-select::after");
const options = document.getElementById("custom-options");
//const optionsList = document.querySelectorAll(".custom-options div");
const optionsList = document.getElementById("custom-options").children;
//const singleOption = document.querySelector(".custom-options--is-selected");

selectTag.addEventListener("click", function () {
  console.log("kliknuto");
  if (options.style.display == "block") {
    options.style.display = "none";
  } else {
    options.style.display = "block";
  }
});

console.log(optionsList);
var selectIndex;

for (var i = 0; i < optionsList.length; i++) {
  console.log(optionsList[i].innerHTML);
  console.log(i);
  optionsList[i].addEventListener("click", function (e) {
      
    selectIndex = this.getAttribute("data-value");

    
    selectTag.innerHTML = this.innerHTML;
    this.classList.add("custom-options--is-selected");
    console.log("kliknuto na " + this.innerHTML + " a i je " + i);

    var j;
    for (j = 0; j < optionsList.length; j++) {
        if(optionsList[j].classList.contains("custom-options--is-selected") && j != selectIndex){
            console.log("jecko je " + j + "a icko je " + i);
            optionsList[j].classList.remove("custom-options--is-selected");
        }
    }

  });



  
  
}
