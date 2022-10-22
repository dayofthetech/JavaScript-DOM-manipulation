//https://www.youtube.com/watch?v=5fb2aPlgoys&t=5204s
//1:30
//Key concepts for project
//document.getElementById
//addEventListener
//e.target
//CSS styling through JS
//CSS animation

const openBtn = document.getElementById('open-btn');
const modalContainer = document.getElementById('modal-container');
const closeBtn = document.getElementById('close-btn');

// Event listeners
openBtn.addEventListener('click', function(){

    modalContainer.style.display = 'block';
});

closeBtn.addEventListener('click', function(){
    modalContainer.style.display = 'none';
});

window.addEventListener('click', function(e){
    if (e.target === modalContainer) {
        modalContainer.style.display = 'none';
    }
});