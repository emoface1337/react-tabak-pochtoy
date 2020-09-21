import React from 'react'
import _ from 'lodash'

import ContentItemCard from '../ContentItemCard/ContentItemCard'

const ContentItems = ({ contentItems }) => {
    return (
        <div className="content__items">
            <div className="p-grid">
                {
                    contentItems && _.map(contentItems, item => (
                        <ContentItemCard key={item.id} item={item}/>
                    ))
                }
            </div>
        </div>
    )
}

export default ContentItems