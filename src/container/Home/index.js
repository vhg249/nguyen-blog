import React from "react";
import { Banner, Container, Flex, HomeWrapper } from "./style";
import banner from "../../assets/images/banner.PNG"
import Search from "../../components/Search";

const Home = () => {
    return(
        <HomeWrapper>
            <Banner>
                <img src={banner} alt="banner" />
            </Banner>
            <Container>
                <Flex>
                    <p className="all">All Posts</p>
                    <div>
                        <Search/>
                    </div>
                </Flex>
            </Container>
        </HomeWrapper>
    )
}

export default Home;