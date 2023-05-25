import styled from "styled-components";
import tw from "twin.macro";

export const PropertyDealsStyles = {
  Container: styled.div`
    ${tw`
    w-full
    flex
    flex-col
    items-center
    justify-center
    pr-4
    pl-4
    md:pl-0
    md:pr-0
    mb-10
  `};
  `,

  Header: styled.h2`
    ${tw`
    text-4xl
    text-black
    font-extrabold
    mt-5
  `};
  `,

  Wrapper: styled.div`
    ${tw`
    max-w-screen-lg
    flex
    flex-wrap
    justify-center
    mt-3
    md:mt-5
  `};
  `,

  Loading: styled.div`
    ${tw`
    w-full
    mt-9
    flex
    justify-center
    items-center
    text-base
    text-black
  `};
  `,
};
