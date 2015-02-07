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

### Create a photos page

In "public/javascripts/app/app.js", in the PhotosController, there is some
commented out code that fetches some JSON data representing some photos.

* Store the photos in `$scope.photos` so they are available to the template.
* Using an `ng-repeat` directive in the template, display the photos.
* Style the photos template.
* Create a "photo" directive, so that each photo can be specified in the
  template like `<photo title="..." src="...">`.

### Adding a footer and playing with strings

Add a footer to the design. Using the data from "public/data/quotes.txt", show
a random quote every time the user visits the site. You can fetch the data in
the MainController.

You will need to split the data you get back from "quotes.txt" using
`String.split(...)`. You can find info at:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split)

### Refactoring

Break up "public/javascripts/app/app.js".

* The controllers should be in a "controllers" directory and should each have
  their own file.
* The router should be in its own file.

### Using factories

Instead of making a request directly in the PhotosController, move the request
functionality into a factory and call the factory from PhotosController.

### Adding a new full-slice feature

Create a new route.

* Create a "/gifs" route which points to a new GifsController and "gifs.html"
  template.
* Create a factory which hits http://www.reddit.com/r/gifs.json to fetch a list
  of gifs.
* Call the factory from your GifsController.
* Use the data you get back to render a bunch of gifs in the template.
* Style it for a consistent look.

### Extra credit&mdash;Transclusion

Modify the "photo" directive so that it can be specified like
`<photo src="...">title</photo>`, and use transclusion to fetch the contents
of the inner-HTML and display it underneath the photo's image.

### Extra credit&mdash;Creating an API

Instead of serving the photos from "public/data/photos.json", add an endpoint
to "lib/app.js" to render the JSON from the server side using Express.

### Extra credit&mdash;Basic server-side feature

Add a counter to the bottom of the page that shows how many people visit the
site. This will require adding some code to "lib/app.js" and templating the
data into "views/index.ejs". You will need to use EJS server-side templating.

References
----------

* https://thinkster.io/a-better-way-to-learn-angularjs/
* http://expressjs.com/starter/hello-world.html

