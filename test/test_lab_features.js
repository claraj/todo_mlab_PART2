/*Essentials:

Follow the second part of the slides to get the Todo app running. Ensure all the features (flash messages for no task text, task deleted, task marked as done, all tasks done, JavaScript confirmations, error handling for invalid ObjectID values) are working.

Deploy your site to Heroku.

Advanced: Add these features to the app. Use the specific variable names, route paths, flash message strings, and attributes given. You can use the Mocha tests to help verify your app is working correctly. The tests will be looking for the exact behavior specified.

Change the Task model so that tasks can save the date they were created. Save in an attribute called dateCreated. Show this date next to the task on the home page.  The data type in your model will be Date.
In the task detail page, include the date created. If the task is complete (and only if the task is complete), also include the date completed.
Change the Task model so tasks can save the date that the task was completed. Use an attribute called dateCompleted. When a task is completed, set this attribute. Show both the taskCreated and taskCompleted dates on the /completed page
In Lab 8, you added a button to the /completed page to delete all completed tasks (and only completed tasks). This button should
POST to a /deleteDone route
The route handler will delete all tasks where completed = true
Create an info flash message saying "All Completed Tasks Deleted" with code like this:
req.flash('info', 'info message goes here');
Redirect to the home page. The info flash message should be shown.
If there is an error deleting, the route handler should pass the request to the error handler.
You can save JavaScript date objects in MongoDB. To create a date that represents right now,

var d = new Date();   // d is a Date object representing the time and date the object was created. */