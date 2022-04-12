type Props = {
  name: string;
}

const Blog = ({ name }: Props) => {



  return(
    <div>
      <h1>Blog</h1>
      <p>Blog de { name } </p>
    </div>
  )
}

export const getStaticProps = () => {

  return{
    props:{
      name: 'Tayse Rosa'
    }
  }
}

export default Blog;