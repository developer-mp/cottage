import { NavbarStyles } from "./navbarStyles";
import Logo from "../../../../assets/images/logo.png";
import NavbarItems from "../navbarItems/navbarItems";

const Navbar = () => {
  return (
    <NavbarStyles.Container>
      <NavbarStyles.LogoContainer>
        <NavbarStyles.LogoImage>
          <img src={Logo} alt="" />
        </NavbarStyles.LogoImage>
        <NavbarStyles.LogoText>
          <span>Cottage</span>Rental
        </NavbarStyles.LogoText>
      </NavbarStyles.LogoContainer>
      <NavbarItems />
    </NavbarStyles.Container>
  );
};

export default Navbar;
