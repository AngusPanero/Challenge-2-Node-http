const pokemonFetch = async () => {
    const url = `https://pokeapi.co/api/v2/pokemon/`
    try{
        const response = await fetch (url)
        if(!response.ok){
            throw new Error ("Error en la Solicitud", response.status)
        }

        const dataF = await response.json()
        return dataF;

    }catch(error){
        console.log("Ha surgido un error", error);
            
    }
}

export { pokemonFetch };