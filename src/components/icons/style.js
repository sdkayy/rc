/* @flow */
import styled from "styled-components";

export const InlineSvg = styled.svg`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  height: 100%;
  width: 100%;
  color: inherit;
  fill: currentColor;
`;

export const SvgWrapper = styled.div`
  display: inline-block;
  flex: 0 0 ${props => (props.size ? `${props.size}px` : "32px")};
  width: ${props => (props.size ? `${props.size}px` : "32px")};
  height: ${props =>
    props.height ? `${props.height}` : props.size ? `${props.size}px` : "32px"};
  min-width: ${props => (props.size ? `${props.size}px` : "32px")};
  min-height: ${props =>
    props.height ? `${props.height}` : props.size ? `${props.size}px` : "32px"};
  position: relative;
  color: inherit;
`;
