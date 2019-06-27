import Layout from '../src/hoc/Layout';
import {Container, PageTitle, Article} from '../src/components/Styled';

export default () => (
  <>
    <style jsx>{`
      .accented {
        color: #4E00F7;
      }
    `}</style>
    
    <Layout>
      <Container>
        <PageTitle>Создаем <span className='accented'>продающие</span> сайты</PageTitle>
        <Article>Выполняем работу качественно и в срок</Article>
      </Container>
    </Layout>
  </>
)