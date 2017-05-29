const fs = require('../lib/sync-fs');
const request = require('request-promise-native');

const backupFileFor = require('../lib/backup-file-for');

module.exports = (project, couchUrl) => {
  return request({
      url: `${couchUrl}/_design/medic/_rewrite/app_settings/medic`,
      json: true,
    })
    .then(body => fs.writeJson(backupFileFor(project, 'app_settings.json'), body.settings));
};