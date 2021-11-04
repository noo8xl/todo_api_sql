const { AddToDb, EditTask, DeleteTask, GetByName, GetById, GetAllDatabase } = require('./DB_query')


class TodoService {

  async Create(taskName, taskText) {
    const candidate = await GetByName(taskName)
    if (candidate) {
      console.log("task name already use.  ");
    }
    if (taskName !== '' && taskText !== '') {
      console.table([{ 'task name ': taskName, 'task text': taskText }])
      await AddToDb(taskName, taskText)
    }
  }

  async Edit(id, name, text) {
    const currentTask = await GetById(id)
    console.log(currentTask)
    await EditTask(id, name, text)
    const updatedTask = await GetById(id)
    console.log(updatedTask);
  }




  async Delete(id) {
    const currentTask = await GetById(id)
    console.log('elem from service: ', currentTask)
    const ID = Number(id)
    console.log(typeof ID, 'from service')
    await DeleteTask(ID)

  }

  async GetAll() {
    const DB = await GetAllDatabase()
    return DB
  }
}

module.exports = new TodoService()