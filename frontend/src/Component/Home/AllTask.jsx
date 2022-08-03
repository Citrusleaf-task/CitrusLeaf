import React, {useState}from 'react'
import { Link } from 'react-router-dom';



const AllTask = () => {

    const [task,setTask] = useState("");

  const api = "http://localhost:5000/";
  const fatchdata = async () => {      
  try{
      const response1 = await fetch(api);
      const data = await response1.json(); 
      setTask(data.response);
    //   console.log(Data);
  }
  catch(error){
      console.log(error);
    }
  }
  fatchdata();
console.log(task)

const deleteUser = async id => {
  

}

  return (
    <div className='container'>
      <div className='py-4'>
        <h1>All Task</h1>
        <table class="table border shadow">
          <thead class="thead-dark">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">User Name</th>
              <th scope="col">Email</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            
            
                <tr>
                  <th scope="row"></th>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td>
                    <button  class="btn btn-primary " style={{ marginRight: "10px" }}>View</button>
                    <button  class="btn btn-outline-primary " style={{ marginRight: "10px" }}>Edit</button>
                    <button  class="btn btn-danger " style={{ marginRight: "10px" }} onClick={() => deleteUser()}>Delete</button>
                  </td>
                </tr>
              
            
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default AllTask