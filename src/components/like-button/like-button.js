let likeButtons = document.querySelectorAll('.like-button-container');
function changeValueLike(likeButtons){

function add(){
        let input = this.querySelector('.like-button')
        let value = this.querySelector('.like-button__value');
        if(input.checked){
            value.innerHTML = +value.innerHTML + 1
        }
        
    }
    function deleteLike(){
        let input = this.querySelector('.like-button')
        let value = this.querySelector('.like-button__value');
        if(!input.checked){
            value.innerHTML = +value.innerHTML - 1;
        }
        
    }
for (const button of likeButtons) {
     button.onmousedown = ()=> false
     let input = button.querySelector('.like-button')
     input.addEventListener('click', ()=>{
        let input = button.querySelector('.like-button')
        let value = button.querySelector('.like-button__value');
        if(input.checked){
            value.innerHTML = +value.innerHTML + 1
     }}, );
    
    input.addEventListener('click', ()=>{
        let input = button.querySelector('.like-button')
        let value = button.querySelector('.like-button__value');
        if(!input.checked){
            value.innerHTML = +value.innerHTML - 1;
        }
    });
}
}

changeValueLike(likeButtons)