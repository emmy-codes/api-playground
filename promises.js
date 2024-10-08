const throwButton = document.getElementById("throwPokeball").addEventListener("click", () => {
    pokemonCatch(2);
})

const pokemonCatch = (id) => {

    fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
        .then((response) => {
            if (!response.ok) {
                throw new Error("Network response error")
            }
            return response.json();
        })
        .then((data) => {
            const pokemonImg = document.getElementById("pokemonImgDisplay");
            pokemonImg.src = data.sprites.front_default;
        })
};