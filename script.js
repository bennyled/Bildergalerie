let images = ['./img/1.jpg', './img/2.jpg', './img/3.jpg', './img/4.jpg', './img/5.jpg', './img/6.jpg', './img/7.jpg', './img/8.jpg', './img/9.jpg', './img/10.jpg', './img/11.jpg']


function init(){
    loadHeader();
    render();
}


function loadHeader(){
    
}


function render(){
 
    let imageBox = document.getElementById('imagebox');
    for (let i = 0; i < images.length; i++){
        const image = images[i];
        imageBox.innerHTML += `
        <div class="thumbnailbox" onclick="showPicture(${i})">
        <img src="${images[i]}" class="thumbnail">
        </div>`;
    }
}

function showPicture(i){
    togglePicture();
    let image = images[i]; 
    
    document.getElementById('openImageBox').innerHTML = `

    <div class="open-image" onclick="togglePicture()">
    ${generateLeftArrow(i)}
    <img src="${image}" >
    ${generateRightArrow(i)}
    </div>`;
}


function generateLeftArrow(i){
    if(i > 0){
        return `<div class="arrow left-arrow" id="leftArrow" onclick="showPreviousPicture(${i})"><img src="./icons/arrowleft.png"></div>`;
    }
    return '';
}


function generateRightArrow(i){
   
   return `<div class="arrow right-arrow" id="rightArrow" onclick="showNextPicture(${i})">
   <img src="./icons/arrowright.png">
   </div>`;

}

function togglePicture(){
    document.getElementById('openImageBox').classList.toggle('d-none');
}


function showNextPicture(currentIndex) {
    if (currentIndex < images.length - 1) {
        showPicture(currentIndex + 1);
    }
}


function showPreviousPicture(currentIndex){
    if(currentIndex > 0){
        showPicture(currentIndex -1);
    }
    
}