import styled from "styled-components";
import tw from "twin.macro";

export const NavbarStyles = {
  Container: styled.div`
    ${tw`
    w-full
    flex
    flex-row
    items-center
    justify-between
    my-3
    lg:pl-10
    lg:pr-10
  `};
  `,

  LogoContainer: styled.div`
    ${tw`
    flex
    items-center
  `};
  `,

  LogoImage: styled.div`
    ${tw`h-16`};
    img {
      width: auto;
      height: 100%;
    }
  `,

  LogoText: styled.div`
    ${tw`
    text-base
    md:text-xl
    font-bold
    `};
    span {
      color: #01796f;
    }
  `,
};
