import WebSocket, { WebSocketServer } from "ws";

const wss = new WebSocketServer({ port: 7890 });
const clients = {};

wss.on("connection", (ws, req) => {
  const room = req.url.slice(1);

  if (!clients[room]) {
    clients[room] = [];
  }

  clients[room].push(ws);
  console.log(`Client connected to room: ${room}`);

  ws.on("message", (message) => {
    const parsedMessage = JSON.parse(message);
    console.log("Message received:", parsedMessage);

    if (
      !parsedMessage || !parsedMessage.owner || !parsedMessage.id ||
      !parsedMessage.content || !parsedMessage.timestamp
    ) {
      console.log("Invalid message format", parsedMessage);
    }

    try {
      wss.clients.forEach((client) => {
        if (client.readyState === WebSocket.OPEN && client.room === room) {
          client.send(JSON.stringify({
            ...parsedMessage,
            id: new Date().getTime(),
            timestamp: new Date().getTime()
          }));
        }
      });
    } catch (error) {
      console.error("Error processing message:", error.message);
    }
  });

  ws.on("close", () => {
    clients[room] = clients[room].filter((c) => c !== ws);
    console.log(`Client disconnected from room: ${room}`);
  });
  ws.room = room;
});

console.log("WebSocket server listening on port 7890");
