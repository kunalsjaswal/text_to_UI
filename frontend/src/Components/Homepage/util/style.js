import styled from "styled-components";

export const NavbarDiv = styled.div`
    display: grid;
    grid-template-columns: 60% 35%;
    justify-content: space-between;
    align-items: center;
    padding-left: 20px;
    background-color: #EFAF64;

    aside.co-name{
        display: flex;
        align-items: center;
        gap: 10px;
        img {
            width: 50px; 
            background-color:white;
            border-radius: 10px;

        }
        h2 {color: white;}
    }
    ul{
        list-style-type: none;
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        li.try-free{
            border: 2px solid orange;
            padding: 5px 10px;
            border-radius:5px;
            transition: 0.3s;
            a{color: orange; transition:0.2s;}
        }
        li.try-free:hover{
            background-color: orange;
            a{color: white;}
            
        }
        a{
            color: #585857;
            text-decoration: none;
            font-weight: bold;
        }
        a:active{
            color: #1f1f1f;
        }
    }
`

export const DocsDiv = styled.div`
    margin: auto;
    margin-top: 50px;
    width: 80%;
    font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    color: #4a4948;
    h1{color: #2e2e2e;}

    main{
        p{
            font-size: 120%;
            width: 90%;
            text-align: justify;
        }
        h2{color:#2e2e2e; margin-top:40px;}
        ul{
            font-size: 110%;
            li{
                margin-top: 10px;
            }
        }
        ul.ways{
            display: grid;
            row-gap: 20px;
            margin-bottom: 50px;
        }

    }
`

export const About2Div = styled.div`
    margin-top: -20px;
    .top{
        background-color: #EFAF64;
        display: grid;
        grid-template-columns: 60% 40%;
        align-items: center;

        .intro{
            width: 80%;
            color: white;
            margin: auto;
            h1{
                font-size: 400%;
                margin-bottom: 0;
            }
        }

        .image{
            position: relative;
            display: flex;
            align-items: center;
            justify-content: center;
            .shape{
                position: absolute;
                z-index: 0;
                width: 40%;
                height: 50%;
                right: 10%;
                top: -14%;
                border-bottom-left-radius: 250px;
                border-bottom-right-radius: 250px;
                /* background: linear-gradient(to bottom ,rgba(255, 255, 255, 0), rgba(255, 255, 255, 50)); */
                background-color: rgba(255, 255, 255, 0.45);
            }
            img{
                position: relative;
                grid-column: 2 / span 2;
                width: 80%;

            }
        }

        .steps{
            width: 100%;
            margin: auto;
            margin-left: 10%;
            display: flex;
            justify-content: space-evenly;
            align-items: center;
            margin-bottom: -10%;
            margin-top: 6%;
            .card{
                /* opacity: 0.9; */
                background-color: #FAEFE3;
                width: 250px;
                height: 200px;
                padding: 10px;
                border-radius: 20px;
                color: #404040;
                transition: 0.3s;
                h3{
                    width: 90%;
                    margin-left: 5%;
                    display: flex;
                    justify-content: flex-start;
                    gap: 10px;
                    align-items: center;
                    text-align: center;
                    
                }
                p{
                    width: 90%;
                    margin: auto;
                }
            }

            .card:hover{
                scale: 1.1;
            }
        }
    }
`
