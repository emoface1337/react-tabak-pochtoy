import React from 'react'
import { Checkbox } from 'primereact/checkbox'

const Filters = () => {
    return (
        <div className="filters">
            <h4 className="filters__title">
                Фильтр подбора
            </h4>
            <div className="filters__weight">
                <h5 className="filters__title">Вес продукта (нетто)</h5>
                <div className="p-field-checkbox">
                    <Checkbox inputId="weight1" name="city" value="50" checked={false}/>
                    <label htmlFor="weight1">50 грамм</label>
                </div>
                <div className="p-field-checkbox">
                    <Checkbox inputId="weight2" name="city" value="100" checked={false}/>
                    <label htmlFor="weight2">100 грамм</label>
                </div>
                <div className="p-field-checkbox">
                    <Checkbox inputId="weight3" name="city" value="250" checked={false}/>
                    <label htmlFor="weight3">200 грамм</label>
                </div>
            </div>
            <div className="filters__name">
                <h5 className="filters__title">Марка</h5>
                <div className="p-field-checkbox">
                    <Checkbox inputId="name1" name="city" value="Burn" checked={false}/>
                    <label htmlFor="name1">Burn</label>
                </div>
                <div className="p-field-checkbox">
                    <Checkbox inputId="name2" name="city" value="Al Fakher" checked={false}/>
                    <label htmlFor="name2">Al Fakher</label>
                </div>
                <div className="p-field-checkbox">
                    <Checkbox inputId="name3" name="city" value="Spectrum" checked={false}/>
                    <label htmlFor="name3">Spectrum</label>
                </div>
            </div>
        </div>
    )
}

export default Filters