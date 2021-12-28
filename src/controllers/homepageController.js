require("dotenv").config();
// import homepageService from "../services/homepageService";
// import chatbotService from "../services/chatbotService";
// import templateMessage from "../services/templateMessage";
// import moment from "moment";
// require('moment-timezone');
// import Number from "../number";

// const { GoogleSpreadsheet } = require('google-spreadsheet');

const MY_VERIFY_TOKEN = process.env.MY_VERIFY_TOKEN;

// const PRIVATE_KEY = '-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQC7AlQxpBCot4gZ\nOmmgiAt5u0JdaQv3ZlqZWwZReFVnEsqiKRYXXt24miSE3uXcuvAks0PFKat7E+fF\ni/h0pn0Xr9lfccspudhSaFOtCsIh4INIBksPCtDMQP/vMGZt5DyDCVYNZUSW62jh\nrpHmvRfO0NtBJwr82dzesSHW3PSfxS62aM6wePYLleJziSMcyxevBk2xxBzcvk0+\ndb9YzptIEHOtXRtmZjqt7FuNAeyq2GZe2D1fQKaYk0LdT1Th1D8KB+gspY6Vt/E4\naruIEEIx3Y8/pyPZq9P6Obds9BsUxNTcl6CSZKAt2CrkQ6SQ/7qzthYO5jDZxsPZ\nwfMQx1/jAgMBAAECggEAXLxL6g304OWaTQBlbuDn5+bPgyjbcUTFerTjzjTBDQsJ\nhx6ewNofUzLFF0q9bBcbjOeEnNoMGk2FqrW9cIM7FyrxvV3dpIRvXHY1wGLMYCZI\nk8fjIsN3RUKaaA91S9tZkpVnod7tA3YbnYaG/YgZrUpu38EvtrGG0LvADx+lAzDY\n0KvVaHR73PeSfstRAVUgRwM5SHq3MdHBZfOtaymmdzIkUqSQ433/1JpRFxmg817A\nbR3s6QfZ2P5JFl3VTkwL1jWJFOSwfSJCSE7cJGsptA5nE8Sq4GRZGOwHKBPfPaXz\nqFo/94v+7okRW2nUaL0QE1gRma67v/9YWmyB/rh8EQKBgQDjDtDwyT6MZhJ34SsI\nYUXtBZlgp8k1rB02s4s3L0D8+aVT7h2p784vFeaJTbHaxmNJ0kzJwZ2MpGFf+CpJ\nos79/W6co7H6IWGQSV0XWlEAHM1K3HWsUqv/bJ0EPcYMtS8NIKezY1SAloRTayeA\nA5CgV9EtKBndEiQ4vpGrlGtsuQKBgQDS2Ku1cZ95ZbZ27Zo3dpoRXf1kDK6Vc8hQ\ni2VjnRA7iyuVLHUtU0gO2al4yHbdUfnd80CYPrQR2320EW5Fy85ri2UFGA7I3NR7\nHO/Ih5Vx90FpZqM3SeDuo+VHjsjrMJqpYYoin8cTHgz4wBTruuGrgBq4GLqXpMsh\ntCP+1Te7ewKBgH8hDo+iveiyRejlI8j/Xb2GAwiBKUFp6rlz8aCmTobV6GGD0wwQ\n/qqSYo/B9rD9nx34J5JXW7UhXHv1YQf1plvDiCkf5kicZBn7Wan3oZ6kgbVGloQz\njaXn1EpJpBf9YijBfeQM24VbwR9LwcQFOvbr9GyKJWEIBUvYN4uQAE3RAoGBAKJl\n/Kt+XqS0cPvdOoEpurVRvY/ILNg0G7/d/jPhj9Us9l6ppX9JvCCkCeJcFSGWuGv5\npnEdKrjuZD3Dhzn/JnizHxXzV7/iR06kFRRRSgxDs4Apa+Fz5+onFrwtABgWkamQ\n1UKh6kWRSdB2siZ3BMaBnxLZCS8v4L2O8IKhW5HtAoGACUhBC7iv1xl1xtVUVVl+\nbvP8pyLTLG7+91ls9L230y4jdPIR/7ydbP93x8dzZ3G0ChLyuEf8WLrow1pYYwoj\nfSgER7l9njU27Kxi9jJWgiipSni0iyEqKKacsjdAvchMT1CBz5+mHqvnUAZx5PO2\nSD0E9ryI5QI+BTeD1fzEJ24=\n-----END PRIVATE KEY-----\n';
// const CLIENT_EMAIL = 'titanic-vedio@titanic-vedio.iam.gserviceaccount.com';
// const SHEET_ID = '1Z_E97c5gRjjVSK02xkS1PFs5QI_BZc3d2Px1ZWwA5KY';


let getHomePage = (req, res) => {
    let facebookAppId = process.env.FACEBOOK_APP_ID;
    return res.render("homepage.ejs", {
        facebookAppId: facebookAppId
    })
};

// let getGoogleSheet = async (req, res) => {
//     try {
//      //  console.log(n);
//        // let currentDate = new Date();

//         const format = "HH:mm:ss DD/MM/YYYY"
        
//         let formatedDate = moment().tz("africa/tripoli").format(format);

//         // Initialize the sheet - doc ID is the long id in the sheets URL
//         const doc = new GoogleSpreadsheet(SHEET_ID);
//      //   console.log(CLIENT_EMAIL);
//         // Initialize Auth - see more available options at https://theoephraim.github.io/node-google-spreadsheet/#/getting-started/authentication
//         await doc.useServiceAccountAuth({
//             client_email: CLIENT_EMAIL,
//             private_key: PRIVATE_KEY,
//         });

//         await doc.loadInfo(); // loads document properties and worksheets

//         const sheet = doc.sheetsByIndex[0]; // or use doc.sheetsById[id] or doc.sheetsByTitle[title]
//         let username = await homepageService.getFacebookUsername(req.body.psid)
//   // n=n+1;
//   console.log("--------------------------------------");
//   console.log(username);
//   console.log("------------------------------------");
//   console.log("-------------------------------------");
//   console.log(username);
//   console.log("----------------------------------------");
//   console.log("-------------------------------------");
//   console.log(username);
//   console.log("----------------------------------------");
//         // append rows
//         await sheet.addRow(
//             {
//                 "order code": "hi",
//                 "Customer Name": req.body.customerName,
//                 "Phone Number": req.body.phoneNum1,
//                 "Date": formatedDate,
//                 "Location": "سوف يتم برمجته لاحقا",
//                 "Sender PSID": req.body.psid,
//                 "username": username,
//             });
//             // console.log("---------------");
//             // console.log(body.first_name);
//             // console.log("----------------");
//             // console.log("---------------");
//             // console.log(body.last_name);
//             // console.log("----------------");
            
//        // return res.send('Writing data to Google Sheet succeeds!')
//     }
//     catch (e) {
//        // return res.send('Oops! Something wrongs, check logs console for detail ... ')
//     }
// };

// let getWebhook = (req, res) => {
//     // Your verify token. Should be a random string.
//     let VERIFY_TOKEN = MY_VERIFY_TOKEN;

//     // Parse the query params
//     let mode = req.query['hub.mode'];
//     let token = req.query['hub.verify_token'];
//     let challenge = req.query['hub.challenge'];

//     // Checks if a token and mode is in the query string of the request
//     if (mode && token) {

//         // Checks the mode and token sent is correct
//         if (mode === 'subscribe' && token === VERIFY_TOKEN) {

//             // Responds with the challenge token from the request
//             console.log('WEBHOOK_VERIFIED');
//             res.status(200).send(challenge);

//         } else {
//             // Responds with '403 Forbidden' if verify tokens do not match
//             res.sendStatus(403);
//         }
//     }
// };

// // let chatOnOff = (modefn) => {
// //     const chat = modefn;
// //       return  chat;
// // };

// // let chatOff = () => {
// //     const chat = "off";
// //      return chat;  
// //     };


// let postWebhook = (req, res) => {
//     let body = req.body;
 
   

//     // Checks this is an event from a page subscription
//     if (body.object === 'page') {
//       //  console.log(webhook_standby.message.text);
//         // Iterates over each entry - there may be multiple if batched
//         body.entry.forEach(function (entry) {
//             //check the incoming message from primary app or not; if secondary app, exit
//             if (entry.standby) {
//                 //if user's message is "back" or "exit", return the conversation to the bot
//                 let webhook_standby = entry.standby[0];
//                 if (webhook_standby && webhook_standby.message) {
//                     if (webhook_standby.message.text === "الرجوع" || webhook_standby.message.text === "رجوع" || webhook_standby.message.text === "عودة" || webhook_standby.message.text === "عوده") {
//                         // let modefn = "on";
//                         // chatOnOff(modefn);
//                         // call function to return the conversation to the primary app
//                         chatbotService.passThreadControl(webhook_standby.sender.id, "primary");
//                         chatbotService.takeControlConversation(webhook_standby.sender.id);
                        
//                     }  
//                 }
//                 return;
//             }

//             // Gets the body of the webhook event
//         let webhook_event = entry.messaging[0];
//        console.log(webhook_event);

//             // Get the sender PSID
//             let sender_psid = webhook_event.sender.id;
//             console.log('Sender PSID: ' + sender_psid);
// // console.log(chatOnOff());
//             // Check if the event is a message or postback and
//             // pass the event to the appropriate handler function
//             if (webhook_event.message) {
//                 handleMessage(sender_psid, webhook_event.message);
//             } else if (webhook_event.postback) {
//                 handlePostback(sender_psid, webhook_event.postback);
//             }
//         });

//         // Returns a '200 OK' response to all requests
//         res.status(200).send('EVENT_RECEIVED');
//     } else {
//         // Returns a '404 Not Found' if event is not from a page subscription
//         res.sendStatus(404);
//     }
// };

// // Handles messages events
// let handleMessage = async (sender_psid, received_message) => {
//     //check the incoming message is a quick reply?
//     if (received_message && received_message.quick_reply && received_message.quick_reply.payload) {
//         let payload = received_message.quick_reply.payload;
//         if (payload === "CATEGORIES") {
//             await chatbotService.sendCategories(sender_psid);

//         } else if (payload === "LOOKUP_ORDER") {
//             await chatbotService.sendLookupOrder(sender_psid);

//         } else if (payload === "TALK_AGENT") {
//             await chatbotService.requestTalkToAgent(sender_psid);

//         } 

//         return;
//     }
  
//     let response;

//     // Check if the message contains text
    
//      if (received_message.text === "المنتجات"){
//          response = templateMessage.sendCategoriesTemplate();

//     } else if ( received_message.text === "دعم العملاء" || received_message.text === "العنصر البشري" || received_message.text === "الدعم الفني" ){
//        response = chatbotService.requestTalkToAgent(sender_psid);

//    } else if ( received_message.text === "الإستعلام عن طلبية" || received_message.text === "الاستعلام عن طلبية" || received_message.text === "الإستعلام عن طلبيه" || received_message.text === "الاستعلام عن طلبيه" ){
//     response = chatbotService.sendLookupOrder(sender_psid);

//     } else if ( received_message.text === "القائمة" || received_message.text === "القائمة الرئيسية" || received_message.text === "العودة للقائمة" || received_message.text === "العودة" || received_message.text === "العودة للقائمة الرئيسية" ){
//         response = chatbotService.backToMainMenu(sender_psid);
    
//    } else if (received_message.text) {
//         // Create the payload for a basic text message
//         // response = {
//         //     "text": `أنت أرسلت "${received_message.text}"، ولكن روبوت الدردشة لم يفهمها، إذا كنت تريد التحدث إلى العنصر البشري إضغط على الزر في الأسفل.`
//         // }
       
//         response = {
            
//                 "attachment": {
//                     "type": "template",
//                     "payload":{
//                         "template_type":"button",
//                         "text":"لم يفهم روبوت الدردشة الرسالة التي أرسلتها، إذا كنت تريد التحدث إلى العنصر البشري إضغط زر دعم العملاء في الأسفل." +
//                             "\nشكرا لكم لإستخدام متجر قريب.",
//                         "buttons":[
//                             {
//                                 "type": "postback",
//                                 "title": "دعم العملاء",
//                                 "payload": "TALK_AGENT"
//                             }
//                         ]
//                     }
//                 }
//             }
//       } else if (received_message.attachments) {
//         // Get the URL of the message attachment
//         let attachment_url = received_message.attachments[0].payload.url;
//         response = {
//             "attachment":{
//                 "type":"template",
//                 "payload":{
//                     "template_type":"button",
//                     "text":"لم يفهم روبوت الدردشة الرسالة التي أرسلتها، إذا كنت تريد التحدث إلى العنصر البشري إضغط زر دعم العملاء في الأسفل." +
//                         "\nشكرا لكم لإستخدامكم متجر قريب.",
//                     "buttons":[
//                         {
//                             "type": "postback",
//                             "title": "دعم العملاء",
//                             "payload": "TALK_AGENT"
//                         }
//                     ]
                    
//                 }
//             }
//         }
//     }

//     // Sends the response message
//     await chatbotService.sendMessage(sender_psid, response);
// };

// // Handles messaging_postbacks events
// let handlePostback = async (sender_psid, received_postback) => {
//     // Get the payload for the postback
//     let payload = received_postback.payload;
 
//     // Set the response based on the postback payload
//     switch (payload) {
//         case "GET_STARTED":
//         case "RESTART_CONVERSATION":
//             await chatbotService.sendMessageWelcomeNewUser(sender_psid);
//             break;
//         case "TALK_AGENT":
//             await chatbotService.requestTalkToAgent(sender_psid);
//             break;
//         case "SHOW_HEADPHONES":
//             await chatbotService.showHeadphones(sender_psid);
//             break;
//         case "SHOW_TV":
//             await chatbotService.showTVs(sender_psid);
//             break;
//         case "SHOW_PLAYSTATION":
//             await chatbotService.showPlaystation(sender_psid);
//             break;
//         case "LOOKUP_ORDER":
//             await chatbotService.sendLookupOrder(sender_psid);
//             break;
//         case "BACK_TO_CATEGORIES":
//             await chatbotService.backToCategories(sender_psid);
//             break;
//         case "BACK_TO_MAIN_MENU":
//             await chatbotService.backToMainMenu(sender_psid);
//             break;
//         default:
//             await chatbotService.cantUndrstand(sender_psid);
//             console.log("run default switch case")

//     }
// };

// let handleSetupProfile = async (req, res) => {
//     try {
//         await homepageService.handleSetupProfileAPI();
//         return res.redirect("/");
//     } catch (e) {
//         console.log(e);
//     }
// };

// let getSetupProfilePage = (req, res) => {
//     return res.render("profile.ejs");
// };

// let getInfoOrderPage = (req, res) => {
//     let facebookAppId = process.env.FACEBOOK_APP_ID;
//     return res.render("infoOrder.ejs", {
//         facebookAppId: facebookAppId
//     });
// };

// let setInfoOrder = async (req, res) => {
//     try {
//         let customerName = "";
//         if (req.body.customerName === "") {
//             customerName = "--فارغ--";
//         } else customerName = req.body.customerName;

//         // I demo response with sample text
//         // you can check database for customer order's status
// console.log ("in the setInfoOrder function, and before the respnse1");
//         let response1 = {
//             "text": `---معلومات الطلبية الخاصة بك---
//             \nإسم صاحب الطلبية: ${customerName}
//             \nرقم الهاتف: ${req.body.phoneNum1}
//             \nرقم الطلبية: ${req.body.orderNumber}
//             `
//         };
//         console.log ("in the setInfoOrder function, and before the respnse2");

//         let response2 = templateMessage.setInfoOrderTemplate();
//         await getGoogleSheet(req);
//         await chatbotService.sendMessage(req.body.psid, response1);
//         await chatbotService.sendMessage(req.body.psid, response2);

//         return res.status(200).json({
//             message: "ok"
//         });
//     } catch (e) {
//         console.log(e);
//     }
// };

module.exports = {
    getHomePage: getHomePage,
    // getWebhook: getWebhook,
    // postWebhook: postWebhook,
    // handleSetupProfile: handleSetupProfile,
    // getSetupProfilePage: getSetupProfilePage,
    // getInfoOrderPage: getInfoOrderPage,
    // setInfoOrder: setInfoOrder,
    // getGoogleSheet: getGoogleSheet,
    
};