import { createStore } from "redux";
import reducer from "../places/ducks/itemVisibility";

export default function initializeStore() {
  return createStore(reducer);
}