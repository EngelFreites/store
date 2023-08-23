import './header.css'

const options = ['Camisas','Camisetas', 'Jeans', 'Pantalones', 'Bermudas', 'Accesorios']

export default function Header (){
  return (  
    <header>
      <h1 className='text-title font-1 title-page'>ED</h1>
      <ul className='list-options'>
        {
          options.map( option =>(
            <li key={option} className='font-2 option'>{option}</li>
          ))
        }
      </ul>
      <div id='icons-header'>
        <p>🛒</p>
        <p>❤️</p>
        <p>🚪</p>  
      </div>
    </header>
  )

}