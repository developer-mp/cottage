import {
  faLocationDot,
  faBed,
  faBath,
  faPerson,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IProperty } from "../../../typings/property";
import { PropertyStyles } from "./propertyStyles";

const Property = (props: IProperty) => {
  const { picture, location, bedroom, bath, numSleep, price } = props;

  return (
    <PropertyStyles.Container>
      <img src={picture} alt="" />
      <PropertyStyles.Price>${price}/night</PropertyStyles.Price>
      <PropertyStyles.Line />
      <PropertyStyles.Details>
        <PropertyStyles.Info>
          <PropertyStyles.Icon>
            <FontAwesomeIcon icon={faLocationDot} />
          </PropertyStyles.Icon>
          <PropertyStyles.Text>{location}</PropertyStyles.Text>
        </PropertyStyles.Info>
        <PropertyStyles.Info>
          <PropertyStyles.Icon>
            <FontAwesomeIcon icon={faBed} />
          </PropertyStyles.Icon>
          <PropertyStyles.Text>{bedroom}</PropertyStyles.Text>
        </PropertyStyles.Info>
        <PropertyStyles.Info>
          <PropertyStyles.Icon>
            <FontAwesomeIcon icon={faBath} />
          </PropertyStyles.Icon>
          <PropertyStyles.Text>{bath}</PropertyStyles.Text>
        </PropertyStyles.Info>
        <PropertyStyles.Info>
          <PropertyStyles.Icon>
            <FontAwesomeIcon icon={faPerson} />
          </PropertyStyles.Icon>
          <PropertyStyles.Text>{numSleep}</PropertyStyles.Text>
        </PropertyStyles.Info>
      </PropertyStyles.Details>
      <PropertyStyles.Button text="Rent Now" />
    </PropertyStyles.Container>
  );
};

export default Property;
