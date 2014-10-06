var runner =  {
  name: 'webNotifications',
  where: ['client']
};

runner.run = function (notification, user) {
  //respect the user and w3c
  if (!Notification.permission) return;
  if (Notification.permission == 'denied') return;

  //TODO: Check if user is idle!

  var title = this.title;

  var options = {}
  
  //tag is an id for finding and reduce same notification spam, so _id is appropriate
  options.tag = notification._id;

  if (_.isFunction(this.body))
    options.body = this.body.call(notification, user)
  else
    options.body = this.body

  //optionals
  if (this.dir) {
    if (_.isString(this.dir))
      options.dir = this.dir;
    else
      options.dir = this.dir.call(notification, user);
  };
  if (this.lang) {
    if (_.isString(this.lang))
      options.lang = this.lang;
    else
      options.lang = this.lang.call(notification, user);
  };
  if (this.icon) {
    if (_.isString(this.icon))
      options.icon = this.icon;
    else
      options.icon = this.icon.call(notification, user);
  };

  var notification = new Notification(title, options)
}

runner.check = function (notification, user) {
  if (! (_.isString(this.title) || _.isFunction(this.title)))
    throw new Error('Herald-Web-Notifications: title must be string or function')

  if (! (_.isString(this.body) || _.isFunction(this.body)))
    throw new Error('Herald-Web-Notifications: body must be string or function')
}

Herald.addRunner(runner);
