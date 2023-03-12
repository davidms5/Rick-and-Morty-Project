import styled from 'styled-components';
//grid display; ::before; ::after; overflow-x: hidden => esconde la barra lateral
// el background color cambia el color y el 0.8 indica la transparencia que tendra
export const DivCard = styled.div`
    border-style: groove;
    border-radius: 4%;
    background-color: rgba(0, 100, 0, 0.8);
    color: #000066;
    text-shadow: 1px 2px 3px #FFFFFF;
    transition: all .2s ease-in-out;
    flex-grow: 1;
    box-shadow: 0px 1px 8px 5px #17AF22;
    
   overflow: hidden;
    
    img{
    clip-path: circle();
    max-width: 75%;
    max-height:75%; 
   
    }
    
    .card_btn{
        display: flex;
        margin-left: 5px;
        margin-top: 5px;
    }

    button {
        background-color: gold;
        color: black;
        
        border-radius: 15px;
        transition-duration: 0.4s;
    }
    button:hover{
        cursor: pointer;
        background-color: aquamarine;
    };

    :hover {
        transform: scale(1.05);
        }

    .race{
        display: flex;
        justify-content: space-around;
        
        h2{
          border: 2px solid #17AF22;
          border-radius: 2rem;  
          padding: 5px;
          box-shadow: 2px 2px 14px 6px #17AF22;
        }
    }

    @media (max-width: 360px){
        margin-top: 20px;
        .card_btn{
            display: flex;
           
        }
    }
`;
