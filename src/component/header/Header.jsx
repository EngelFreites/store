import './header.css'
export default function Header (){
  return (  
    <header>
      <h1 className='text-title font-1 title-page'>ED</h1>
      <ul className='list-options'>
        <li className='font-2 option'>Inicio</li>
        <li className='font-2 option'>Hombre</li>
        <li className='font-2 option'>Muejer</li>
        <li className='font-2 option'>Niños</li>
      </ul>
      <div id='icons-header'>
        <p>🛒</p>
        <p>❤️</p>
        <p>🚪</p>  
      </div>
    </header>
  )

}