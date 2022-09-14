import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    flex-direction: row;
    padding: 16px;
    align-items: center;
    background-color: #1c2023;
`;

const Signature = styled.span`
    color: #8a8a8a;
    font-weight: 300;
    min-width: 300px;
`;

const Tools = styled(Signature)`
    text-align: center;
    flex-grow: 1;
`;

const BtnContainer = styled.div`
    min-width: 300px;
    text-align: right;
`;

const ScrollBtn = styled.button`
    border: none;
    border-radius: 15px;
    width: 100px;
    height: 50px;
    background-color: #373838;
    cursor: pointer;
    color: #2671b4;
    font-weight: bold;
`

const Footer = () => {
    // Handle scroll to top button
    const handleScroll = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }

    return(
        <Container>
            <Signature>Anthony Dip, Computer Science @ UoG</Signature>
            <Tools>Made with React.js</Tools>
            <BtnContainer>
                <ScrollBtn onClick={handleScroll}>
                    Scroll to Top
                </ScrollBtn>
            </BtnContainer>
            
        </Container>
    );
};

export default Footer;