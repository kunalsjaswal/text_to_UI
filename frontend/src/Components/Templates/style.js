import styled from "styled-components";

export const TemplateDiv = styled.div`
    width: 80%;
    margin: auto;
    height: fit-content;
    margin-top: 10px;
    background-color: white;
    border-radius: 10px;
    background:#f8ce9e;

    header{
        width: 80%;
        margin: auto;
        display: grid;
        align-items: center;
        grid-template-columns: 10% 90%;
        justify-content: space-between;
        font-family: Verdana, Geneva, Tahoma, sans-serif;
        
        h2{
            color: #404040;
        }
        .home{
            border: 2px solid #404040;
            padding: 5px 10px;
            cursor: pointer;
            border-radius: 3px;
            width: fit-content;
            transition: 0.2s;
            background-color: #404040;
            color: white;
        }
        .home:hover{
            color: #EFAF64;
            background-color: white;
        }
    }
    
    .temps{
        padding: 10px;
        gap: 20px;
    }
    .card{
        transition: 0.2s;
    }

`

export const TemplateCardDiv = styled.div`
    padding: 10px;
    border-radius: 5px;
    width: 80%;
    display: grid;
    grid-template-columns: 50% 50%;
    margin: auto;
    height: 500px;
    margin-top: 10px;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    background:white;

    
    aside.left{
        display: flex;
        justify-content: center;
        align-items: start;
        padding-top: 20px;
        img{
            width: 90%;
            border-radius: 10px;
            margin-left: 5%;
        }
    }
    aside.right{
        display: grid;
        grid-template-rows: 10% 60% 10%;
        justify-content: left;
        p{
            width: 85%;
            text-align: justify;
        }
        button{
            width: 150px;
        }
    }
    

`