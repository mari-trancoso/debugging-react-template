import React from 'react';
import { Comentarios } from './styled';


export default function Comentario(props) {
    return (
        <Comentarios>
            <input placeholder="Adicionar comentario" 
            onChange={props.onChangeComentario} 
            value={props.comentario}/>
            <button onClick={props.adicionaComentario}>Comentar Post</button>
            <p>{props.comentarioDoPost}</p>
        </Comentarios>
    )
}
