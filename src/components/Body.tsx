import { Itemtype } from "../types/ItemType";
import Item from "./Item";

type BodyType = {
  clickedItemList: Itemtype[];
};

export default function Body({ clickedItemList }: BodyType) {
  return (
    <div className="body">
      <ul>
        {clickedItemList.map((item) => (
          <li>
            <Item id={item.id} text={item.text} />
          </li>
        ))}
      </ul>
    </div>
  );
}
