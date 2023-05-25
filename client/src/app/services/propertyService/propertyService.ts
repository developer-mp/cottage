import { apolloClient } from "../../graphql";
import { GET_ALL_PROPERTIES } from "./queries";
import { GetProperties_properties } from "./__generated__/GetProperties";

class PropertyService {
  public async getProperties(): Promise<GetProperties_properties[]> {
    const response = await apolloClient
      .query({ query: GET_ALL_PROPERTIES })
      .catch((err: any) => {
        throw err;
      });

    if (response && response.data && response.data.properties)
      return response.data.properties as GetProperties_properties[];
    return [];
  }
}

export default new PropertyService();
