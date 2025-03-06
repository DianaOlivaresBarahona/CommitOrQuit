const ButtonText = ({
  type = "button",
  onClick,
  value,
  icon,
  className,
  children,
}) => {
  return (
    <button className={className} type={type} onClick={onClick}>
      {icon && <span className="icon">{icon}</span>} {children}
      {value}
    </button>
  );
};

export default ButtonText;
