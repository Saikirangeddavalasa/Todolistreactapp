import React,{useState} from 'react'
import TodoList from './TodoList';
export const App = () => {
  const [value,setValue] = useState("");
  const [list,setList] = useState([]);
  const changeHandler = e => {
    setValue(e.target.value)
  }
  const submitHandler = e => {
    e.preventDefault()
    setList([...list,value]); {/* IF U DONTADD previous list previous data will not be printed*/}
    setValue(""); {/*Because after typingvalue in input and submitting, the input should be empty */}
  }
  const deleateHandler = (indexvalue) => {
    setList(list.filter((_,index) => index != indexvalue));
    {/* filter prints only if index != indexvalue else ifthe statement is
      false it ignores*/}
  }
  return (
    <div>
      <center>
        <div className='card'>
          <div className='card-body'>
            <h4 className='card-title'>Todo Management Applications</h4> {/* .cardtitle is used for headings*/}
            <form onSubmit={submitHandler}>
              <input size={30} type='text' value={value} onChange={changeHandler}/> &nbsp;&nbsp;
              <p>task = {value}</p>
              <input type='submit' value='Add'/>
            </form><br></br>
            <TodoList sai={list} deleateHandler={deleateHandler}/> {/* list is the changed value; setList is just for setting something*/}

          </div>
        </div>        
      </center>
    </div>
  )
}

export default App