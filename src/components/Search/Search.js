import React, { useEffect, useState } from 'react'
import { AutoComplete } from 'primereact/autocomplete'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const Search = () => {

    const [content, setContent] = useState([])
    const [selectedItem, setSelectedItem] = useState(null)
    const [filteredItems, setFilteredItems] = useState([])

    const { contentItems } = useSelector(({ contentReducer }) => contentReducer)

    useEffect(() => {
        setContent(contentItems)
    }, [contentItems])

    const searchCountry = (event) => {
        let filteredCountries
        if (!event.query.trim().length) {
            filteredCountries = [...content]
        } else {
            filteredCountries = content.filter(item => item.name.toLowerCase().includes(event.query.toLowerCase())
            )
        }

        setFilteredItems(filteredCountries)
    }

    const itemTemplate = item => (
        <div>
            <Link to={`/tobacco/${item.id}`}>{item.name}</Link>
        </div>
    )

    return (
            <AutoComplete value={selectedItem} suggestions={filteredItems} field="name"
                          completeMethod={searchCountry} onChange={(e) => setSelectedItem(e.value)} className="header__search" itemTemplate={itemTemplate}/>
    )
}

export default Search