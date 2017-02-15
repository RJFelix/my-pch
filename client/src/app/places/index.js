import React from "react";
import List from "./components/List";
import MapComponent from "./components/Map";
import Sidebar from "./components/Sidebar";
import "./style/style.css";

// Index component for the Places view
export default function PlacesIndex(props) {
  return( 
    <div className="ui grid">
      <div className="two wide column">
        <Sidebar initialTag={props.initialTag} />
      </div>
      <div className="seven wide column">
        <List />
      </div>
      <div className="seven wide column">
        <MapComponent />
      </div>
    </div>
  );
}