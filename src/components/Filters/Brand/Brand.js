import React, { memo, useEffect, useState } from 'react'
import { Checkbox } from 'primereact/checkbox'
import { useDispatch } from 'react-redux'
import { setSelectedBrands } from '../../store/actions/filterActions'

const Brand = memo(({ brands, selectedBrands }) => {

    const [brandsState, setBrandsState] = useState([])

    const dispatch = useDispatch()

    useEffect(() => {
        setBrandsState(selectedBrands)
    }, [selectedBrands])

    const onBrandChange = e => {
        let selectedBrands = [...brandsState]
        e.checked ? selectedBrands.push(e.value) : selectedBrands.splice(selectedBrands.indexOf(e.value), 1)
        setBrandsState(selectedBrands)

        dispatch(setSelectedBrands(selectedBrands))
    }

    const brandsGenerator = brand => (
        <div key={brand} className="p-field-checkbox">
            <Checkbox inputId={`name${brand}`} value={brand} onChange={onBrandChange}
                      checked={brandsState.indexOf(`${brand}`) !== -1}/>
            <label htmlFor={`name${brand}`}>{brand}</label>
        </div>
    )

    return (
        <div className="filters__name">
            <h5 className="filters__title">Марка</h5>
            {
                brands.map(brand => (
                    brandsGenerator(brand)
                ))
            }
        </div>
    )
})

export default Brand