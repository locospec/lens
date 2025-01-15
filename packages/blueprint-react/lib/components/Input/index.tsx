export function Input(props: React.InputHTMLAttributes<HTMLInputElement>) {
  const { className, ...restProps } = props;
  console.log("Blueprint Input");

  return <input className={`${className}`} {...restProps} />;
}
