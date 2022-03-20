import React from 'react';
import { MainWrapper, LeftSection, ImageWrapper, CenterSection, RightSection } from './styled';
import Button from '../../commons/Button';
import Logo from '../../assets/images/logo.jpg';

const Header: React.FC = () => {
    return (
        <MainWrapper>
            <LeftSection>
                <ImageWrapper>
                    <img src={Logo} width={80} height={80} />
                </ImageWrapper>
            </LeftSection>
            <CenterSection>
            </CenterSection>
            <RightSection>
                <Button
                    color="gray"
                    children="Productos"
                />
                <Button
                    color="gray"
                    children="Servicios"
                />
                <Button
                    color="gray"
                    children="Tu vieja"
                />
            </RightSection>
        </MainWrapper>
    )
};

export default Header;