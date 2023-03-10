import styled from "styled-components";

export const HeaderContainer = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin-bottom: 40px
`

export const HeaderLogo = styled.img`

`
export const CustomizationWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
    @media (min-width: 360px) and (max-width: 812px) {
        gap: 8px;
}
`