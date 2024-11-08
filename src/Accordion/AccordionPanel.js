import { useState } from 'react';
import './Accordion.css'

const AccordionPanel = ({data}) => {
    const [showContent, setShowContent] = useState(false)
    return (
      <div>
        <button
          className="AccordionPanel"
          onClick={() => setShowContent(!showContent)}
        >
          {data.header}
        </button>
        {showContent &&  <div>{data.content}</div>}
      </div>
    );
}

export default AccordionPanel