import React, { useState, useEffect, useRef } from 'react'

// Dependencies
import Expand from 'react-expand-animated'

// Helpers
import translate from '../helpers/translate'

const Card = ({ dataForOneCard, title }) => {

    const [buttonIsFocused, setButtonIsFocused] = useState(false)
    const [openDiv, setOpenDiv] = useState(false)

    const buttonRef = useRef(null)

    useEffect(() => {
        if (buttonIsFocused) {
            buttonRef.current.classList.add("buttonFocused")
            setOpenDiv(true)
        } else {
            buttonRef.current.classList.remove("buttonFocused")
            setOpenDiv(false)
        }
    }, [buttonIsFocused])

    const renderItemsList = dataForOneCard.map((item, index) => {
        if (translate.hasOwnProperty(item[0])) {
            return <li key={index}>{translate[item[0]]} : <span className="nb">{item[1].toLocaleString()}</span></li>
        }
        else {
            return <li key={index}>{index + 1} - {item[0]} : <span className="nb">{item[1].toLocaleString()}</span></li>
        }
    })

    return (
        <div className="columnContainer">
            <button
                id="buttonCases"
                className="is-primary is-rounded"
                ref={buttonRef}
                onClick={() => setButtonIsFocused(prevState => !prevState)}
            >
                {title}
            </button>
            <Expand open={openDiv} duration={200}>
                <ul className="ulSorted">
                    {renderItemsList}
                </ul>
            </Expand>
        </div >
    )
}

export default Card