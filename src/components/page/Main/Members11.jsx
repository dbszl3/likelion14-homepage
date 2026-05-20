import styled from "styled-components";
import TopSection from "../TopSection/TopSection";
import { members } from "../../common/dummydata/DummyData.js";
import InfoBox from "../../common/infobox/InfoBox";
import { babymembers } from "../../common/dummydata/DummyData.js";

const Div = styled.div`
    background: var(--BG-GRAY, #FAFBF8);
`;

const Line = styled.div`
    display: flex;
    justify-content: center;
    width: 1480px;
    height: 1px;
    background: #1A1A1A;
    margin: 0 58px;
`;


const WholeContainer = styled.div`
    width: 1270px;
    height: 100%;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 128px;
    display: inline-flex;
    margin-top: 82px;
    margin-bottom: 62.5px;
`;

const ManagementTeam = styled.div`
    width: 100%;
    height: 100%;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 47px;
    display: inline-flex;
    margin-left: 85px;
`;

const ManagementP = styled.p`
    width: 100%;
    justify-content: center;
    display: flex;
    flex-direction: column;
`;

const ManagementSpan = styled.span`
    color: #1A1A1A;
    font-size: 30px;
    font-family: Pretendard;
    font-weight: 700;
    word-wrap: break-word;
`;

const ManagementMember = styled.div`
    width: 100%;
    height: 100%;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 83px;
    display: inline-flex;
`;

const RepresentContainer = styled.div`
    justify-content: flex-start;
    align-items: center;
    gap: 22px;
    display: inline-flex;
    flex-wrap: wrap;
    align-content: center;
`;

const Representative = styled.div`
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 21px;
    display: inline-flex;
`;

const TitleP = styled.p`
    width: 100%;
`;

const TitleSpan = styled.span`
    color: #1A1A1A;
    font-size: 24px;
    font-family: Pretendard;
    font-weight: 600;
    word-wrap: break-word;
`;

const ViceRepresentative = styled.div`
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 21px;
    display: inline-flex;
`;

const PoContainer = styled.div`
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 21px;
    display: inline-flex;
`;

const PoMember = styled.div`
    justify-content: flex-start;
    align-items: center;
    gap: 22px;
    display: inline-flex;
    flex-wrap: wrap;
    align-content: center;
`;

const FrontContainer = styled.div`
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 21px;
    display: inline-flex;
`;

const FrontMember = styled.div`
    justify-content: flex-start;
    align-items: center;
    gap: 22px;
    display: inline-flex;
    flex-wrap: wrap;
    align-content: center;
`;

const BackContainer = styled.div`
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 21px;
    display: inline-flex;
`;

const BackMemebr = styled.div`
    justify-content: flex-start;
    align-items: center;
    gap: 22px;
    display: inline-flex;
    flex-wrap: wrap;
    align-content: center;
`;

const BabyLion = styled.div`
    width: 100%;
    height: 100%;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 40px;
    display: inline-flex;
    margin-left: 85px;
`;

const BabyLionP = styled.p`
    width: 100%;
    justify-content: center;
    display: flex;
    flex-direction: column;
`;

const BabyLionSpan = styled.span`
    color: #1A1A1A;
    font-size: 30px;
    font-family: Pretendard;
    font-weight: 700;
    word-wrap: break-word;
`;

const BabyLionMember = styled.div`
    width: 100%;
    height: 100%;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 102px;
    display: inline-flex;
`;

const BabyPo = styled.div`
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 20px;
    display: inline-flex;
`;

const BabyP = styled.p`
    width: 100%;
`;

const BabySpan = styled.span`
    color: #1A1A1A;
    font-size: 20px;
    font-family: Pretendard;
    font-weight: 600;
    word-wrap: break-word;
`;

const BabyPoMember = styled.div`
    justify-content: flex-start;
    align-items: center;
    gap: 22px;
    display: inline-flex;
    flex-wrap: wrap;
    align-content: center;
`;

const BabyFront = styled.div`
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 22px;
    display: inline-flex;
`;

const BabyFrontMember = styled.div`
    justify-content: flex-start;
    align-items: center;
    gap: 22px;
    display: inline-flex;
    flex-wrap: wrap;
    align-content: center;
`;

const BabyBack = styled.div`
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 20px;
    display: inline-flex;
`;

const BabyBackMember = styled.div`
    justify-content: flex-start;
    align-items: center;
    gap: 22px;
    display: inline-flex;
    flex-wrap: wrap;
    align-content: center;
`;

export default function Members11() {
    return (
        <Div>
            <TopSection />
            <Line />
            <WholeContainer>
                <ManagementTeam>
                    <ManagementP><ManagementSpan>운영진</ManagementSpan></ManagementP>
                    <ManagementMember>
                        <RepresentContainer>
                            <Representative>
                                <TitleP><TitleSpan>대표</TitleSpan></TitleP>
                                {members.filter((member) => member.role === "대표").map((member) => (
                                    <InfoBox key={member.id} name={member.name} major={member.major} />
                                ))}
                            </Representative>
                            <ViceRepresentative>
                                <TitleP><TitleSpan>부대표</TitleSpan></TitleP>
                                {members.filter((member) => member.role === "부대표").map((member) => (
                                    <InfoBox key={member.id} name={member.name} major={member.major} />
                                ))}
                            </ViceRepresentative>
                        </RepresentContainer>
                        <PoContainer>
                            <TitleP><TitleSpan>PO</TitleSpan></TitleP>
                            <PoMember>
                                {members.filter((member) => member.role === "PO").map((member) => (
                                    <InfoBox key={member.id} name={member.name} major={member.major} />
                                ))}
                            </PoMember>
                        </PoContainer>
                        <FrontContainer>
                            <TitleP><TitleSpan>FRONTEND</TitleSpan></TitleP>
                            <FrontMember>
                                {members.filter((member) => member.role === "FRONTEND").map((member) => (
                                    <InfoBox key={member.id} name={member.name} major={member.major} />
                                ))}
                            </FrontMember>
                        </FrontContainer>
                        <BackContainer>
                            <TitleP><TitleSpan>BACKEND</TitleSpan></TitleP>
                            <BackMemebr>
                                {members.filter((member) => member.role === "BACKEND").map((member) => (
                                    <InfoBox key={member.id} name={member.name} major={member.major} />
                                ))}
                            </BackMemebr>
                        </BackContainer>
                    </ManagementMember>
                </ManagementTeam>
                <BabyLion>
                    <BabyLionP><BabyLionSpan>아기사자</BabyLionSpan></BabyLionP>
                    <BabyLionMember>
                        <BabyPo>
                            <BabyP><BabySpan>PO</BabySpan></BabyP>
                            <BabyPoMember>
                                {babymembers.filter((member) => member.role === "PO").map((member) => (
                                    <InfoBox key={member.id} name={member.name} major={member.major} />
                                ))}
                            </BabyPoMember>
                        </BabyPo>
                        <BabyFront>
                            <BabyP><BabySpan>FRONTEND</BabySpan></BabyP>
                            <BabyFrontMember>
                                {babymembers.filter((member) => member.role === "FRONTEND").map((member) => (
                                    <InfoBox key={member.id} name={member.name} major={member.major} />
                                ))}
                            </BabyFrontMember>
                        </BabyFront>
                        <BabyBack>
                            <BabyP><BabySpan>BACKEND</BabySpan></BabyP>
                            <BabyBackMember>
                                {babymembers.filter((member) => member.role === "BACKEND").map((member) => (
                                    <InfoBox key={member.id} name={member.name} major={member.major} />
                                ))}
                            </BabyBackMember>
                        </BabyBack>
                    </BabyLionMember>
                </BabyLion>
            </WholeContainer>
        </Div>
    );
}