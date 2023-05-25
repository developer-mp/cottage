import styled, { css } from "styled-components";
import tw from "twin.macro";
import Calendar from "react-calendar";
import { SCREENS } from "../../responsive/screens";

export const BookPaneStyles = {
  Container: styled.div`
    ${tw`
    m-5
    shadow-md
    flex
    justify-center
    items-center
    rounded-md
    bg-white
    pt-5
    pb-5
    pl-10
    pr-10
  `};
  `,

  Item: styled.div`
    ${tw`flex 
    relative
    mr-5
    border-2
    rounded-md
    p-3 
    `};
  `,

  Icon: styled.span`
    ${tw`
    text-red-500
      fill-current
      text-xs
      md:text-base
      mr-1
      md:mr-3
  `};
  `,

  Caret: styled.span`
    ${tw`
    text-gray-500
    fill-current
    text-xs
    md:text-base
    ml-1
  `};
  `,

  Header: styled.span`
    ${tw`
    text-gray-600
    text-xs
    md:text-sm
    cursor-pointer
  `};
  `,

  Calendar: styled(Calendar)`
    position: absolute;
    max-width: none;
    top: 2em;
    left: 0;
    ${({ offset }: any) =>
      offset &&
      css`
        left: -6em;
      `};
    @media (min-width: ${SCREENS.md}) {
      top: 3.5em;
      left: -2em;
    }
  ` as any,
};
