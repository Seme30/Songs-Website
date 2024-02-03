import styled from "styled-components";

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 500px;
  margin: auto;
`;

export const Label = styled.label`
  margin-bottom: 8px;
  color: #333;
`;

export const Input = styled.input`
  padding: 8px;
  margin-bottom: 16px;
  border: 1px solid #ddd;
  border-radius: 4px;
`;


export const ErrorMessage = styled.p`
  color: red;
  margin-top: -8px;
  margin-bottom: 16px;
`;