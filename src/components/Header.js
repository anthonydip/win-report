import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    // background-color: blue;
    display: flex;
    justify-content: center;
    gap: 20px;
    padding-top: 30px;
`;

const HeadingBtn = styled.button`
    color: white;
    border: none;
    background-color: transparent;
    font-family: Inter;
    font-weight: bold;
    font-size: 1rem;
    cursor: pointer;

    &:hover {
        color: #0088cc;
    }
`;

const Header = ({ introRef, goalRef, jobRef, conRef, ackRef }) => {
    return(
        <Container>
            <HeadingBtn onClick={() => introRef.current.scrollIntoView({ behavior: 'smooth'})}>INTRODUCTION</HeadingBtn>
            <HeadingBtn onClick={() => goalRef.current.scrollIntoView({ behavior: 'smooth'})}>GOALS</HeadingBtn>
            <HeadingBtn onClick={() => jobRef.current.scrollIntoView({ behavior: 'smooth'})}>JOB DESCRIPTION</HeadingBtn>
            <HeadingBtn onClick={() => conRef.current.scrollIntoView({ behavior: 'smooth'})}>CONCLUSION</HeadingBtn>
            <HeadingBtn onClick={() => ackRef.current.scrollIntoView({ behavior: 'smooth'})}>ACKNOWLEDGEMENTS</HeadingBtn>
        </Container>
    );
};

export default Header;