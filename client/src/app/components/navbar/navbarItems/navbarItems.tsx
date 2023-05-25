import { NavbarItemsStyles } from "./navbarItemsStyles";
import { BurgerMenuStyles } from "../burgerMenu/BurgerMenuStyles";
import { slide as BurgerMenu } from "react-burger-menu";
import { useMediaQuery } from "react-responsive";
import { SCREENS } from "../../../responsive/screens";

const NavbarItems = () => {
  const isMobile = useMediaQuery({ maxWidth: SCREENS.sm });

  if (isMobile)
    return (
      <BurgerMenu right styles={BurgerMenuStyles}>
        <NavbarItemsStyles.Container>
          <NavbarItemsStyles.Item menu>
            <a href="https://www.google.com/">Home</a>
          </NavbarItemsStyles.Item>
          <NavbarItemsStyles.Item menu>
            <a href="https://www.google.com/">Properties</a>
          </NavbarItemsStyles.Item>
          <NavbarItemsStyles.Item menu>
            <a href="https://www.google.com/">Contact Us</a>
          </NavbarItemsStyles.Item>
        </NavbarItemsStyles.Container>
      </BurgerMenu>
    );

  return (
    <NavbarItemsStyles.Container>
      <NavbarItemsStyles.Item>
        <a href="https://www.google.com/">Home</a>
      </NavbarItemsStyles.Item>
      <NavbarItemsStyles.Item>
        <a href="https://www.google.com/">Properties</a>
      </NavbarItemsStyles.Item>
      <NavbarItemsStyles.Item>
        <a href="https://www.google.com/">Contact Us</a>
      </NavbarItemsStyles.Item>
    </NavbarItemsStyles.Container>
  );
};

export default NavbarItems;
