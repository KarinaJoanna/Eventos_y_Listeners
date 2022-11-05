let images = document.querySelectorAll('.img');

console.log(images);

document.getElementsByClassName('img').scr = 'https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png';
document.getElementsByClassName('img').style.top = '4px';
document.getElementsByClassName('img').style.left = '4px';
document.getElementsByClassName('img').style.display = 'block';
document.getElementsByClassName('img').style.visibility = 'visible';

images.addEventListener('mouseover', function() {
    images.style.width = '50px';
    images.style.height = '50px';
});