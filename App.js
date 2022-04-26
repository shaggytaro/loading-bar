// let width=0;
// function move() {
//   for (i=width; i<width+10; i++){ document.getElementById("myBar").style.width = i + "%";
//   }
// if(width+10>100){width=80}
//   else{  width=i;
// }
//   console.log(width, "width")
// }

const clickMe = () => {
  const loadingBar = document.querySelector(".myBar");
  loadingBar.setAttribute('id', 'loading-animation');
  
}