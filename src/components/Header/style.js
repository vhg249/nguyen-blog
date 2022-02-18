import styled from "styled-components";
import breakpoints from "../../theme/breakpoints";

export const HeaderWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 30px 100px;
    @media ${breakpoints.sm}{
        padding: 20px;
    }

    .name{
        font-size: 22px;
        font-style: italic;
    }
    .mobile{
        display: none;
        @media ${breakpoints.sm} {
            display: block;
        }
    }
`;
export const Navbar = styled.div`
    display: flex;
    align-items: center;
    @media ${breakpoints.sm}{
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100vh;
        background-color: white;
        display: flex;
        flex-direction: column;
    }

    .item{
        font-size: 14px;
        padding: 0 10px;
        color: black;
    }
`;
export const MenuIcon = styled.img`
    display: none;
    @media ${breakpoints.sm}{
        display: block;
    }
`;
export const CloseIcon = styled.div`
    display: none;
    @media ${breakpoints.sm}{
        display: flex;
        justify-content: flex-end;
        width: 100%;
    }
    img{
        margin: 20px;
    }
`;