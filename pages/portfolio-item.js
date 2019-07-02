export default class extends React.PureComponent {
  static async getInitialProps( context ) {
    
    const slug = context.query.slug
    
    console.log(slug);
    
    return {};
  }
  
  render() {
    return (
      <div>done</div>
    );
  }
}