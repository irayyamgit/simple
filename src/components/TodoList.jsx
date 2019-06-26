import React, { Component } from 'react'
import TodoItem from './TodoItem'

export default class TodoList extends Component {
    styles={
        color:"#ff4500",
        forntWeitght:"solid",
        // fontFamily: 'Libre Baskerville serif', 
        // fontFamily: 'Playfair Display', 
        fontFamily: 'Anton ', 
        
       
     }
    render() {
        const {items,clearList,handleDelete,handleEdit} =this.props;
        return (
            <ul className="list-group my-5">
                <h3 className="text-capitalize text-center" style={this.styles}>todo list</h3>
                {items.map(item =>{
                    return (
                    <TodoItem 
                    key={item.id} 
                    title={item.title}
                    handleDelete={()=>handleDelete(item.id)}
                    handleEdit={()=>handleEdit(item.id)}
                    />)
                })}
             <button
              className="btn btn-danger text-capitalize btn-block mt-5" type="button"
             onClick={clearList}
             >clear list</button>
            </ul>
        )
    }
}
