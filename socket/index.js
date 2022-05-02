const io = require("socket.io")(8900, {
  cors: {
    origin: "http://147.182.129.48:3000/",
  }
})

let users = [];


const addUser = (userId, socketId) => {
  !users.some(user => user.userId === userId) && users.push({ userId, socketId });
}

const removeUser = (socketId) => {
  users = users.filter(user => user.socketId !== socketId)
}

const getUser = (userId) => {
  return users.find(user => user.userId === userId)
}

io.on("connection", (socket) => {

  //when user connect
  console.log('a 8900 user connected.')

  //take userId and socketId from user 
  socket.on("addUser", userId => {
    addUser(userId, socket.id);
    io.emit("getUsers", users)
  })

  //send and get message
  socket.on("sendMessage", ({ senderId, receiverId, text }) => {
    const user = getser(receiverId);
    io.to(user.socketId).emit("getMessage", {
      senderId, text
    })

  })

  //when user disconnect 

  socket.on("disconnect", () => {
    console.log("a user disconnected!")
    removeUser(socket.id)
    io.emit("getUsers", users)
  })



})