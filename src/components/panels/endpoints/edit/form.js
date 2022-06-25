import { useEffect, useState } from "react";
import FormButton from "../../../form/button";
import FormItem from "../../../form/item";



export default function EndpointEditForm({ value }) {

   const [name, setName] = useState("")
   const [endpoint, setEndpoint] = useState("")


   useEffect(() => {
      setName(value.name)
      setEndpoint(value.slug)
   }, [value])

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
         <FormButton text={"Kaydet"} onClick={sendRequest} />
      </div>
   )
}