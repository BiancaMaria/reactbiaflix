import React from 'react';
import Logo from '../../assets/img/Logo.png';
import {Link} from 'react-router-dom';
import {LogoImage, MenuWrapper} from './style.js';
import Button from '../Button';

function Menu(){
    return(
        <MenuWrapper className="Menu">
            <Link to="/">
                <LogoImage className="Logo" src={Logo} alt="BiaFlix Logo"/>
            </Link>

            <Button as={Link} to="/cadastro/video">
                Novo vídeo
            </Button>
        </MenuWrapper>
    );
}

export default Menu;//exporta o componente criado no caso o Menu