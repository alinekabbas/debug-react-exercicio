import React from 'react';
import {ContainerImagemVerMais,ImgVerMais } from './styles'

function ImagemButton(props) {

    return (
        <ContainerImagemVerMais>
            <ImgVerMais src={ props.imagem } alt="logo"/>
            <p>{ props.texto }</p>
        </ContainerImagemVerMais>

    )
}

export default ImagemButton;