import { useState, useRef, useEffect } from "react";
const WORKER_URL = "https://vijai-worker.vijstorez46.workers.dev";
const ADMIN_EMAIL = "admin@vijai.com";
const ADMIN_PASS = "vij@admin123";
const store = {
  get: (k) => { try { return JSON.parse(localStorage.getItem(k)); } catch { return null; } },
  set: (k, v) => { try { localStorage.setItem(k, JSON.stringify(v)); } catch {} },
};
const C = {
  bg:"#080810",surface:"#0f1117",surface2:"#161822",border:"#1e2235",
  accent:"#00e5ff",accent2:"#7b2fff",text:"#e8eaf0",textMuted:"#6b7280",
  textDim:"#3d4455",gold:"#ffd700",danger:"#ff4757",green:"#4ade80",
};
const Send = () => <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>;
const Menu = () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="18" x2="21" y2="18"/></svg>;
const X = () => <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>;
const Plus = () => <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>;
const Crown = () => <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><path d="M2 20h20v2H2zM4 18l3-9 5 4 5-4 3 9H4z"/></svg>;
const Logout = () => <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/></svg>;
const ChatIco = () => <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>;
const Trash = () => <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2"/></svg>;
const Shield = () => <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>;
const Users = () => <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>;
const SettingsIco = () => <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>;
const UserIco = () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>;
export default function VijAI() {
  const [screen, setScreen] = useState("login");
  const [user, setUser] = useState(null);
  const [form, setForm] = useState({ name:"", email:"", password:"" });
  const [err, setErr] = useState("");
  const [chats, setChats] = useState([]);
  const [activeId, setActiveId] = useState(null);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [sidebar, setSidebar] = useState(true);
  const [msgCount, setMsgCount] = useState(0);
  const [upgradeOpen, setUpgradeOpen] = useState(false);
  const [upiTx, setUpiTx] = useState("");
  const [upgraded, setUpgraded] = useState(false);
  const [adminTab, setAdminTab] = useState("overview");
  const [settings, setSettings] = useState(() => store.get("vijai_settings") || {
    freeLimit:30, upiId:"9949713734@ibl", price:50,
    aiName:"Vij AI", tagline:"Next-gen intelligence. No filters.",
    welcomeMsg:"Ask me anything. I'll give you answers worth reading.",
    workerUrl: WORKER_URL
  });
  const [settingsSaved, setSettingsSaved] = useState(false);
  const endRef = useRef(null);
  const taRef = useRef(null);
  const FREE_LIMIT = settings.freeLimit;

  useEffect(() => {
    const sess = store.get("vijai_session");
    if (sess) { setUser(sess); loadChats(sess.email); loadCount(sess.email); setScreen(sess.email === ADMIN_EMAIL ? "admin" : "chat"); }
  }, []);
  useEffect(() => { endRef.current?.scrollIntoView({ behavior:"smooth" }); }, [chats, activeId, loading]);

  const loadCount = (email) => {
    const today = new Date().toDateString();
    if (store.get(`vijai_date_${email}`) !== today) { store.set(`vijai_count_${email}`, 0); store.set(`vijai_date_${email}`, today); setMsgCount(0); }
    else setMsgCount(store.get(`vijai_count_${email}`) || 0);
  };
  const bumpCount = (email) => {
    const n = msgCount+1; setMsgCount(n);
    store.set(`vijai_count_${email}`, n); store.set(`vijai_date_${email}`, new Date().toDateString());
  };
  const loadChats = (email) => {
    const all = store.get(`vijai_chats_${email}`) || [];
    setChats(all);
    if (all.length) setActiveId(all[0].id); else newChat(email, []);
  };
  const saveChats = (email, u) => store.set(`vijai_chats_${email}`, u);
  const newChat = (email=user?.email, base=chats) => {
    const c = { id:Date.now().toString(), title:"New Chat", messages:[] };
    const u = [c,...base]; setChats(u); setActiveId(c.id); saveChats(email, u); return c;
  };
  const delChat = (id) => {
    const u = chats.filter(c=>c.id!==id); setChats(u); saveChats(user.email, u);
    if (activeId===id) { if (u.length) setActiveId(u[0].id); else newChat(user.email, []); }
  };
  const register = () => {
    const { name, email, password } = form;
    if (!name||!email||!password) return setErr("All fields required.");
    if (password.length < 6) return setErr("Password min 6 chars.");
    const users = store.get("vijai_users") || {};
    if (users[email]) return setErr("Email already exists.");
    users[email] = { name, email, password, pro:false };
    store.set("vijai_users", users);
    const u = { name, email, pro:false };
    store.set("vijai_session", u); setUser(u); loadChats(email); loadCount(email); setScreen("chat"); setErr("");
  };
  const login = () => {
    const { email, password } = form;
    if (!email||!password) return setErr("Enter email and password.");
    if (email===ADMIN_EMAIL && password===ADMIN_PASS) {
      const u = { name:"Admin", email:ADMIN_EMAIL, pro:true, isAdmin:true };
      store.set("vijai_session", u); setUser(u); setScreen("admin"); setErr(""); return;
    }
    const users = store.get("vijai_users") || {};
    const found = users[email];
    if (!found||found.password!==password) return setErr("Wrong email or password.");
    const u = { name:found.name, email, pro:found.pro };
    store.set("vijai_session", u); setUser(u); loadChats(email); loadCount(email); setScreen("chat"); setErr("");
  };
  const logout = () => { store.set("vijai_session",null); setUser(null); setChats([]); setActiveId(null); setScreen("login"); setForm({name:"",email:"",password:""}); };
  const send = async () => {
    if (!input.trim()||loading) return;
    if (!user.pro && msgCount >= FREE_LIMIT) { setUpgradeOpen(true); return; }
    const text = input.trim(); setInput("");
    const userMsg = { role:"user", content:text, ts:Date.now() };
    const updated = chats.map(c => c.id!==activeId ? c : { ...c, messages:[...c.messages, userMsg], title:c.messages.length===0?text.slice(0,38):c.title });
    setChats(updated); saveChats(user.email, updated); bumpCount(user.email); setLoading(true);
    try {
      const history = (chats.find(c=>c.id===activeId)?.messages||[]).map(m=>({role:m.role,content:m.content}));
      const workerUrl = settings.workerUrl || WORKER_URL;
      const res = await fetch(workerUrl, {
        method:"POST", headers:{"Content-Type":"application/json"},
        body: JSON.stringify({
          system:`You are ${settings.aiName}, a next-generation AI assistant. Be intelligent, helpful and sharp. Use markdown when helpful. Never mention Claude or Anthropic. You are ${settings.aiName}.`,
          messages:[...history, {role:"user",content:text}]
        })
      });
      const data = await res.json();
      const reply = data.content?.[0]?.text || "Sorry, try again.";
      const botMsg = { role:"assistant", content:reply, ts:Date.now() };
      const final = updated.map(c => c.id!==activeId ? c : { ...c, messages:[...c.messages, botMsg] });
      setChats(final); saveChats(user.email, final);
    } catch {
      const errMsg = { role:"assistant", content:"⚠️ Connection error. Try again.", ts:Date.now() };
      const final = updated.map(c => c.id!==activeId ? c : { ...c, messages:[...c.messages, errMsg] });
      setChats(final); saveChats(user.email, final);
    }
    setLoading(false);
  };
  const activateUpgrade = () => {
    if (!upiTx.trim()) return;
    const users = store.get("vijai_users")||{};
    if (users[user.email]) { users[user.email].pro=true; store.set("vijai_users",users); }
    const u = {...user,pro:true}; store.set("vijai_session",u); setUser(u); setUpgraded(true);
    setTimeout(()=>{ setUpgradeOpen(false); setUpgraded(false); setUpiTx(""); },2000);
  };
  const saveSettings = () => { store.set("vijai_settings",settings); setSettingsSaved(true); setTimeout(()=>setSettingsSaved(false),2000); };
  const md = (t) => t
    .replace(/```[\w]*\n([\s\S]*?)```/g,(_,c)=>`<pre class="cb"><code>${c.replace(/</g,"&lt;")}</code></pre>`)
    .replace(/`([^`]+)`/g,'<code class="ic">$1</code>')
    .replace(/\*\*(.+?)\*\*/g,"<strong>$1</strong>")
    .replace(/^### (.+)$/gm,"<h3>$1</h3>").replace(/^## (.+)$/gm,"<h2>$1</h2>")
    .replace(/^[\-\*] (.+)$/gm,"<li>$1</li>")
    .replace(/\n/g,"<br/>");
  const activeChat = chats.find(c=>c.id===activeId);
  const allUsers = store.get("vijai_users")||{};
  const userList = Object.values(allUsers);
  const remaining = FREE_LIMIT - msgCount;
  if (screen==="login"||screen==="register") return (
    <div style={{minHeight:"100vh",background:C.bg,color:C.text,fontFamily:"'Segoe UI',system-ui,sans-serif",display:"flex",alignItems:"center",justifyContent:"center",position:"relative",overflow:"hidden"}}>
      <div style={{position:"absolute",width:500,height:500,borderRadius:"50%",background:`radial-gradient(circle,rgba(0,229,255,0.06) 0%,transparent 70%)`,top:-200,left:-200,pointerEvents:"none"}}/>
      <div style={{position:"absolute",width:400,height:400,borderRadius:"50%",background:`radial-gradient(circle,rgba(123,47,255,0.07) 0%,transparent 70%)`,bottom:-100,right:-100,pointerEvents:"none"}}/>
      <div style={{background:C.surface,border:`1px solid ${C.border}`,borderRadius:20,padding:"36px 28px",width:"100%",maxWidth:400,position:"relative",zIndex:1,margin:"0 16px"}}>
        <div style={{display:"flex",alignItems:"center",gap:10,marginBottom:4}}>
          <div style={{width:42,height:42,borderRadius:12,background:`linear-gradient(135deg,${C.accent},${C.accent2})`,display:"flex",alignItems:"center",justifyContent:"center",fontSize:20,fontWeight:900,color:"#fff"}}>V</div>
          <span style={{fontSize:24,fontWeight:900}}>Vij<span style={{color:C.accent}}>AI</span></span>
        </div>
        <p style={{color:C.textMuted,fontSize:13,marginBottom:22}}>{settings.tagline}</p>
        <div style={{display:"flex",background:C.bg,borderRadius:10,padding:4,marginBottom:20,gap:4}}>
          {["login","register"].map(s=>(
            <button key={s} onClick={()=>{setScreen(s);setErr("");}} style={{flex:1,padding:"8px 0",border:"none",background:screen===s?C.surface2:"transparent",color:screen===s?C.text:C.textMuted,cursor:"pointer",borderRadius:8,fontSize:14,fontWeight:screen===s?600:500}}>{s==="login"?"Sign In":"Register"}</button>
          ))}
        </div>
        {screen==="register"&&<input style={{width:"100%",padding:"11px 14px",background:C.bg,border:`1px solid ${C.border}`,borderRadius:10,color:C.text,fontSize:14,outline:"none",fontFamily:"inherit",marginBottom:10}} placeholder="Full Name" value={form.name} onChange={e=>setForm({...form,name:e.target.value})}/>}
        <input style={{width:"100%",padding:"11px 14px",background:C.bg,border:`1px solid ${C.border}`,borderRadius:10,color:C.text,fontSize:14,outline:"none",fontFamily:"inherit",marginBottom:10}} placeholder="Email" type="email" value={form.email} onChange={e=>setForm({...form,email:e.target.value})}/>
        <input style={{width:"100%",padding:"11px 14px",background:C.bg,border:`1px solid ${C.border}`,borderRadius:10,color:C.text,fontSize:14,outline:"none",fontFamily:"inherit",marginBottom:10}} placeholder="Password" type="password" value={form.password} onChange={e=>setForm({...form,password:e.target.value})} onKeyDown={e=>e.key==="Enter"&&(screen==="login"?login():register())}/>
        {err&&<p style={{color:C.danger,fontSize:12,marginBottom:10}}>{err}</p>}
        <button onClick={screen==="login"?login:register} style={{width:"100%",padding:"12px",background:`linear-gradient(135deg,${C.accent},${C.accent2})`,border:"none",borderRadius:12,color:"#fff",fontSize:15,fontWeight:700,cursor:"pointer",marginBottom:10}}>{screen==="login"?"Sign In →":"Create Account →"}</button>
        <p style={{textAlign:"center",color:C.textMuted,fontSize:12}}>Free: {FREE_LIMIT} msgs/day · Pro ₹{settings.price}/month</p>
      </div>
    </div>
  );
  if (screen==="admin") return (
    <div style={{display:"flex",height:"100vh",background:C.bg,color:C.text,fontFamily:"'Segoe UI',system-ui,sans-serif"}}>
      <div style={{width:210,background:C.surface,borderRight:`1px solid ${C.border}`,display:"flex",flexDirection:"column",padding:"14px 10px",gap:5}}>
        <div style={{display:"flex",alignItems:"center",gap:8,padding:"6px 4px",marginBottom:8}}>
          <div style={{width:32,height:32,borderRadius:9,background:`linear-gradient(135deg,${C.accent},${C.accent2})`,display:"flex",alignItems:"center",justifyContent:"center",fontSize:15,fontWeight:900}}>V</div>
          <div><div style={{fontSize:14,fontWeight:800}}>Vij<span style={{color:C.accent}}>AI</span></div><div style={{fontSize:10,color:C.accent,fontWeight:700}}>ADMIN</div></div>
        </div>
        {[{id:"overview",icon:<Shield/>,label:"Overview"},{id:"users",icon:<Users/>,label:"Users"},{id:"settings",icon:<SettingsIco/>,label:"Settings"}].map(t=>(
          <button key={t.id} onClick={()=>setAdminTab(t.id)} style={{display:"flex",alignItems:"center",gap:8,padding:"10px 12px",borderRadius:10,border:"none",cursor:"pointer",fontSize:13,fontWeight:600,background:adminTab===t.id?C.surface2:"transparent",color:adminTab===t.id?C.accent:C.textMuted,textAlign:"left"}}>{t.icon}{t.label}</button>
        ))}
        <div style={{flex:1}}/>
        <button onClick={logout} style={{display:"flex",alignItems:"center",gap:7,padding:"10px 12px",border:`1px solid ${C.border}`,borderRadius:10,background:"none",color:C.textMuted,cursor:"pointer",fontSize:12}}><Logout/>Sign Out</button>
      </div>
      <div style={{flex:1,overflowY:"auto",padding:24}}>
        {adminTab==="overview"&&(<div>
          <h1 style={{fontSize:20,fontWeight:900,marginBottom:4}}>Overview</h1>
          <p style={{color:C.textMuted,fontSize:13,marginBottom:22}}>Welcome back, Admin 👋</p>
          <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(150px,1fr))",gap:12,marginBottom:24}}>
            {[{label:"Total Users",value:userList.length,color:C.accent},{label:"Pro Users",value:userList.filter(u=>u.pro).length,color:C.gold},{label:"Free Users",value:userList.filter(u=>!u.pro).length,color:C.textMuted},{label:"Free Limit",value:`${FREE_LIMIT}/day`,color:C.accent2},{label:"Pro Price",value:`₹${settings.price}/mo`,color:C.green},{label:"UPI ID",value:settings.upiId,color:C.textMuted}].map(s=>(
              <div key={s.label} style={{background:C.surface,border:`1px solid ${C.border}`,borderRadius:12,padding:"14px 16px"}}>
                <div style={{fontSize:10,color:C.textMuted,marginBottom:5,textTransform:"uppercase",letterSpacing:1}}>{s.label}</div>
                <div style={{fontSize:16,fontWeight:800,color:s.color,wordBreak:"break-all"}}>{s.value}</div>
              </div>
            ))}
          </div>
          <div style={{background:C.surface,border:`1px solid ${C.border}`,borderRadius:12,overflow:"hidden"}}>
            {userList.length===0?<div style={{padding:20,color:C.textMuted,textAlign:"center",fontSize:13}}>No users yet</div>:userList.slice(0,5).map((u,i)=>(
              <div key={i} style={{display:"flex",alignItems:"center",gap:10,padding:"11px 14px",borderBottom:i<userList.length-1?`1px solid ${C.border}`:"none"}}>
                <div style={{width:30,height:30,borderRadius:8,background:`linear-gradient(135deg,${C.accent},${C.accent2})`,display:"flex",alignItems:"center",justifyContent:"center",fontSize:12,fontWeight:700}}>{u.name?.[0]?.toUpperCase()}</div>
                <div style={{flex:1}}><div style={{fontSize:13,fontWeight:600}}>{u.name}</div><div style={{fontSize:11,color:C.textMuted}}>{u.email}</div></div>
                <div style={{fontSize:11,fontWeight:700,color:u.pro?C.gold:C.textMuted,background:u.pro?"rgba(255,215,0,0.08)":C.surface2,padding:"3px 10px",borderRadius:20}}>{u.pro?"PRO":"FREE"}</div>
              </div>
            ))}
          </div>
        </div>)}
        {adminTab==="users"&&(<div>
          <h1 style={{fontSize:20,fontWeight:900,marginBottom:18}}>All Users ({userList.length})</h1>
          <div style={{background:C.surface,border:`1px solid ${C.border}`,borderRadius:12,overflow:"hidden"}}>
            {userList.length===0?<div style={{padding:24,color:C.textMuted,textAlign:"center"}}>No users yet</div>:userList.map((u,i)=>(
              <div key={i} style={{display:"flex",alignItems:"center",gap:10,padding:"12px 14px",borderBottom:i<userList.length-1?`1px solid ${C.border}`:"none",flexWrap:"wrap"}}>
                <div style={{width:34,height:34,borderRadius:9,background:`linear-gradient(135deg,${C.accent},${C.accent2})`,display:"flex",alignItems:"center",justifyContent:"center",fontSize:14,fontWeight:700,flexShrink:0}}>{u.name?.[0]?.toUpperCase()}</div>
                <div style={{flex:1,minWidth:100}}><div style={{fontSize:13,fontWeight:600}}>{u.name}</div><div style={{fontSize:11,color:C.textMuted}}>{u.email}</div></div>
                <button onClick={()=>{const users=store.get("vijai_users")||{};users[u.email].pro=!users[u.email].pro;store.set("vijai_users",users);setSettings(s=>({...s}));}} style={{padding:"6px 12px",borderRadius:20,border:"none",cursor:"pointer",fontSize:11,fontWeight:700,background:u.pro?"rgba(255,215,0,0.1)":"rgba(0,229,255,0.1)",color:u.pro?C.gold:C.accent}}>{u.pro?"Revoke Pro":"Grant Pro"}</button>
                <button onClick={()=>{const users=store.get("vijai_users")||{};delete users[u.email];store.set("vijai_users",users);setSettings(s=>({...s}));}} style={{padding:"6px 10px",borderRadius:20,border:"none",cursor:"pointer",fontSize:11,background:"rgba(255,71,87,0.1)",color:C.danger}}>Delete</button>
              </div>
            ))}
          </div>
        </div>)}
        {adminTab==="settings"&&(<div style={{maxWidth:480}}>
          <h1 style={{fontSize:20,fontWeight:900,marginBottom:4}}>Settings</h1>
          <p style={{color:C.textMuted,fontSize:13,marginBottom:22}}>Change everything live</p>
          {[{label:"AI Name",key:"aiName"},{label:"Tagline",key:"tagline"},{label:"Welcome Message",key:"welcomeMsg"},{label:"UPI ID",key:"upiId"},{label:"Cloudflare Worker URL",key:"workerUrl"}].map(f=>(
            <div key={f.key} style={{marginBottom:14}}>
              <label style={{fontSize:11,color:C.textMuted,display:"block",marginBottom:5,textTransform:"uppercase",letterSpacing:0.8}}>{f.label}</label>
              <input value={settings[f.key]||""} onChange={e=>setSettings({...settings,[f.key]:e.target.value})} style={{width:"100%",padding:"10px 13px",background:C.bg,border:`1px solid ${C.border}`,borderRadius:10,color:C.text,fontSize:13,outline:"none",fontFamily:"inherit"}}/>
            </div>
          ))}
          <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:12,marginBottom:18}}>
            {[{label:"Free Limit/Day",key:"freeLimit",type:"number"},{label:"Pro Price ₹",key:"price",type:"number"}].map(f=>(
              <div key={f.key}>
                <label style={{fontSize:11,color:C.textMuted,display:"block",marginBottom:5,textTransform:"uppercase",letterSpacing:0.8}}>{f.label}</label>
                <input type={f.type} value={settings[f.key]} onChange={e=>setSettings({...settings,[f.key]:parseInt(e.target.value)||0})} style={{width:"100%",padding:"10px 13px",background:C.bg,border:`1px solid ${C.border}`,borderRadius:10,color:C.text,fontSize:13,outline:"none",fontFamily:"inherit"}}/>
              </div>
            ))}
          </div>
          <button onClick={saveSettings} style={{padding:"11px 26px",background:`linear-gradient(135deg,${C.accent},${C.accent2})`,border:"none",borderRadius:12,color:"#fff",fontSize:14,fontWeight:700,cursor:"pointer"}}>{settingsSaved?"✓ Saved!":"Save Settings"}</button>
        </div>)}
      </div>
    </div>
  );
  return (
    <div style={{display:"flex",height:"100vh",background:C.bg,color:C.text,fontFamily:"'Segoe UI',system-ui,sans-serif",overflow:"hidden"}}>
      <div style={{width:245,flexShrink:0,background:C.surface,borderRight:`1px solid ${C.border}`,display:"flex",flexDirection:"column",padding:"13px 10px",gap:7,transition:"margin 0.3s",marginLeft:sidebar?0:-245,overflow:"hidden"}}>
        <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:4,padding:"0 3px"}}>
          <div style={{display:"flex",alignItems:"center",gap:8}}>
            <div style={{width:30,height:30,borderRadius:9,background:`linear-gradient(135deg,${C.accent},${C.accent2})`,display:"flex",alignItems:"center",justifyContent:"center",fontSize:14,fontWeight:900}}>V</div>
            <span style={{fontSize:16,fontWeight:900}}>Vij<span style={{color:C.accent}}>AI</span></span>
          </div>
          <button onClick={()=>setSidebar(false)} style={{background:"none",border:"none",color:C.textMuted,cursor:"pointer",display:"flex"}}><X/></button>
        </div>
        <button onClick={()=>newChat()} style={{display:"flex",alignItems:"center",gap:7,padding:"9px 12px",background:`linear-gradient(135deg,rgba(0,229,255,0.08),rgba(123,47,255,0.08))`,border:`1px solid rgba(0,229,255,0.15)`,borderRadius:10,color:C.accent,cursor:"pointer",fontSize:13,fontWeight:600}}><Plus/>New Chat</button>
        <div style={{display:"flex",alignItems:"center",gap:9,padding:"9px",background:C.surface2,borderRadius:10}}>
          <div style={{width:30,height:30,borderRadius:8,background:`linear-gradient(135deg,${C.accent},${C.accent2})`,display:"flex",alignItems:"center",justifyContent:"center",fontSize:13,fontWeight:700,flexShrink:0}}>{user?.name?.[0]?.toUpperCase()}</div>
          <div style={{flex:1,minWidth:0}}><div style={{fontSize:12,fontWeight:600,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"}}>{user?.name}</div><div style={{fontSize:10,color:user?.pro?C.gold:C.textMuted,fontWeight:700}}>{user?.pro?"⭐ Pro":`${Math.max(0,remaining)} msgs left`}</div></div>
        </div>
        <div style={{flex:1,overflowY:"auto",display:"flex",flexDirection:"column",gap:2}}>
          {chats.map(c=>(<div key={c.id} onClick={()=>setActiveId(c.id)} style={{display:"flex",alignItems:"center",gap:7,padding:"8px 9px",borderRadius:8,cursor:"pointer",background:activeId===c.id?C.surface2:"transparent",color:activeId===c.id?C.text:C.textMuted,fontSize:12}}><ChatIco/><span style={{flex:1,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"}}>{c.title||"New Chat"}</span><button onClick={e=>{e.stopPropagation();delChat(c.id);}} style={{background:"none",border:"none",color:C.textDim,cursor:"pointer",display:"flex",padding:2}}><Trash/></button></div>))}
        </div>
        {!user?.pro&&<button onClick={()=>setUpgradeOpen(true)} style={{display:"flex",alignItems:"center",justifyContent:"center",gap:6,padding:"9px",background:"rgba(255,215,0,0.07)",border:`1px solid rgba(255,215,0,0.15)`,borderRadius:10,color:C.gold,cursor:"pointer",fontSize:12,fontWeight:700}}><Crown/>Upgrade Pro — ₹{settings.price}/mo</button>}
        <button onClick={logout} style={{display:"flex",alignItems:"center",justifyContent:"center",gap:6,padding:"8px",border:`1px solid ${C.border}`,borderRadius:10,background:"none",color:C.textMuted,cursor:"pointer",fontSize:12}}><Logout/>Sign Out</button>
      </div>
      <div style={{flex:1,display:"flex",flexDirection:"column",overflow:"hidden",minWidth:0}}>
        <div style={{display:"flex",alignItems:"center",gap:10,padding:"12px 16px",borderBottom:`1px solid ${C.border}`,background:C.surface,flexShrink:0}}>
          <button onClick={()=>setSidebar(!sidebar)} style={{background:"none",border:"none",color:C.textMuted,cursor:"pointer",display:"flex"}}><Menu/></button>
          <div style={{flex:1}}><div style={{fontSize:16,fontWeight:800}}>Vij<span style={{color:C.accent}}>AI</span></div><div style={{fontSize:10,color:C.textMuted}}>{settings.tagline}</div></div>
          {user?.pro?<div style={{display:"flex",alignItems:"center",gap:4,fontSize:11,color:C.gold,fontWeight:700,padding:"4px 10px",background:"rgba(255,215,0,0.07)",borderRadius:20,border:"1px solid rgba(255,215,0,0.15)"}}><Crown/>Pro</div>:<div style={{fontSize:11,color:C.textMuted,padding:"4px 10px",background:C.surface2,borderRadius:20,border:`1px solid ${C.border}`}}>{remaining} left</div>}
        </div>
        <div style={{flex:1,overflowY:"auto",padding:"20px 16px",display:"flex",flexDirection:"column",gap:16}}>
          {!activeChat?.messages?.length&&(<div style={{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",flex:1,textAlign:"center",gap:14,padding:"40px 16px"}}>
            <div style={{width:66,height:66,borderRadius:18,background:`linear-gradient(135deg,${C.accent},${C.accent2})`,display:"flex",alignItems:"center",justifyContent:"center",fontSize:28,fontWeight:900,boxShadow:`0 0 40px rgba(0,229,255,0.18)`}}>V</div>
            <h2 style={{fontSize:22,fontWeight:900}}>I'm {settings.aiName}</h2>
            <p style={{color:C.textMuted,fontSize:14,maxWidth:280}}>{settings.welcomeMsg}</p>
            <div style={{display:"flex",flexWrap:"wrap",gap:8,justifyContent:"center",maxWidth:460}}>
              {["Explain quantum physics","Write Python code","Plan a trip to Goa","Best business ideas"].map(s=>(<button key={s} onClick={()=>{setInput(s);taRef.current?.focus();}} style={{padding:"7px 13px",background:C.surface2,border:`1px solid ${C.border}`,borderRadius:18,color:C.textMuted,cursor:"pointer",fontSize:12,fontFamily:"inherit"}}>{s}</button>))}
            </div>
          </div>)}
          {activeChat?.messages?.map((m,i)=>(<div key={i} style={{display:"flex",gap:9,alignItems:"flex-start",flexDirection:m.role==="user"?"row-reverse":"row",maxWidth:800,width:"100%",margin:"0 auto"}}>
            <div style={{width:30,height:30,borderRadius:9,flexShrink:0,display:"flex",alignItems:"center",justifyContent:"center",background:m.role==="user"?C.surface2:`linear-gradient(135deg,${C.accent},${C.accent2})`,border:m.role==="user"?`1px solid ${C.border}`:"none",color:m.role==="user"?C.textMuted:"#fff",fontSize:11,fontWeight:900}}>{m.role==="user"?<UserIco/>:"V"}</div>
            <div style={{padding:"10px 14px",borderRadius:12,maxWidth:"calc(100% - 42px)",fontSize:14,lineHeight:1.7,wordBreak:"break-word",background:m.role==="user"?`linear-gradient(135deg,rgba(0,229,255,0.1),rgba(123,47,255,0.1))`:C.surface,border:m.role==="user"?`1px solid rgba(0,229,255,0.12)`:`1px solid ${C.border}`,borderTopRightRadius:m.role==="user"?3:12,borderTopLeftRadius:m.role==="assistant"?3:12}}>
              {m.role==="assistant"?<div dangerouslySetInnerHTML={{__html:md(m.content)}}/>:m.content}
            </div>
          </div>))}
          {loading&&(<div style={{display:"flex",gap:9,alignItems:"flex-start",maxWidth:800,width:"100%",margin:"0 auto"}}>
            <div style={{width:30,height:30,borderRadius:9,background:`linear-gradient(135deg,${C.accent},${C.accent2})`,display:"flex",alignItems:"center",justifyContent:"center",fontSize:11,fontWeight:900,flexShrink:0}}>V</div>
            <div style={{padding:"13px 16px",background:C.surface,border:`1px solid ${C.border}`,borderRadius:12,borderTopLeftRadius:3,display:"flex",gap:5,alignItems:"center"}}>
              {[0,160,320].map(d=><span key={d} style={{width:7,height:7,borderRadius:"50%",background:C.accent,display:"inline-block",animation:"pulse 1.2s ease-in-out infinite",animationDelay:`${d}ms`}}/>)}
            </div>
          </div>)}
          <div ref={endRef}/>
        </div>
        <div style={{padding:"13px 16px",borderTop:`1px solid ${C.border}`,background:C.surface,flexShrink:0}}>
          {!user?.pro&&msgCount>=FREE_LIMIT&&(<div style={{background:"rgba(255,71,87,0.07)",border:`1px solid rgba(255,71,87,0.18)`,borderRadius:10,padding:"9px 14px",marginBottom:10,fontSize:13,color:"#ff6b7a",textAlign:"center"}}>Daily limit reached · <button onClick={()=>setUpgradeOpen(true)} style={{background:"none",border:"none",color:C.accent,cursor:"pointer",fontWeight:700,fontSize:13}}>Upgrade ₹{settings.price}/mo</button></div>)}
          <div style={{display:"flex",gap:8,alignItems:"flex-end",background:C.surface2,border:`1px solid ${C.border}`,borderRadius:12,padding:"8px 10px"}}>
            <textarea ref={taRef} rows={1} value={input} onChange={e=>{setInput(e.target.value);e.target.style.height="auto";e.target.style.height=Math.min(e.target.scrollHeight,140)+"px";}} onKeyDown={e=>{if(e.key==="Enter"&&!e.shiftKey){e.preventDefault();send();}}} disabled={!user?.pro&&msgCount>=FREE_LIMIT} placeholder={!user?.
