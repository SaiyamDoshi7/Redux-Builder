import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const delay = (ms)=> new Promise(res=>setTimeout(res,ms));

export const fetchLeaves = createAsyncThunk(
  "leave/fetchLeaves",
  async ()=>{
    await delay(500);
    return JSON.parse(localStorage.getItem("leaves")) || [];
  }
);

export const applyLeave = createAsyncThunk(
  "leave/applyLeave",
  async (leave)=>{
    await delay(500);
    const newLeave = {
      ...leave,
      id: Date.now(),
      status:"Pending",
      applied:new Date().toLocaleDateString()
    };

    const data = JSON.parse(localStorage.getItem("leaves")) || [];
    localStorage.setItem("leaves", JSON.stringify([...data,newLeave]));
    return newLeave;
  }
);

export const deleteLeave = createAsyncThunk(
  "leave/deleteLeave",
  async (id)=>{
    await delay(400);
    let data = JSON.parse(localStorage.getItem("leaves")) || [];
    data = data.filter(l=>l.id!==id);
    localStorage.setItem("leaves", JSON.stringify(data));
    return id;
  }
);

export const approveLeave = createAsyncThunk(
  "leave/approveLeave",
  async ({id,status})=>{
    await delay(400);
    let data = JSON.parse(localStorage.getItem("leaves")) || [];
    data = data.map(l=> l.id===id ? {...l,status} : l);
    localStorage.setItem("leaves", JSON.stringify(data));
    return {id,status};
  }
);

const leaveSlice = createSlice({
  name:"leave",
  initialState:{
    leaves:[],
    loading:false,
    error:null
  },
  extraReducers:(builder)=>{
    builder

    .addCase(fetchLeaves.pending,(s)=>{s.loading=true})
    .addCase(fetchLeaves.fulfilled,(s,a)=>{
      s.loading=false;
      s.leaves=a.payload
    })

    .addCase(applyLeave.fulfilled,(s,a)=>{
      s.leaves.push(a.payload)
    })

    .addCase(deleteLeave.fulfilled,(s,a)=>{
      s.leaves = s.leaves.filter(l=>l.id!==a.payload)
    })

    .addCase(approveLeave.fulfilled,(s,a)=>{
      s.leaves = s.leaves.map(l=>
        l.id===a.payload.id ? {...l,status:a.payload.status} : l
      )
    })
  }
});

export default leaveSlice.reducer;