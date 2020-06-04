# BUILD AN EXPRESS API

# Create an express server with the following endpoints:

# ROUTES

# Routes/ping.js file add the following route:

# '/ping' This route should accept a GET request whose response is simply the string pong

# In a routes/chuck.js file add the following route:

# '/chuck' This route should accept a GET request whose response is a random Chuck Norris joke from the https://api.chucknorris.io/ API.

# In a routes/math.js file add the following routes:

# '/count' This route should accept a PUT request which updates a global count variable which keeps track of how many times this particular route has been hit. Every time a PUT request is sent to this route the count variable should increment by 1 and then the route should respond with an object { message: "This route has been hit \${count} times." }.

# '/reset' This route should accept a DELETE request which resets the count variable and responds with the just the string The count has been reset.

# '/sum' This route should accept a POST request in the req.body format, add 7 to it and then send the sum back in the following string: The sum of ${number} and 7 is ${number + 7}.

# '/subtract' This route should accept a GET request with a number in the req.query format, subtract 7 from it and then send back the following string: ${number} - 7 is ${number - 7}. (with the number from the request interpolated in the response, ie: 7 minus 7 is 0.)

# FILE STRUCTURE

# Follow this file structure https://wynbucket.nyc3.digitaloceanspaces.com/codio_images/folder_tree.png

# SCRIPTS & DEPENDENCIES

# Use the "yarn start" script to run node server.js

# Use the "yarn dev" script to run nodemon server.js

# Your API should allow CORS. (Run yarn add Cors)

# Nodemon should be a devDependency.

# ROUTES IN POSTMAN

# Postman https://www.getpostman.com/collections/00094e1401e03cf2cf7a
