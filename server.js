const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Global visitor counter
let visitorCount = 0; 

app.get('/', (req, res) => {
    visitorCount++; // Increment counter on every request
    
    const containerId = process.env.HOSTNAME || "node-app-deployment-unknown"; // Dynamic Container ID

    // Professional HTML & CSS Template Response
    const htmlResponse = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Kubernetes Deployment Monitor</title>
        <style>
            * {
                margin: 0;
                padding: 0;
                box-sizing: border-box;
            }
            body { 
                font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif; 
                background-color: #f4f6f9;
                color: #1e293b; 
                min-height: 100vh;
                display: flex;
                justify-content: center;
                align-items: center;
                padding: 20px;
            }
            .container {
                background: #ffffff;
                padding: 35px;
                border-radius: 8px;
                box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
                max-width: 500px;
                width: 100%;
                border-top: 4px solid #2563eb;
            }
            h1 { 
                font-size: 22px; 
                font-weight: 600; 
                margin-bottom: 25px; 
                color: #0f172a;
                text-align: center;
                letter-spacing: -0.5px;
            }
            .data-group {
                margin-bottom: 20px;
            }
            .data-row {
                display: flex;
                justify-content: space-between;
                align-items: center;
                padding: 12px 0;
                border-bottom: 1px solid #e2e8f0;
            }
            .data-row:last-of-type {
                border-bottom: none;
            }
            .label {
                font-size: 14px;
                font-weight: 500;
                color: #475569;
            }
            .value {
                font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
                background-color: #f8fafc;
                padding: 6px 10px;
                border-radius: 4px;
                font-size: 13px;
                color: #0f172a;
                border: 1px solid #e2e8f0;
            }
            .badge {
                background-color: #eff6ff;
                color: #1d4ed8;
                font-weight: 600;
                border-color: #bfdbfe;
            }
            .divider {
                height: 1px;
                background-color: #e2e8f0;
                margin: 20px 0 15px 0;
            }
            .developer-info {
                text-align: center;
                font-size: 13px;
                color: #64748b;
                line-height: 1.5;
            }
            .developer-info strong {
                color: #334155;
            }
        </style>
    </head>
    <body>
        <div class="container">
            <h1>Node.js App Running on Kubernetes</h1>
            
            <div class="data-group">
                <div class="data-row">
                    <span class="label">Timestamp</span>
                    <span class="value">${new Date().toUTCString()}</span>
                </div>
                
                <div class="data-row">
                    <span class="label">Container ID</span>
                    <span class="value">${containerId}</span>
                </div>
                
                <div class="data-row">
                    <span class="label">Visitor Count</span>
                    <span class="value badge">${visitorCount}</span>
                </div>
            </div>

            <div class="divider"></div>

            <div class="developer-info">
                Developer: <strong>Muhammad Sarmad Chughtai</strong><br>
                SAP ID: <strong>54915</strong>
            </div>
        </div>
    </body>
    </html>
    `;
    
    res.send(htmlResponse);
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
