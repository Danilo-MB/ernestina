import React from 'react';
import { Wrapper, ImageSection, DescriptionSection, Description, Title, ButtonsSection } from './styled';
import TestImage from '../../assets/images/gato.jpg';
import { IconButton } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ShareIcon from '@mui/icons-material/Share';

export type CardProps = {
    imageUrl: string;
    title: string;
    description: string;
    addToCart?: () => void;
    shareProduct?: () => void;
};

const Card: React.FC<CardProps> = (props: CardProps) => {

    const { imageUrl, title, description, addToCart, shareProduct } = props;

    return (
        <Wrapper>
            <ImageSection>
                <img src={imageUrl} width={200} height={200} />
            </ImageSection>
            <DescriptionSection>
                <Title>{title}</Title>
                <Description>{description}</Description>
            </DescriptionSection>
            <ButtonsSection>
                <IconButton onClick={addToCart}>
                    <ShoppingCartIcon />
                </IconButton>
                <IconButton onClick={shareProduct}>
                    <ShareIcon />
                </IconButton>
            </ButtonsSection>

        </Wrapper>
    )
};

export default Card;