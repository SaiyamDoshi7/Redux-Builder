import { useDispatch } from "react-redux";
import { deleteLeave, approveLeave } from "../features/leaveSlice";

export default function LeaveCard({ leave }) {

const dispatch = useDispatch()

const duration =
(Math.ceil((new Date(leave.end)-new Date(leave.start))/(1000*60*60*24))+1)

return (
<tr>

<td>{leave.name}</td>
<td>{leave.type}</td>
<td>{duration} Days</td>

<td>
<span className={
leave.status==="Approved" ? "badge bg-success":
leave.status==="Rejected" ? "badge bg-danger":
"badge bg-warning text-dark"
}>
{leave.status}
</span>
</td>

<td>

<button className="btn btn-sm btn-success me-2"
onClick={()=>dispatch(approveLeave({id:leave.id,status:"Approved"}))}>
Approve
</button>

<button className="btn btn-sm btn-warning me-2"
onClick={()=>dispatch(approveLeave({id:leave.id,status:"Rejected"}))}>
Reject
</button>

<button className="btn btn-sm btn-danger"
onClick={()=>dispatch(deleteLeave(leave.id))}>
Delete
</button>

</td>

</tr>
)
}