let photos = document.querySelectorAll(".gallery");
let bgimag = document.body.style.backgroundImage
let ctr = 0

photos.forEach((photo,idx) => {
    photo.style.left = `${idx * 100}%`
})

function nextImg(){
    console.log("function called")
    ctr++
    if(ctr === 4){
        ctr = 0
    }
    scroll();
}
function prevImg(){
    console.log("function called")
    ctr--;
    if(ctr == -4){
        ctr = 0
    }
    scroll();
}


function scroll(){
    photos.forEach((photo) => {
        photo.style.transform = `translateX(-${ctr * 100}%)`

        
    })
}