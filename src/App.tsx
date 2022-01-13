import React, { useState } from "react";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "@reduxjs/toolkit";
import { actionCreators, State } from "./state";

function App() {
  const [input, setInput] = useState("");
  console.log(input);

  const dispatch = useDispatch();
  const { depositMoney, withdrawMoney, bankrupt } = bindActionCreators(
    actionCreators,
    dispatch
  );
  const amount = useSelector((state: State) => state.bank);
  return (
    <div className="h-screen flex flex-col text-center bg-slate-100 ">
      <h1 className="text-4xl mt-9 font-anton">
        Bank
        <i className="fas fa-piggy-bank" />
        state
      </h1>
      <div className="flex justify-center flex-col text-center items-center">
        <div className="w-56 h-56 flex flex-col justify-center items-center bg-white mt-30 p-40 shadow-lg rounded-lg mt-[12rem]">
          <h1 className="font-bold text-xl text-center">Current Bal:</h1>
          <h1 className="text-2xl text">${amount}</h1>
          <form onSubmit={(e) => e.preventDefault()} className="flex flex-col">
            <input
              className="mt-4"
              type="number"
              onChange={(e) => setInput(e.target.value)}
              value={input}
            />
            <div className="w-full flex justify-between mt-3">
              <button
                className="bg-blue-500 text-white py-2 px-3 rounded-md mx-auto"
                onClick={() => {
                  if (input) {
                    depositMoney(parseInt(input));
                    setInput("");
                  }
                }}
              >
                Deposit
              </button>
              <button
                className="bg-blue-500 text-white py-2 px-3 rounded-md mx-auto ml-2"
                onClick={() => {
                  if (input) {
                    withdrawMoney(parseInt(input));
                    setInput("");
                  }
                }}
              >
                Withdraw
              </button>
              <button
                className="bg-blue-500 text-white py-2 px-3 rounded-md mx-auto ml-2"
                onClick={() => {
                  bankrupt();
                  setInput("");
                }}
              >
                Bankrupt
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
