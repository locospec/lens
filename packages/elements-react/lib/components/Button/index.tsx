import styles from "./styles.module.css";

export function Button(props: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  const { className, ...restProps } = props;
  console.log("Loading Button in Elements-react MODIFIED LOG MESSAGE 19");
  return <button className={`${className} ${styles.button}`} {...restProps} />;
}
