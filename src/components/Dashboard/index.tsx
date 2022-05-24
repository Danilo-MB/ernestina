import React, { useState, useEffect } from 'react';
import { Wrapper, LeftSection, RightSection, Header } from './styled';
import ProductForm from './ProductForm';
import ProductsTable from './ProductsTable';
import { Product } from '../../interfaces';
import { getProducts, getProduct } from '../../services/products';

const Dashboard: React.FC = () => {

    const [productList, setProductList] = useState([]);
    const [editingProduct, setEditingProduct] = useState({});

    useEffect(() => {
        fetchProducts();
    }, [])

    const fetchProducts = async (): Promise<Product[]> => {
        const data = await getProducts();
        setProductList(data);
        return data;
    };
    //console.log(productList)
    //console.log(editingProduct, "producto a editar")
    const getEditProduct = async (id: number): Promise<Product> => {
        const data = await getProduct(id);
        setEditingProduct(data[0]);
        return data;
    }
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
                    onEdit={(id: number) => getEditProduct(id)}
                />
            </RightSection>
        </Wrapper>
    )

};

export default Dashboard;