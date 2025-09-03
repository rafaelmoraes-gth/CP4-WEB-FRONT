import { useState } from "react";

export default function Calculator() {
  const [input, setInput] = useState("");

  const handleClick = (value) => {
    setInput((prev) => prev + value);
  };

  const handleClear = () => {
    setInput("");
  };

  const handleResult = () => {
    try {
      setInput(eval(input).toString()); // cuidado: eval é simples, mas não seguro em produção
    } catch {
      setInput("Erro");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900">
      <div className="bg-gray-800 p-6 rounded-2xl shadow-lg w-80">
        <h1 className="text-2xl font-bold text-white mb-4 text-center">Calculadora</h1>
        <div className="bg-black text-white p-3 rounded-lg mb-4 text-right text-xl h-12 flex items-center justify-end">
          {input || "0"}
        </div>
        <div className="grid grid-cols-4 gap-3">
          {["7","8","9","/","4","5","6","*","1","2","3","-","0",".","=","+"].map((item) => (
            <button
              key={item}
              onClick={() => item === "=" ? handleResult() : handleClick(item)}
              className="bg-gray-700 hover:bg-gray-600 text-white font-bold py-3 rounded-lg"
            >
              {item}
            </button>
          ))}
          <button
            onClick={handleClear}
            className="col-span-4 bg-red-600 hover:bg-red-500 text-white font-bold py-3 rounded-lg"
          >
            Limpar
          </button>
        </div>
      </div>
    </div>
  );
}
