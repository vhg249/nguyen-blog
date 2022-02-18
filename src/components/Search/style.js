import styled from "styled-components";

export const SearchWrapper = styled.div`
    ${(props) => props.show && "border-bottom: 1px solid black;"}
    display: flex;
    align-items: center;
    padding-bottom: 5px;
    img{
        width: 20px;
        cursor: pointer;
    }
    input{
        border: none;
        background-color: transparent;
        margin: 0 10px;
        &:focus{
            outline: none;
        }
    }
`;