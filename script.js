let btn = document.getElementById("btn");

btn.addEventListener("click",() =>{
    let randomNumber1 = Math.floor(Math.random() * 6) + 1;

    let randomImage = "dice" +  randomNumber1 + ".png";//dice1.png t0 dice6.png
    
    let image = "image/" + randomImage;
    
    let change = document.querySelectorAll("img")[0];
    
    change.setAttribute("src" , image);
    
    
    let randomNumber2 = Math.floor(Math.random() * 6) + 1;
    
    let randomImage1 = "dice" + randomNumber2 + ".png";
    
    let image1 = "image/" + randomImage1;
    
    let change1 = document.querySelectorAll("img")[1];
    
    change1.setAttribute("src" , image1);
    
    
    if(randomNumber1 > randomNumber2){
        document.querySelector("h1").innerHTML = "Player 1 wins";
    }else if(randomNumber1 == randomNumber2){
        document.querySelector("h1").innerHTML = "Draw!";
    }else{
        document.querySelector("h1").innerHTML = " Player 2 wins";
    };

});