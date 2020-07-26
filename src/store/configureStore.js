import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
// import {devToolsEnhancer} from 'redux-devtools-extension';
import reducer from "./reducer";
import logger from "./middleware/logger";
import toast from "./middleware/toast";
import api from "./middleware/api";

export default function () {
  return configureStore({
    reducer,
    middleware: [
      ...getDefaultMiddleware(),
      // logger({ destination: "console" }),
      toast,
      api,
    ],
  });
}

// Other approach with redux-toolkit
// const store = createStore(reducer, devToolsEnhancer({ trace: true }));
// Change setiings in the redux-tool setting the path to thr project
// store.subscribe(() => console.log("The store state is changed"));
