import express from "express";
import homepageController from "../controllers/homepageController";
// import homepageService from "../services/homepageService";
// import chatbotService from "../services/chatbotService";


let router = express.Router();

let initWebRoutes = (app)=> {                         
    router.get("/", homepageController.getHomePage);
//     router.get("/webhook", homepageController.getWebhook);
//     router.post("/webhook", homepageController.postWebhook);
//     router.post("/set-up-profile", homepageController.handleSetupProfile);
//     router.get("/set-up-profile", homepageController.getSetupProfilePage);

//     router.get("/info-order", homepageController.getInfoOrderPage);
//    router.post("/set-info-order", homepageController.setInfoOrder);
//     router.get("/excel", homepageController.getGoogleSheet);
//     router.get("/username", homepageService.getFacebookUsername);
//     router.get("/send", chatbotService.sendMessageWelcomeNewUser);
    return app.use("/", router);
};

module.exports = initWebRoutes;
