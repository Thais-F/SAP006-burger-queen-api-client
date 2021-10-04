import { BrowserRouter, Route, Switch, useHistory } from "react-router-dom";
import Login from "./pages/Login/index.js";
import signUp from "./pages/signUp/index.js";
import Menu from "./pages/Salao/index.js";
import Kitchen from "./pages/Kitchen/index.js"; 
// import ReadyOrders from "./components/orders/ordersReady.js"
import { PedidosProntos } from "./pages/Salao/readyOrders.js";
import OrderFinish from "./pages/Kitchen/ordersFinish.js";
// import PrivateRoute from "./services/PrivateRoute";
// import PublicRoute from './services/PublicRoute.js'

function App() {
  const history = useHistory()
  return (
  <BrowserRouter history={history}>
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={signUp} />
        <Route path="/menu" component={Menu} />
        <Route path="/kitchen" component={Kitchen} />
        <Route path="/orders" component={PedidosProntos} />
        
      </Switch>
      </BrowserRouter>
  );
}

export default App;
