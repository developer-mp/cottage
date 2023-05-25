import PropertyDeals from "../propertyDeals/propertyDeals";
import Banner from "../banner/banner";
import Footer from "../../components/footer/footer";
import Navbar from "../../components/navbar/navbar/navbar";
import BookPane from "../../components/bookPane/bookPane";
import About from "../about/about";
import { MainStyles } from "./mainStyles";

export function HomePage() {
  return (
    <MainStyles.Container>
      <Navbar />
      <Banner />
      <BookPane />
      <About />
      <PropertyDeals />
      <Footer />
    </MainStyles.Container>
  );
}
