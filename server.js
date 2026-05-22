const express = require('express');
const os = require('os');
const app = express();
const PORT = 3000;
let visitorCount = 0;
app.get('/', (req, res) => {
    visitorCount++;
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify({
        status: "Success",
        message: "Welcome to my AWS Free Tier Kubernetes Deployment!",
        timestamp: new Date().toISOString(),
        containerId: os.hostname(),
        visitorNumber: visitorCount
    }, null, 2));
});
app.get('/health', (req, res) => {
    res.status(200).json({ status: "UP", timestamp: new Date().toISOString() });
});
app.listen(PORT, () => { console.log(`Running on port ${PORT}`); });
