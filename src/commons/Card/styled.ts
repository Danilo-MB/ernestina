import styled from 'styled-components';
import { CardProps } from './index';

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background:rgba(247, 252, 249,0.5);
    width: 300px;
    height: 500px;
    padding-top: 20px;
    padding-left: 20px;
    padding-right: 20px;
    margin-bottom: 20px;
`;

export const ImageSection = styled.div`
    flex: 4;
`;

export const DescriptionSection = styled.div`
    flex: 3;
    flex-direction: row;
    text-align: center;
    justify-content: center;
    width: 100%;
`;

export const Title = styled.h3`
    font-size: 18px;
`;

export const Description = styled.h3`
    font-size: 14px;
`;

export const ButtonsSection = styled.div`
    flex: 1;
    flex-direction: row;
    text-align: center;
    align-items: center;
    justify-content: space-between;
    width: 100%;
`;