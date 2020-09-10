import React from 'react'

import ContentItem from '../ContentItem/ContentItem'

const ContentItems = ({ contentItems }) => {
    return (
        <div className="content__items">
            <div className="p-grid">
                {
                    contentItems && contentItems.map(item => (
                        <ContentItem item={item}/>
                    ))
                }
            </div>
        </div>
    )
}

export default ContentItems