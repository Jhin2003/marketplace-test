import Card from "./components/card"

function App() {
  var db = [
    {
      name: "Miguel"
    },
    {
      name: "raphael"
    },
    {
      name: "nediguel"
    }
  ]

  const newArray = db.map((element, index) => {
    // Transform each element here
    return (
      <Card key={index} data={element.name}></Card>
    )
  });


  return (
    <div>{newArray}</div>
  )

}

export default App
