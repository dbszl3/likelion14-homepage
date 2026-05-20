import styled from "styled-components";
import { useNavigate, useLocation } from "react-router-dom";

const Option = styled.div`
    width: 100%;
    height: 100%;
    justify-content: flex-start;
    align-items: center;
    gap: 18px;
    display: inline-flex;
    flex-wrap: wrap;
    align-content: center;
`;

const OptionBox = styled.button`
    width: 92px;
    height: 44px;
    padding-left: 23px;
    padding-right: 23px;
    padding-top: 8px;
    padding-bottom: 8px;
    background: ${(props) => props.$active ? "#C6E400" : "white"};
    outline: 2px #1A1A1A solid;
    outline-offset: -2px;
    justify-content: center;
    align-items: center;
    gap: 20px;
    display: inline-flex;
    cursor: pointer;
`;

const OptionP = styled.p`
    text-align: center;
`;

const OptionSpan = styled.span`
    color: #1A1A1A;
    font-size: 18px;
    font-family: Pretendard;
    font-weight: 500;
    word-wrap: break-word;
`;

export default function Button() {

    const navigate = useNavigate();
    const {pathname} = useLocation();

    return (
        <Option>
            <OptionBox $active={pathname === "/" || pathname === "/members"} onClick={() => navigate("/")}> 
                <OptionP><OptionSpan>14기</OptionSpan></OptionP>
            </OptionBox> 
            <OptionBox $active={pathname === "/members13"} onClick={() => navigate("/members13")}>
                <OptionP><OptionSpan>13기</OptionSpan></OptionP>
            </OptionBox>
            <OptionBox $active={pathname === "/members12"} onClick={() => navigate("/members12")}>
                <OptionP><OptionSpan>12기</OptionSpan></OptionP>
            </OptionBox>
            <OptionBox $active={pathname === "/members11"} onClick={() => navigate("/members11")}>
                <OptionP><OptionSpan>11기</OptionSpan></OptionP>
            </OptionBox>
        </Option>
    );
}