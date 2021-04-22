import Home from "./pages/Home";

import { Switch, Route } from "react-router-dom";
import { RecordContextProvider } from "./context/record";
import NotFoundPage from "./pages/404";

export function App() {
  return (
    <RecordContextProvider>
      <Switch>
        <Route exact path={["/", "/home", "/home/*"]} component={Home} />

        <Route component={NotFoundPage} />
      </Switch>
    </RecordContextProvider>
  );
}
