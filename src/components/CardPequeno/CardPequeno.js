import React from 'react';
import { LayoutCardPequeno, TituloCardPequeno, InfosCardPequeno, ImgCardPequeno } from "./styles"

function CardPequeno(props) {
    return (
        <LayoutCardPequeno>
            <ImgCardPequeno src={props.imagem} alt="logo" />
            <InfosCardPequeno>
                <TituloCardPequeno>{props.nome}</TituloCardPequeno>
                <p>{props.descricao}</p>
            </InfosCardPequeno>
        </LayoutCardPequeno>
    )

}

export default CardPequeno