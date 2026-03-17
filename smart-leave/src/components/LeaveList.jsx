import { useSelector } from "react-redux";
import LeaveCard from "./LeaveCard";

export default function LeaveList({ search,status }) {

const { leaves,loading } = useSelector(s=>s.leave)

const filtered = leaves.filter(l=>
l.name.toLowerCase().includes(search.toLowerCase()) &&
(status ? l.status===status : true)
)

if(loading)
return <div className="spinner-border"></div>

return (

<table className="table table-bordered">

<thead className="table-dark">
<tr>
<th>Name</th>
<th>Type</th>
<th>Duration</th>
<th>Status</th>
<th>Actions</th>
</tr>
</thead>

<tbody>
{filtered.map(l=>(
<LeaveCard key={l.id} leave={l}/>
))}
</tbody>

</table>

)
}