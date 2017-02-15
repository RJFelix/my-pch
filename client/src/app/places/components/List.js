import React from "react";
import { connect } from "react-redux";
import ListItem from "./ListItem";

/*
* List and its container
*/

function ListDisplay(props) {
  return(
    <div className="ui divided items">
      <div className="item"
           style={{
             height: "0",
           }} />
      {props.items.map(item =>
        <ListItem 
          key={item.id} 
          itemName={item.itemName}
          image={item.image}
          description={item.description}
          tags={item.tags}
          selected={item.selected} />
          )}
      <div className="item"
        style={{
          height: "0",
        }} />
    </div>
      
  );
}

const mapStateToProps = function(state) {
  let sortedItems = state.items.slice().filter(item => item.visible);
  sortedItems.sort((a,b) => b.coords.lat - a.coords.lat)
  return {
    items: sortedItems
  }
}

const List = connect(mapStateToProps)(ListDisplay);
export default List;