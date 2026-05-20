import styled from "styled-components";
import Button from "../../common/button/Button";

const WholeContainer = styled.div`
    width: 1440px;
    height: 250px;
    padding-left: 57px;
    padding-right: 57px;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 45px;
    display: inline-flex;
    margin-top: 76px;
`;

const Container = styled.div`
    padding-left: 28px;
    padding-right: 28px;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 59px;
    display: inline-flex;
`;

const Members = styled.div`
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 17px;
    display: inline-flex;
`;

const Member = styled.div`
    justify-content: center;
    align-items: center;
    display: inline-flex;
`;

const LeftSquare = styled.div`
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 53px;
    display: inline-flex;
`;

const Square = styled.div`
    width: 6px;
    height: 6px;
    background: #1A1A1A;
`;

const Content = styled.div`
    width: 128px;
    height: 59px;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 10px;
    display: inline-flex;
`;

const Frame = styled.div`
    width: 130px;
    height: 59px;
    padding-left: 18px;
    padding-right: 18px;
    padding-top: 8px;
    padding-bottom: 8px;
    outline: 2px #1A1A1A solid;
    outline-offset: -1px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    display: inline-flex;
`;

const P = styled.p`
    text-align: center;
    justify-content: center;
    display: flex;
    flex-direction: column;
`;

const Span = styled.span`
    color: #1A1A1A;
    font-size: 36px;
    font-family: Pretendard;
    font-weight: 700;
    word-wrap: break-word;
`;

const RightSquare = styled.div`
    flex-direction: column;
    justify-content: center;
    align-items: flex-end;
    gap: 53px;
    display: inline-flex;
`;

const ExplainP = styled.p`
    width: 100%;
`;

const ExplainSpan = styled.span`
    color: #1A1A1A;
    font-size: 18px;
    font-family: Pretendard;
    font-weight: 500;
    word-wrap: break-word;
`;

export default function TopSection() {
    return (
        <WholeContainer>
            <Container>
                <Members>
                    <Member>
                        <LeftSquare>
                            <Square />
                            <Square />
                        </LeftSquare>
                        <Content>
                            <Frame>
                                <P><Span>구성원</Span></P>
                            </Frame>
                        </Content>
                        <RightSquare>
                            <Square />
                            <Square />
                        </RightSquare>
                    </Member>
                    <ExplainP><ExplainSpan>서경대학교 멋쟁이사자처럼의 구성원들을 살펴보세요.</ExplainSpan></ExplainP>
                </Members>
                <Button />
            </Container>
        </WholeContainer>
    );
}