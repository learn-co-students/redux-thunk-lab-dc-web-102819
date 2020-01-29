import React, { Component } from 'react';
import { connect } from 'react-redux'
import { fetchCats } from './actions/catActions'
import CatList from './CatList'

class App extends Component {   

  componentDidMount() {
    // console.log(this.props)
    this.props.fetchCats()
  }
  
  render() {
    // console.log(this.props.catPics)
    return (
      <div>
        <h1>CatBook</h1>
        <CatList catPics={this.props.catPics}/>
      </div>
    );
  }
}

const mapStateToProps = ({cats, loading}) => {
  return {
    catPics: cats,
    loading
  }
}

export default connect(mapStateToProps, {fetchCats})(App)