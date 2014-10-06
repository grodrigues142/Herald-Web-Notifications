Herald-Web-Notifications
========================

Add Web Notifications to Herald for Meteor JS.


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
## Basic usage (may change)

```js
Herald.addCourier('someNotificaiton', {
  media: {
    webNotification: {
      title: 'hello from the web',
      body: function () {
        return this.message()
      }
    }
  }
});
```

#### title (string or function)
  TODO
  
#### body (string or function)
  TODO
