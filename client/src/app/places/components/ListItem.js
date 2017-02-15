import React from "react";
// import { Link } from "react-router";
import CircularImage from "../../shared/atoms/CircularImage";

/*
*  CONTENTS:
*    ContentItem - an individual content item
*
*/

// helper to truncate text
function truncate(text, length) {
  return text.length > length ? text.slice(0, length - 3).concat("...") : text;
}

/* ListItem
*    a single list item
*    Props:
*      selected: Boolean - should this render as a selected item
*      image: URL - image URL
*      itemName: String - the item's name or title
*      description: String - description; will be truncated to 97 characters + ...
*      tags: which tags this item possesses
*/
/*
        <CircularImage
          src={props.image}
          alt="Beautiful scenery"
          size={100}
        />
*/
export default function ListItem(props) {
  return(
    <div className={(props.selected ? "active " : "") + "item"}>
      <div 
        style={{
          display: "inline-block",
          marginRight: "18px"
        }} >
        <CircularImage
          src={props.image}
          alt="Beautiful scenery"
          size={100}
        />
      </div>
      <div className="content">
        <h3 className="header">
          {props.itemName}
        </h3>
        <div className="meta">
          <span>About</span>
        </div>
        <div className="description">
          {truncate(props.description, 100)}
        </div>
        <div className="extra">
          {props.tags.reduce((accum, curr) => accum + ", " + curr)}
        </div>
      </div>
    </div>

  );
}