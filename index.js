

for(let i = 0; i<document.querySelectorAll('.drum').length; i++){
    document.querySelectorAll('.drum')[i].addEventListener("click",function(){
        let audio1 = new Audio('./sounds/tom-1.mp3')
        audio1.play()
    })

}