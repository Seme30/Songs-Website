import styled from "styled-components";

export const Button = styled.button `
    border-radius: 50px;
    border: none;
    box-shadow: 0 0 10px rgba(0,0,0,0.15);
    cursor: pointer;
    font-size: 12px;
    font-weight: 700;
    padding: 15px 40px;
    margin: 20px;
    background-color: rgb(27, 151, 243);
    color: white;
    width: 180px;
    &:hover{
        opacity: 0.9;
        transform: scale(0.98);
    }
`


export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 16px;
  
`;

// export const IconButton = styled.button`

// background-color: rgb(27, 151, 243);
// color: white;
//   border: none;
//   cursor: pointer;
//   font-size: 16px;

//   &:hover {
//     color: #007bff;
//   }
// `;