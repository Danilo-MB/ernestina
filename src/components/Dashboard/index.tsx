import React, { useState, useEffect } from 'react';
import { Wrapper, LeftSection, RightSection, Header } from './styled';
import ProductForm from './ProductForm';
import ProductsTable from './ProductsTable';
import { Product } from '../../interfaces';
import { getProducts } from '../../services/products';

const Dashboard: React.FC = () => {

    const [productList, setProductList] = useState([]);

    useEffect(() => {
        fetchProducts();
    }, [])

    const fetchProducts = async (): Promise<Product[]> => {
        const data = await getProducts();
        setProductList(data);
        return data;
    };
    //console.log(productList)
    return (
        <Wrapper>
            <LeftSection>
                <Header>Crear un producto</Header>
                <ProductForm />
            </LeftSection>
            <RightSection>
                <Header>Editar un Producto</Header>
                <ProductsTable
                    list={productList}
                // onClick={() => console.log('click')}
                />
            </RightSection>
        </Wrapper>
    )

};

export default Dashboard;