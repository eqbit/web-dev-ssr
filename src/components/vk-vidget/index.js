class VkVidget extends React.Component {
  componentDidMount() {
    VK.Widgets.CommunityMessages("vk_community_messages", 183139911, {expanded: "0",tooltipButtonText: "Есть вопрос?"});
  }
  
  render() {
    return (
      <div id='vk_community_messages'/>
    )
  }
}

export {VkVidget}