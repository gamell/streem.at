'use strict';

module.exports = {
  getEventName(eventReadableName) {
    return encodeURIComponent(eventReadableName.replace(/ /gi, '-'));
  },
};
