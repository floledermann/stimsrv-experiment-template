
const pause = require("stimsrv/task/pause");

const mainTask = require("./tasks/mainTask.js");   

const setup = require("./devices-roles.js");

const messages = require("./messages.js");

// stimsrv experiment definition
module.exports = {
  
  name: "Stimsrv Experiment",
  
  devices: setup.devices,
  roles: setup.roles, 
  
  tasks: [
  
    pause({
      message: messages.welcome
    }),  
    
    // TODO: implement task in tasks/mainTask.js and initialize here 
    mainTask(),
    
    pause({
      message: {
        display: "The experiment was completed successfully.\nThank you for your participation!",
        monitor: "Experiment ended."
      },
      button: "Store Results & Restart",
      buttondisplay: "control"
    }),
  ]
  
}