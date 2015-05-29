var browser = require('./lib/browser'),
    configXml = require('./lib/config-xml'),
    cordova = require('./lib/cordova'),
    events = require('./lib/events'),
    hooks = require('./lib/hooks'),
    info = require('./lib/info'),
    login = require('./lib/login'),
    multibar = require('./lib/multibar'),
    opbeat = require('./lib/opbeat'),
    serve = require('./lib/serve'),
    settings = require('./lib/settings'),
    setup = require('./lib/setup'),
    start = require('./lib/start'),
    state = require('./lib/state'),
    upload = require('./lib/upload'),
    utils = require('./lib/utils');

module.exports = {
  browser: browser,
  configXml: configXml,
  cordova: cordova,
  events: events,
  hooks: hooks,
  info: info,
  login: login,
  multibar: multibar,
  opbeat: opbeat,
  serve: serve,
  settings: settings,
  setup: setup,
  start: start,
  state: state,
  upload: upload,
  utils: utils
}
