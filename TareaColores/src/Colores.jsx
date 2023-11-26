import React from "react"

const Colores= (props)=>{
    return(

        <div>
            <h1>Lista de colores</h1>
            <ul>
                {
                    props.colores.map( item =>(
                        <li>{item}</li>
                    ))

                }
            </ul>
        </div>
    )
}
export default Colores