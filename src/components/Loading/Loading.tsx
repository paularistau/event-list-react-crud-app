import React from "react";
import { LoadingContent, Wrapper } from "./styles";

const Loading = () => {
  const [step, setStep] = React.useState(0);

  React.useEffect(() => {
    function updateStep() {
      setStep((step) => {
        if (step < 3) return step + 1;
        else return 0;
      });
    }
    const interval = setInterval(updateStep, 300);
    return () => {
      clearInterval(interval);
    };
  }, []);

  function displayStep(i: number) {
    return {
      display: step === i ? "block" : "none",
    };
  }

  return (
    <Wrapper>
      <LoadingContent>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="200px"
          height="200px"
          viewBox="0 0 100 100"
          preserveAspectRatio="xMidYMid"
        >
          <circle
            cx="50"
            cy="50"
            r="32"
            strokeWidth="8"
            stroke="#008fd4"
            strokeDasharray="50.26548245743669 50.26548245743669"
            fill="none"
            strokeLinecap="round"
          >
            <animateTransform
              attributeName="transform"
              type="rotate"
              dur="1s"
              repeatCount="indefinite"
              keyTimes="0;1"
              values="0 50 50;360 50 50"
            ></animateTransform>
          </circle>
          <circle
            cx="50"
            cy="50"
            r="23"
            strokeWidth="8"
            stroke="#001f2d"
            strokeDasharray="36.12831551628262 36.12831551628262"
            strokeDashoffset="36.12831551628262"
            fill="none"
            strokeLinecap="round"
          >
            <animateTransform
              attributeName="transform"
              type="rotate"
              dur="1s"
              repeatCount="indefinite"
              keyTimes="0;1"
              values="0 50 50;-360 50 50"
            ></animateTransform>
          </circle>
        </svg>
      </LoadingContent>
    </Wrapper>
  );
};

export default Loading;
