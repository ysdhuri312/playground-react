/** @format */

const Button = ({
  lable,
  onClick,
  disabled,
}: {
  lable: string;
  onClick: () => void;
  disabled: boolean;
}) => {
  return (
    <button onClick={onClick} disabled={disabled}>
      {lable}
    </button>
  );
};

export default Button;
