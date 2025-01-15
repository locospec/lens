import styles from "./styles.module.css";

export function Button(props: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  const { className, ...restProps } = props;
  console.log("react-component-preview");
  return <button className={`${className} ${styles.button}`} {...restProps} />;
}
