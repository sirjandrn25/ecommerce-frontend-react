import Button from "@Components/Button/button.component";
import React from "react";

const WizardFooter = ({ nextStep, previousStep, nextProgress = true }: any) => {
  return (
    <div className="flex items-center gap-4">
      {previousStep && (
        <Button onClick={previousStep} outline color="error" size="sm">
          Back
        </Button>
      )}
      {nextStep && (
        <Button
          progress={nextProgress}
          onClick={nextStep}
          outline
          color="success"
          size="sm"
        >
          Next
        </Button>
      )}
    </div>
  );
};

export default WizardFooter;
