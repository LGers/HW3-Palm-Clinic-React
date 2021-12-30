import React from "react";
import { StyledFooter, StyledLink } from "./AuthFooter.styles";
import { AuthFooterProps } from '../../Auth.types';

export const AuthFooter: React.FC<AuthFooterProps> =
  ({footerText, footerLink, footerLinkText}) => {

    return (
      <StyledFooter>
          {footerText}
          {footerLink ? <StyledLink to={footerLink}>{footerLinkText}</StyledLink> : null}
      </StyledFooter>
    )
}
