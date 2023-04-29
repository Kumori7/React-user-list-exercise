import classes from "./Button.module.css";

const Button = (props) => {
  // return button componenet
  // we will apply our own stlying and configuration options

  // we will have ability to have type of button set(from outside button component)
  // type={} will be dynamic value with props ......
  // but we will have a fall back incase value is not set ussing or operator ...
  // to use default button value if our props data fails

  // we will rerplace inbuilt button in AddUser with our custom button
  return (
    <button
      className={classes.button}
      type={props.type || "button"}
      // handler for onClick
      onClick={props.onClick}
      // we will output dynamic content for button between {}
      // we expectto get that content between the tags of our own button
      // so we use the children props
    >
      {props.children}
    </button>
  );
};

export default Button;
