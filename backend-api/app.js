// npm run start -> local host 8080
// 스타벅스 같은 공용와이파이에서는  at QueryReqWrap.onresolve 와 같이
// 서버가 데이터베이스에 접근하지 못하는 오류가 뜰 수 있다
const express = require("express");
const app = express();
const sanitizeHTML = require("sanitize-html");
const jwt = require("jsonwebtoken");

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use("/", require("./router"));

const server = require("http").createServer(app);
const io = require("socket.io")(server, {
  pingTimeout: 30000,
  cors: true,
});

io.on("connection", function (socket) {
  socket.on("chatFromBrowser", function (data) {
    try {
      let user = jwt.verify(data.token, process.env.JWTSECRET);
      socket.broadcast.emit("chatFromServer", {
        message: sanitizeHTML(data.message, {
          allowedTags: [],
          allowedAttributes: {},
        }),
        username: user.username,
        avatar: user.avatar,
      });
    } catch (e) {
      console.log("Not a valid token for chat.");
    }
  });
});

module.exports = server;
