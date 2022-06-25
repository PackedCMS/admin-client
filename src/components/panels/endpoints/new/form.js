import { useState } from "react";
import FormButton from "../../../form/button";
import FormItem from "../../../form/item";





export default function EndpointNewForm() {


   const [name, setName] = useState("")
   const [endpoint, setEndpoint] = useState("")


   const sendRequest = () => {
      console.log(name)
      console.log(endpoint)
   }

   return (
      <div>
         <div className="form-two">
            <FormItem label={"Endpoint İsmi"} placeholder={"Lütfen Endpoint için bir isim giriniz"} maxlen="64" value={name} setvalue={setName} />
            <FormItem label={"Endpoint Uzantısı"} placeholder={"Lütfen Endpoint için bir uzantı giriniz"} maxlen="64" value={endpoint} setvalue={setEndpoint} />
         </div>
         <FormButton text={"Oluştur"} onClick={sendRequest}></FormButton>
      </div>
   )
}