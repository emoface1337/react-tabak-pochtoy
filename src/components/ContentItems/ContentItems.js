import React from 'react'
import ContentItemCard from '../ContentItemCard/ContentItemCard'

const ContentItems = ({ contentItems }) => {
    return (
        <div className="content__items">
            <div className="p-grid">
                {
                    contentItems && contentItems.map(item => (
                        <ContentItemCard key={item.id} item={item}/>
                    ))
                }
            </div>
        </div>
    )
}

export default ContentItems