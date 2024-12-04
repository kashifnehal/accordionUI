import "./Accordion.css";

const AccordionPanel = (props) => {
  const { data, activeTab, setActiveTab, tabIndex } = props;
  const handleAccordionClick = () => {
    setActiveTab(tabIndex);
  };
  return (
    <div>
      <button className="AccordionPanel" onClick={() => handleAccordionClick()}>
        {data.header}
      </button>
      {activeTab === tabIndex && <div>{data.content}</div>}
    </div>
  );
};

export default AccordionPanel;
