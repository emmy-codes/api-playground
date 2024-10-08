const pokemonCatch = (id) => {

    fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
        .then((response) => {
            if (!response.ok) {
                throw new Error("Network response error")
            }
            return response.json();
        })
        .then((data) => {
            const pokemonChosen = data.species.name
            console.log("The Pokemon you have chosen is: " + pokemonChosen)
        })
};

pokemonCatch(2)