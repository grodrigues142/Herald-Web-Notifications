Package.describe({
  summary: " \* Fill me in! *\ ",
  version: "0.1.0",
  git: " \* Fill me in! *\ "
});

Package.onUse(function(api) {
  api.versionsFrom('METEOR@0.9.2');
  api.use(['kestanous:herald@0.7.0', 'underscore'])
  api.addFiles('lib/web-notifications.js');
});
