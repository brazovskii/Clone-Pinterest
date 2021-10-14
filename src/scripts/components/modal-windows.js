import { createAddWindow, createСhoiceWindow } from "./templates.js";
import { getStorageData, setStorageData } from "./storageApi.js";
import { deleteCard } from "./utils.js";
import { WEBSTORAGECONFIG } from "./config.js"


//Function ON
function onBoardWindow(cardId) {
  const target = event.target;
  const addWindow = document.querySelector(".background-window");
  switch (target.id) {
    case "animals-id":
      const boardDataAnimals = getStorageData(WEBSTORAGECONFIG.typeAnimals);
      boardDataAnimals.push(cardId);
      setStorageData(WEBSTORAGECONFIG.typeAnimals, boardDataAnimals);
      addWindow.remove();
      alert("Сохранено на доску Animals");
      break;
    case "films-id":
      const boardDataFilms = getStorageData(WEBSTORAGECONFIG.typeFilms);
      boardDataFilms.push(cardId);
      setStorageData(WEBSTORAGECONFIG.typeFilms, boardDataFilms);
      addWindow.remove();
      alert("Сохранено на доску Films");
      break;
    case "others-id":
      const boardDataOthers = getStorageData(WEBSTORAGECONFIG.typeOthers);
      boardDataOthers.push(cardId);
      setStorageData(WEBSTORAGECONFIG.typeOthers, boardDataOthers);
      addWindow.remove();
      alert("Сохранено на доску Others");
      break;
    case "btn-close":
      addWindow.remove();
      break;
  }
}

function onСhoiceWindow(cardId) {
  const choiceWindow = document.querySelector(".background-window");
  console.log(choiceWindow)
  const target = event.target;
  if (target.id === "btn-add") {
    showAddWindow(cardId);
    choiceWindow.remove();
  } else if (target.id === "btn-complaint") {
    deleteCard(cardId)
    choiceWindow.remove()
  } else if (target.id === "btn-close") {
    choiceWindow.remove();
  }
}

//Show window
function showChoiceWindow(main, cardId) {
  const сhoiceWindow = createСhoiceWindow();
  сhoiceWindow.addEventListener("click", () => onСhoiceWindow(cardId));
  main.append(сhoiceWindow);
}

function showAddWindow(main, cardId) {
  const addWindow = createAddWindow();
  addWindow.addEventListener("click", () => onBoardWindow(cardId));
  main.append(addWindow);
}

export { showAddWindow, showChoiceWindow };
