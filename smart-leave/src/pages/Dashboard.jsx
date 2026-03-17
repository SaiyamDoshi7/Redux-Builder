import { useEffect,useState } from "react";
import { useDispatch } from "react-redux";
import { fetchLeaves } from "../features/leaveSlice";
import AddLeave from "../components/AddLeave";
import LeaveList from "../components/LeaveList";
import SearchFilter from "../components/SearchFilter";

export default function Dashboard(){

const dispatch = useDispatch()

const [search,setSearch]=useState("")
const [status,setStatus]=useState("")

useEffect(()=>{
dispatch(fetchLeaves())
},[])

return(
<div className="container mt-4">

<h2 className="mb-4">Smart Leave Dashboard</h2>

<SearchFilter setSearch={setSearch} setStatus={setStatus}/>

<AddLeave/>

<LeaveList search={search} status={status}/>

</div>
)
}