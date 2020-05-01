const server = require("./api/server");

const hostName = process.env.hostName || "127.0.0.1";
const PORT = process.env.PORT || 5000;

server.listen(PORT, () => {
  console.log(`Server started on ${hostName}:${PORT}`);
});
