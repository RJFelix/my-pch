import React from "react";
import { connect } from "react-redux";
import ListItem from "./ListItem";

/*
* List and its container
*/

export function ListDisplay(props) {
  return(
    <div className="ui divided items">
      {this.props.items.map(item =>
        <ListItem 
          key={item.id} 
          itemName={item.itemName}
          image={item.image}
          description={item.description}
          tags={item.tags}
          selected={item.selected} />
          )}
      </div>
  );
}

const mapStateToProps = function(state) {
  return {
    items: state.items.filter(items => items.visible);
  }
}

const List = connect(mapStateToProps)(ListDisplay);
export default List;