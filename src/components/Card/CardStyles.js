import styled from 'styled-components';
//grid display; ::before; ::after; overflow-x: hidden => esconde la barra lateral
//
export const DivCard = styled.div`
    border-style: groove;
    border-radius: 4%;
    background-color: rgba(255,255,255,0.8);
    &button {
        background-color: gold;
    }

    @media (max-width: 360px){
        margin-top: 20px;
        .card_btn{
            display: flex;
           
        }
    }
`;