import styled from "styled-components";
import tw from "twin.macro";

export const ButtonStyles = {
  Container: styled.button`
    ${tw`
    w-32
    pl-5
    pr-5
    pt-4
    pb-4
    rounded-md
    text-white
    text-xs
    font-semibold
    border-transparent
    border-2
    border-solid
    bg-green-700
    hover:bg-gray-200
    hover:text-black
    hover:border-green-700
  `};
  `,
};
