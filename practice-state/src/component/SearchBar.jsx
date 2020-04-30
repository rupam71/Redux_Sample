import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectedText, newText, addTodo } from './../action';

class SearchBar extends Component {
    

     onFormSubmit = e => {
        e.preventDefault();
     }

    render() { 

        

        return ( 
            <div className='ui segment'>
                <form className="ui form"
                onSubmit={this.onFormSubmit}
                >
                    <div className="field">
                        <label> Gif Search </label>
                        <input 
                        type='text'
                     //   value={this.props.selectedTextReducer.title}
                        onChange ={(text)=>
                            this.props.addTodo(text.target.value)
                        }
                        />
                       
                    </div>

                </form>
                
                {this.props.textReducer.map(text=>{
                  return (<div key={text.id}>
                      <h2>{text.title}</h2>
                      <button
                      onClick={()=>this.props.selectedText(text)}
                      >
                          Select
                      </button>
                  </div>)
              })}



            </div>
         );
    }
}

const mapStateToProps = state =>{
    console.log(state);
    return {selectedTextReducer : state.selectedTextReducer,
        textReducer: state.textReducer}
}
 
export default connect (mapStateToProps,{ selectedText, newText, addTodo })(SearchBar);