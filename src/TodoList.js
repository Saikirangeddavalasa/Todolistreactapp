import React from 'react'

const TodoList = ({sai,deleateHandler}) => {
  return (
    <div>
        {sai.map((obj,index) =>
             <div key={index}>
                <h4>{obj} &nbsp; <button onClick={() => deleateHandler(index)}>Delete</button></h4>
             </div>
        )}
    </div>
  )
}
export default TodoList
