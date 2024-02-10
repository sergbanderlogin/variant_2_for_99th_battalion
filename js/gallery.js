/* Gallery JS */
document.querySelectorAll('.gallery img').forEach(img => {
   img.onclick = () => {
       document.querySelector('.popUp-gallery').style.display = 'block';
       document.querySelector('.popUp-gallery img').src = img.getAttribute('src');
   }
});

document.querySelector('.popUp-gallery span').onclick = () => {
    document.querySelector('.popUp-gallery').style.display = 'none';
}
/* End of Gallery JS*/