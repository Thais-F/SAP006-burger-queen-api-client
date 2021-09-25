import Input from "../../components/inputs/index.js";
import Cartmenu from "../../components/cartmenu/cartmenu.js";
import { useState } from "react"
import Button from '../../components/Button/button.js'
import '../../components/Button/style.css'

function Menu() {
  const estado = useState(10);
  const estadoAtual = estado[0];
  const atualizarEstado = estado[1];
  // console.log(estado);
  // const [ estadoAtual, atualizarEstado] = useState(0)

  const [order, setOrder] = useState({})

  function addOne(e) {
    e.preventDefault()
   atualizarEstado(estadoAtual + estadoAtual)
  }

  function toOrder(e) {
    e.preventDefault()
    setOrder({
        "client": "string",
        "table": "2",
        "products": [
          {
            "id": 31,
            "qtd": 2,
            "flavor": null,
            "complement": null,
          }
        ]
      })     
}

  const objectList = [
    {
      "id": 30,
      "name": "Café com leite",
      "price": 7,
      "flavor": null,
      "complement": null,
      "image": "https://upload.wikimedia.org/wikipedia/commons/4/41/Coffee_with_milk_%28563800%29.jpg",
      "type": "breakfast",
      "sub_type": "breakfast",
      "createdAt": "2021-02-16T13:11:54.173Z",
      "updatedAt": "2021-02-16T13:11:54.173Z"
    },
    {
      "id": 31,
      "name": "Misto quente",
      "price": 10,
      "flavor": null,
      "complement": null,
      "image": "https://pressfrom.info/upload/images/real/2019/02/08/misto-quente-perfeito-dicas-para-arrasar-no-lanche__78021_.jpg?content=1",
      "type": "breakfast",
      "sub_type": "breakfast",
      "createdAt": "2021-02-16T13:11:54.173Z",
      "updatedAt": "2021-02-16T13:11:54.173Z"
    },
]

  return (
    <form>
      <h1>Essa página terá o Menu e atendimento</h1>
      
      <Input className="client" placeholder="Cliente"></Input>
      <Input className="table" type="number" min="1" max="10" placeholder="Mesa"/>

      <button onClick={addOne}>
        Adicionar
      </button>

      <div>
        {estadoAtual}
      </div>  

      <Cartmenu itemsArray={objectList}>
      </Cartmenu>
      <Button btnClass="order" btnText='Fazer Pedido' btnOnClick={(e) => toOrder(e)}></Button>
    </form>
  );  
}

export default Menu;
