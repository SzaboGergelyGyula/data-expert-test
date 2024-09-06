import { Dispatch, SetStateAction } from "react";
import Item from "./Item";
import { Itemtype } from "../types/ItemType";
import { ItemData } from "../data/ItemData";

type SideBarPropsType = {
  setClickedItemList: Dispatch<SetStateAction<Itemtype[]>>;
};

export default function Sidebar({ setClickedItemList }: SideBarPropsType) {
  function handleClick(item: Itemtype) {
    setClickedItemList((list) => [...list, item]);
  }
  return (
    <div className="sidebar">
      <ul>
        {ItemData.map((item) => (
          <li key={item.id} onClick={() => handleClick(item)}>
            <Item id={item.id} text={item.text} />
          </li>
        ))}
      </ul>
    </div>
  );
}
