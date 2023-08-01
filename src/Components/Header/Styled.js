import { styled } from "styled-components";

export const SectionHeader = styled.header`
    height: 4.5rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: #FFF4EB;
`

export const LinkHeader = styled.a`
    font-size: 18px;
    font-weight: 500;
    cursor: pointer;

    &:hover {
    text-decoration: underline;
    color: #5B8DC9;
    font-weight: 700;
    }

    &:active {
    color: #5B8DC9;
    }
`;