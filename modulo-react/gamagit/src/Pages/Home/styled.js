import styled from "styled-components";

export const input = styled.input`
    border: 1px solid #ddd;
    height: 2rem;
    padding: 0 .5rem;
    border-radius: 0.25rem 0 0 .25rem;

    &:focus,
    &:active {
        outline: none;
        box-shadow: none;
    }
`

export const button = styled.button`
    height: 2rem;
    border: 1px solid #000;
    background: #000;
    color: #fff;
    border-radius: 0 .25rem .25rem 0;
    cursor: pointer;

    &:focus,
    &:active {
        outline: none;
        box-shadow: none;
    }
`

export const HomeContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
`

export const content = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const errorMsg = styled.span`
    display: block;
    font-size: 2.65rem;
    color: red;
    font-weight: 600;
    margin-top: 1rem;
`