import styled from "styled-components";

export const LoaderStyleDiv = styled.div`

    position:absolute;
    background:white;
    display:flex; 
    gap:20px;
    flex-direction:column;
    width:100%; 
    height:100%;
    align-items:center;
    justify-content:center;


    .img-loading{
        position: absolute;    
    }
`

export const TypingDiv = styled.div`
    border-radius: 10px;
    padding: 5px 10px;
    width: 20%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    height: 20px;
    margin-top: 20px;
    /* margin-left: 70%; */

    div{
        border-radius: 50px;
        padding: 4px;
    }
    .dot1{
        animation: dot-anim 1.2s ease-in-out 0s infinite;
    }
    .dot2{
        animation: dot-anim 1.2s ease-in-out 0.4s infinite;

    }
    .dot3{
        animation: dot-anim 1.2s ease-in-out 0.8s infinite;
    }

    @keyframes dot-anim {
        0%{
            margin-bottom: 0%;
        }
        30%{
            margin-bottom: 10px;
        }
    }
`