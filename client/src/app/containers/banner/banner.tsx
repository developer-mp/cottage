import bg_image from "../../../assets/images/bg_image.jpg";
import { BannerStyles } from "./bannerStyles";

const Main = () => {
  return (
    <BannerStyles.Container>
      <BannerStyles.ImageContainer>
        <img src={bg_image} alt="" />
        <BannerStyles.Header>
          Rent the cottage of your dream
        </BannerStyles.Header>
      </BannerStyles.ImageContainer>
    </BannerStyles.Container>
  );
};

export default Main;
