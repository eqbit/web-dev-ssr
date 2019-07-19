class VkVidget extends React.Component {
  componentDidMount() {
    VK.Widgets.CommunityMessages("vk_community_messages", 183139911, {
      disableExpandChatSound: "1",
      tooltipButtonText: "напишите нам в vk"
    });
    VK.Retargeting.Init("VK-RTRG-387258-4g0JO");
    VK.Retargeting.Hit();
  }
  
  render() {
    return (
      <div id='vk_community_messages'/>
    )
  }
}

export {VkVidget}