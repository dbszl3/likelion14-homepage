import styled from "styled-components";
import logoUrl from "../../assets/icons/logo.png";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
    display: inline-flex;  
    width: 100%;
    height: 100%;
    background: white;
    border-bottom: 1px #1A1A1A solid;
    justify-content: space-between;
    align-items: flex-start;
`;

const LeftContainer = styled.div`
    display: flex;
    height: 76px;
    min-width: 324px;
    max-width: 408px;
    padding: 16px 0;
    justify-content: center;
    align-items: center;
    gap: 16px;
    flex: 1 0 0;
    border-right: 1px solid var(--Black, #1A1A1A);
`;

const LogoContainer = styled.div`
    justify-content: center;
    align-items: center;
    gap: 16px;
    display: inline-flex;
`;

const LogoImage = styled.img`
    width: 46px;
    height: 46px;
`;

const LogoTitle = styled.p`
    color: #1A1A1A;
    font-size: 22px;
    font-family: Pretendard;
    font-weight: 700;
    word-wrap: break-word;
`;

const RightContainer = styled.div`
    width: 616px;
    height: 100%;
    justify-content: flex-start;
    align-items: center;
    display: inline-flex;
`;

const Left = styled.div`
    width: 100%;
    height: 100%;
    padding-top: 28px;
    padding-bottom: 28px;
    border-left: 1px #1A1A1A solid;
    justify-content: center;
    align-items: center;
    gap: 48px;
    display: inline-flex;
`;

const LeftContent = styled.div`
    flex: 1 1 0;
    width: 412px;
    justify-content: space-between;
    align-items: center;
    display: flex;
`;

const P = styled.p`
    flex: 1 1 0;
    text-align: center;
    justify-content: center;    
    display: flex;
    flex-direction: column;
`;

const Option = styled.span`
    color: #1A1A1A;
    font-size: 18px;
    font-family: Pretendard;
    font-weight: 600;
    word-wrap: break-word
`;

const RightContent = styled.div`
    width: 100%;
    height: 100%;
    padding-top: 28px;
    padding-bottom: 28px;
    border-left: 1px #1A1A1A solid;
    justify-content: space-between;
    align-items: center;
    display: inline-flex;
`;

export default function Header() {

    const navigate = useNavigate();

    return (
        <Container>
            <LeftContainer>
                <LogoContainer>
                    <LogoImage src={logoUrl} />
                    <LogoTitle onClick={() => navigate("/")}>멋쟁이사자처럼 서경대학교</LogoTitle>
                </LogoContainer>
            </LeftContainer>
            <RightContainer>
                <Left>
                    <LeftContent>
                        <P><Option onClick={() => navigate("/recruit")}>지원하기</Option></P>
                        <P><Option onClick={() => navigate("/project")}>프로젝트</Option></P>
                        <P><Option onClick={() => navigate("/members")}>구성원</Option></P>
                    </LeftContent>
                </Left>
                <RightContent>
                    <P><Option onClick={() => navigate("/login")}>로그인/회원가입</Option></P>
                </RightContent>
            </RightContainer>
        </Container>
    );
}