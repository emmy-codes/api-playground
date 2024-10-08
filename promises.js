const throwButton = document.getElementById("throwPokeball").addEventListener("click", () => {
    asyncFn(6);
})

// const pokemonCatch = (id) => {

//     fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
//         .then((response) => {
//             if (!response.ok) {
//                 throw new Error("Network response error")
//             }
//             return response.json();
//         })
//         .then((data) => {
//             const pokemonImg = document.getElementById("pokemonImgDisplay");
//             pokemonImg.src = data.sprites.front_default;
//         })
// };

const asyncFn = async (id) => {
    try {
        const apiResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
        const pokemonImg = document.getElementById("pokemonImgDisplay");
        const data = await apiResponse.json();
        pokemonImg.src = data.sprites.front_default;
    } catch (error) {
        console.log("Network response error");
    };
};