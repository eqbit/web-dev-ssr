class VkVidget extends React.Component {
  componentDidMount() {
    VK.Widgets.CommunityMessages("vk_community_messages", 20003922);
  }
  
  render() {
    return (
      <div id='vk_community_messages'/>
    )
  }
}

export {VkVidget}