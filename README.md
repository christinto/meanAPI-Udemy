# meanAPI-Udemy Node course 1.. end vids of that
Udemy full working API MEAN stack Example!
The example for all examples ;D

Will need:
mlab to run mongo
postman to test writing your objects to the mongoDB
express, install mongo, json parser, 


Mongo Express Angular Node ;)..    Found my stack :)
Great mongoose example as well..

This is an awesome demo, cause rigged up a mongo database and api...


make config folder

Steps
npm install express --save

npm install ejs --save

npm install mongoose --save

npm install body-parser --save


setup data base on mlab
username: test
pw: test

mongodb://<dbuser>:<dbpassword>@ds127065.mlab.com:27065/nodetodosample

therefore

mongodb://test:test@ds127065.mlab.com:27065/nodetodosample

ADD SEED DATA, ala udemy node1 course api section at end..

config.json in this example
//wld never write plaintext pw, wld encrypt, but for purposes of this udemy tute.. plaintext

---------------------------------------------------------
ANGULAR FRONT END PART   ... angular.io is angular2
USE ANGULAR 2 LIKE NODE1 COURSE


Don't even have to do this part.. just copy all contents of public folder from udemy..
in udemy they copied a zip file from angular.io but I couldn't find it.. same diff

To get started:
Paste files into public folder (everything within public folder in final udemy node1 vid)
npm install
npm install --save-dev @angular/cli@latest
npm run tsc:w
that will run in background, once u change ts files will update in js
now we can start writing our js files!

// not necessary to ng serve --open
then should be on localhost:3000 !!!

run nodemon app.js from root public folder of app. Node should serve public folder..

tsc-w copies the changes from ts into the js of angular files

app.module.ts pulls api data into angular
todo.ts is schema of data
todo.service.ts points to your api endpoint url :) Shoots back todo object 

-----------------------------------------------------------------

old, don't need this part... just for future reference..

npm install -g @angular/cli
https://angular.io/guide/quickstart

Make a public folder in ur project root
Generate a new project and skeleton application by running the following commands:
ng new my-app

Step 3: Serve the application

Go to the project directory eg. cd cointreeapp and launch the server.

cd my-app           cd cointreeapp
ng serve --open

http://localhost:4200/
:)

The src folder

Your app lives in the src folder. All Angular components, templates, styles, images, and anything else your app needs go here. Any files outside of this folder are meant to support building your app.

The ng serve command launches the server, watches your files, and rebuilds the app as you make changes to those files.

Using the --open (or just -o) option will automatically open your browser on http://localhost:4200/.

Your app greets you with a message:


MONGOOSE SCHEMA'S!.. commonly used 
Handy as..
https://www.youtube.com/watch?v=07739ffJkbo
http://mongoosejs.com/docs/guide.html
https://www.youtube.com/watch?v=gFnRo29MxtY

potential mongo issues: not relevant here but interesting still..
Mongoose error: `open()` is deprecated in mongoose >= 4.11.0,
https://stackoverflow.com/questions/45023793/mongoose-error-open-is-deprecated-in-mongoose-4-11-0#45571678
https://github.com/Automattic/mongoose/issues/5399
change version back to 4.10.8 and it's working fine now.
4.10.8 is the stable version <3
npm uninstall -save mongoose
npm install -save mongoose@4.10.8
or
npm install mongoose@4.10.8 --save-dev


API-Cointree
to get something similar to unix timestamp in js..
Math.floor(new Date() / 1000)
can use this number as nonce, u can use any number as nonce but this is best practie..
just type it into node console to figure it out..