import React from 'react'
import { Button } from 'primereact/button'

const ContentItem = ({ item }) => {

    const { id, name, imageUrl, description, price } = item

    return (
        <div className="p-col-4">
            <div className="item__card p-card">
                <div className="item__card-image"><img src={imageUrl} alt={name}/></div>
                <div className="item__card-title">{name}</div>
                <div className="item__card-description">{description}</div>
                <div className="item__card-price">{price} ₽</div>
                <div className="item__card-add"><Button label="В корзину"/></div>
            </div>
        </div>
    )
}

export default ContentItem