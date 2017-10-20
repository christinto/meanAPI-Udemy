# meanAPI-Udemy
Udemy full working MEAN Example
Mongo Express Angular Node ;)..    Found my stack :)
Great mongoose example as well..

This is an awesome demo, cause rigged up a mongo database and api...


make config folder

Steps
npm install express --save-dev

npm install ejs --save-dev

npm install mongoose --save-dev

npm install body-parser --save-dev


setup data base on mlab
username: test
pw: test

mongodb://<dbuser>:<dbpassword>@ds127065.mlab.com:27065/nodetodosample

therefore

mongodb://test:test@ds127065.mlab.com:27065/nodetodosample

ADD SEED DATA, ala udemy node1 course api section at end..

config.json in this example
//wld never write plaintext pw, wld encrypt, but for purposes of this udemy tute.. plaintext


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

