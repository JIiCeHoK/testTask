import { styled } from "@mui/material/styles";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import StepConnector, {
    stepConnectorClasses,
} from "@mui/material/StepConnector";
import { StepIconProps } from "@mui/material/StepIcon";
import React from "react";

const ColorlibConnector = styled(StepConnector)(({ theme }) => ({
    [`&.${stepConnectorClasses.alternativeLabel}`]: {
        top: 10,
    },
    [`&.${stepConnectorClasses.active}`]: {
        [`& .${stepConnectorClasses.line}`]: {
            backgroundColor: "#FD305D",
        },
    },
    [`&.${stepConnectorClasses.completed}`]: {
        [`& .${stepConnectorClasses.line}`]: {
            backgroundColor: "#D4D4D4",
        },
    },
    [`& .${stepConnectorClasses.line}`]: {
        height: 2,
        border: 0,
        backgroundColor:
            theme.palette.mode === "dark" ? theme.palette.grey[800] : "#eaeaf0",
        borderRadius: 1,
    },
}));

const ColorlibStepIconRoot = styled("div")<{
    ownerState: { completed?: boolean; active?: boolean };
}>(({ theme, ownerState }) => ({
    backgroundColor:
        theme.palette.mode === "dark" ? theme.palette.grey[700] : "#ccc",
    zIndex: 1,
    color: "#fff",
    width: 14,
    height: 14,
    display: "flex",
    borderRadius: "50%",
    justifyContent: "center",
    alignItems: "center",
    ...(ownerState.active && {
        backgroundImage:
            "linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)",
        boxShadow: "0 4px 10px 0 rgba(0,0,0,.25)",
    }),
    ...(ownerState.completed && {
        backgroundImage:
            "linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)",
    }),
}));

function ColorlibStepIcon(props: StepIconProps) {
    const { active, completed, className } = props;

    return (
        <ColorlibStepIconRoot
            ownerState={{ completed, active }}
            className={className}
        ></ColorlibStepIconRoot>
    );
}

const steps = [" ", " ", " ", " "];
export default function TimeStepper() {
    return (
        <Stepper
            alternativeLabel
            activeStep={2}
            connector={<ColorlibConnector />}
        >
            {steps.map((label) => (
                <Step key={label}>
                    <StepLabel StepIconComponent={ColorlibStepIcon}>
                        {label}
                    </StepLabel>
                </Step>
            ))}
        </Stepper>
    );
}
