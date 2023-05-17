import "./button.scss";

export const Button = ({ onClick, name }) => {
  return <button onClick={onClick}>{name}</button>;
};
