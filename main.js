function toggleTheme() {
    document.body.classList.toggle("light-mode");
    
}



function imageforone() {

    document.querySelector('.imagetwotext').classList.remove('showtextfortwo');
    document.querySelector('.imagethreetext').classList.remove('showtextforthree');
    document.querySelector('.imageonetext').classList.add('showtextforone');

    

}

function imagefortwo() {

    document.querySelector('.imageonetext').classList.remove('showtextforone');
    document.querySelector('.imagethreetext').classList.remove('showtextforthree');
    document.querySelector('.imagetwotext').classList.add('showtextfortwo');

    
}

function imageforthree() {

    document.querySelector('.imagetwotext').classList.remove('showtextfortwo');
    document.querySelector('.imageonetext').classList.remove('showtextforone');
    document.querySelector('.imagethreetext').classList.add('showtextforthree');

    
}