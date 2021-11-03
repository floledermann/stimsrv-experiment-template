
const simpleTask = require("stimsrv/task/simpleTask");
const htmlButtons = require("stimsrv/ui/htmlButtons");
const canvasRenderer = require("stimsrv/stimulus/canvas/canvasRenderer");

const DEFAULTS = {
  name: "main_task",
  description: "The main task of the experiment",
  // TODO default condition properties
  text: "TO DO: Implement custom task"
};

function renderStimulus(ctx2d, condition, context, stimsrvAPI) {
  // TODO implement render function
  ctx2d.fillText(condition.text, 0, 0);

}

// TODO define interface components
let renderer = config => canvasRenderer(renderStimulus);
let buttons = config => htmlButtons("Next");

const task = simpleTask({
  defaults: DEFAULTS,
  // TODO assign interface components to interfaces
  interfaces: {
    display: renderer,
    monitor: renderer,
    response: buttons,
  }
});


module.exports = task;

