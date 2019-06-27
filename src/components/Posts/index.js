import routes from '../../api/routes';

class Posts extends React.PureComponent {
  constructor(){
    super();
    this.state  = {
      sections: [],
      dataRoute:  routes.posts
    }
  }
  
  componentDidMount(){
    fetch(this.state.dataRoute)
      .then(res  =>  res.json())
      .then(sections  =>  this.setState(() => {
        return { sections:  sections.map(this.mapSection)};
      }));
  }
  
  mapSection(section){
    return {
      img:  section.acf.image,
      src:  section.acf.image.url,
      title:  section.post_title,
      key:  section.post_title,
      description:  section.post_content,
      author: {
        name:  section.acf.author_name,
        link:  section.acf.author_link
      }
    }
  }
  
  render() {
    return (
      <div>
        {this.state.sections.map(item => (
          <div key={item.key}>
            <img src={item.src} alt=""/>
          </div>
        ))}
      </div>);
  }
}

export {Posts}