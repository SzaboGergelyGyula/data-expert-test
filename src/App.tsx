import { useState } from "react";
import Header from "./components/Header";
import "./App.css";
import Sidebar from "./components/Sidebar";
import Body from "./components/Body";
import { Itemtype } from "./types/ItemType";

function App() {
  const [clickedItemList, setClickedItemList] = useState<Itemtype[]>([]);
  return (
    <div className="app">
      <Header />
      <div className="content">
        <Sidebar setClickedItemList={setClickedItemList} />
        <Body clickedItemList={clickedItemList} />
      </div>
    </div>
  );
}

export default App;
