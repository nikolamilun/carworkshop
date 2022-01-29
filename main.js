let mainimage = document.querySelector('#mainimage');
let imgcounter = 1;
let tajmer = setInterval(nextImage, 5000);
let rotationindexes = document.querySelectorAll('.rotation');
let src;
function rotateForward(){
    rotationindexes[imgcounter - 1].classList.remove('active');
    imgcounter++;
    if(imgcounter == 7)
        imgcounter = 1;
    rotationindexes[imgcounter - 1].classList.add('active');
    src = 'images/galerija0' + imgcounter + '.jpg';
    mainimage.classList.add('fade');
    setTimeout(function (){
        mainimage.src = src;
        mainimage.classList.remove('fade');
    }, 1300);
    
}
function rotateBackwards(){
    rotationindexes[imgcounter - 1].classList.remove('active');
    imgcounter--;
    if(imgcounter == 0)
        imgcounter = 6;
    rotationindexes[imgcounter - 1].classList.add('active');
    src = 'images/galerija0' + imgcounter + '.jpg';
    mainimage.classList.add('fade');
    setTimeout(function (){
        mainimage.src = src;
        mainimage.classList.remove('fade');
    }, 1000);
}
function nextImage(){
    clearInterval(tajmer);
    rotateForward();
    tajmer = setInterval(nextImage, 5000);
}
function prevImage(){
    clearInterval(tajmer);
    rotateBackwards();
    tajmer = setInterval(nextImage, 5000);
}