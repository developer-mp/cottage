import { ButtonStyles } from "./buttonStyles";

interface IButtonProps {
  text: string;
}

const Button = (props: IButtonProps) => {
  const { text } = props;
  return <ButtonStyles.Container>{text}</ButtonStyles.Container>;
};

export default Button;
