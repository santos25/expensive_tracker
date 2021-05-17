import styled from 'styled-components';

export const Container = styled.div`
  padding-bottom: 1rem;
`;

export const Text = styled.h4`
  margin: 0;
  padding-bottom: 0.3rem;
  border-bottom: 1px solid black;
`;

export const Title = styled.span`
 flex-grow: 1;
`;

export const Data = styled.ul`
  list-style-type: none;
  padding: 0;
`;

export const Item = styled.li`
  display: flex;
  padding: 0.2rem 0;
  border-left: 2px solid ${(props: {value: number}) => props.value < 0 ? 'red' : 'blue'};
  border-radius: 5px;
`;

export const Value = styled.span`
 padding: 0 0.4rem 0
`;

export const Button = styled.button`
padding: 0.2rem 0.5rem;
border: none;
border-radius: 5px;
cursor: pointer;
/* font-size: 0.3rem; */
`;
