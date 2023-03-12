import styled from 'styled-components';

export const Search = styled.div`
    
    input{
        opacity: 0.7;
        box-shadow: 0px 1px 8px 5px #17AF22;
        
    }
    
    button{
        background-color: white;
        color: black;
        border: 2px solid #4CAF50; 
        transition-duration: 0.4s;
        border-radius: 6px;
        cursor: pointer;
        box-shadow: 0px 1px 8px 5px #17AF22;
    }
    button:hover{
        background-color: #4CAF50; 
        color: white;
    }
`

export const Navigate = styled.div`
    display: flex;
    justify-content: center;
    justify-content:space-around;
    flex-wrap: wrap;
    align-content: flex-start;
    border-style: groove;
    border-radius: 4%;
    background-color: rgba(0, 100, 0, 0.8);
    color: #000066;
    
`