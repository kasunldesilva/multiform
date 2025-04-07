import React, { useState } from "react";
import "../styles/MultiStepForm.css";

const steps = ["Basic Party Info", "Secretary Info", "Constitute Info"];

const MultiStepForm = () => {
  const [currentStep, setCurrentStep] = useState(0);

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleComplete = () => {
    alert("Form submitted!");
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 0:
        return (
          <div className="form-grid">
            <div className="form-group">
              <label>Party ID</label>
              <input type="text" placeholder="Jack Sullivan" />
            </div>
            <div className="form-group">
              <label>Party File No</label>
              <input type="text" placeholder="F/P/001" />
            </div>
            <div className="form-group">
              <label>Party Name</label>
              <input type="text" placeholder="Jack Sullivan" />
            </div>
            <div className="form-group">
              <label>Party Application Ref No</label>
              <input type="text" placeholder="APP/P/001" />
            </div>
            <div className="form-group">
              <label>Party Symbol</label>
              <input type="text" placeholder="TREE" />
            </div>
            <div className="form-group">
              <label>Party Type</label>
              <input type="text" placeholder="Group" />
            </div>
            <div className="form-group">
              <label>Party Symbol Upload</label>
              <input type="file" />
            </div>
            <div className="form-group">
              <label>Party Register Status</label>
              <input type="text" placeholder="Active" />
            </div>
            <div className="form-group">
              <label>Create Date</label>
              <input type="date" />
            </div>
            <div className="form-group">
              <label>Party Register Date</label>
              <input type="date" />
            </div>
          </div>
        );
      case 1:
        return <div>Step 2: Secretary Info Form Fields</div>;
      case 2:
        return <div>Step 3: Constitute Info Form Fields</div>;
      default:
        return null;
    }
  };

  return (
    <div className="form-container">
      <div className="stepper">
        {steps.map((step, index) => {
            const isCompleted = index < currentStep;
            const isActive = index === currentStep;

            return (
            <div className="step" key={index}>
                <div
                className={`circle ${isCompleted ? "completed" : isActive ? "active" : ""}`}
                >
                {isCompleted ? "✓" : index + 1}
                </div>
                <div
                className={`label ${isCompleted ? "completed" : isActive ? "active" : ""}`}
                >
                {step}
                </div>
                {index < steps.length - 1 && <div className="line" />}
            </div>
            );
        })}
        </div>


      <div className="step-content">{renderStepContent()}</div>

      <div className="step-buttons">
        <button onClick={handleBack} disabled={currentStep === 0}>
          Back
        </button>
        {currentStep < steps.length - 1 ? (
          <button onClick={handleNext}>Next</button>
        ) : (
          <button onClick={handleComplete}>Complete Step</button>
        )}
      </div>
    </div>
  );
};

export default MultiStepForm;
