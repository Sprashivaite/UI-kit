let picture = document.querySelectorAll('.room-card__button-circle')

console.log(document.querySelectorAll('.room-card__button-circle'));

for (const i of picture) {
    i.addEventListener('click', ()=>{console.log('work');})
}
