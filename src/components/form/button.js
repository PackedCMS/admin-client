


export default function FormButton({ text, onClick }) {
   return (
      <div className="form-button" onClick={onClick}>
         {text}
      </div>
   )
}