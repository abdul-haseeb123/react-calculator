import { cn } from "../lib/utils";

type ButtonVariants = "primary" | "secondary" | "equals";
type ThemeVariants = "theme1" | "theme2" | "theme3";

type Props = {
  children: React.ReactNode;
  variant: ButtonVariants;
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  className?: string;
  theme: ThemeVariants;
};

const Button = ({ children, variant, onClick, className, theme }: Props) => {
  return (
    <button
      onClick={onClick}
      className={cn(
        "grid place-content-center rounded-lg  text-[2rem] font-bold shadow-md transition-colors duration-150",
        {
          "bg-lightGrayishOrange/90 text-darkGrayishBlue shadow-grayishOrange hover:bg-lightGrayishOrange":
            theme == "theme1" && variant == "primary",
          "bg-lightGrayishYellow/90 text-veryDarkGrayishYellow shadow-darkGrayishOrange hover:bg-lightGrayishYellow":
            theme == "theme2" && variant == "primary",
          "bg-violet-600 text-lightYellow shadow-magenta-vivid hover:bg-magenta-vivid":
            theme == "theme3" && variant == "primary",
          "bg-desaturatedblue-500 text-xl text-white shadow-desaturatedblue-600 hover:bg-desaturatedblue-500/90":
            theme == "theme1" && variant == "secondary",
          "bg-darkCyan text-xl text-white shadow-veryDarkCyan hover:bg-darkCyan/90":
            theme == "theme2" && variant == "secondary",
          "bg-magenta-dark text-xl text-white shadow-magenta-vivid hover:bg-magenta-vivid/80":
            theme == "theme3" && variant == "secondary",
          "bg-red  text-white shadow-darkRed hover:bg-red/90":
            theme == "theme1" && variant == "equals",
          "bg-orange text-white shadow-darkOrange hover:bg-orange/90":
            theme == "theme2" && variant == "equals",
          "bg-pureCyan text-white shadow-softCyan hover:bg-softCyan":
            theme == "theme3" && variant == "equals",
        },
        className,
      )}
    >
      {children}
    </button>
  );
};

export default Button;
