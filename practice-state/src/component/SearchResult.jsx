import React, { Component } from 'react';
import './GifList.css';
import { connect } from 'react-redux';

class SearchResult extends Component {
    state = { 
        term : "Abdul"
     }

    

    render() { 

        
        
        // const gify = this.props.selectedTextReducer.map( gif =>{
        //     return (
        //     <img alt={gif.title}
        //     key={gif.id}    
        //     src={gif.images.original.url}
        //     />
        //    )
        // })

        return ( 
            <div className="gif-list">
                <h1>{this.props.selectedTextReducer.title}</h1>
                <h1>this.props.selectedTextReducer</h1>
            </div>
            );
    }
}

const mapStateToProps = state =>{
    console.log(state);
    return {selectedTextReducer : state.selectedTextReducer}
  }
   
  export default connect(mapStateToProps)(SearchResult);
