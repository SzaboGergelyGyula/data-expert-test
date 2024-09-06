import { Itemtype } from "../types/ItemType";

export default function Item({ id, text }: Itemtype) {
  return (
    <div className="item">
      <h1>Item {id}</h1>
      <p>{text}</p>
    </div>
  );
}
