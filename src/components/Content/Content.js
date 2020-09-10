import React, { useEffect } from 'react'
import Filters from '../Filters/Filters'
import ContentItems from '../ContentItems/ContentItems'
import { useDispatch, useSelector } from 'react-redux'
import { loadItems } from '../store/actions/contentActions'
import Spinner from '../Spinner/Spinner'

const Content = ({ contentItems, isLoading, error }) => {

    if (error)
        return <h2>Ошибка</h2>

    if (isLoading)
        return <Spinner/>

    return (
        <ContentItems contentItems={contentItems}/>
    )
}

const ContentContainer = () => {

    const dispatch = useDispatch()
    const { contentItems, isLoading, error } = useSelector(({ contentReducer }) => contentReducer)
    const { selectedBrands, selectedWeights } = useSelector(({ filterReducer }) => filterReducer)

    useEffect(() => {
        dispatch(loadItems(selectedBrands, selectedWeights))
    }, [dispatch, selectedBrands, selectedWeights])

    return (
        <>
            <div className="p-col-3">
                <Filters/>
            </div>
            <div className="p-col">
                <Content contentItems={contentItems} isLoading={isLoading} error={error}/>
            </div>
        </>
    )
}

export default ContentContainer