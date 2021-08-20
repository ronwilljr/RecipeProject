This application allows the user to create recipe posts and save them onto a webpage. 
The program can create, read, update and delete posts. 
The posts are also stored on a MongoDB database. Therefore, a cluster must be created in order to run. 
This program was created using Node.js and React, so this application is predominatly JavaScript.

 ------------------------------------------------------------------------------------

To run the program, download the repository and enter 'npm i' in the terminal to download the necessary dependencies.
Create a '.env' file in the './server/routes' folder, and make a variable for your MongoDB cluster url:

CONNECTION_URL = "the url goes here without the quotes"

-------------------------------------------------------------------------------------

Run a terminal in the './server' folder and enter 'npm start' to connect to the MongoDB cluster.
Run a terminal in the './client' folder and enter 'npm start' to then start the client side of the program.

If done correctly, the application should run on your browser at 'http://localhost:3000/'.
