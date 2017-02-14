/*
*
*  DUCKS RELATING TO VISIBILITY OF ITEMS/MAP MARKERS
*
*
*/

/*
*  ACTIONS
*/
export const actions = {
  MOVE_MAP: "mypch/places/MOVE_MAP",
  SELECT_ITEM: "mypch/places/SELECT_ITEM",
  CLEAR_SELECTED_ITEM: "mypch/places/CLEAR_SELECTED_ITEM",
  TOGGLE_TAG: "mypch/places/TOGGLE_TAG",
  SELECT_ALL_TAGS: "mypch/places/SELECT_ALL_TAGS" 

};

/*
*  ACTION CREATORS
*/


// moveMap: when the bounds of the map are changed (panning or zooming)
//   bounds: google.maps.LatLngBounds = { lat: Number, lng: Number }
//   zoom: int
export function moveMap(bounds, zoom) {
  return {
    type: actions.MOVE_MAP,
    zoom: zoom,
    bounds: {
      south: bounds.getSouthWest().lat(),
      west: bounds.getSouthWest().lng(),
      north: bounds.getNorthEast().lat(),
      east: bounds.getNorthEast().lng()
    }
  };
}

// selectItem: select an item for visual highlight
//   id: item id
export function selectItem(id) {
  return {
    type: actions.SELECT_ITEM,
    id: id
  };
}

// clearSelectedItem: clears all selected items
export function clearSelectedItem() {
  return {
    type: actions.CLEAR_SELECTED_ITEM
  }
}

// selectTag: adds a tag to the selection
//   tag: String
export function toggleTag(tag) {
  return {
    type: actions.TOGGLE_TAG,
    tag: tag
  };
}

// selectTags: selects all tags for viewing (default view)
export function selectAllTags() {
  return {
    type: actions.SELECT_ALL_TAGS
  }
}

/*
*  REDUCERS
*/

// reduceItemSelection: handle item select/deselect
//   items: array of items - state.items
//   action: ( actions.SELECT_ITEM | actions.CLEAR_SELECTED_ITEM )
// [do not export]
function reduceItemSelection(items = [], action) {
  switch (action.type) {
    case actions.SELECT_ITEM: {
      return items.map(item => Object.assign({}, item, item.id === action.id? { selected: true } : { selected: false } ));
    }
    case actions.CLEAR_SELECTED_ITEM: {
      return items.map(item => ({ ...item, selected: false }));
    }
  }
}

// reduceTagSelection: handle tag toggle and select-all
//    tags: tags object, where { tag: Boolean } indicates status of tag
//    action: ( actions.TOGGLE_TAG | actions.SELECT_ALL_TAGS )
// [do not export]
function reduceTagSelection(tags = {}, action) {
  switch (action.type) {
    case actions.TOGGLE_TAG: {
      return Object.assign({}, tags, { [action.tag]: !tags.tag });
    }
    case actions.SELECT_ALL_TAGS: {
      let newTags = {};
      for(tag in tags) {
        newTags[tag] = true;
      }
      return newTags;
    }
  }
}

// helper function to check if an item should be visible
//   item: item object, must have { coords: { lat, lng }}
//   bounds: bounds object, must have { north, south, east, west }
//           (Google maps bounds literal)
//   tags: tags object, where { tag: Boolean } is tag active status
function isVisible(item, bounds, tags) {
  // check to see if the item's tag is active
  if(!tags[item.tag]) {
    return false;
  }
  // check to see if the item is located within bounds
  return(
    (item.coords.lng > bounds.west) &&
    (item.coords.lng < bounds.east) &&
    (item.coords.lat > bounds.south) &&
    (item.coords.lat < bounds.north)
  );

}

// top level reducer for item visibility
//  state: redux state
//  action: any in this file
// [must be default export]
import initialState from "./initialState";
export default function reducer(state = initialState, action) {
  switch(action.type) {
    case actions.MOVE_MAP: {
      return Object.assign({}, state, {
        items: state.items.map(item => Object.assign({}, item, { visible: isVisible(item, action.bounds, state.tags) })),
        mapBounds: action.bounds,
        mapZoom: action.zoom
      });
    }
    case actions.SELECT_ITEM:
    case actions.CLEAR_SELECTED_ITEM: {
      return Object.assign({}, state, 
        { items: reduceItemSelection(state.items, action) }
      );
    }
    case actions.TOGGLE_TAG:
    case actions.SELECT_ALL_TAGS: {
      const newTags = reduceTagSelection(state.tags, action);
      return Object.assign({}, state, 
        { tags: newTags,
          items: state.items.map(item => Object.assign({}, item, { visible: isVisible(item, state.mapBounds, newTags)}))
        }
      );      
    }
    default: {
      return state;
    }
  }
}