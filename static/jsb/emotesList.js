var EmotesList = React.createClass({
  render: function() {
    var usableChannelKeys = this.props.usableChannelKeys;
    var template = this.props.template;
    return <div id="channel-container">
      { usableChannelKeys.map(function (key, index, arr) {
        var channel = this.props.allChannels[key];
        return Object.keys(channel.emotes).map(function (emotekey, index) {
          var style = [];
          if (index == 0) {
            style.push("emoteStart");
          }
          if (index == channel.emotes.length - 1) {
            style.push("emoteEnd");
          }
          return (
            <Emote key={emotekey + ", " + key} emote={channel.emotes[emotekey]} template={template} style={style}/>
            );

        }, this);
      }, this)}
    </div>
  }
})


const mapStateToProps = (state) => {
  return {
    usableChannelKeys: Object.keys(state.subscriberData.channels).slice(0,state.channel.channelCount),
    allChannels: state.subscriberData.channels,
    template: state.subscriberData.template
  };
}

const mapDispatchToProps = (dispatch) => {
  return {};
}

var VisibleEmotesList = connect(mapStateToProps, mapDispatchToProps)(EmotesList);


