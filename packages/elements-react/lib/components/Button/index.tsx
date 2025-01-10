import styles from "./styles.module.css";

export function Button(props: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  const { className, ...restProps } = props;
  console.log("Loading Button in Elements-react");
  return <button className={`${className} ${styles.button}`} {...restProps} />;
}
