import React from "react"

const Pokecard = ({ theID, name, type, base_experience }) => {
    const src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${theID}.png`
    return (

        <div className="pokecard">
            <h3>{name}</h3>
            <img src={src} alt='pokemon' />
            <p>Type: {type}</p>
            <p>EXP: {base_experience}</p>
        </div>
    )
}

export default Pokecard