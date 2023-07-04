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

const error = (data) => {
  const date = new Date();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();

  return console.log(
    `\x1b[1;31m    ERROR     | \x1b[0;37m${hours}:${
      minutes < 10 ? "0" + minutes : minutes
    }:${
      seconds < 10 ? "0" + seconds : seconds
    }\x1b[1;31m | \x1b[1;31m${data}\x1b[0m`
  );
};

const warn = (data) => {
  const date = new Date();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();

  return console.log(
    `\x1b[2;33m    WARN      | \x1b[0;37m${hours}:${
      minutes < 10 ? "0" + minutes : minutes
    }:${seconds < 10 ? "0" + seconds : seconds}\x1b[2;33m | ${data}\x1b[0m`
  );
};

const debug = (data) => {
  const date = new Date();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();

  return console.log(
    `\x1b[0;35m    DEBUG     | \x1b[0;37m${hours}:${
      minutes < 10 ? "0" + minutes : minutes
    }:${seconds < 10 ? "0" + seconds : seconds}\x1b[0;35m | ${data}\x1b[0m`
  );
};

const info = (data) => {
  const date = new Date();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();

  return console.log(
    `\x1b[1;37m    INFO      | \x1b[0;37m${hours}:${
      minutes < 10 ? "0" + minutes : minutes
    }:${seconds < 10 ? "0" + seconds : seconds}\x1b[1;37m | ${data}\x1b[0m`
  );
};

const ready = (data) => {
  const date = new Date();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();

  return console.log(
    `\x1b[0;34m    READY     | \x1b[0;37m${hours}:${
      minutes < 10 ? "0" + minutes : minutes
    }:${seconds < 10 ? "0" + seconds : seconds}\x1b[0;34m | ${data}\x1b[0m`
  );
};

const command = (data) => {
  const date = new Date();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();

  return console.log(
    `\x1b[1;34m    COMMAND   | \x1b[0;37m${hours}:${
      minutes < 10 ? "0" + minutes : minutes
    }:${seconds < 10 ? "0" + seconds : seconds}\x1b[1;34m | ${data}\x1b[0m`
  );
};

const event = (data) => {
  const date = new Date();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();

  return console.log(
    `\x1b[1;33m    EVENT     | \x1b[0;37m${hours}:${
      minutes < 10 ? "0" + minutes : minutes
    }:${seconds < 10 ? "0" + seconds : seconds}\x1b[1;33m | ${data}\x1b[0m`
  );
};

const heartbeat = (data) => {
  const date = new Date();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();

  return console.log(
    `\x1b[1;30m    HEARTBEAT | \x1b[0;37m${hours}:${
      minutes < 10 ? "0" + minutes : minutes
    }:${seconds < 10 ? "0" + seconds : seconds}\x1b[1;30m | ${data}\x1b[0m`
  );
};

const database = (data) => {
  const date = new Date();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();

  return console.log(
    `\x1b[1;36m    DATABASE  | \x1b[0;37m${hours}:${
      minutes < 10 ? "0" + minutes : minutes
    }:${seconds < 10 ? "0" + seconds : seconds}\x1b[1;36m | ${data}\x1b[0m`
  );
};

const shard = (data) => {
  const date = new Date();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();

  return console.log(
    `\x1b[0;32m    SHARD     | \x1b[0;37m${hours}:${
      minutes < 10 ? "0" + minutes : minutes
    }:${seconds < 10 ? "0" + seconds : seconds}\x1b[0;32m | ${data}\x1b[0m`
  );
};

const cluster = (data) => {
  const date = new Date();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();

  return console.log(
    `\x1b[2;33m    CLUSTER   | \x1b[0;37m${hours}:${
      minutes < 10 ? "0" + minutes : minutes
    }:${seconds < 10 ? "0" + seconds : seconds}\x1b[2;33m | ${data}\x1b[0m`
  );
};

const lang = (data) => {
  const date = new Date();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();

  return console.log(
    `\x1b[2;35m    LANGUAGE  | \x1b[0;37m${hours}:${
      minutes < 10 ? "0" + minutes : minutes
    }:${seconds < 10 ? "0" + seconds : seconds}\x1b[2;35m | ${data}\x1b[0m`
  );
};

const critical = (data) => {
  const date = new Date();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();

  return console.log(
    `\x1b[1;31m    CRITICAL  | \x1b[0;37m${hours}:${
      minutes < 10 ? "0" + minutes : minutes
    }:${
      seconds < 10 ? "0" + seconds : seconds
    }\x1b[1;31m | \x1b[1;31m${data}\x1b[0m`
  );
};

module.exports = {
  error,
  warn,
  debug,
  info,
  ready,
  command,
  event,
  heartbeat,
  database,
  shard,
  cluster,
  lang,
  critical,
};
