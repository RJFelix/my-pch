import React from "react";
import { connect } from "react-redux";
import { toggleTag, clearSelectedItem } from "../ducks/itemVisibility.js";
import { Link } from "react-router";

/*
* SidebarDisplay
*   props:
*     tagList - array of String tag names to populate sidebar with
*     activeTag - which tag is active
*     onClick - bound function to dispatch the newly selected tag
*/
function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

/* TagDisplay - a single tag list item
*    props - 
*    selected: Boolean - is this item selected?
*    onClick: a function accepting no arguments
*      (curry it before passing it in!)
*    text: text to display
*    href: link destination
*/
function TagDisplay(props) {
  return(
    <Link
      to={props.href}
      className={"item" + (props.selected ? " active" : "")}
      onClick={props.onClick()}
      >
      {/*<div className={"ui checkbox" + (props.selected ? " set checked" : "")}>
        <input type="checkbox" />
      </div>*/}
      {props.text}
    </Link>
  );
}

function SidebarDisplay(props) {
  return(
    <div className="ui vertical pointing menu"
         style={{
           borderTopLeftRadius: 0,
           borderTopRightRadius: 0
         }}
    >
      {props.tagList.map((tag, idx) =>
        <TagDisplay
          href="#"
          selected={props.tagStatus[idx]}
          text={capitalize(tag)}
          onClick={() => props.onClick(tag)}
          key={idx}
        />
      )}
      <TagDisplay
        href="#"
        selected={props.tagStatus.reduce((accum, it) => accum && it)}
        text="All Locations"
        onClick={
          () => function() {
            console.log('select all');
            for(let i = 0; i < props.tagList.length; i++) {
              if(!props.tagStatus[i]) {
                props.onClick(props.tagList[i])();
              }
            }
          }
        }
        />
    </div>
  );
}

// populate the sidebar's tagList with all tags that exist
const mapStateToProps = function(state) {  
  let tagList = [];
  let tagStatus = [];
  for(let tag in state.tags) {
    if(!tagList.includes(tag)) {
      tagList.push(tag);
      tagStatus.push(state.tags[tag]);
    }
  }
  
  return { tagList: tagList,
           tagStatus: tagStatus };
}

// bind onClick to clear the current selection then select the clicked tag
// (clearing the selected item is to avoid weirdness but should be fixed)
const mapDispatchToProps = function(dispatch) {
  return {
    onClick: (tag) => () => { console.log("clicked "+ tag); dispatch(clearSelectedItem()); dispatch(toggleTag(tag)); }
  };
}

const Sidebar = connect(mapStateToProps, mapDispatchToProps)(SidebarDisplay);
export default Sidebar;