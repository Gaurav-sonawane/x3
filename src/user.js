const mysql = require("mysql");
const Promise = require("bluebird");
const Connection = require("mysql/lib/Connection");
Promise.promisifyAll(require("mysql/lib/Connection").prototype);

const dbinfo = {
  host: "localhost",
  user: "gauravsonawane",
  password: "cdac",
  database: "wptmodule",
};

const addUser = async (user) => {
  const connection = mysql.createConnection(dbinfo);
  await connection.connectAsync();

  let sql = `insert into user1 (Id,username,password,email) values (?,?,?,?)`;
  await connection.queryAsync(sql, [
    user.Id,
    user.username,
    user.password,
    user.email,
  ]);

  console.log("connection success");
  connection.endAsync();
};

addUser(user);

const selectUser = async () => {
  const connection = mysql.createConnection(dbinfo);
  await connection.connectAsync();

  let sql = `select * from user1`;
  const list = await connection.queryAsync(sql);
  console.log(list);
  return list;

  await connection.endAsync();
};

selectUser();

module.expoerts = { selectUser, addUser };
