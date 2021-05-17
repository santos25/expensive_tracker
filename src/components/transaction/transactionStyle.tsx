import styled from 'styled-components';

export const FromWrapper = styled.div``;
export const Form = styled.form`
  padding: 0.6rem 0;
`;
export const Label = styled.label`
  display: block;
  padding: 0.4rem 0;
`;
export const Input = styled.input`
  display: block;
  padding: 0.5rem 0.4rem;
  width: 100%;
  border: none;
  border-radius: 5px;

  &:focus {
    outline: none;
  }
`;

export const Text = styled.h4`
  margin: 0;
  padding-bottom: 0.3rem;
  border-bottom: 1px solid black;
`;

export const Button = styled.button`
  margin: 1rem 0;
  padding: 0.7rem 0.5rem;
  border: none;
  border-radius: 5px;
  background-color: #9c88ff;
  color: white;
  width: 100%;
  cursor: pointer;
  display: block;
`;
