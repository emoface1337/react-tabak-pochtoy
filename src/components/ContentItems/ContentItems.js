import React from 'react'
import _ from 'lodash'

import ContentItem from '../ContentItem/ContentItem'

const ContentItems = ({ contentItems }) => {
    return (
        <div className="content__items">
            <div className="p-grid">
                {
                    contentItems && _.map(contentItems, item => (
                        <ContentItem key={item.id} item={item}/>
                    ))
                }
            </div>
        </div>
    )
}

export default ContentItems