Herald-Web-Notifications
========================

Add Web Notifications to Herald for Meteor JS.


### THIS PACKAGE DOES NOT CURRENTLY WORK 
 see [issue #10](https://github.com/Meteor-Reaction/Herald/issues/10#comments) for details.


## [Requesting Permission](https://developer.mozilla.org/en-US/docs/Web/API/Notification/Using_Web_Notifications#Requesting_permission)

Before using this package you should read and understand Web Notification Permissions. In general you are going to want to request permission on click. A good place is when you ask a user if the want your app to send web notifications.
```js
Template.example.events({
  'click #yourButton': function () {
    Notification.requestPermission(function (status) {
      // This allows to use Notification.permission with Chrome/Safari
      if (Notification.permission !== status) {
        Notification.permission = status;
      }
    });
  }
});
```
