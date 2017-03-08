/**
 * @providesModule SettingsiOS
 * @flow
 */
'use strict';

var NativeSettingsiOS = require('NativeModules').SettingsiOS;

/**
 * High-level docs for the SettingsiOS iOS API can be written here.
 */

var SettingsiOS = {
  test: function() {
    NativeSettingsiOS.test();
  }
};

module.exports = SettingsiOS;
