import styled from 'styled-components';


export const PageTransition = {
    in: {
        opacity: 1,
        y: 0,
    },
    out: {
        opacity: 0,
        y: -100 ,
    }
};

export const LinksWrapper = styled.ul`
    background: #131313;
    top: 100%;
    opacity: 1;
    transition: all 0.5s ease;
    z-index: 99;
    height: 60vh;
    font-size: 1.6rem;
`