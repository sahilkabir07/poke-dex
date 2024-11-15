const myPokemon = document.querySelector("#searchPoke");
const myButton = document.querySelector("#searchIcon");

async function checkPokemon() {
    const pokemon = myPokemon.value;
    const apiUrl = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;
    try{
        const response = await fetch (apiUrl);
        const data  = await response.json();
        console.log(data);

        document.querySelector("#pokeData h2").innerHTML = data.results.name;
        document.querySelector("#pokeData a").innerHTML = data.results.url;
    }
    catch(error){
 console.error("Error in fetching pokemon data:",error);
    }
}

myButton.addEventListener("click",()=>{
    checkPokemon();
})
//  checkPokemon();