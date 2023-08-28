import './home.css'
export default function Home (){
  return(
    <main>
      <div className='content-img full-width'>
        <p>Engel David</p>
      </div>
      <h2 className='full-width'>Recomendacion</h2>
      <section className='recomendation full-width'>
        <div className="element">
          <img src='https://www.rlmedia.io/is/image/PoloGSI/s7-1406516_alternate10?$rl_df_pdp_5_7_a10$' alt='img product' />
          <p>camisa pola</p>
          <p>56$</p>

        </div>
        <div className="element">
          <img src='https://www.rlmedia.io/is/image/PoloGSI/s7-1485354_alternate10?$rl_df_pdp_5_7_a10$' alt='img product' />
          <p>camisa pola</p>
          <p>56$</p>
        </div>
        <div className="element">
          <img src='https://www.rlmedia.io/is/image/PoloGSI/s7-1482559_lifestyle?$rl_df_pdp_5_7_lif$' alt='img product' />
          <p>camisa pola</p>
          <p>56$</p>
        </div>
        <div className="element">
          <img src='https://www.rlmedia.io/is/image/PoloGSI/s7-1485544_alternate10?$rl_df_pdp_5_7_a10$' alt='img product' />
          <p>camisa pola</p>
          <p>56$</p>
        </div>
      </section>
      <h2 className='full-width'>Basico Versatiles</h2>
      <div className='element-basico-int left'>
        <h3  className='font-1 text-title'>Polo Bear</h3>
        <button>Comprar out pack</button>
      </div>
      <div className='element-basico right'>
        <h3 className='font-1 text-title'></h3>
        <button>Comprar out pack</button>
      </div>
      <div className='element-basico-finish right'>
        <h3 className='font-1 text-title'>Clasicas</h3>
        <button>Comprar out pack</button>
      </div>
    </main>
  ) 

}
