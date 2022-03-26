import React from 'react';
import { Wrapper, LeftSection, RightSection, Header } from './styled';
import ProductForm from './ProductForm';

const Dashboard: React.FC = () => {

    return (
        <Wrapper>
            <LeftSection>
                <Header>Crear un producto</Header>
                <ProductForm />
            </LeftSection>
            <RightSection>
                Rigth Section
            </RightSection>
        </Wrapper>
    )

};

export default Dashboard;