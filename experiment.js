
const pause = require("stimsrv/task/pause");
const sequence = require("stimsrv/controller/sequence");

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
    mainTask({
      // TODO: define condition properties
      property1: sequence([1,2]), // This will end the task after two trials
    }),
    
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