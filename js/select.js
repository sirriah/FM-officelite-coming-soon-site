const selectTag = document.querySelector(".custom-select");
const selectTagText = document.querySelector(".custom-select__text");
const selectAfterTag = document.querySelector(".custom-select::after");
const options = document.getElementById("custom-options");
const arrow = document.querySelector(".custom-select__arrow");
const optionsList = document.getElementById("custom-options").children;


// display the options menu
selectTag.addEventListener("click", function () {
  console.log("click on select");

    if (arrow.classList.contains('rotation')) {

    options.classList.remove('fade-in');
    options.classList.add('fade-out');
    arrow.classList.remove("rotation");
  } else {

   options.classList.remove('fade-out');
    options.classList.add('fade-in');
    arrow.classList.add("rotation");
  }
});

// add event listener for every option tag 
var selectIndex;
for (var i = 0; i < optionsList.length; i++) {
  console.log(optionsList[i].innerHTML);
  console.log(i);
  optionsList[i].addEventListener("click", function (e) {
    
    // store the index of the clicked option
    selectIndex = this.getAttribute("data-value");

    // change the text inside the select div 
    selectTagText.innerHTML = this.innerHTML;
    console.log("click on option " + this.innerHTML);
    // selected item has "is select" class
    this.classList.add("custom-options--is-selected");
    options.classList.remove('fade-in');
    options.classList.add('fade-out');
    arrow.classList.remove("rotation");
    // search what option has "is-selected" class and delete it
    var j;
    for (j = 0; j < optionsList.length; j++) {
        if(optionsList[j].classList.contains("custom-options--is-selected") && j != selectIndex){
            optionsList[j].classList.remove("custom-options--is-selected");
        }
    }

  });



  
  
}
