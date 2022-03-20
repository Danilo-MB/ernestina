import styled from 'styled-components';

export const MainWrapper = styled.div`
    display: flex;
    flex-direction: row;
    height: 100px;
    width: 100%;
    align-items: center;
/*     background-color: white;
    opacity: 0.3; */
`;

export const LeftSection = styled.div`  
    display: flex;
    flex-direction: row;
    flex: 2;
    padding-left: 20px;
    justify-content: left;
    align-items: center;
`;

export const ImageWrapper = styled.div`
    
`;

export const CenterSection = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    flex: 5;
`;

export const RightSection = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: right;
    flex: 4;
    padding-right: 30px;
`;