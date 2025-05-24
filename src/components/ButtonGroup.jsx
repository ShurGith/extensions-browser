import { useState } from 'react';
import Boton from './partials/Boton'
import { botones } from './partials/dataButtons.js'

function ButtonGroup() {
    const [activo, setActivo] = useState(null);

    const handleClick = (index, selector) => {
        const cardInactives = document.querySelectorAll('div[data-active="false"]');
        const cardActives = document.querySelectorAll('div[data-active="true"]');
        const cardAll = document.querySelectorAll('div[data-active]');
        if (selector === 'inactivos') {
            cardActives.forEach(card => {
                card.style.display = 'none';
            });
            cardInactives.forEach(card => {
                card.style.display = 'flex';
            });
        } else if (selector === 'activos') {
            cardInactives.forEach(card => {
                card.style.display = 'none';            
            });
            cardActives.forEach(card => {
                card.style.display = 'flex';
            });
        } else if (selector === 'todos') {
            cardAll.forEach(card => {
                card.style.display = 'flex';
            });
        }
        setActivo(index);
    }

    return (
        <div className='flex justify-between mt-4 px-4'  >
            <h1 className="text-3xl font-siete font-display dark:text-neutro-5">Extensions List</h1>
            <div className='flex gap-2'>
                {botones.map((boton, index) => (
                    <Boton
                        key={index}
                        texto={boton.texto}
                        selector={boton.selector}
                        activo={index === activo}
                        onClick={() => handleClick(index, boton.selector)}
                    />
                ))}
            </div>
        </div>
    )
}

export default ButtonGroup