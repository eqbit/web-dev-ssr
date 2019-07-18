class VkVidget extends React.Component {
  componentDidMount() {
    VK.Widgets.CommunityMessages("vk_community_messages", 183139911, {
      disableExpandChatSound: "1",
      disableNewMessagesSound: "1",
      disableButtonTooltip: "1"
    });
  }
  
  render() {
    return (
      <div id='vk_community_messages'/>
    )
  }
}

export {VkVidget}