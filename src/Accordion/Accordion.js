import AccordionPanel from "../../src/Accordion/AccordionPanel"
import { AccordionDetails } from "./constants"
const Accordion = () => {
    return(
        <div> 
            <header>
                Accordion
            </header>
            <div>
                {AccordionDetails.map((data, index) => <AccordionPanel data={data} />)}
            </div>
        </div>
    )
}
export default Accordion
