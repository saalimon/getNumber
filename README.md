# getNumber
retrive only number from any text

Installation and Usage
----------------------

get-number supports stable versions of Node.js 8.15.0 and later. You can install
get-number  globally or in your project's `node_modules` folder.

To install the latest version on npm globally (might require `sudo`;
[learn how to fix this](https://docs.npmjs.com/resolving-eacces-permissions-errors-when-installing-packages-globally)):

    npm install -i get-number


## usage
    var getNumber = require("get-number")
    var text = "abcvaca12"
    var result = getNumber(text)
    console.log(result)

