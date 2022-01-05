interface withdrawAction {
  type: "withdraw";
  payload: number;
}
interface depositAction {
  type: "deposit";
  payload: number;
}
interface bankruptAction {
  type: "bankrupt";
}
export type Action = withdrawAction | depositAction | bankruptAction;
