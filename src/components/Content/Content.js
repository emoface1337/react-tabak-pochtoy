import React from 'react'
import Filters from '../Filters/Filters'
import ContentItems from '../ContentItems/ContentItems'

const Content = () => {
    return (
        <>
            <div className="p-col-3">
                <Filters/>
            </div>
            <div className="p-col">
                <ContentItems/>
            </div>
        </>
    )
}

export default Content