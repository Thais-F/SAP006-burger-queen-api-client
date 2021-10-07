import { BrowserRouter, Route, Switch, useHistory } from "react-router-dom";
import Login from "./pages/Login/index.js";
import signUp from "./pages/signUp/index.js";
import Menu from "./pages/Salao/index.js";
import Kitchen from "./pages/Kitchen/index.js"; 
import { PedidosProntos } from "./pages/Salao/readyOrders.js";
import PrivateRoute from "./services/PrivateRoute";
// import PublicRoute from './services/PublicRoute.js'

function App() {
  const history = useHistory()
  return (
  <BrowserRouter history={history}>
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={signUp} />
        <PrivateRoute path="/menu" component={Menu} />
        <PrivateRoute path="/kitchen" component={Kitchen} />
        <Route path="/orders" component={PedidosProntos} />
        
      </Switch>
      </BrowserRouter>
  );
}

export default App;
