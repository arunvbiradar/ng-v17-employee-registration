import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterOutlet } from "@angular/router";

type StepList = {
  stepName: string;
  isComplete: boolean;
};

@Component({
  selector: "app-root",
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.css",
})
export class AppComponent {
  stepList: StepList[] = [
    { stepName: "Basic Details", isComplete: false },
    { stepName: "Skills", isComplete: false },
    { stepName: "Experience", isComplete: false },
  ];

  activeStep: StepList = this.stepList[0];
  formProgress = 12;
  updateProgress() {
    switch (this.activeStep.stepName) {
      case "Skills":
        this.formProgress = 50;
        break;
      case "Experience":
        this.formProgress = 100;
        break;
      default:
        this.formProgress = 12;
        break;
    }
  }

  setActiveStep(step: StepList) {
    this.activeStep = step;
    this.updateProgress();
  }
}
