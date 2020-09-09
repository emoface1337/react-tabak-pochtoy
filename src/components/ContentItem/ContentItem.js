import React from 'react'

import { Card } from 'primereact/card'
import { Button } from 'primereact/button'

const ContentItem = () => {
    return (
        <div className="p-col-4">
            <Card title="Табак Al Fakher - Two Apples (Двойное Яблоко, 50 грамм, Акциз)"
                  style={{ width: '100%' }}
                  className="ui-card-shadow items__card" header={<img alt="Card"
                                                                      src='https://tabak-pochtoy.ru/wa-data/public/shop/products/22/61/16122/images/66210/66210.215.jpg'/>}
                  footer={<span><Button label="В корзину"/></span>}>
                <p className="p-m-0">Lorem ipsum dolor sit amet,
                    consectetur adipisicing elit. Inventore sed consequuntur error repudiandae
                    numquam deserunt</p>
            </Card>
        </div>
    )
}

export default ContentItem