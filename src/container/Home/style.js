import styled from "styled-components";
import breakpoints from "../../theme/breakpoints";

export const HomeWrapper = styled.div``;
export const Banner = styled.div`
  padding: 30px 100px;
  @media ${breakpoints.sm} {
    padding: 20px;
  }
  img {
    width: 100%;
  }
`;
export const Container = styled.div`
  display: flex;
  justify-content: center;

  & > div {
    width: 940px;
  }
`;
export const Flex = styled.div`
    display: flex;
    justify-content: space-between;
    .all{
        font-size: 18px;
    }
`;
