import styled from "styled-components";
import { PlanetTxt } from "./Destination.Styled";

interface Styles {
    opa: string;
}


export const StyledCrew = styled.div`
    margin: 24px 0px 104px;

    hr {
        width: 327px;
        height: 1px;
        margin: 0px auto;
        border: none;
        background-color: #383B4B;

    }
`

export const Member = styled.img`
    width: 180.12px;
    height: 222px;
    margin: 32px auto 0px;
    display: block;
`

export const ChangePath = styled.div`
    display: flex;
    justify-content: center;
    gap: 16px;
    margin-top: 32px;
`

export const ChangeDiv = styled.div<Styles>`
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: white;
    opacity: ${({opa}) => opa};

`

export const Proffesion = styled.p`
    font-family: 'Bellefair', serif;
    font-weight: 400;
    font-size: 16px;
    line-height: 18.34px;
    text-align: center;
    color: white;
    opacity: 0.5;
    margin-top: 32px;
    text-transform: uppercase;
`
export const ProfName = styled(Proffesion)`
    font-size: 24px;
    line-height: 27.5px;
    margin-top: 8px;
    opacity: 1;
`

export const CrewTxt = styled(PlanetTxt)`
    margin-top: 16px;
`
