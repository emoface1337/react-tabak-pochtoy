import React from 'react'
import Weight from './Weight/Weight'
import Brand from './Brand/Brand'

const brands = ['Al Fakher', 'Burn', 'Spectrum Hard']
const weights = ['50', '100', '200', '250']

const Filters = () => {
    return (
        <div className="filters">
            <h4 className="filters__title">
                Фильтр подбора
            </h4>
            <Weight weights={weights}/>
            <Brand brands={brands}/>
        </div>
    )
}

export default Filters