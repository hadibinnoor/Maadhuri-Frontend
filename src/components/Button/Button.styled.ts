import styled from "styled-components"

export const StyledButton = styled.button<{ color?: string }>`
    border: none;       
    text-decoration: none;
    padding: 0.5rem 3rem;
    border-radius: 30px;
    font-size: 1.1rem;
    color: ${({ theme }) => theme.text};
    background-color: ${(props) => props.color ?? 'rgb(133, 133, 133)'};

    transition: background-color 0.3s ease;

`

