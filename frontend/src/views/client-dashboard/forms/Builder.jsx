import React, { useState } from 'react';
import { Card } from 'antd';
import { ReactFormBuilder, ReactFormGenerator } from 'react-form-builder2';
import { DndProvider, useDrag } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import 'react-form-builder2/dist/app.css';
import 'bootstrap/dist/css/bootstrap.css';

const Builder = () => {
  const [formContent, setFormContent] = useState(null);

  // Callback function to handle form changes
  const handleFormChange = (data) => {
    console.log(data);
    setFormContent(data);
  };

  return (
    <div className='bs-container bs-my-3'>
      <h4
        className="bs-my-3"
        style={{ fontSize: "16px", fontWeight: "600", color: "#495057" }}
      >
        Build Your Form
      </h4>
      <Card>
      <DndProvider backend={HTML5Backend}  key={1}>
        <ReactFormBuilder editMode={true} onChange={handleFormChange} />
      </DndProvider>
      </Card>

      {/* Display the JSON object representing the form content */}
      {formContent && (
        <div className="bs-mt-3">
          <h5>Form Content (JSON):</h5>
          <pre>{JSON.stringify(formContent, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

export default Builder;
