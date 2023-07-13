import classes from "./Button.module.css";

type ButtonProps = {
  children: React.ReactNode;
}

export const Button = ({ children }: ButtonProps) => {
  return <button className={classes.button}>
    {children}
  </button>;
}

