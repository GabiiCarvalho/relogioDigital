const horas = document.getElementById('horas');
const minutos = document.getElementById('minutos');
const segundos = document.getElementById('segundos');
const skyContainer = document.querySelector('.sky'); 

function updateClockAndScenario() {
    let dateToday = new Date();
    let hr = dateToday.getHours();
    let min = dateToday.getMinutes();
    let seg = dateToday.getSeconds();

    // Atualiza a classe do corpo baseado na hora
    if (hr >= 5 && hr < 13) {
        document.body.className = "morning";
    } else if (hr >= 13 && hr < 18) {
        document.body.className = "afternoon";
    } else {
        document.body.className = "night";
    }

    // Atualiza os números do relógio
    horas.textContent = hr.toString().padStart(2, '0');
    minutos.textContent = min.toString().padStart(2, '0');
    segundos.textContent = seg.toString().padStart(2, '0');
}

// Funções dos Meteoros (Estrelas Cadentes)
function createShootingStar() {
    if (!document.body.classList.contains('night')) return;

    const star = document.createElement('div');
    star.className = 'shooting-star'; 
    
    const randomTop = Math.random() * 40 + 5 + "%"; 
    const randomLeft = Math.random() * 50 + 40 + "%"; 
    star.style.top = randomTop;
    star.style.left = randomLeft;
    star.style.display = 'block';
    star.style.opacity = '1';

    const duration = Math.random() * 2 + 2; 
    star.style.animationDuration = duration + "s";

    skyContainer.appendChild(star);

    setTimeout(() => {
        star.remove();
    }, duration * 1000);
}

function triggerMeteorShower() {
    if (document.body.classList.contains('night')) {
        const numberOfStars = Math.floor(Math.random() * 3) + 1; 
        for (let i = 0; i < numberOfStars; i++) {
            setTimeout(createShootingStar, Math.random() * 2000); 
        }
    }
}


updateClockAndScenario(); 
setInterval(updateClockAndScenario, 1000); 
setInterval(triggerMeteorShower, 5000); 


window.addEventListener('mousemove', (e) => {
    
    if (Math.abs(e.movementX) > 5 || Math.abs(e.movementY) > 5) {
        window.close();
    }
});

window.addEventListener('keydown', () => {
    window.close();
});