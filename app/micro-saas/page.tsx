"use client";
import {useState} from "react";

const features=["Turn one repetitive task into a repeatable workflow","Track work, status and next action in one place","Generate a simple client-ready result","Measure usage before adding complexity"];

export default function MicroSaaS(){
 const [started,setStarted]=useState(false);
 const [task,setTask]=useState("");
 return <main style={{minHeight:"100vh",padding:"40px 22px",fontFamily:"system-ui",background:"#0b0d12",color:"#f4f5f7"}}>
  <div style={{maxWidth:900,margin:"0 auto"}}>
   <p style={{opacity:.65}}>MICRO-SAAS REVENUE ENGINE • BUILD #2 • £0 BUILD TARGET</p>
   <h1 style={{fontSize:48,margin:"12px 0"}}>Automation Workflow Lab</h1>
   <p style={{fontSize:20,opacity:.8,maxWidth:680}}>A focused workspace for turning a repetitive business task into a measurable workflow. Start with one task, prove value, then add automation.</p>
   <section style={{display:"grid",gap:14,gridTemplateColumns:"repeat(auto-fit,minmax(210px,1fr))",margin:"30px 0"}}>{features.map(f=><div key={f} style={{padding:18,border:"1px solid #30343d",borderRadius:14}}>{f}</div>)}</section>
   <section style={{padding:24,border:"1px solid #30343d",borderRadius:16,background:"#11141b"}}>
    <h2>Free viability test</h2>
    <label style={{display:"block",marginBottom:8}}>What repetitive task should this workflow solve?</label>
    <input value={task} onChange={e=>setTask(e.target.value)} placeholder="e.g. qualify inbound leads" style={{width:"100%",padding:14,borderRadius:10,border:"1px solid #444",background:"#0b0d12",color:"white",boxSizing:"border-box"}}/>
    <button onClick={()=>setStarted(true)} disabled={!task.trim()} style={{marginTop:14,padding:"12px 18px",borderRadius:10,border:0,cursor:"pointer"}}>Start controlled test</button>
    {started&&<div style={{marginTop:20,padding:16,borderRadius:12,border:"1px solid #3b4655"}}><strong>Test started.</strong><p style={{opacity:.75}}>Status: VIABILITY TEST. Next: define input → transformation → output → customer value → payment test. No revenue or payment is claimed until independently verified.</p></div>}
   </section>
   <section style={{marginTop:24,padding:20,border:"1px solid #30343d",borderRadius:16}}><strong>Revenue gate</strong><p style={{opacity:.7}}>DISCOVERED → VIABILITY TEST → BUILD → PAYMENT TEST → REVENUE VERIFIED → STABILISE/AUTOMATE</p><p style={{opacity:.55}}>Payment integration is not connected here. No paid services are required for this MVP.</p></section>
  </div>
 </main>
}