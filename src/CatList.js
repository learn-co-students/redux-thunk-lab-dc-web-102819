import React from 'react'

const CatList = props => {
    const cats = props.catPics.map(cat => <img alt = '' key = {cat.id} src = {cat.url} />)
    return (
        <div>
            {cats}
        </div>
    )
}

export default CatList