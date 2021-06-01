
const parameterController = require("stimsrv/controller/parameterController");

const htmlButtons = require("stimsrv/ui/htmlButtons");

const DEFAULTS = {
  parameters: {
    
  }
};

module.exports = function(config) {
  
  config = Object.assign({}, DEFAULTS, config);
  config.parameters = Object.assign({}, DEFAULTS.parameters, config.parameters);
    
  return {
    name: "main_task",
    description: "The main task of the experiment",
    ui: function(context) {
      
      let buttons = htmlButtons("Next");
      
      return {
        interfaces: {
          display: null,
          response: buttons,
          monitor: null,
          control: buttons
        }
      }
    },
    controller: parameterController({parameters: config.parameters})
  }
}