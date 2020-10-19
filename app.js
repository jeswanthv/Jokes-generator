document.querySelector(".get-jokes").addEventListener('click',getJokes);

function getJokes(e){

    const xhr = new XMLHttpRequest();

    
    xhr.open('GET','https://icanhazdadjoke.com/', true);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onload = function(){
        if(this.status === 200){
            const response = JSON.parse(this.responseText);
            
            output = `<h3>${response.joke}</h3>`
            document.querySelector(".jokes").innerHTML = output;

            
            
        }
        
    }
    xhr.send(); 
    e.preventDefault();
}