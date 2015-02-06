Angular Example
===============

An example Angular app.

Instructions
------------

First, install node.

    brew install node

Clone this repository into your projects directory.

    git clone git@github.com:rjungemann/angular-example.git
    cd angular-example

Fetch all the necessary dependencies.

    npm install

Start the server.

    npm start

Visit the site at [http://localhost:9292](http://localhost:9292).

Things to try
-------------

In "public/javascripts/app/app.js", in the PhotosController, there is some
commented out code that fetches some JSON data representing some photos.

* Store the photos in `$scope.photos` so they are available to the template.
* Using an `ng-repeat` directive in the template, display the photos.
* Style the photos template.

Add a footer to the design. Using the data from "public/data/quotes.txt", show
a random quote every time the user visits the site. You can fetch the data in
the MainController.

Break up "public/javascripts/app/app.js".

* The controllers should be in a "controllers" directory and should each have
  their own file.
* The router should be in its own file.

Instead of serving the photos from "public/data/photos.json", add an endpoint
to "lib/app.js" to render the JSON from the server side using Express.

Add a counter to the bottom of the page that shows how many people visit the
site. This will require adding some code to "lib/app.js" and templating the
data into "views/index.ejs". You will need to use EJS server-side templating.

