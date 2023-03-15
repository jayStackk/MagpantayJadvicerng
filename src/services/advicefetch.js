
// /* this function will fetch a new advice slip from api*/

function FetchAdvice() {
    
    // using const number initialized by Get random int which will later on randomize the api it'll give me using the my 
    // const randomint below
    const number = getRandomInt();
    const API = `https://api.adviceslip.com/advice/${number}`

    // using document get gelement by id to target by p tags from my advice card function
    const id = document.getElementById("advice-id");
    const advice = document.getElementById("advice-quote");


    id.innerHTML = "";
    advice.innerHTML = "";
    
    fetch(API)
    .then((response) => response.json())
    .then((data) => {
        return (
            id.innerHTML = `Advice #${data.slip.id}`,
            advice.innerHTML = `"${data.slip.advice}"`
            )
        })
        .catch((err) => alert("Dont press too much"))
        
        
    }
    
    export default FetchAdvice;


    const getRandomInt = () => {
        let int = Math.floor(Math.random() * 224)
    
        while (int == 0){
            int = Math.floor(Math.random() * 224)
    
            if (int != 0){
                break;
            }
        }
    
        return int;
    }