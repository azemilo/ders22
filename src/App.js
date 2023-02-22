import { Product } from "./Product"

function App() {
  const list = [
    {
      id: 4,
      countity: "19",
      producname: "pm Pasha",
      price: 2200,
      isStock: true
    },
    {
      id: 7,
      countity: "23",
      productname: "am Pasha",
      price: 300,
      isStock: false
    },
    {
      id: 3,
      countity: "22",
      productname: "dm Pasha",
      price: 700,
      isStock: false
    },
    {
      id: 5,
      countity: "18",
      productname: "qm Pasha",
      price: 1900,
      isStock: true
    },
  ]
  return <>
    {list.map(item =>
      (<Product id={item.id} productname={item.productname} price={item.price} isStock={item.isStock} countity={item.countity} key={item.id} />)

    )}
  </>
}


export default App