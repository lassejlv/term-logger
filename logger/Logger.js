/*
MIT License

Copyright (c) 2023 DEEM

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
*/

// COLORS PACKAGE
const c = require('colors');

const date = new Date();
const hours = date.getHours();
const minutes = date.getMinutes();
const seconds = date.getSeconds();

const error = (data) => {
  return console.log(
    `${`>`.grey}  ${`ERROR`.underline.red}    ${
      `[${hours < 10 ? '0' + hours : hours}:${minutes < 10 ? 'O' + minutes : minutes}:${
        seconds < 10 ? '0' + seconds : seconds
      }]`.gray
    }   ${`${data}`.white}`
  );
};

const critical = (data) => {
  return console.log(
    `${`>`.grey}  ${`CRITICAL`.underline.red} ${
      `[${hours < 10 ? '0' + hours : hours}:${minutes < 10 ? 'O' + minutes : minutes}:${
        seconds < 10 ? '0' + seconds : seconds
      }]`.gray
    }   ${`${data}`.white}`
  );
};

const success = (data) => {
  return console.log(
    `${`>`.grey}  ${`SUCCESS`.underline.green}  ${
      `[${hours < 10 ? '0' + hours : hours}:${minutes < 10 ? 'O' + minutes : minutes}:${
        seconds < 10 ? '0' + seconds : seconds
      }]`.gray
    }   ${`${data}`.white}`
  );
};

const warn = (data) => {
  return console.log(
    `${`>`.grey}  ${`WARNING`.underline.yellow}  ${
      `[${hours < 10 ? '0' + hours : hours}:${minutes < 10 ? 'O' + minutes : minutes}:${
        seconds < 10 ? '0' + seconds : seconds
      }]`.gray
    }   ${`${data}`.white}`
  );
};

const await = (data) => {
  return console.log(
    `${`>`.grey}  ${`WAITING`.underline.cyan}  ${
      `[${hours < 10 ? '0' + hours : hours}:${minutes < 10 ? 'O' + minutes : minutes}:${
        seconds < 10 ? '0' + seconds : seconds
      }]`.gray
    }   ${`${data}`.white}`
  );
};

const complete = (data) => {
  return console.log(
    `${`>`.grey}  ${`COMPLETE`.underline.green} ${
      `[${hours < 10 ? '0' + hours : hours}:${minutes < 10 ? 'O' + minutes : minutes}:${
        seconds < 10 ? '0' + seconds : seconds
      }]`.gray
    }   ${`${data}`.white}`
  );
};

const debug = (data) => {
  return console.log(
    `${`>`.grey}  ${`DEBUG`.underline.magenta}    ${
      `[${hours < 10 ? '0' + hours : hours}:${minutes < 10 ? 'O' + minutes : minutes}:${
        seconds < 10 ? '0' + seconds : seconds
      }]`.gray
    }   ${`${data}`.white}`
  );
};

const fatal = (data) => {
  return console.log(
    `${`>`.grey}  ${`FATAL`.underline.red}    ${
      `[${hours < 10 ? '0' + hours : hours}:${minutes < 10 ? 'O' + minutes : minutes}:${
        seconds < 10 ? '0' + seconds : seconds
      }]`.gray
    }   ${`${data}`.white}`
  );
};

const info = (data) => {
  return console.log(
    `${`>`.grey}  ${`INFO`.underline.white}     ${
      `[${hours < 10 ? '0' + hours : hours}:${minutes < 10 ? 'O' + minutes : minutes}:${
        seconds < 10 ? '0' + seconds : seconds
      }]`.gray
    }   ${`${data}`.white}`
  );
};

const note = (data) => {
  return console.log(
    `${`>`.grey}  ${`NOTE`.underline.grey}     ${
      `[${hours < 10 ? '0' + hours : hours}:${minutes < 10 ? 'O' + minutes : minutes}:${
        seconds < 10 ? '0' + seconds : seconds
      }]`.gray
    }   ${`${data}`.white}`
  );
};

const pending = (data) => {
  return console.log(
    `${`>`.grey}  ${`PENDING`.underline.magenta}  ${
      `[${hours < 10 ? '0' + hours : hours}:${minutes < 10 ? 'O' + minutes : minutes}:${
        seconds < 10 ? '0' + seconds : seconds
      }]`.gray
    }   ${`${data}`.white}`
  );
};

const start = (data) => {
  return console.log(
    `${`>`.grey}  ${`START`.underline.green}    ${
      `[${hours < 10 ? '0' + hours : hours}:${minutes < 10 ? 'O' + minutes : minutes}:${
        seconds < 10 ? '0' + seconds : seconds
      }]`.gray
    }   ${`${data}`.white}`
  );
};

const watch = (data) => {
  return console.log(
    `${`>`.grey}  ${`WATCHING`.underline.yellow} ${
      `[${hours < 10 ? '0' + hours : hours}:${minutes < 10 ? 'O' + minutes : minutes}:${
        seconds < 10 ? '0' + seconds : seconds
      }]`.gray
    }   ${`${data}`.white}`
  );
};

const ready = (data) => {
  return console.log(
    `${`>`.grey}  ${`READY`.underline.blue}    ${
      `[${hours < 10 ? '0' + hours : hours}:${minutes < 10 ? 'O' + minutes : minutes}:${
        seconds < 10 ? '0' + seconds : seconds
      }]`.gray
    }   ${`${data}`.white}`
  );
};

const command = (data) => {
  return console.log(
    `${`>`.grey}  ${`COMMAND`.underline.cyan}  ${
      `[${hours < 10 ? '0' + hours : hours}:${minutes < 10 ? 'O' + minutes : minutes}:${
        seconds < 10 ? '0' + seconds : seconds
      }]`.gray
    }   ${`${data}`.white}`
  );
};

const event = (data) => {
  return console.log(
    `${`>`.grey}  ${`EVENT`.underline.yellow}    ${
      `[${hours < 10 ? '0' + hours : hours}:${minutes < 10 ? 'O' + minutes : minutes}:${
        seconds < 10 ? '0' + seconds : seconds
      }]`.gray
    }   ${`${data}`.white}`
  );
};

const database = (data) => {
  return console.log(
    `${`>`.grey}  ${`DATABASE`.underline.grey} ${
      `[${hours < 10 ? '0' + hours : hours}:${minutes < 10 ? 'O' + minutes : minutes}:${
        seconds < 10 ? '0' + seconds : seconds
      }]`.gray
    }   ${`${data}`.white}`
  );
};

const shard = (data) => {
  return console.log(
    `${`>`.grey}  ${`SHARD`.underline.green}    ${
      `[${hours < 10 ? '0' + hours : hours}:${minutes < 10 ? 'O' + minutes : minutes}:${
        seconds < 10 ? '0' + seconds : seconds
      }]`.gray
    }   ${`${data}`.white}`
  );
};

const cluster = (data) => {
  return console.log(
    `${`>`.grey}  ${`CLUSTER`.underline.blue}  ${
      `[${hours < 10 ? '0' + hours : hours}:${minutes < 10 ? 'O' + minutes : minutes}:${
        seconds < 10 ? '0' + seconds : seconds
      }]`.gray
    }   ${`${data}`.white}`
  );
};

const log = (data) => {
  return console.log(`${data}`);
};

module.exports = {
  error,
  critical,
  success,
  warn,
  await,
  complete,
  debug,
  fatal,
  info,
  note,
  pending,
  start,
  watch,
  log,
  ready,
  command,
  event,
  database,
  shard,
  cluster,
};
