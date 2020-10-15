function hideShow(){
    const navClass = document.getElementById('nav-bar');
    const closed = document.getElementsByClassName('nav-closed');
    const open = document.getElementsByClassName('nav-open');
    if (closed.length > 0) {
        navClass.classList.remove('nav-closed');
        navClass.classList.add('nav-open');
    } else {
        navClass.classList.add('nav-closed');
        navClass.classList.remove('nav-open');
    }
}