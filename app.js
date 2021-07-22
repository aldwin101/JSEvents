function toggle() {
    let menuBtn = document.getElementById('list');
    menuBtn.classList.toggle('revealSub');
}

function btnBckgrndClr() {
    let subBtn = document.getElementById('try');
    subBtn.style.backgroundColor = 'aqua';
}

function pressSpaceBar(event){
    if(event.keyCode == 32){
        document.querySelector('body').style.backgroundColor = 'red';
    }
    else
    alert("Wrong key. Please try again!");
}

document.getElementById('menu').addEventListener('click', toggle);
document.getElementById('try').addEventListener('mouseover', btnBckgrndClr);
document.querySelector('body').addEventListener('keyup', pressSpaceBar);
