import { useRouter } from 'next/router'
import { useEffect } from 'react';
import { Layout } from '../../../components/Layout';

const SobreItem = () => {
  const router = useRouter();
  
  const {slug} = router.query;

  useEffect(()=>{

      const handleRouteChange = (url: string) => {
        console.log(`Indo para ${url}`)
      }

      router.events.on('routeChangeComplete', handleRouteChange);

      return()=>{
        router.events.off('routeChangeComplete', handleRouteChange)
      }
      
  },[]);

  return(
    <Layout>
    <div>
      <h1> Pagina dinâmica de { slug } </h1>

      <p> Pathname: {router.pathname} </p>

      <p> isFallback: {router.isFallback.toString()} </p>

      <button onClick={()=>{
        router.push('/sobre/pedro')
    }}> Ir para a página de Pedro 
    </button>
    
    </div>
    </Layout>
  )
}

export default SobreItem;