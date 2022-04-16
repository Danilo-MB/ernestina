import React from 'react';
import { Wrapper, LeftSection, RightSection, Header } from './styled';
import ProductForm from './ProductForm';
import { getCategories } from '../../services/categories';

const Dashboard: React.FC = () => {

    return (
        <Wrapper>
            <LeftSection>
                <Header>Crear un producto</Header>
                <ProductForm />
            </LeftSection>
            <RightSection>
                <Header>Hacer otra cosa</Header>
            </RightSection>
        </Wrapper>
    )

};

export default Dashboard;