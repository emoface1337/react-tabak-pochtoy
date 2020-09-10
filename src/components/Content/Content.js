import React, { useEffect } from 'react'
import Filters from '../Filters/Filters'
import ContentItems from '../ContentItems/ContentItems'
import { useDispatch, useSelector } from 'react-redux'
import { loadItems } from '../store/actions/contentActions'

const Content = () => {

    const dispatch = useDispatch()
    const { contentItems, brands, weights } = useSelector(({ contentReducer }) => contentReducer)

    useEffect(() => {
        dispatch(loadItems())
    }, [dispatch])

    return (
        <>
            <div className="p-col-3">
                <Filters brands={brands} weights={weights}/>
            </div>
            <div className="p-col">
                <ContentItems contentItems={contentItems}/>
            </div>
        </>
    )
}

export default Content