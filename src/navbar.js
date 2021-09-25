document.addEventListener("DOMContentLoaded", () => {
  if(site != 'login') {
    const mediumWidth = 768;

    let navContentHandle = document.getElementsByClassName('nav-menu-container')[0];
    
    let navContentLarge = document.createElement('ul');
    navContentLarge.classList.add('navbar-nav', 'd-flex', 'flex-row');
    navContentLarge.innerHTML = '<li class="nav-item me-3"><a class="nav-link home" href="index.html">Home</a></li><li class="nav-item me-3"><a class="nav-link list" href="list-of-smart-guys.html">List of smart guys</a></li><li class="nav-item me-3"><a class="nav-link disabled" href="#">Help</a></li><li class="nav-item"><a class="nav-link" href="#" onclick="logout()">Logout</a></li>';
    
    let navContentSmall = document.createElement('div');
    navContentSmall.classList.add('pos-f-t', 'd-flex', 'flex-column', 'align-items-end');
    navContentSmall.innerHTML = '<div class="pos-f-t d-flex flex-column align-items-end"><nav class="navbar-dark bg-primary"><button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button></nav><div class="collapse mt-1" id="navbarToggleExternalContent"><div class="bg-primary p-2"><ul class="navbar-nav d-flex flex-column align-items-end mt-2"><li class="nav-item mb-2"><a class="nav-link home" href="index.html">Home</a></li><li class="nav-item mb-2"><a class="nav-link list" href="list-of-smart-guys.html">List of smart guys</a></li><li class="nav-item mb-2"><a class="nav-link disabled" href="#">Help</a></li><li class="nav-item"><a class="nav-link" href="#" onclick="logout()">Logout</a></li></ul></div></div></div>';

    window.onload = () => {
      if(window.innerWidth >= mediumWidth) {
        navContentHandle.appendChild(navContentLarge);
        navContentLarge.getElementsByClassName(site)[0].classList.add('active');
      }
      else
        navContentHandle.appendChild(navContentSmall);
        navContentSmall.getElementsByClassName(site)[0].classList.add('active');
    };

    window.addEventListener('resize', () => {
      if(window.innerWidth >= mediumWidth) {
        navContentHandle.innerHTML = '';
        navContentHandle.appendChild(navContentLarge);
        navContentLarge.getElementsByClassName(site)[0].classList.add('active');
      }
      else {
        navContentHandle.innerHTML = '';
        navContentHandle.appendChild(navContentSmall);
        navContentSmall.getElementsByClassName(site)[0].classList.add('active');
      }
    });
  }
});