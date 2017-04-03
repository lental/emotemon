
var subscriberData = (state = {channels:{}, template: {}}, action) => {
    switch (action.type) {
      case "ADD_CHANNELS":
        return {template: action.template,
          channels: action.channels}
        break;
      default:
    }
    return state;
  };