Package.describe({
  summary: " Add Web Notifications medium to Herald",
  version: "0.1.3",
  git: "https://github.com/Meteor-Reaction/Herald-Web-Notifications.git"
});

Package.onUse(function(api) {
  api.versionsFrom('METEOR@0.9.2');
  api.use(['kestanous:herald@0.8.0', 'underscore'])
  api.addFiles('lib/web-notifications.js');
});
