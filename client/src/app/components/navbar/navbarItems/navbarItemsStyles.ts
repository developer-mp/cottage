import styled, { css } from "styled-components";
import tw from "twin.macro";

export const NavbarItemsStyles = {
  Container: styled.div`
    ${tw`
      flex
    `};
  `,

  Item: styled.div<{ menu?: any }>`
    ${tw`
      text-sm
      md:text-base
      md:mr-7
      mr-3
      cursor-pointer`};
    &:hover {
      color: #7f7f7f;
    }
    ${({ menu }) =>
      menu &&
      css`
        ${tw`
        text-white
        text-base
        mb-3
        focus:text-white
      `};
      `};
  `,
};
