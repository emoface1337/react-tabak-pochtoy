import React, { memo } from 'react'
import Weight from './Weight/Weight'
import Brand from './Brand/Brand'
import { Button } from 'primereact/button'
import { useDispatch } from 'react-redux'
import { clearSelectedFilters } from '../store/actions/filterActions'

const brands = ['Al Fakher', 'Burn', 'Spectrum Hard']
const weights = ['50', '100', '200', '250']

const Filters = memo(({ selectedBrands, selectedWeights }) => {

    const dispatch = useDispatch()

    const onClearFilters = () => {
        dispatch(clearSelectedFilters())
    }

    return (
        <div className="filters">
            <h4 className="filters__title">
                Фильтр подбора
            </h4>
            <Weight weights={weights} selectedWeights={selectedWeights}/>
            <Brand brands={brands} selectedBrands={selectedBrands}/>
            <Button
                onClick={onClearFilters}
                label="Очистить фильтры"
            />
        </div>
    )
})

export default Filters