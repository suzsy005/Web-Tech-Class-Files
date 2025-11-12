import './App.css';
import Card from './componets/Card'
import CardV2 from './componets/CardV2'
import CardV3 from './componets/CardV3'

function App() {
  return (
    <div className="App container">
          <div className="bg-light py-1 mb-2">
              <h2 className="text-center">Example Application</h2>
          </div>
          <div className="row justify-content-center">
              <Card
                  itemId="1"
                  itemName="test item1"
                  itemDescription="test item1 description"
                  itemImage="https://upload.wikimedia.org/wikipedia/commons/0/04/So_happy_smiling_cat.jpg"
                  itemCost="15.00"
              />
              <CardV2
                  itemId="2"
                  itemName="test item2"
                  itemDescription="test item2 description"
                  itemImage="https://upload.wikimedia.org/wikipedia/commons/0/04/So_happy_smiling_cat.jpg"
                  itemCost="10.00"
              />
              <CardV3
                  itemId="3"
                  itemName="test item3"
                  itemDescription="test item3 description"
                  itemImage="https://upload.wikimedia.org/wikipedia/commons/0/04/So_happy_smiling_cat.jpg"
                  itemCost="5.00"
              />
          </div>
    </div>
  );
}

export default App;
