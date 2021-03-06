'use strict';

function convertToBase (manifestInfo, callback) {
  if (!manifestInfo || !manifestInfo.content) {
    return callback(new Error('Manifest content is empty or not initialized.'));
  }

  return callback(undefined, manifestInfo);
}

function convertFromBase (manifestInfo, callback) {
  if (!manifestInfo || !manifestInfo.content) {
    return callback(new Error('Manifest content is empty or not initialized.'));
  }

  return callback(undefined, manifestInfo);
}

var validRootProperties = ['name', 'author', 'version', 'default_locale', 'description', 'manifest_version', 'icons', 'content_security_policy',
                           'browser_action', 'page_action', 'background', 'commands', 'content_scripts', 'externally_connectable', 'homepage_url',
                           'addressbar', 'options_page', 'permissions', 'optional_permissions', 'web_accessible_resources', 'minimum_edge_version',
                           'key', '-ms-preload'];

function matchFormat (manifestObj) {
  var lowercasePropName;

  for (var prop in manifestObj) {
    if (manifestObj.hasOwnProperty(prop)) {
      lowercasePropName = prop.toLowerCase();
      if (validRootProperties.indexOf(lowercasePropName) === -1 && lowercasePropName.indexOf('_') <= 0) {
        return false;
      }
    }
  }

  return true;
}

module.exports = {
  convertToBase: convertToBase,
  convertFromBase: convertFromBase,
  matchFormat: matchFormat
};
