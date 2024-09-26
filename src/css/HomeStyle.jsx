import styled from 'styled-components'

export const HomeStyle = styled.section`

:root{
    --color1:#fff;
    --color2:#000;
    --color3:blue;
    --color4:rgb(29,216,29);
    --color5:yellow;
    --color6:#ccc;
    --gradient:linear-gradient(45deg,
        hsl(240, 81%, 23%) 0%,
        hsl(284deg 16% 21%) 9%,
        hsl(325, 84%, 7%) 33%,
        hsl(348deg 19% 33%) 62%,
        hsl(7deg 19% 38%) 80%,
        hsl(22, 68%, 7%) 90%,
        hsl(35deg 20% 44%) 96%,
        hsl(55deg 15% 47%) 100%);
}
h1{
    text-align: center;
    background-color:#0f172a ;
    text-shadow: 0 0 10px black,0 0 5px black, 0 0 2px black;
    color:white;
}

.slideshow{
   display:flex;
   justify-content: center;
   align-itens: center;
   width: 100%;
   height: 700px;
   padding: 25px;
}
   section{
    background-color: #ccc;
   }
    
   
   `