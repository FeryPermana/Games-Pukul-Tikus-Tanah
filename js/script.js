const tanah = document.querySelectorAll('.tanah');
const tikus = document.querySelectorAll('.tikus');
const papanskor = document.querySelector('.papanskor');
const pop = document.querySelector('#pop');
const start = document.querySelector('#start');

let tanahSebelumnya;
let selesai;
let skor;

function randomTanah(tanah) {
    const t = Math.floor(Math.random() * tanah.length);
    const tRandom = tanah[t];
    if (tRandom == tanahSebelumnya) {
        randomTanah(tanah);
    }
    tanahSebelumnya = tRandom;
    return tRandom;
}

function randomwaktu(min,max){
    return Math.round(Math.random() * (max - min) + min);
}

function munculkanTikus(){
    const tRandom = randomTanah(tanah);
    const wRandom = randomwaktu(300,1000);
    tRandom.classList.add('muncul');
    

    setTimeout(() => {
        tRandom.classList.remove('muncul');  
        if (!selesai){
            
            munculkanTikus();
        }
    },wRandom);
}


function mulai() {
    
    selesai = false;
    skor = 0;
    papanskor.textContent = 0;
    munculkanTikus();
    start.play();
    setTimeout(() => {
        selesai = true;
    }, 10000);
    
}

function pukul() {
    skor++;
    this.parentNode.classList.remove('muncul');
    pop.play();
    papanskor.textContent = skor;
    

}

tikus.forEach(t => {
    t.addEventListener('click', pukul);
});