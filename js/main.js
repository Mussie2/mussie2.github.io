window.onload = function(){
var showVideo = document.getElementById("videoa");
var butom = document.getElementById('subh');
var hiddenVi = document.getElementById('subs');
 
butom.addEventListener("click", function(){
  showVideo.style.display = "none";
  
})
hiddenVi.addEventListener("click", function(){
    showVideo.style.display = "block";
})
}
