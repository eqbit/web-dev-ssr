class VkVidget extends React.Component {
  componentDidMount() {
    VK.Widgets.CommunityMessages("vk_community_messages", 183139911, {
      disableExpandChatSound: "1",
      tooltipButtonText: "напишите нам в vk"
    });
  }
  
  render() {
    return (
      <div id='vk_community_messages'/>
    )
  }
}

export {VkVidget}