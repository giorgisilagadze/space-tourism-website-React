import styled from "styled-components";

interface Styles {
    bg: string;
    color: string;
    border: string;
}

export const StyledTech = styled.div`
    margin: 24px 0px 56px;
`

export const VehicleImg = styled.img`
    width: 375px;
    height: 170px;
    margin: 32px auto 0px;
    display: block;
`

export const ChangeDiv = styled.div<Styles>`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    border: ${({border}) => border};
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${({bg}) => bg};
    color: ${({color}) => color};
`

export const Termp = styled.p`
    font-family: 'Barlow Condensed', sans-serif;
    font-weight: 400;
    font-size: 14px;
    line-height: 16.8px;
    letter-spacing: 2.36px;
    text-align: center;
    color: #D0D6F9;
    margin-top: 26px;
`