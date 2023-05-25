import { useEffect, useState, useCallback } from "react";
// import { IProperty } from "../../../typings/property";
import Carousel, { Dots, slidesToShowPlugin } from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";
import { useMediaQuery } from "react-responsive";
import { Dispatch } from "redux";
import { setPropertyDeals } from "../../redux/slice";
import { useDispatch, useSelector } from "react-redux";
import { createSelector } from "reselect";
import { makeSelectPropertyDeals } from "../../redux/selectors";
import MoonLoader from "react-spinners/MoonLoader";
import Property from "../../components/property/property";
import { SCREENS } from "../../responsive/screens";
import { PropertyDealsStyles } from "./propertyDealsStyles";
import propertyService from "../../services/propertyService/propertyService";
import { GetProperties_properties } from "./../../services/propertyService/__generated__/GetProperties";

const actionDispatch = (dispatch: Dispatch) => ({
  setPropertyDeals: (properties: GetProperties_properties[]) =>
    dispatch(setPropertyDeals(properties)),
});

const stateSelector = createSelector(makeSelectPropertyDeals, (property) => ({
  property,
}));

// const wait = (timeout: number) =>
//   new Promise((resolver) => setTimeout(resolver, timeout));

const PropertyDeals = () => {
  const [current, setCurrent] = useState(0);
  const [isLoading, setLoading] = useState(false);

  const isMobile = useMediaQuery({ maxWidth: SCREENS.sm });

  const { property } = useSelector(stateSelector);
  const { setPropertyDeals } = actionDispatch(useDispatch());

  const fetchPropertyDeals = useCallback(async () => {
    setLoading(true);
    const properties = await propertyService.getProperties().catch((err) => {
      console.log("Error: ", err);
    });
    // await wait(3000);
    if (properties) setPropertyDeals(properties);
    setLoading(false);
  }, [setPropertyDeals]);

  // const testProperty: IProperty = {
  //   picture:
  //     "https://cdn.pixabay.com/photo/2016/08/11/23/48/mountains-1587287_960_720.jpg",
  //   location: "Banff, AB",
  //   bedroom: 3,
  //   bath: 2,
  //   numSleep: 5,
  //   price: 150,
  // };

  // const properties = [
  //   <Property {...testProperty} />,
  //   <Property {...testProperty} />,
  //   <Property {...testProperty} />,
  //   <Property {...testProperty} />,
  //   <Property {...testProperty} />,
  // ];

  useEffect(() => {
    fetchPropertyDeals();
  }, [fetchPropertyDeals]);

  const isEmptyPropertyDeals = !property || property.length === 0;

  const properties =
    (!isEmptyPropertyDeals &&
      property.map((property) => (
        <Property {...property} picture={property.picture} />
      ))) ||
    [];

  const numOfDots = isMobile ? property.length : Math.ceil(property.length / 3);

  return (
    <PropertyDealsStyles.Container>
      <PropertyDealsStyles.Header>
        Check out our featured cottages
        {isLoading && (
          <PropertyDealsStyles.Loading>
            <MoonLoader loading size={20} />
          </PropertyDealsStyles.Loading>
        )}
      </PropertyDealsStyles.Header>
      {!isEmptyPropertyDeals && !isLoading && (
        <PropertyDealsStyles.Wrapper>
          <Carousel
            value={current}
            onChange={setCurrent}
            slides={properties}
            plugins={[
              "clickToChange",
              {
                resolve: slidesToShowPlugin,
                options: {
                  numberOfSlides: 3,
                },
              },
            ]}
            breakpoints={{
              640: {
                plugins: [
                  {
                    resolve: slidesToShowPlugin,
                    options: {
                      numberOfSlides: 1,
                    },
                  },
                ],
              },
              900: {
                plugins: [
                  {
                    resolve: slidesToShowPlugin,
                    options: {
                      numberOfSlides: 2,
                    },
                  },
                ],
              },
            }}
          />
          <Dots value={current} onChange={setCurrent} number={numOfDots} />
        </PropertyDealsStyles.Wrapper>
      )}
    </PropertyDealsStyles.Container>
  );
};

export default PropertyDeals;
