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

function SidebarDisplay(props) {
  return(
    <div className="ui vertical pointing menu">
      {props.tagList.map((tag, idx) =>
        <Link 
          to={"#"} //"/places/ + tag"
          className={(tag === props.activeTag ? "active" : "") + "item"}
          onClick={props.onClick(tag)}
          key={idx}
        />
      )}
    </div>
  );
}

// populate the sidebar's tagList with all tags that exist
const mapStateToProps = function(state) {
  let tagList = [];
  state.tags.forEach(function(tag) {
    if(!tagList.includes(tag)) {
      tagList.push(tag);
    }
  });
  return { tagList: tagList, activeTag: state.activeTag };
}

// bind onClick to clear the current selection then select the clicked tag
// (clearing the selected item is to avoid weirdness but should be fixed)
const mapDispatchToProps = function(dispatch) {
  return {
    onClick: (tag) => () => { dispatch(clearSelectedItem()); dispatch(toggleTag(tag)); }
  };
}

const Sidebar = connect(mapStateToProps, mapDispatchToProps)(SidebarDisplay);
export default Sidebar;