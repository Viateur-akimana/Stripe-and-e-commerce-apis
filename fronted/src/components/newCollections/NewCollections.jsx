import "./NewCollections.css";
import Item from "../Item/Item";
import newCollection from "../Assets/new_collections";

const NewCollections = () => {
  return (
    <div className="collection">
      <h1>New Collection</h1>
      <hr />
      <div className="collections-items">
        {newCollection.map((item, i) => {
          return (
            <Item
              key={i}
              id={item.id}
              name={item.name}
              image={item.image}
              new_price={item.new_price}
              old_price={item.old_price}
            />
          );
        })}
      </div>
    </div>
  );
};

export default NewCollections;
