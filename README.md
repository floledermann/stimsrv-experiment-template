# stimsrv Experiment Template

Clone this repository as a starting point for your [stimsrv](https://github.com/floledermann/stimsrv) experiment.

## Getting started

Refer to the [stimsrv documentation](https://github.com/floledermann/stimsrv/) for information on configuring and developing experiments.

## Helper Scripts

Run **install.bat** (or **`npm i`** on the command line) after cloning the repository to install stimsrv and required libraries.

Run **run-monitor.bat** (or **`npm run experiment-monitor`** on the command line) during development to start the experiment and automatically reload when your code changes.

Run **run-debug.bat** (or **`npm run experiment-debug`** on the command line) during development to start the experiment in debugging mode. You can then use your browser's developer tools to debug the code.

Run **run.bat** (or **`npm run experiment`** on the command line) to start the experiment for a regular session.

## Licensing your experiment

While this template is licensed under der [MIT License](https://opensource.org/licenses/MIT), it does not include a LICENSE file or make any assumtions about the license you are planning to use for your experiment. Consider licensing your experiment under an appropriate open source license.

## Documenting your experiment

The content below can serve as a template to document your experiment in this readme so others can run it. Delete everything above the line once you're ready.

----

# stimsrv Experiment: *<name of the experiment>*

This experiment uses the [stimsrv system](https://github.com/floledermann/stimsrv/) for ....

## Installation

Clone this repository and run **install.bat** (or `npm i` on the command line) a single time to install stimsrv and required libraries.

## Running the experiment

Run **run.bat** (or **`npm run experiment`** on the command line) to start the experiment for a regular session.

Open a web browser on the target device(s) and open one of the URLs shown in the stimsrv output. (Note: the accessibility of the stimsrv server from your target devices may depend on your network configuration - contact your system administrator if you cannot connect to stimsrv from your client device.)

Enter one of the following device IDs in the role selection page:

***(TO DO: document the roles available in your experiment here!)***

- **participant** for the participant interface
- **supervisor** for the supervisor device
- **dev** during development (allow the selection of any role for testing purposes).

For further adjustments, refer to the [stimsrv documentation](https://github.com/floledermann/stimsrv/) for information on configuring and developing experiments.



