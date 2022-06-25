



export default function FormItem({ label, placeholder, maxlen, value, setvalue }) {

   return (
      <div className="form-item">
         <div className="form-label">{label}</div>
         <input className="form-input" placeholder={placeholder} maxLength={maxlen} value={value} onChange={(e) => { setvalue(e.target.value) }}></input>
      </div>
   )
}