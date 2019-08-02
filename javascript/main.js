
// borderBlur active
var borderBlur = document.querySelectorAll("input[type=text], input[type=tel], input[type=email]");
borderBlur.forEach(function(field){
  field.addEventListener("focus",function(){
    this.classList.add ("borderBlur");
  });
});

// remove borderBlur
var borderBlur = document.querySelectorAll("input[type=text], input[type=tel], input[type=email]");
borderBlur.forEach(function(field){
  field.addEventListener("blur",function(){
    this.classList.remove ("borderBlur");
  });
});

// Menu
// Show sticky header on click
var burguerMenu = document.getElementsByClassName("burguerMenu")[0];
burguerMenu.addEventListener("click", function(myFunction){
  var stickyHeader = document.getElementsByClassName("sticky-header")[0];
if (stickyHeader.style.display == "block"){
    stickyHeader.style.display = "none";
}else{
  stickyHeader.style.display = "block";
}
});
// Hide sticky header on click
var burguerMenu = document.getElementsByClassName("sticky-header")[0];
burguerMenu.addEventListener("click", function(myFunction){
  if (window.innerWidth>650){
    var stickyHeader = document.getElementsByClassName("sticky-header")[0];
      stickyHeader.style.display = "block";
  }else{
    var stickyHeader = document.getElementsByClassName("sticky-header")[0];
    stickyHeader.style.display = "none";
  }
});

//prevent default alert
var alertField = document.querySelectorAll("#errors");
alertField.forEach(function(field){
  field.addEventListener("click", function(){
    alert("Please insert information");
  });
});
