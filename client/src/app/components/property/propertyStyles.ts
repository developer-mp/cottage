import styled from "styled-components";
import tw from "twin.macro";
import Button from "../button/button";

export const PropertyStyles = {
  Container: styled.div`
    ${tw`
    flex
    flex-col
    items-center
    w-72
    p-5
    bg-white
    rounded-md
    shadow-md
    sm:m-3
    md:m-6
  `}
    img {
      width: 100%;
      height: 190px;
      object-fit: cover;
    } ;
  `,

  Price: styled.div`
    ${tw`
    w-full
    flex
    justify-start
    mt-3
    text-black
    text-base
  `};
  `,

  Line: styled.div`
    ${tw`
    flex
    h-0.5
    w-full
    bg-gray-500
    m-2
  `};
  `,

  Details: styled.div`
    ${tw`
    flex
    w-full
    justify-between
    mb-2
  `};
  `,

  Info: styled.span`
    ${tw`
    flex
    items-center
  `};
  `,

  Icon: styled.span`
    ${tw`
    text-gray-500
    text-sm
    m-1
  `};
  `,

  Text: styled.h6`
    ${tw`
    text-gray-500
    text-xs
  `};
  `,

  Button: styled(Button)``,
};
