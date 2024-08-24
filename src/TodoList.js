import React from 'react'

const TodoList = ({todoItem,editHandler,deleteHandler}) => {
  return (
    <div >
      {todoItem.map((todo,index) => 
      <div key={index} > 
        <p className='itemCont' >{todo} <div> <button onClick={()=>editHandler(index)} >Edit</button>   <button onClick={() => deleteHandler(index)}  >Delete</button> </div> </p>
        </div> )}
    </div>
  )
}

export default TodoList ;
