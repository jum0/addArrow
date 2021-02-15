import { app } from "../index.js";
import { initializeInputView } from "../view/inputView.js";
import { initializeRacingView } from "../view/racingView.js";
import { displayWinnerView, initializeWinnerView } from "../view/winnerView.js";
import { $ } from "./utils.js";

export const chooseWinners = function () {
  const maxPosition = Math.max(...app.cars.map((car) => car.position));
  const winners = app.cars
    .filter((car) => car.position === maxPosition)
    .map((car) => car.name);

  displayWinnerView(winners);
};

export const handleRestartButton = function () {
  app.initializeCarsCount();
  resetAllViews();
};

export const resetAllViews = function () {
  initializeInputView();
  initializeRacingView();
  initializeWinnerView();
};

export const addWinnerElement = function (winners = []) {
  const winnerElement = $("#winner-container > section > h2");

  winnerElement.innerText = `🏆 최종 우승자: ${winners.join(", ")} 🏆`;
};
