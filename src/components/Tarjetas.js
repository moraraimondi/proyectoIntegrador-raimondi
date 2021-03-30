import React from 'react';
function Tarjetas(props){
     return(
            <ul className="personajes">
                <li><img alt="" src={props.datoSerie.image}/></li>
                <li>{props.datoSerie.name}</li>
                <li>{props.datoSerie.status}</li>
                <li>{props.datoSerie.species}</li>
                <li>{props.datoSerie.origin.name}</li>

            </ul>
     )
 }
export default Tarjetas; 