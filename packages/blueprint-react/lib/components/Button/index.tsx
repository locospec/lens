import styles from "./styles.module.css";

export function Button(props: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  const { className, ...restProps } = props;
  console.log("Loading lib-a Button in this page in alpha 2");
  return <button className={`${className} ${styles.button}`} {...restProps} />;
}
