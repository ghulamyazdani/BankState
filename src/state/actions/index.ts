import { ActionType } from "../action-types";

interface withdrawAction {
  type: ActionType.WITHDRAW;
  payload: number;
}
type depositAction = {
  type: ActionType.DEPOSIT;
  payload: number;
};
interface bankruptAction {
  type: ActionType.BANKRUPT;
}
export type Action = withdrawAction | depositAction | bankruptAction;
