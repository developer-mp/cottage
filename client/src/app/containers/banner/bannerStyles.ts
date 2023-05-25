import styled from "styled-components";
import tw from "twin.macro";

export const BannerStyles = {
  Container: styled.div`
    ${tw`
  mt-3
  `};
  `,

  ImageContainer: styled.div`
    ${tw`
  relative
   `};
  `,

  Header: styled.h1`
    ${tw`
  absolute
  top-0
  font-bold
  text-4xl
  mt-8
  ml-8
`};
  `,
};
