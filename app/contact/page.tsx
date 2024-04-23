import { GoogleMapDirection } from "@/components/layout/contact/googleMaps"
import ContactUsForm from "@/components/layout/contact/contactForm"

export default function ContactPage() {

    const variants = ["flat", "bordered", "underlined", "faded"];
    return (
        <div>
            <ContactUsForm />
            <div className="mt-20 mb-5 text-primary text-lg font-bold">
                <h1>Find Us</h1>    
            </div>
            <div className="p-1 shadow-lg border-[2px] rounded-[15px]">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31405.348611206995!2d-79.43049218455042!3d43.69298422310204!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b34a4d8b112f5%3A0x4326f2e10e3c594f!2sFour%20Seasons%20Hotel%20Toronto!5e0!3m2!1ses!2sco!4v1713882926198!5m2!1ses!2sco" width="100%" height="500" loading="lazy" ></iframe>
            </div>
            {/* <GoogleMapDirection/> */}
        </div>
    )
}