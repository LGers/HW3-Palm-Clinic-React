import React from "react";
import { StyledFooter, StyledLink } from "./AuthFooter.styles";
import { AuthFooterProps } from '../../Auth.types';

export const AuthFooter: React.FC<AuthFooterProps> =
  ({footerText, footerLink, footerLinkText}) =>  (
      <StyledFooter>
          {footerText}
          {footerLink && <StyledLink to={footerLink}>{footerLinkText}</StyledLink>}
      </StyledFooter>
    )
