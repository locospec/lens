import styles from "./styles.module.css";

export function Label(props: React.LabelHTMLAttributes<HTMLLabelElement>) {
  const { className, ...restProps } = props;

  console.log("Blueprint Label");

  return (
    <>
      <h1>Hello....</h1>
      <label
        className={`${styles.label} bp:bg-orange-400 font-medium ${className}`}
        {...restProps}
      />
    </>
  );
}
