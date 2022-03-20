import React from 'react';
import { Wrapper } from './styled';
import Card from '../../commons/Card';

const productList = [
    {
        imageUrl: 'https://eltallerdehector.com/wp-content/uploads/2021/05/Imagenes-de-Stitch-Png-.png',
        title: 'Titulo del producto',
        description: 'Descripcion del producto',
    },
    {
        imageUrl: 'https://eltallerdehector.com/wp-content/uploads/2021/05/Imagenes-de-Stitch-Png-.png',
        title: 'Titulo del producto',
        description: 'Descripcion del producto',
    },
    {
        imageUrl: 'https://eltallerdehector.com/wp-content/uploads/2021/05/Imagenes-de-Stitch-Png-.png',
        title: 'Titulo del producto',
        description: 'Descripcion del producto',
    },
    {
        imageUrl: 'https://eltallerdehector.com/wp-content/uploads/2021/05/Imagenes-de-Stitch-Png-.png',
        title: 'Titulo del producto',
        description: 'Descripcion del producto',
    }
];

const Products: React.FC = () => {
    return (
        <Wrapper>
            {productList.map((product, index) => (
                <Card
                    key={index}
                    imageUrl={product.imageUrl}
                    title={product.title}
                    description={product.description}
                    addToCart={() => { console.log("Se hizo click en addToCart") }}
                    shareProduct={() => { console.log("Se hizo click en shareProduct") }}
                />))}
        </Wrapper>
    )
};
export default Products;