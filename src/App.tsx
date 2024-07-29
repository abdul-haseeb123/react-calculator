import Button from "./components/Button";
import { useState } from "react";
import { cn } from "./lib/utils";

const App = () => {
  const [calculation, setCalculation] = useState("");
  const [theme, setTheme] = useState<"theme1" | "theme2" | "theme3">("theme3");

  const handleThemeChange = () => {
    if (theme == "theme1") {
      setTheme("theme2");
    } else if (theme == "theme2") {
      setTheme("theme3");
    } else {
      setTheme("theme1");
    }
  };

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    let text = "";
    for (let i = 0; i < e.target.value.length; i++) {
      const char = e.target.value[i];
      if (+char) {
        text += char;
      } else if (
        char == "+" ||
        char == "-" ||
        char == "*" ||
        char == "/" ||
        char == "." ||
        char == "0"
      ) {
        text += char;
      }
    }
    console.log(text);
    setCalculation(text);
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    try {
      const result = eval(calculation);
      if (result == Infinity) {
        setCalculation("Zero Division Error");
      } else {
        setCalculation(result);
      }
      console.log(result);
    } catch (e: unknown) {
      console.log((e as Error).message);
    }
  }

  function handleClick(e: React.MouseEvent) {
    const text = e.currentTarget.textContent;
    console.log("calculation", typeof calculation);
    if (text != null) {
      if (text == "DEL") {
        setCalculation((prevText) => prevText.slice(0, prevText.length - 1));
      } else if (text == "RESET") {
        setCalculation("");
      } else if (text == "=") {
        const result = eval(calculation);
        if (result == Infinity) {
          setCalculation("Zero Division Error");
        } else {
          setCalculation(result);
        }
      } else {
        setCalculation((prevText) => (prevText += text));
      }
    }
  }

  return (
    <div
      className={cn("grid h-screen place-content-center", {
        "bg-desaturatedblue-700": theme == "theme1",
        "bg-gray-100": theme == "theme2",
        "bg-violet-950": theme == "theme3",
      })}
    >
      <div className="mx-auto flex flex-col gap-4 px-4 sm:w-2/3 sm:px-0">
        <div className="flex w-full justify-between">
          <p
            className={cn("text-2xl font-extrabold", {
              "text-white": theme == "theme1",
              " text-veryDarkGrayishYellow": theme == "theme2",
              "text-lightYellow": theme == "theme3",
            })}
          >
            calc
          </p>
          <div
            className={cn(
              "flex items-center justify-center gap-3 text-xs font-bold",
              {
                "text-white": theme == "theme1",
                "text-veryDarkGrayishYellow": theme == "theme2",
                "text-lightYellow": theme == "theme3",
              },
            )}
          >
            <span className="translate-y-2">Theme</span>
            <div className=" flex w-16 cursor-pointer flex-col  gap-1">
              <div className="flex w-full justify-around">
                <span>1</span>
                <span>2</span>
                <span>3</span>
              </div>
              <button
                className={cn("relative h-6 w-16 rounded-full", {
                  "bg-desaturatedblue-800": theme == "theme1",
                  "bg-gray-150": theme == "theme2",
                  "bg-violet-900": theme == "theme3",
                })}
                onClick={handleThemeChange}
              >
                <span
                  className={cn(
                    "absolute left-11 top-1 h-4 w-4 rounded-full bg-red transition-all duration-500",
                    {
                      "left-1 bg-red": theme == "theme1",
                      "left-[22px] bg-orange": theme == "theme2",
                      "bg-softCyan left-11": theme == "theme3",
                    },
                  )}
                ></span>
              </button>
            </div>
          </div>
        </div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            className={cn(
              "h-24 w-full rounded-lg  px-4 py-2 text-right text-5xl font-bold  caret-transparent shadow-md outline-none",
              {
                "bg-desaturatedblue-900 text-white shadow-desaturatedblue-800":
                  theme == "theme1",
                "bg-gray-50 text-veryDarkGrayishYellow shadow-gray-150":
                  theme == "theme2",
                "bg-violet-900 text-lightYellow shadow-violet-950":
                  theme == "theme3",
              },
            )}
            value={calculation}
            onChange={handleChange}
            autoFocus={true}
            onBlur={({ target }) => target.focus()}
          />
        </form>
        <div
          className={cn("grid grid-cols-4 gap-5 rounded-lg p-7", {
            "bg-desaturatedblue-800": theme == "theme1",
            "bg-gray-150": theme == "theme2",
            "bg-violet-900": theme == "theme3",
          })}
        >
          <Button onClick={handleClick} variant="primary" theme={theme}>
            7
          </Button>
          <Button onClick={handleClick} variant="primary" theme={theme}>
            8
          </Button>
          <Button onClick={handleClick} variant="primary" theme={theme}>
            9
          </Button>
          <Button onClick={handleClick} variant="secondary" theme={theme}>
            DEL
          </Button>
          <Button onClick={handleClick} variant="primary" theme={theme}>
            4
          </Button>
          <Button onClick={handleClick} variant="primary" theme={theme}>
            5
          </Button>
          <Button onClick={handleClick} variant="primary" theme={theme}>
            6
          </Button>
          <Button onClick={handleClick} variant="primary" theme={theme}>
            +
          </Button>
          <Button onClick={handleClick} variant="primary" theme={theme}>
            1
          </Button>
          <Button onClick={handleClick} variant="primary" theme={theme}>
            2
          </Button>
          <Button onClick={handleClick} variant="primary" theme={theme}>
            3
          </Button>
          <Button onClick={handleClick} variant="primary" theme={theme}>
            -
          </Button>
          <Button onClick={handleClick} variant="primary" theme={theme}>
            .
          </Button>
          <Button onClick={handleClick} variant="primary" theme={theme}>
            0
          </Button>
          <Button onClick={handleClick} variant="primary" theme={theme}>
            /
          </Button>
          <Button onClick={handleClick} variant="primary" theme={theme}>
            *
          </Button>
          <Button
            onClick={handleClick}
            className="col-span-2"
            variant="secondary"
            theme={theme}
          >
            RESET
          </Button>
          <Button
            onClick={handleClick}
            className="col-span-2"
            variant="equals"
            theme={theme}
          >
            =
          </Button>
        </div>
      </div>
    </div>
  );
};

export default App;
