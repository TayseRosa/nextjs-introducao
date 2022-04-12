import Script from "next/script"

const Sobre = () => {
  return(
    <div>
      <h1>Pagina sobre</h1>
      
      Meu nome é { process.env.NEXT_PUBLIC_NOME }

      <ul>
        <li><a href="/sobre/tayse">Tayse</a></li>
        <li><a href="/sobre/theo">Theo</a></li> 
      </ul>

      <Script 
        src="https://www.google-analytics.com/analytics.js"
        strategy="afterInteractive"
        onLoad={()=>{
          startAnalytics
        }}
      />
    </div>
  )
}

export default Sobre