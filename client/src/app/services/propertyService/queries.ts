import gql from "graphql-tag";

export const GET_ALL_PROPERTIES = gql`
  query GetProperties {
    properties {
      id
      picture
      location
      bedroom
      bath
      numSleep
      price
    }
  }
`;
