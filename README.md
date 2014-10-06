Herald-Web-Notifications
========================

Add Web Notifications to Herald for Meteor JS.

## [Experimental Technology](https://developer.mozilla.org/en-US/docs/Web/API/Notification#Browser_compatibility)

Web Notifications are new and subject to change. This package is as beta as its founding technology.

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

### webNotification (object)

Assuming you have Herald added all you need to do is define your media object. Every value in this object can be ether a string or a function. If its a function it will have the notification instance as its this context. So you can reference data or helpers, such as `this.message`, internally.

The available properties are all the non-event [Notification](https://developer.mozilla.org/en-US/docs/Web/API/Notification) properties.

* title (required)
* body (required)
* dir
* icon
* lang
* tag (automatically assigned the Herald notification _id and can not be set)

## [Requesting Permission](https://developer.mozilla.org/en-US/docs/Web/API/Notification/Using_Web_Notifications#Requesting_permission)

Before using this package you should read and understand Web Notification Permissions. In general you are going to want to request permission on click. A good place is when you ask a user if they want your app to send web notifications.
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
