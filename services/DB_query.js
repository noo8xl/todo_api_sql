const mysql = require('../config/mysql_config')


async function GetById(id) {
  const ID = parseInt(id)
  return new Promise((resolve, reject) => {
    mysql.query(`SELECT * FROM task WHERE ID=${ID}`, (e, result) => {
      if (e) console.error(new Error(e))
      resolve(result)
    })
  })
}

async function GetByName(name) {
  return new Promise((resolve, reject) => {
    mysql.query(`SELECT ID, task_name FROM task WHERE task_name="${name}"`, (e, result) => {
      if (e) console.error(new Error(e))
      resolve(result)
    })
  })
}

async function GetAllDatabase() {
  return new Promise((resolve, reject) => {
    mysql.query("SELECT * FROM task", (e, result) => {
      if (e) console.error(new Error(e))
      resolve(result)
    })
  })
}

async function AddToDb(name, text) {
  if (name !== '' && text !== '') {
    mysql.query(
      `INSERT INTO task (task_name, task_text) VALUES ("${name}", "${text}")`,
      (err, result) => {
        if (err) console.error(err);
        console.log('done')
      })
  }
}

async function EditTask(id, name, text) {
  if (name !== '' && text !== '') {
    mysql.query(
      `UPDATE task SET task_name = "${name}",  task_text = "${text}" WHERE ID = ${id} `,
      (err, result) => {
        if (err) console.error(err);
        console.log('done')
      })
  }

}

async function DeleteTask(taskID) {
  console.log('db before int:', taskID)

  let currentID = Number(taskID)
  console.log('in if in query: ', typeof currentID);
  if (currentID !== undefined) {
    console.log('1231231231iu12t91t24912684916284916249821');

    mysql.query(
      `DELETE FROM task WHERE ID=${currentID} `,
      (err) => {
        if (err) console.error(err)
        console.log('from query func: done');
      })
  }

  // return new Promise((resolve, reject) => {
  //   mysql.query(`DELETE FROM task WHERE ID = ${currentID} `,
  //     (e) => {
  //       if (e) console.error(new Error(e))
  //       resolve(console.log('was del'))
  //     })
  // })
}

module.exports = {
  GetAllDatabase,
  AddToDb,
  EditTask,
  DeleteTask,
  GetByName,
  GetById
}