import styled from "styled-components";
import tw from "twin.macro";

export const FooterStyles = {
  Container: styled.div`
    ${tw`
    flex
    flex-col
    w-full
    items-center
    justify-center
    bg-green-700
    text-white
  `};
  `,

  Top: styled.div`
    ${tw`
    flex
    p-10
    space-x-20
   `};
  `,

  Bottom: styled.div`
    ${tw`
    w-full
    flex
    flex-col
    items-center
    bg-gray-700
    p-10
    `};
  `,

  SocialMedia: styled.div`
    ${tw`
    flex
    flex-col
    items-center
  `}
  `,

  SocialMediaHeader: styled.div`
    ${tw`
    text-base
  `}
  `,

  SocialMediaLinks: styled.div`
    ${tw`
    flex
    mt-5
    text-4xl
    space-x-5
    `}
  `,

  Copyright: styled.small`
    ${tw`
    text-xs
    mt-12
  `}
  `,

  About: styled.div`
    ${tw`
    flex
    items-center
    text-justify
    mr-12
    text-sm
    max-w-xs
    `};
  `,

  Links: styled.div`
    ${tw`
    pl-5
    pr-5
  `};
  `,

  LinksCallCenter: styled.div`
    ${tw`
    flex
    items-center
  `};
  `,

  LinksCall: styled.div`
    ${tw`
    flex
    flex-col
    items-center
    mr-16
    pl-5
    pr-5
  `};
  `,

  LinksList: styled.ul``,

  LinksItem: styled.li`
    ${tw`
    mb-2
  `};
    & > a {
      ${tw`
      text-sm
     `};
    }
    &:hover {
      color: #d3d3d3;
    }
  `,

  LinksHeader: styled.h3`
    ${tw`
    text-2xl
    font-bold
    text-white
    mb-3
  `};
  `,

  LinksCallWrapper: styled.div`
    ${tw`
    flex
    items-center
  `};
  `,

  LinksCallIcon: styled.span`
    ${tw`
    w-8
    h-8
    rounded-full
    bg-red-500
    flex
    items-center
    justify-center
    text-white
    text-base
    mr-2
  `};
  `,

  LinksPhoneNumber: styled.h6`
    ${tw`
    text-sm
    text-white
  `};
  `,
};
