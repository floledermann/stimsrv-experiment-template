const filestorage = require("stimsrv/storage/filestorage");

module.exports = {
  devices: [
    {
      name: "Development PC",
      id: "dev",
    },
    {
      name: "Main Experiment (Display+Response)",
      id: "main",
    },
    {
      name: "Stimulus Display",
      id: "display",
    },
    {
      name: "Participant Response Input",
      id: "response",
    },
    {
      name: "Supervisor",
      id: "supervisor",
    },
  ],
  
  roles: [
    {
      role: "experiment",
      description: "Main Experiment Display",
      devices: ["main", "dev"],
      interfaces: ["display", "response"]
    },
    {
      role: "response",
      description: "Response Input",
      devices: ["response","dev"],
      interfaces: ["response"]
    },
    {
      role: "display",
      description: "Stimulus Display",
      devices: ["supervisor","display","dev"],
      interfaces: ["display"]
    },
    {
      role: "supervisor",
      description: "Supervisor Screen",
      devices: ["supervisor","dev"],
      interfaces: ["monitor", "control"]
    },
  ],
  
}