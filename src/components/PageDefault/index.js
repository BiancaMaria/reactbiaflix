import React from 'react';
import Menu from '../Menu';
import Footer from '../Footer';
import styled from 'styled-components';

const Main = styled.main`
    background-color:var(--black);
    color:var(--white);
    flex:1;
    margin-top:90px;
    padding-top:50px;
    padding-left:5%;
    padding-right:5%;

    @media(max-width:800px){
        margin-top: 40px;
        padding-top: 10px;
    }
`;

function PageDefault({children}){//eh o componente que engloba o cabeçalho e o menu
    return (
        <>
            <Menu/>
                <Main>
                    {children}
               </Main>
            <Footer/>
        </>
    );
}

export default PageDefault;