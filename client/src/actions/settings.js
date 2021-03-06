import store from "../store";
import { RULE_SAVE, CHANGE_STATE, IMAGE_LOAD, RENDER_SAVE } from "./types";

export const saveTraits = (item) => {
  store.dispatch({
    type: IMAGE_LOAD,
    payload: item,
  });
};

export const saveItem = (item) => {
  // console.log(item);
  store.dispatch({
    type: RULE_SAVE,
    payload: item,
  });
};

export const changeState = () => {
  store.dispatch({
    type: CHANGE_STATE,
    payload: true,
  });
};

export const saveRender = (render) => {
  store.dispatch({
    type: RENDER_SAVE,
    payload: render,
  });
};
