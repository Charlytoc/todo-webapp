import React from "react"

const InputTodo = ({funcionTocar, agregarTodo}) => {
    return (<>
            <form>
        <div className="mb-3 container-flex d-flex justify-content-center">
          <input onClick={funcionTocar} type="text" className="form-control w-50 d-flex align-items-start" id="exampleInputEmail1"/>
		  <button onClick={agregarTodo} type="submit" className="btn btn-primary d-flex align-items-end">Submit</button>
        </div>
      </form>
      </>
  )
}

export default InputTodo;