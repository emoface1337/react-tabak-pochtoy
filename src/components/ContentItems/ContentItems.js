import React from 'react'

import ContentItem from '../ContentItem/ContentItem'

const ContentItems = () => {
    return (
        <div className="content__items">
            <div className="p-grid">
                <ContentItem/>
                <ContentItem/>
                <ContentItem/>
                <ContentItem/>
            </div>
        </div>
    )
}

export default ContentItems