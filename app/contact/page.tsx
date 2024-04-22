import { GoogleMapDirection } from "@/components/layout/contact/googleMaps"
import ContactUsForm from "@/components/layout/contact/contactForm"

export default function ContactPage(){

    const variants = ["flat", "bordered", "underlined", "faded"];
    return(
        <div>
            <ContactUsForm/>
            {/* <GoogleMapDirection/> */}
        </div>
    )
}