# pug_practice
Practice with templates INCODE - Inco Academy

Context

 

You keep on using the Express framework to build a prototype of Mr.Coffee's schedule management app.

 

You have completed the first phase of your action plan and got to know the framework. You already know how to create routes that return raw information.

 

You will now tackle the second step needed to build a web application: generating real web pages from your data.

 

For this step, you don't have any particular visual constraints. You simply need to build clean and readable HTML pages.




Guidelines

 

You will start from what you produced in the previous project. However, this time, instead of simply returning the data, you will render (i.e., transform into HTML pages) HTML templates. 

 

Your data will be inserted into HTML templates, to let app users view the data through real web pages.





🚩 Step 1 : Set up the template engine

 

The very first step is the configuration of a template engine, as well as the folder where the engine will fetch the templates.

 

Read this brief tutorial to learn how to do it.




🚩 Step 2 : Create the layout template

 

You will first create the layout template, i.e. the page structure that remains the same no matter which page is displayed.

 

Your site is basic so you don't need to do anything complex. A bar at the top of the page with a title (e.g. "Schedule website") and a content area with margins is enough.

 

You will then define a content block. It will be replaced by the templates that inherit the layout.




🚩 Step 3 : Create templates for the GET routes

 

You will create templates for each GET route your application offers. These templates will extend the layout and will only redefine the content block.

 

Again, you are free to display the data as you like, as long as it’s user-friendly. For example, a page that displays user info will not display all the info in one line, but will display a "First Name:" field followed by the first name, on another line a "Last Name:" field followed by the last name, etc.

 

You will then modify the routes so that they generate HTML pages containing the data.

 

This means that the following routes will generate HTML pages:

‘/'
‘/users'
‘/schedules'
route to display a given user
route to display the schedules of a given user



🚩 Step 4 : Create forms for POST routes

 

Last step, we will make the creation of users and schedules possible via the browser!

 

For this you will need to add two routes:

 

A '/users/new' route that displays a form to create a new user
A '/schedules/new' route that displays a form to create a new schedule.
 

For this step you can simply collect the values in simple text fields.

 

Be careful to correctly configure the action and method attributes of your forms in order to send the data in POST to the right URL. Of course, you must also make sure that the names of your fields in the form correspond to the expected fields in your routes.

 

You will make sure that the routes '/users' and '/schedules' in POST redirect to their version in GET in order to display the list of users and schedules with their new element.





🚩 Bonus step : Limit the possible values in your form fields

 

Small finishing touch: you can limit the inputs of your users by pre-filling the form with possible values.

 

You can enforce that in the form for adding a schedule:

There is a select field offering a choice among the days of the week.
There is a select field offering a choice among existing users. Try to display the full names of the users!

___________________________________________________________________________________________________________________________________

#3C 


Context

 

After your successful work on its showcase site, the M.Coffee company would like to put your skills to the service of its internal organisation. They ask you to develop a schedule management website for its teams.

 

The company first asks you to create a small prototype, which it will present to its teams to assess whether such a website could be useful to them.

 

For this project, you will have to store data and display it in a browser. To do this, you will discover databases with MySQL and make a small web application.

 

The prototype will be very simple and will have only two pages: a page to create a schedule, and a page to display all existing schedules.

 

The M.Coffee company doesn't give you any visual constraints but asks you to make something visually clean and readable.




Guidelines  

 

To build this small web application, you will use the ExpressJS framework, based on NodeJS. 

 

Remember: NodeJS is the version of JavaScript that we used on the command line during the immersion week. (It's different from the "in-browser" JavaScript you used last week).

 

You will connect to the MySQL database from NodeJS, and interactions with the application (like adding new schedules and displaying them) will be done through the browser.

 

This project articulates several fundamentals, albeit in their simplest form. In order to approach the project serenely, I advise you to start with this introductory course.

 

You can watch here a tutorial that shows you how to create a small basic application in Express.

 

Finally, the official Express website is full of information.

 

As usual, look deeper into any point you don’t understand by leading your own research!





🚩 Step 1 : Build your database

 

The schedule data will be stored in a database: MySQL. We call MySQL a relational database because the data is formatted according to a very precise schema, defined before adding any data.

 

Creating a database therefore starts by elaborating the data schema, i.e. what data will be stored and in what form.

 

This step is crucial because it determines the right logic for your application. For this first project we have developed the data schema for you, but in the future that tasks will be yours.

 

So you need to create a MySQL database with Node.Js and connect to it (see here if you don't know how to do this) before creating your table.

 

For this project, you need a 'schedule' table.

 

Your 'schedule' table will be composed of the following fields: 

- a unique key (ID),

- a username,

- the day of the week (1 for Monday, 2 for Tuesday... 7 for Sunday),

- a start time

- and an end time (both TIME type).




🚩 Step 2 : Build the two routes

 

Create a route "/" that will retrieve the list of existing schedules from the database and display them.

 

Create a route "/new" which will implement two actions:

- on GET, a form to add a schedule will be displayed.

- on POST, the form data will be saved in the database. You will then redirect to the form.




🚩 Step 3 : Create the corresponding views

 

You need to implement two views: 

 

- the view that displays all schedules, which will simply be presented as < USER NAME - day start_time - end_time > For example: < MAUD - Tuesday 8:30-12:30 >

 

- the view that displays the form.

 

On each of your views, there will be a link to the other view.




Deliverables

 

In a folder named Project_03_First Name_Surname, you will make available to your tutor: 

- all the source files that make up your application.




Competencies to validate

 

- Build a database

- Manage and display the contents of a database

- Use server-side JavaScript with Node.js and Express 
