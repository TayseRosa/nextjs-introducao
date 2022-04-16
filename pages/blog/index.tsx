import { Layout } from '../../components/Layout';
import { Post } from '../../types/Post'

type Props = {
  name: string;
  posts: Post[];
}

const Blog = ({ name, posts }: Props) => {



  return(
    <Layout>
    <div>
      <h1>Blog</h1>
      <p>Blog de { name } </p>

      <ul>
        { posts.map((posts, index)=>(
          <li key={index}> <a href={`/blog/${posts.id}`}> { posts.title } </a> </li>
        )) }
      </ul>
    </div>
    </Layout>
  )
}

export const getStaticProps = async() => {

  const req = await fetch(`https://jsonplaceholder.typicode.com/posts`);
  const posts: Post[] = await req.json();

  /* Static Site Generetion */
  return{
    props:{
      name: 'Tayse Rosa',
      posts: posts
    },
    /* Tempo em segundos que esse static deve se manter */
    revalidate: 7200/* De 2 em 2 horas faz a consulta ao BD */
  }
}

export default Blog;