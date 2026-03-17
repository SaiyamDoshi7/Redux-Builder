export default function SearchFilter({ setSearch,setStatus }) {

return (
<div className="d-flex gap-3 mb-3">

<input
className="form-control"
placeholder="Search by name..."
onChange={(e)=>setSearch(e.target.value)}
/>

<select
className="form-select"
onChange={(e)=>setStatus(e.target.value)}
>
<option value="">All Status</option>
<option>Pending</option>
<option>Approved</option>
<option>Rejected</option>
</select>

</div>
)
}