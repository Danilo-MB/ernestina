import React, { useState, useEffect } from 'react';
import { Wrapper } from './styled';
import Card from '../../commons/Card';
import { useAuth } from '../../context/authContext';
import { getProducts } from '../../services/products';
import { Product } from '../../interfaces';

const list = [
    {
        imageUrl: 'https://eltallerdehector.com/wp-content/uploads/2021/05/Imagenes-de-Stitch-Png-.png',
        title: 'Titulo del producto',
        description: 'Descripcion del producto',
    },
];


const Products: React.FC = () => {

    // const authContext = useAuth();
    // console.log(authContext, "el authcontext")

    const [productList, setProductList] = useState([]);

    useEffect(() => {
        fetchProducts();
    }, [])

    const fetchProducts = async (): Promise<Product[]> => {
        const data = await getProducts();
        setProductList(data);
        return data;
    };

    return (
        <Wrapper>
            {productList.map((product, index) => (
                <Card
                    key={index}
                    imageUrl={product.product_imageUrl}
                    title={product.product_title}
                    description={product.product_description}
                    addToCart={() => { console.log("Se hizo click en addToCart") }}
                    shareProduct={() => { console.log("Se hizo click en shareProduct") }}
                />))}
        </Wrapper>
    )
};

export default Products;