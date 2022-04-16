import Link from "next/link";
import Script from "next/script"
import { useState } from "react"
import { Layout } from "../../components/Layout";
import { MyButton } from "../../components/MyButton";

import styles from '../../styles/Sobre.module.css'

const Sobre = () => {

  const [ contador, setContador ] = useState(0);

  const handleContadorBtn = () => {
    setContador(contador + 1);
  }

  return(
    <Layout>
    <div>
      <h1 className={styles.sobreTitle}>Pagina sobre ({ contador })</h1>
      
      Meu nome (na variável de ambiente) é: { process.env.NEXT_PUBLIC_NOME }

      <ul className="lista">
        <li> <Link href="/sobre/tayse"> Tayse </Link> </li>
        <li> <Link 
                href="/sobre/theo"
                replace
                scroll={false}
             > Theo </Link> </li>
      </ul>

      {/* <button onClick={handleContadorBtn} className="btn btn-primary">
        Aumentar
      </button> */}

      <MyButton label="Aumentar" onClick={handleContadorBtn} />

      <style jsx>{`
        .lista{
          backgroundColor:#ff00ff;
        }
      `}</style>

      <Script 
        src="https://www.google-analytics.com/analytics.js"
        strategy="afterInteractive"
        onLoad={()=>{
          
        }}
      />
    </div>
    </Layout>
  )
  
}

export default Sobre