import Layout from '../src/hoc/Layout';
import {Container, PageTitle, Article} from '../src/components/Styled'
import {Brief} from '../src/components/Brief'

export default () => (
  <>
    <style jsx>{`
      .link {
        color: #4E00F7;
        text-decoration: none;
      }
    `}</style>
    
    <Layout>
      <Container>
        <PageTitle>Заполните бриф</PageTitle>
        <Article>
          Оставьте заявку, либо звоните, мы пообщаемся и сами все за вас заполним:
          <a href="tel:+7 952 347 34 19" className='link'> +7 952 347 34 19</a>
        </Article>
        
        <Brief/>
      </Container>
    </Layout>
  </>
);