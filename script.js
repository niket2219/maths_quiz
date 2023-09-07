let a=Math.floor(Math.random()*100+1)

let b=Math.floor(Math.random()*100+1)

document.getElementById('n1').value=a;
document.getElementById('n2').value=b;

let ans=a+b;

    let quizmath= function(){
        let answ = document.getElementById('answer').value;
        if(answ==ans){
            alert("Wohoo You have entered the correct answer...")
        }
        else{
            alert("Bad Luck!!!!try again")
        }
answ = document.getElementById('answer').value=""
a=Math.floor(Math.random()*100+1)

b=Math.floor(Math.random()*100+1)

document.getElementById('n1').value=a;
document.getElementById('n2').value=b;

ans=a+b;
    }



