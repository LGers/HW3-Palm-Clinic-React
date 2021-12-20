import React from "react";
import { StyledFooter, StyledLink } from "./AuthFooter.styles";

type Props = {
    footerText: string,
    footerLink?: string
    footerLinkText?: string
}

export const AuthFooter: React.FC<Props> = ({footerText,footerLink, footerLinkText}) => {

    return (
        <StyledFooter>
            {footerText}
            {footerLink ? <StyledLink to={footerLink}>{footerLinkText}</StyledLink>: null}
        </StyledFooter>
    )
}