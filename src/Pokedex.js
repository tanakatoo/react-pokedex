import React from "react"
import Pokecard from './Pokecard'

const Pokedex = (props) => {
    console.log(props.theList)
    return (
        <div className="pokedex">
            {props.theList.map(p => <Pokecard key={p.id} name={p.name} type={p.type} base_experience={p.base_experience} theID={p.id} />)}
        </div>
    )
}

export default Pokedex;