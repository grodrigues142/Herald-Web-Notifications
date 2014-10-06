var runner =  {
  name: 'webNotifications'
};

runner.run = function (notification, user) {
  //respect the user and w3c
  if (!Notification.permission) return;
  if (Notification.permission == 'denied') return;

  //TODO: Check if user is idle!
  var title = this.title;
  var options = {}
  if (this.dir) {
    if (_.isString(this.dir))
      options.dir = this.dir;
    else
      options.dir = this.dir();
  };
  if (this.lang) {
    if (_.isString(this.lang))
      options.lang = this.lang;
    else
      options.lang = this.lang();
  };
  if (this.icon) {
    if (_.isString(this.icon))
      options.icon = this.icon;
    else
      options.icon = this.icon();
  };

  //tag is an id for finding and reduce spam, so _id is appropriate
  options.tag = notification._id;

  //body
  if (_.isFunction(body))
    options.body = this.body()
  else
    options.body = this.body


  var notification = new Notification(title, options)
}

runner.check = function (notification, user) {
}

Herald.addRunner(runner);
