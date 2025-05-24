function Boton({ texto, selector, activo,onClick}) {
 const claseBase ="border-1 border-neutro-5 px-4 py-2 rounded-full font-display cursor-pointer text-sm dark:bg-neutro-8 dark:text-neutro-4 dark:border-neutro-6 focus:ring-rojo-7 dark:ring-offset-neutro-8 focus:ring-offset-2 focus:ring-2 focus:outline-hidden"
 
  const claseActivo ="bg-rojo-7 dark:text-neutro-1 dark:bg-rojo-7 dark:ring-offset-neutro-6"
  const claseInactivo ="ring-offset-neutro-6 bg-white text-neutro-6 ring-offset-white"

  return (
    <button className={`${claseBase}  ${activo ? claseActivo : claseInactivo}`}
      onClick={onClick}
      id={texto}>
       {texto}
    </button>
  )
}

export default Boton