import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    margin: 40px;
    padding: 30px;
    background:rgba(205,206,255,0.1);
    height: 600px;
`;

export const LeftSection = styled.div`
    display: flex;
    flex-direction: column;
    width: 48%;
    background:rgba(205,206,255,0.5);
    align-items: center;
    padding: 10px;
    height: 550px;
`;

export const RightSection = styled.div`
    display: flex;
    flex-direction: column;
    width: 48%;
    background:rgba(205,206,255,0.5);
    align-items: center;
    padding: 10px;
    height: 550px;
`;

export const Header = styled.h3`
    font-size: 18px;
    font-weight: 500;
`;