import styles from "./styles.module.css";

export function Label(props: React.LabelHTMLAttributes<HTMLLabelElement>) {
  const { className, ...restProps } = props;

  return (
    <>
      <label
        className={`${styles.label} bp:bg-green-400 font-medium ${className}`}
        {...restProps}
      />
    </>
  );
}
