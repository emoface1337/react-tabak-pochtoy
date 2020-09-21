import React, { memo, useEffect, useState } from 'react'
import { Checkbox } from 'primereact/checkbox'
import { useDispatch } from 'react-redux'
import { setSelectedWeights } from '../../store/actions/filterActions'

const Weight = memo(({ weights, selectedWeights }) => {

    const [weightsState, setWeightsState] = useState([])

    useEffect(() => {
        setWeightsState(selectedWeights)
    }, [selectedWeights])

    const dispatch = useDispatch()

    const onWeightChange = e => {
        let selectedWeights = [...weightsState]
        e.checked ? selectedWeights.push(e.value) : selectedWeights.splice(selectedWeights.indexOf(e.value), 1)
        setWeightsState(selectedWeights)

        dispatch(setSelectedWeights(selectedWeights))
    }

    const weightsGenerator = weight => (
        <div key={weight} className="p-field-checkbox">
            <Checkbox inputId={`weight${weight}`} value={weight} onChange={onWeightChange}
                      checked={weightsState.indexOf(`${weight}`) !== -1}/>
            <label htmlFor={`weight${weight}`}>{weight} грамм</label>
        </div>
    )

    return (
        <div className="filters__weight">
            <h5 className="filters__title">Вес продукта (нетто)</h5>
            {
                weights.map(weight => (
                    weightsGenerator(weight)
                ))
            }
        </div>
    )
})

export default Weight