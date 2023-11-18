type Props = {
  val: string;
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  className?: string;
};

const Button = ({ val, onClick, className }: Props) => {
  let cls =
    "grid place-content-center rounded-lg bg-amber-50 py-1 text-3xl font-bold text-slate-600 hover:bg-amber-200 shadow-lg shadow-slate-600 outline outline-2  outline-amber-100";

  if (className) cls += ` ${className}`;

  return (
    <button onClick={onClick} className={cls}>
      {val}
    </button>
  );
};

export default Button;
