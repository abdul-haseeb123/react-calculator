import Button from "./components/Button";
import { useState } from "react";

const App = () => {
  const [calculation, setCalculation] = useState("");

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
      setCalculation(result);
      console.log(result);
    } catch (e: unknown) {
      console.log((e as Error).message);
    }
  }

  function handleClick(e: React.MouseEvent) {
    const text = e.currentTarget.textContent;
    if (text != null) {
      if (text == "DEL") {
        setCalculation(
          (prevText) => (prevText = prevText.slice(0, prevText.length - 1)),
        );
      } else {
        setCalculation((prevText) => (prevText += text));
      }
    }
  }

  return (
    <div className="grid h-screen place-content-center bg-slate-700">
      <div className="mx-auto flex w-2/3 flex-col gap-4">
        <div className="flex w-full justify-between">
          <p className="text-2xl font-extrabold text-white">calc</p>
          <button className="font-bold text-white">Theme</button>
        </div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            className="h-24 w-full rounded-lg bg-slate-900 px-4 py-2 text-right text-5xl font-bold text-white caret-transparent focus:shadow-md  focus:shadow-gray-800 focus:outline-none"
            value={calculation}
            onChange={handleChange}
            autoFocus={true}
            onBlur={({ target }) => target.focus()}
          />
        </form>
        <div className="grid grid-cols-4 gap-5 rounded-lg bg-slate-800 p-7">
          <Button val={"7"} onClick={handleClick} />
          <Button val={"8"} onClick={handleClick} />
          <Button val={"9"} onClick={handleClick} />
          <Button
            val={"DEL"}
            onClick={handleClick}
            className="bg-slate-700 text-lg text-slate-50 shadow-none outline-slate-600 hover:bg-slate-600"
          />
          <Button val={"4"} onClick={handleClick} />
          <Button val={"5"} onClick={handleClick} />
          <Button val={"6"} onClick={handleClick} />
          <Button val={"+"} onClick={handleClick} />
          <Button val={"1"} onClick={handleClick} />
          <Button val={"2"} onClick={handleClick} />
          <Button val={"3"} onClick={handleClick} />
          <Button val={"-"} onClick={handleClick} />
          <Button val={"."} onClick={handleClick} />
          <Button val={"0"} onClick={handleClick} />
          <Button val={"/"} onClick={handleClick} />
          <Button val={"*"} onClick={handleClick} />
          <Button
            val={"RESET"}
            onClick={handleClick}
            className="col-span-2 bg-slate-700 text-lg text-slate-50 shadow-none outline-slate-600 hover:bg-slate-600"
          />
          <Button
            val={"="}
            onClick={handleClick}
            className="col-span-2 bg-red-600 text-slate-50 shadow-none outline-red-400 hover:bg-red-500"
          />
        </div>
      </div>
    </div>
  );
};

export default App;
