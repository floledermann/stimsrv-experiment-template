
const parameterController = require("stimsrv/controller/parameterController");

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
      return {
        interfaces: {
          display: null,
          response: null,
          monitor: null,
          control: null,
        }
      }
    },
    controller: parameterController({parameters: config.parameters})
  }
}