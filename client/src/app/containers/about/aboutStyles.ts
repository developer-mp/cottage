import styled from "styled-components";
import tw from "twin.macro";

export const AboutStyles = {
  Container: styled.div`
    ${tw`
    w-full
    flex
    flex-col
    items-center
    justify-center
    pt-3
    pb-3
    pr-8
    pl-8
  `};
  `,

  Header: styled.h1`
    ${tw`
    text-4xl
    font-extrabold
  `};
  `,

  Description: styled.p`
    ${tw`
    md:max-w-2xl
    text-sm
    md:text-base
    text-gray-800
    font-normal
    mt-5
    text-justify
  `};
  `,
};
