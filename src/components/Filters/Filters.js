import React, { useState } from 'react'
import { Checkbox } from 'primereact/checkbox'

const Filters = ({ brands, weights }) => {

    const [selectedWeightsState, setSelectedWeightsState] = useState([])
    const [selectedBrandsState, setSelectedBrandsState] = useState([])

    const onWeightChange = e => {
        let selectedWeights = [...selectedWeightsState]
        e.checked ? selectedWeights.push(e.value) : selectedWeights.splice(selectedWeights.indexOf(e.value), 1)
        setSelectedWeightsState(selectedWeights)
    }

    const onBrandChange = e => {
        let selectedBrands = [...selectedBrandsState]
        e.checked ? selectedBrands.push(e.value) : selectedBrands.splice(selectedBrands.indexOf(e.value), 1)
        setSelectedBrandsState(selectedBrands)
    }

    const weightsGenerator = (weight) => (
        <div className="p-field-checkbox">
            <Checkbox inputId={`weight${weight}`} value={weight} onChange={onWeightChange}
                      checked={selectedWeightsState.indexOf(`${weight}`) !== -1}/>
            <label htmlFor={`weight${weight}`}>{weight} грамм</label>
        </div>
    )

    const brandsGenerator = (name) => (
        <div className="p-field-checkbox">
            <Checkbox inputId={`name${name}`} value={name} onChange={onBrandChange}
                      checked={selectedBrandsState.indexOf(`${name}`) !== -1}/>
            <label htmlFor={`name${name}`}>{name}</label>
        </div>
    )

    return (
        <div className="filters">
            <h4 className="filters__title">
                Фильтр подбора
            </h4>
            <div className="filters__weight">
                <h5 className="filters__title">Вес продукта (нетто)</h5>
                {
                    weights.map(weight => (
                        weightsGenerator(weight)
                    ))
                }
            </div>
            <div className="filters__name">
                <h5 className="filters__title">Марка</h5>
                {
                    brands.map(brand => (
                        brandsGenerator(brand)
                    ))
                }
            </div>
        </div>
    )
}

export default Filters