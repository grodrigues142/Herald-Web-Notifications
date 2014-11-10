Package.describe({
  summary: " Add Web Notifications medium to Herald",
  version: "0.2.0",
  git: "https://github.com/Meteor-Reaction/Herald-Web-Notifications.git"
});

Package.onUse(function(api) {
  api.versionsFrom('METEOR@0.9.2');
  api.use(['kestanous:herald@1.0.0', 'underscore'])
  api.use('iron:router@1.0.0', ['client', 'server'], {weak: true})
  api.addFiles('lib/web-notifications.js');
});
