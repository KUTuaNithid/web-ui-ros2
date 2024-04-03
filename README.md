# web-ui-ros2

## System Requirement
- ROS2
- Nodejs (I'm using https://github.com/RobotWebTools/rclnodejs.git )


## Description
public/index.html
- This is a client-side interface. The user will input the data and submit.
- After the user click submit button, JavaScript in the index.html will send the POST request to the server
server.js
- The server handle the HTTP request from the client.
- When user open localhost:3000 on the browser, the server will serves the index.html file.
- The server will listens for POST request from the client side, then publish to the ROS using rclnodejs

## Preparation
0. Install ROS and Nodejs
1. Install librarty
npm init -y
npm install express
npm install body-parser
npm install rclnodejs

## Execute
1. cd web-ui-ros2
2. node server.js
3. Go to localhost:3000 on the browser
4. Open the turtlebotsim_gui ros2 run turtlesim turtlesim_node
5. Submit the float data in the browser to move the robot forward