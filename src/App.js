import React, { useEffect } from "react";

// @ts-ignore
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";

import rootReducer from "./reducers/index";

import RootView from "./View/RootView";

//redux saga
import createSagaMiddleware from "redux-saga";
import rootSaga from "./saga/rootSaga";
import DateFnsUtils from "@date-io/date-fns";
import deLocale from "date-fns/locale/vi";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";

const sagaMiddleware = createSagaMiddleware();

let store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

function App() {
  return (
    <Provider store={store}>
      <MuiPickersUtilsProvider locale={deLocale} utils={DateFnsUtils}>
        <RootView />
      </MuiPickersUtilsProvider>
    </Provider>
  );
}

export default App;
