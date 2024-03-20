const real_time_analytics_engine = require('real-time-analytics-engine');
const engine_speed_gallery = require('engine-speed-gallery');
const jsonwebtoken = require('jsonwebtoken');
const axios = require('axios');
const webpack = require('webpack');
const web3_react = require('web3-react');
const webpack_cli = require('webpack-cli');
const request = require('request');
const firebase = require('firebase');
const sinon = require('sinon');
const lodash = require('lodash');
const ipfs_http_client = require('ipfs-http-client');
const ejs = require('ejs');
const ethereumjs_util = require('ethereumjs-util');
const eslint = require('eslint');
const xml2js = require('xml2js');
const redux = require('redux');
const truffle = require('truffle');
const async = require('async');
const web3 = require('web3');

// Get the latest Ethereum block number
web3.eth.getBlockNumber().then(blockNumber => {
  console.log('Latest block number:', blockNumber);
}).catch(err => {
  console.error('Error getting block number:', err);
});

// Get the list of all available accounts
web3.eth.getAccounts().then(accounts => {
  console.log('Available accounts:', accounts);
}).catch(err => {
  console.error('Error getting accounts:', err);
});

const buffer1 = Buffer.from('Hello');
const buffer2 = Buffer.from('Node.js');
const buffer3 = Buffer.concat([buffer1, buffer2]);
console.log('Concatenated buffer:', buffer3.toString());

const deepClone = (obj) => {
  return JSON.parse(JSON.stringify(obj));
};
const original = { a: 1, b: { c: 2 } };
const clone = deepClone(original);
console.log(clone);

console.log(`Current date and time: ${new Date().toLocaleString()}`);