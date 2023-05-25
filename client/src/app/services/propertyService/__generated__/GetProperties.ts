/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetProperties
// ====================================================

export interface GetProperties_properties {
  __typename: "Property";
  id: string;
  picture: string;
  location: string;
  bedroom: number;
  bath: number;
  numSleep: number;
  price: number;
}

export interface GetProperties {
  properties: GetProperties_properties[];
}
