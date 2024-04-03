// server.js
const express = require('express');
const bodyParser = require('body-parser');
const rclnodejs = require('rclnodejs');
const path = require('path');

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(express.static('public')); // Serve static files from the 'public' folder

// Initialize ROS node
rclnodejs.init().then(() => {
  console.log('ROS Node initialized');

  const node = rclnodejs.createNode('publisher_example_node');
  const publisher = node.createPublisher('geometry_msgs/msg/Twist', '/turtle1/cmd_vel');

  // Endpoint to receive data from the client
  app.post('/publish', (req, res) => {
    const inputValue = parseFloat(req.body.value);
    console.log(`Received value: ${inputValue}`);

    // Publish the received value to ROS
    publisher.publish({
      linear: {
        x: inputValue,
        y: 0.0,
        z: 0.0
      },
      angular: {
        x: 0.0,
        y: 0.0,
        z: 0.0
      }
    });

    res.send('Value received and published');
  });

  rclnodejs.spin(node);
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
