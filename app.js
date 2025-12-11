'use strict';

const Homey = require('homey');

class SylvaniaZigbeeApp extends Homey.App {
  
  onInit() {
    this.log('Sylvania Zigbee App is running...');
  }
  
}

module.exports = SylvaniaZigbeeApp;
