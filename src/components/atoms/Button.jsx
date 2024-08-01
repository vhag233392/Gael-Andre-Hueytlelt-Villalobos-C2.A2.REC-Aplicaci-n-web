import styled from "styled-components";

const ButtonStyled = styled.button`

/* From https://css.glass */
background: rgba(0, 0, 0, 0.59);
border-radius: 16px;
box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
backdrop-filter: blur(8.6px);
-webkit-backdrop-filter: blur(8.6px);
border: 0px;
color: white;
width: 20vh;

&:hover{
    border: 2px solid;
    border-color: #a200ff;
}



`;

function Button({boton, onClick}){


    return(
        <ButtonStyled onClick={onClick} >{boton}</ButtonStyled>
    )
}

export default Button;