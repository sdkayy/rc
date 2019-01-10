/* @flow */
import * as React from "react";
import { SvgWrapper, InlineSvg } from "./style";

type Props = {
  size?: number,
  tipText?: string,
  count?: number,
  height?: number,
  icon: string,
  fill?: string
};

type IconProps = {
  icon: string,
  fill?: string
};

const IconTypes = ({ icon, fill }: IconProps) => {
  switch (icon) {
    case "enter":
      return (
        <g>
          <defs>
            <path
              id="a"
              d="M7.414 21H17.76c4.512 0 8.178-3.583 8.178-7.997C25.938 8.575 22.288 5 17.75 5c-.57 0-1.03-.448-1.03-1s.46-1 1.03-1C23.43 3 28 7.474 28 13.003 28 18.518 23.414 23 17.76 23H7.414l4.293 4.293a1 1 0 0 1-1.414 1.414l-6-6a1 1 0 0 1 0-1.414l6-6a1 1 0 0 1 1.414 1.414L7.414 21z"
            />
          </defs>
          <g fill="none" fill-rule="evenodd">
            <mask id="b" fill="#fff">
              <use xlinkHref="#a" />
            </mask>
            <use fill="#000" fill-rule="nonzero" xlinkHref="#a" />
            <g fill={fill} mask="url(#b)">
              <path d="M0 0h32v32H0z" />
            </g>
          </g>
        </g>
      );
    case "caret":
      return (
        <g>
          <path d="M5.5 0L10.2631 3.75H0.73686L5.5 0Z" fill="#333333" />
        </g>
      );
    default:
      return <p>oops</p>;
  }
};

class Icon extends React.Component<Props> {
  render() {
    const { size, height, tipText, count, icon, fill } = this.props;
    return (
      <SvgWrapper
        size={size}
        tipText={tipText}
        count={count}
        height={height}
        className={"icon"}
      >
        <InlineSvg
          fillRule="evenodd"
          clipRule="evenodd"
          strokeLinejoin="round"
          strokeMiterlimit="1.414"
          xmlns="http://www.w3.org/2000/svg"
          aria-labelledby="title"
          preserveAspectRatio="xMidYMid meet"
          fit={true}
          id={icon}
        >
          <title id={`${icon}-title`}>{icon}</title>
          <IconTypes icon={icon} fill={fill ? fill : ""} />
        </InlineSvg>
      </SvgWrapper>
    );
  }
}

export default Icon;
