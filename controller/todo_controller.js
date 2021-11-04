const TodoService = require('../services/todo_service')

class TodoController {

  async CreateTask(req, res) {
    try {
      const { name, text } = req.body
      await TodoService.Create(name, text)
      res.status(201).json({ message: "todo was create" })
    } catch (e) {
      console.error(new Error(e));
      res.status(500).json({ message: "some server error.." })
    }
  }

  async EditTask(req, res) {
    try {
      const { ID, name, text } = req.body
      await TodoService.Edit(ID, name, text)
      // const updatedDB = await TodoService.GetAll()
      // console.log('new arr is ', updatedDB);
      res.status(200).json({ message: "done" })
    } catch (e) {
      console.error(new Error(e));
      res.status(500).json({ message: "some server error.." })
    }
  }

  async DeleteTask(req, res) {
    try {
      const { ID } = req.body
      console.log('controller test: ', typeof ID);
      console.log('elem is: ', ID)
      await TodoService.Delete(ID)
      const updatedDB = await TodoService.GetAll()
      console.log('new arr is ', updatedDB);

      res.status(200).json({ message: "task was delete" }).end()
    } catch (e) {
      console.error(new Error(e));
      res.status(500).json({ message: "some server error.." })
    }

  }

  async GetAll(req, res) {
    try {
      const DB = await TodoService.GetAll()
      res.status(200).json(DB).end()
    } catch (e) {
      console.error(new Error(e))
      res.status(500).json({ message: "some server error.." })
    }
  }
}

module.exports = new TodoController();