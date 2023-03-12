import styled from 'styled-components';
//grid display; ::before; ::after; overflow-x: hidden => esconde la barra lateral
// el background color cambia el color y el 0.8 indica la transparencia que tendra
export const DivCard = styled.div`
    border-style: groove;
    border-radius: 4%;
    background-color: rgba(0, 100, 0, 0.8);
   
    transition: all .2s ease-in-out;
    flex-grow: 1;
    box-shadow: 0px 1px 8px 5px #17AF22;
    
    img{
    clip-path: circle();
    max-width: 75%;
    max-height:75%; 
   
    }
    

    button {
        background-color: gold;
    }
    button:hover{
        cursor: pointer;
    };

    :hover {
        transform: scale(1.05);
        }


    @media (max-width: 360px){
        margin-top: 20px;
        .card_btn{
            display: flex;
           
        }
    }
`;
