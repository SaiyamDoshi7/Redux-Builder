import { useState } from "react";
import { useDispatch } from "react-redux";
import { applyLeave } from "../features/leaveSlice";

export default function AddLeave(){

const dispatch = useDispatch()

const [form,setForm]=useState({
name:"",
type:"Sick Leave",
start:"",
end:"",
reason:""
})

const submit=e=>{
e.preventDefault()
dispatch(applyLeave(form))
}

return(
<div className="card p-3 mb-4">

<h4>Apply Leave</h4>

<form onSubmit={submit} className="row g-2">

<input className="form-control"
placeholder="Employee Name"
onChange={e=>setForm({...form,name:e.target.value})}/>

<select className="form-select"
onChange={e=>setForm({...form,type:e.target.value})}>
<option>Sick Leave</option>
<option>Casual Leave</option>
<option>Emergency Leave</option>
<option>Vacation Leave</option>
<option>Half-Day Leave</option>
</select>

<input type="date" className="form-control"
onChange={e=>setForm({...form,start:e.target.value})}/>

<input type="date" className="form-control"
onChange={e=>setForm({...form,end:e.target.value})}/>

<textarea className="form-control"
placeholder="Reason"
onChange={e=>setForm({...form,reason:e.target.value})}/>

<button className="btn btn-primary">
Apply Leave
</button>

</form>

</div>
)
}