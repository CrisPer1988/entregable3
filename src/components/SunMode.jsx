import React, { useState } from 'react'
import './styles/sunMode.css'

const SunMode = () => {

    const [bgMoon, setBgMoon] = useState('#ffe400')
    const [bgSun, setBgSun] = useState('none')
    const [colorMoon, setcolorMoon] = useState('var(--text-color-black)')
    const [colorSun, setColorSun] = useState('var(--color-icon)')

    const darkMode = e => {
        const body = document.querySelector('body')

        if (e.target.classList.contains('bxs-moon')) {
            body.classList.remove('sun__mode')

            setBgMoon('#ffe400')
            setcolorMoon('var(--text-color-black)')

            setBgSun('none')
            setColorSun('var(--color-icon)')
        }

        if (e.target.classList.contains('bxs-sun')) {
            body.classList.add('sun__mode')

            setBgMoon('none')
            setcolorMoon('var(--color-icon)')

            setBgSun('#ffe400')
            setColorSun('var(--text-color-black)')
        }
    }

    return (
        <div className='darkMode__icons' onClick={darkMode}>
            <i style={{ background: bgMoon, color: colorMoon }} className='bx bxs-moon'></i>
            <i style={{ background: bgSun, color: colorSun }} className='bx bxs-sun'></i>
        </div>
    )
}

export default SunMode