import express from "express";
import { createServer } from "https";
import { Server } from "socket.io";
import fs from 'node:fs';
import history from "connect-history-api-fallback";
const app = express();
// app.get('/',(req,res)=>{
//   res.send('<h1>谢谢你的理解，再授权另一个网站，可以返回使用我们的系统了^_^</h1>');
// })
app.use(history());
app.use(express.static('public'));


const options = {
  key:fs.readFileSync('./ssl/server.private.key'),
  cert:fs.readFileSync('./ssl/server.crt')
}

const httpsServer = createServer(options,app);
const io = new Server(httpsServer, {   
  cors: {
    origin: '*',
  } 
});

let students = [];

// let msgNum = 0;
io.on("connection", (socket) => {
  const {username,role,setID}=socket.handshake.query;
  let myRoom = '';
  console.log(role,'连接成功');

  if(role=='student'){
    myRoom=socket.id+'Room';
    students.push({key:socket.id,username,room:myRoom,setID});
    socket.to('expert').emit('updateStudents',students);
    socket.join(myRoom);

    console.log(role,"加入了",myRoom);
  }
  else{
    socket.join('expert');
    socket.emit('updateStudents',students);

    socket.on('join',(room)=>{
      console.log(role,"加入了",room);
      myRoom=room;
      socket.join(myRoom);
      students = students.filter((student)=>{
        return  student.room != myRoom;
      })
      socket.to(myRoom).emit('ready');
      socket.to('expert').emit('updateStudents',students);
      socket.on('end',()=>{
        socket.to(myRoom).emit('isEnd');
      })
      socket.on('rate',(rate)=>{
        socket.to(myRoom).emit('theRate',rate);
      })
    });

    socket.on('leave',(room)=>{
      socket.leave(room);
    })

  }

  socket.on('message',(msg)=>{
    // console.log(role,"转播消息",++msgNum,msg);
    socket.to(myRoom).emit('message', msg);
  })

  //失去链接
  socket.on('disconnect', () => {
    console.log(role,"失去连接");
    if(role=='student'){  
      //console.log("删除前",students);
      students=students.filter((student)=>{
        return  student.key != socket.id;
      })
      socket.to('expert').emit('updateStudents',students);
      //console.log("删除后",students);
    }
    socket.leave(myRoom);
  })

});

httpsServer.listen(3000);