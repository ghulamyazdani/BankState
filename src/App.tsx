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
    <div className="">
      <div className="card rounded-none">
        <h1 className="">Banker app</h1>
        <h1>{amount}</h1>
        <form onSubmit={(e) => e.preventDefault()}>
          <input
            type="number"
            onChange={(e) => setInput(e.target.value)}
            value={input}
          />

          <button
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
            onClick={() => {
              bankrupt();
              setInput("");
            }}
          >
            Bankrupt
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;
