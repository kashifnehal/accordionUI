import AccordionPanel from "../../src/Accordion/AccordionPanel";
import { AccordionDetails } from "./constants";
import { useState } from "react";

const Accordion = () => {
  const [activeTab, setActiveTab] = useState(1);
  const activeTabHandler = (tab) => {
    if (tab === activeTab) {
      setActiveTab(null);
    } else {
      setActiveTab(tab);
    }
  };
  return (
    <div>
      <header>Accordion</header>
      <div>
        {AccordionDetails.map((data, index) => (
          <AccordionPanel
            data={data}
            activeTab={activeTab}
            setActiveTab={(tab) => activeTabHandler(tab)}
            tabIndex={index}
          />
        ))}
      </div>
    </div>
  );
};
export default Accordion;
