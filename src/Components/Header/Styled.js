import { styled } from "styled-components";

export const SectionHeader = styled.header`
    height: 4.5rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: #FFF4EB;

    @media (max-width: 580px) {
        display: none;
    }
`

export const LinkHeader = styled.a`
    font-size: 18px;
    font-weight: 500;
    cursor: pointer;
    text-decoration: none;
    color: #000;

    &:hover {
    text-decoration: underline;
    color: #5B8DC9;
    font-weight: 700;
    }
`;