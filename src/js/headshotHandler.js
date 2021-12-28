//NEW LOGIC
//GETTING THE PARENT SO I CAN GET DATA FROM ALL NODES
const selectHeadshotHandler = (pooPoo) => {
  let largeHeadshot = document.getElementsByClassName('main-img-container')[0];

  //MAKE LARGE IMAGE THE SMALL IMAGE CLICKED ON
  largeHeadshot.childNodes[1].src = pooPoo.childNodes[3].src;
  //ADD AND REMOVE SELECTED STYLE CLASS
  const mainNode = document.getElementsByClassName('small-img-border');
  //Make HTMLCollection an array
  let arr = [...mainNode];
  //console.log(arr);
  //Loop through array and remove active class
  arr.forEach(function (img) {
    //console.log(img.childNodes[1].childNodes[1]);
    img.childNodes[1].childNodes[1].classList.remove('active');
  });
  //ADD ACTIVE CLASS TO ELEMENT CLICKED
  pooPoo.classList.add('active');
};

//CLICK ON FIRST HEADSHOT IMAGE
window.setTimeout(clickit, 0);

function clickit() {
  document.getElementById('click-on-load').click();
}
