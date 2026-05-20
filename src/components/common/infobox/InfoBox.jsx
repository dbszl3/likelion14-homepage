import styled from "styled-components";
import { management } from "../dummydata/DummyData.js";
import Profile from "../../../assets/icons/profile_icon.png";
import Profile2 from "../../../assets/icons/profile_icon2.png";

const ProfileBox = styled.div`
    width: 236px;
    height: 308px;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    display: inline-flex;
`;

const Rectangle = styled.div`
    width: 100%;
    height: 216px;
    background: #F9F9F9;
    border-left: 2px #1A1A1A solid;
    border-top: 2px #1A1A1A solid;
    border-right: 2px #1A1A1A solid;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Frame = styled.div`
    align-self: stretch;
    height: 92px;
    min-width: 236px;
    padding-left: 24px;
    padding-right: 24px;
    padding-top: 18px;
    padding-bottom: 18px;
    background: #F8FBE7;
    outline: 2px #1A1A1A solid;
    outline-offset: -2px;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 9px;
    display: flex;
`;

const NameSpan = styled.span`
    color: #1A1A1A;
    font-size: 22px;
    font-family: Pretendard;
    font-weight: 700;
    word-wrap: break-word;
`;

const MajorSpan = styled.span`
    color: #1A1A1A;
    font-size: 16px;
    font-family: Pretendard;
    font-weight: 500;
    word-wrap: break-word;
`;

const ProfileIcon = styled.img`
    width: 92px;
    height: 92px;
    position: relative;
`;

const ProfileIcon2 = styled.img`
    width: 179.99995px;
    height: 150px;
    position: absolute;
`;

export default function InfoBox({name, major}) {
    return (
        <ProfileBox>   
            <Rectangle>
                <ProfileIcon2 src={Profile2} />
                <ProfileIcon src={Profile} />
            </Rectangle>
            <Frame>
                <div><NameSpan>{name}</NameSpan></div>
                <div><MajorSpan>{major}</MajorSpan></div>
            </Frame>
        </ProfileBox>
    );
}