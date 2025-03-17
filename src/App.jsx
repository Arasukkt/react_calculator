import React,{useState} from 'react'

const App = () => {
  const[value,setValue]=useState('');
  return (
    <div>
      <div className="container">
        <div className="calculator">
          <form action="">
            <div className="display">
              <input type="text" id='inputbox' value={value}/>
            </div>
            <div className="">
              <input type="button" value="AC" onClick={x =>setValue('')} />
              <input type="button" value="DE" onClick={x =>setValue(value.slice(0,-1))}/>
              <input type="button" value="." onClick={x=>setValue(value+x.target.value)}/>
              <input type="button" value="/"  onClick={x=>setValue(value+x.target.value)} />
            </div>
            <div className="">
              <input type="button" value="7" onClick={x=>setValue(value+x.target.value)}/>
              <input type="button" value="8" onClick={x=>setValue(value+x.target.value)} />
              <input type="button" value="9" onClick={x=>setValue(value+x.target.value)} />
              <input type="button" value="*" onClick={x=>setValue(value+x.target.value)} />
            </div>
            <div className="">
              <input type="button" value="4" onClick={x=>setValue(value+x.target.value)} />
              <input type="button" value="5"  onClick={x=>setValue(value+x.target.value)}/>
              <input type="button" value="6" onClick={x=>setValue(value+x.target.value)} />
              <input type="button" value="+" onClick={x=>setValue(value+x.target.value)} />
            </div>
            <div className="">
              <input type="button" value="1" onClick={x=>setValue(value+x.target.value)} />
              <input type="button" value="2" onClick={x=>setValue(value+x.target.value)} />
              <input type="button" value="3" onClick={x=>setValue(value+x.target.value)} />
              <input type="button" value="-" onClick={x=>setValue(value+x.target.value)} />
            </div>
            <div className="">
              <input type="button" value="00" onClick={x=>setValue(value+x.target.value)} />
              <input type="button" value="0"  onClick={x=>setValue(value+x.target.value)} />
              <input type="button" className='equal' value="=" onClick={x=>setValue(eval(value))} />
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default App
