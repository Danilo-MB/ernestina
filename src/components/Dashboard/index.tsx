import React, { useState, useEffect } from 'react';
import { Wrapper, LeftSection, RightSection, Header } from './styled';
import ProductForm from './ProductForm';
import ProductsTable from './ProductsTable';
import { Product } from '../../interfaces';
import { getProducts, getProduct, deleteProduct, updateProduct } from '../../services/products';

const Dashboard: React.FC = () => {

    const [productList, setProductList] = useState([]);
    const [editingProduct, setEditingProduct] = useState(null);

    useEffect(() => {
        fetchProducts();
    }, [])

    const fetchProducts = async (): Promise<Product[]> => {
        const data = await getProducts();
        setProductList(data);
        return data;
    };

    const getEditProduct = async (id: number): Promise<Product> => {
        const data = await getProduct(id);
        setEditingProduct(data[0]);
        return data;
    };

    const deleteSelectedProduct = async (id: number) => {
        await deleteProduct(id);
        alert("El producto se ha eliminado");
        setEditingProduct(null);
        fetchProducts();
    };

    return (
        <Wrapper>
            <LeftSection>
                <Header>Administrar Producto</Header>
                <ProductForm
                    values={editingProduct}
                    onCleanForm={() => setEditingProduct(null)}
                    onDelete={() => deleteSelectedProduct(editingProduct[0].id)}
                    onUpdateList={() => fetchProducts()}
                    onUpdate={() => setEditingProduct(null)}
                />
            </LeftSection>
            <RightSection>
                <Header>Lista de Productos</Header>
                <ProductsTable
                    list={productList}
                    onEdit={(id: number) => getEditProduct(id)}
                />
            </RightSection>
        </Wrapper>
    )

};

export default Dashboard;