import { useRouter } from 'next/router'

const SobreItem = () => {
  const router = useRouter();
  
  const {slug} = router.query;

  return(
    <div>
      <h1> Pagina dinâmica do(a) { slug } </h1>
    </div>
  )
}

export default SobreItem;