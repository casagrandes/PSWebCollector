const mongoose = require('mongoose');
const fs = require('fs');
const path = require('path');

let data = [];
let i;
for(i=0; i<100; i++) {
  let data = {
    name: `PC${i}`, 
    user: `User${i}`,
    os: 'Microsoft Windows 7 Professional',
    osVersion: '6.1.7601 Build 7601',
    domain: 'WORKGROUP',
    adminPassStatus: 'Disabled',
    thermalState: 'Safe',
    diskFreeSpace: 129310191616
  };
  const jsoncontent = JSON.stringify(data);
  fs.appendFile(path.join(__dirname, 'data.json'), jsoncontent, 'utf8', function (err) {
    if (err) {
      console.log(err);
    }
  });
};


// fs.appendFile(path.join(__dirname, 'data.json'), jsoncontent, 'utf8', function (err) {
//   if (err) {
//     console.log(err);
//   }
// });
