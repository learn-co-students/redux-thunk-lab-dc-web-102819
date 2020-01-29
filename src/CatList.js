import React from 'react'
import { connect } from 'react-redux'

const CatList = ({catPics}) => {
    // debugger
    return <ul>
        {catPics.map(pic => <li><img src={pic.url} key={pic.id} alt={pic.id} /></li>)}
    </ul>
}


const mapStateToProps = ({cats}) => {
    return {catPics: cats}
}

export default connect(mapStateToProps)(CatList)