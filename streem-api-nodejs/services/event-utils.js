'use strict';

module.exports = {
  getEventName(eventName) {
    return encodeURIComponent(eventName.replace(/\s/gi, '-'));
  },
};
