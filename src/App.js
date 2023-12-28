import React, { useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { store } from './redux'
import { Provider } from "react-redux";
import { useState } from "react";
import Loading from "./components/Loading";
import RootNavigation from "./navigations/rootNavigation";

const App = () => {

  const [loading, setLoading] = useState(false)

  return (
    <Provider store={store}>
      <NavigationContainer>
        {
          loading ?
          <Loading />
          :
          <RootNavigation />
        }
      </NavigationContainer>
    </Provider>
  )
}

export default App;

