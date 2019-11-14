# Burger 
##Description
A burger logger that uncorporates mysql, Node, Express, and Handlebars to build a full stack website. The user enters a burger name of choice and it's added to column of listed burgers waiting to be devoured.  If the devoured button is clicked the specific burger is moved to the devoured list.

###Installation
Use node package manager to install
  1. npm install express
  2. npm install express-handlebars
  3. npm install mysql 

Use mysql package to connect to local mysql database with appropriate connection critera. 


When installing express-handlebars make sure to set a views folder and a sub layout folder.  This allows the express middleware to render the .handlebar files.   Example. app.set("view engine", "handlebars");





