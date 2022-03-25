import React from 'react';
import { Wrapper, LeftSection, RightSection } from './styled';

const Dashboard: React.FC = () => {

    return (
        <Wrapper>
            <LeftSection>
                Left Section
            </LeftSection>
            <RightSection>
                Rigth Section
            </RightSection>
        </Wrapper>
    )

};

export default Dashboard;