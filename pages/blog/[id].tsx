import { Post } from "../../types/Post";
import { GetStaticProps } from 'next'
import { ParsedUrlQuery } from "querystring";
import { Layout } from "../../components/Layout";

type Props = {
  post: Post
}

const BlogItem = ({ post }: Props) => {
  return(
    <Layout>
    <div>
      <h1>Blog</h1>
      <h2> {  post.title } </h2>

      <p> { post.body } </p>
    </div>
    </Layout>
  )
}


export default BlogItem;

export const getStaticPaths = async() => {
  const req = await fetch(`https://jsonplaceholder.typicode.com/posts`);
  const posts: Post[] = await req.json();

  const paths = posts.map(post => ({
    params: {id: post.id.toString()}
  }));
  return { paths, fallback: 'blocking' }

}

interface IParams extends ParsedUrlQuery{
  id: string
}

export const getStaticProps:GetStaticProps = async( context ) => {
  const { id } = context.params as IParams;

  const req = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const post = await req.json();

  return{
    props:{
      post
    }
  }
}