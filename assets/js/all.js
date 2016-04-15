function init() {
  // funciton to control the header menu
  var menuBtn = document.getElementById('menu-btn');
  var headerNav = document.getElementById('header-nav');
  menuBtn.addEventListener('click', function(e) {
    e.preventDefault();
    headerNav.classList.toggle('open');
  });

}

window.onload = init();
