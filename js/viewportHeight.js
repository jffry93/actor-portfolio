//console.log(window.innerHeight);
function setDocHeight() {
  document.documentElement.style.setProperty(
    '--vh',
    `${window.innerHeight / 100}px`
  );
}

window.addEventListener('resize', function () {
  console.log('poo');
  setDocHeight();
});
window.addEventListener('orientationchange', function () {
  console.log('poop');
  setDocHeight();
});

setDocHeight();
