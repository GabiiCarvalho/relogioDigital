const horas = document.getElementById('horas');
const minutos = document.getElementById('minutos');
const segundos = document.getElementById('segundos');
const skyContainer = document.querySelector('.sky'); 

function updateClockAndScenario() {
    let dateToday = new Date();
    let hr = dateToday.getHours();
    let min = dateToday.getMinutes();
    let seg = dateToday.getSeconds();


    if (hr >= 5 && hr <= 12) {
       
        document.body.className = "morning";
    } else if (hr >= 13 && hr <= 17) {
        
        document.body.className = "afternoon";
    } else {
        
        document.body.className = "night";
    }

    saudacao.textContent = mensagem;

    
    horas.textContent = hr.toString().padStart(2, '0');
    minutos.textContent = min.toString().padStart(2, '0');
    segundos.textContent = seg.toString().padStart(2, '0');
}


function createShootingStar() {
    
    if (!document.body.classList.contains('night')) return;

    
    const star = document.createElement('div');
    star.className = 'shooting-star'; 
    
    
    const randomTop = Math.random() * 40 + 5 + "%"; 
    const randomLeft = Math.random() * 50 + 40 + "%"; 
    star.style.top = randomTop;
    star.style.left = randomLeft;

   
    const duration = Math.random() * 2 + 2; 
    star.style.animationDuration = duration + "s";

    
    skyContainer.appendChild(star);

    
    setTimeout(() => {
        star.remove();
    }, duration * 1000);
}

function triggerMeteorShower() {
    if (!document.body.classList.contains('night')) return;

    
    const numberOfStars = Math.floor(Math.random() * 3) + 1; 

    for (let i = 0; i < numberOfStars; i++) {
        
        setTimeout(createShootingStar, Math.random() * 2000); 
    }
}

// --- Execução ---
updateClockAndScenario(); 
setInterval(updateClockAndScenario, 1000); 

setInterval(triggerMeteorShower, 5000); 


setInterval(createShootingStar, 10000);

window.addEventListener('mousemove', () => {

    setTimeout(() => {
        window.close();
    }, 500);
});


window.addEventListener('keydown', () => {
    window.close();
});