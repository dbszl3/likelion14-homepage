import styled from "styled-components";

import logo from "../../assets/icons/SKON.png";
import copyright from "../../assets/images/Rights.png";

const FooterContainer = styled.div`
    width: 100%;
    height: 160px;
    padding-left: 32px;
    padding-right: 32px;
    padding-top: 16px;
    padding-bottom: 16px;
    background: #F9F9F9;
    overflow: hidden;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    display: inline-flex;
`;

const Content = styled.div`
    width: 100%;
    justify-content: space-between;
    align-items: center;
    display: inline-flex;
`;

const Copyright = styled.img`
    width: 636px;
    height: 50px;
`;

const Logo = styled.img`
    width: 59px;
    height: 60px;
`;

export default function Footer() {
    return (
        <FooterContainer>
            <Content>
                <Copyright src={copyright} />
                <Logo src={logo} />
            </Content>
        </FooterContainer>
    );
}