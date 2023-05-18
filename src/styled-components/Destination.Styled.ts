import styled from "styled-components";
import { HomeP, HomeTitle, HomeTxt } from "./Home.Styled";


interface Styles {
    color: string;
    bb: string;
}


export const StyledDestination = styled.div`
    margin: 24px 0px 57px;

    hr {
        width: 327px;
        height: 1px;
        margin: 32px auto 0px;
        border: none;
        background-color: #383B4B;

    }
`

export const PageName = styled.div`
    display: flex;
    gap: 18px;
    justify-content: center;
    align-items: center;
`

export const Number = styled(HomeP)`
    font-weight: 700;
    text-align: start;
    opacity: 0.25;
    color: white;
`


export const Begin = styled(HomeP)`
    color: white;
    text-align: start;
    text-transform: uppercase;
`

export const Planet = styled.img`
    width: 170px;
    height: 170px;
    margin: 32px auto 0px;
    display: block;
    opacity: .8;
`

export const PlanetsDiv = styled.div`
    display: flex;
    justify-content: center;
    gap: 26px;
    margin-top: 26px;
`
export const Name = styled.p<Styles>`
    font-family: 'Barlow Condensed', sans-serif;
    font-weight: 400;
    font-size: 14px;
    line-height: 16.8px;
    letter-spacing: 2.36px;
    padding-bottom: 8px;
    color: ${({color}) => color};
    border-bottom: ${({bb}) => bb};
`

export const HugeName = styled(HomeTitle)`
    font-size: 56px;
    line-height: 64.18px;
    margin-top: 20px;
    text-transform: uppercase;
`

export const PlanetTxt = styled(HomeTxt)`
    margin-top: 1px;
`

export const Dinstance = styled(Name)<Styles>`
    text-align: center;
    margin-top: 32px;

`
export const DinstP = styled(HugeName)`
    font-size: 28px;
    line-height: 32.09px;
    margin-top: 12px;
`