const reducers = function() {
  const { createStore, combineReducers } = Redux;
  return combineReducers({channel, backgroundColor, subscriberData});
}();
