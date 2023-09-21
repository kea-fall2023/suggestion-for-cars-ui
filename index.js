//import "https://unpkg.com/navigo"  //Will create the global Navigo object used below
import "./navigo_EditedByLars.js"  //Will create the global Navigo, with a few changes, object used below
//import "./navigo.min.js"  //Will create the global Navigo object used below

import {setActiveLink} from "./utils.js"
import { initAndGetPage as about } from "./pages/about.js";
import {initAndGetPage as allCars} from "./pages/car/allCars.js"
import {initAndGetPage as findEditCar } from "./pages/car/findEditCar.js";
import {initAndGetPage as addCar} from "./pages/car/addCar.js";
import { initAndGetPage as members } from "./pages/members/members.js";
import { initAndGetPage as reserveCar } from "./pages/reservation/reserveCar.js";
import { initAndGetPage as showReservations } from "./pages/reservation/reservations.js";
import { initAndGetPage as signup } from "./pages/signup/signup.js";
import { initAndGetPage as login } from "./pages/login/login.js";
import { initAndGetPage as notFound } from "./pages/notFound/notFound.js";
window.addEventListener("load", async () => {

  const router = new Navigo("/", { hash: true });
  //Not especially nice, BUT MEANT to simplify things. Make the router global so it can be accessed from all js-files
  window.router = router

  router
    .hooks({
      before(done, match) {
        setActiveLink("menu", match.url)
        done()
      }
    })
    .on({
      //For very simple "templates", you can just insert your HTML directly like below
      "/": () => about("content"),
      "/cars": () => allCars("content"),
      "/find-edit-car": (match) =>findEditCar("content",match),
      "/add-car": () => addCar("content"),
      "/members": () => members("content"),
      "/reserve-car": () => reserveCar("content"),
      "/reservations": () => showReservations("content"),
      "/signup": () => signup("content"),
      "/login": () => login("content")
    })
    .notFound(() => notFound("content"))
    .resolve()
});


window.onerror = function (errorMsg, url, lineNumber, column, errorObj) {
  alert('Error: ' + errorMsg + ' Script: ' + url + ' Line: ' + lineNumber
    + ' Column: ' + column + ' StackTrace: ' + errorObj);
}