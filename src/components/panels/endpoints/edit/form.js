import FormButton from "../../../form/button";
import FormItem from "../../../form/item";



export default function EndpointEditForm({ value }) {

   return (
      <div>
         <div className="form-two">
            <FormItem label={"Endpoint İsmi"} placeholder={"Lütfen Endpoint için bir isim giriniz"} maxlen="64" value={value.name} />
            <FormItem label={"Endpoint Uzantısı"} placeholder={"Lütfen Endpoint için bir uzantı giriniz"} maxlen="64" value={value.slug} />
         </div>
         <FormButton text={"Kaydet"} />
      </div>
   )
}