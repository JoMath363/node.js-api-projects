import pool from "../db/index.js";

class TaskSchema {
  static async create({ projectId, title, description, status, priority, dueDate }) {
    const data = await pool.query(
      `
      INSERT INTO tasks (
          project_id, 
          title,
          description,
          status,
          priority,
          due_date
        ) 
      VALUES ($1, $2, $3, $4, $5, $6) 
      RETURNING *
      `,
      [projectId, title, description, status, priority, dueDate]
    );

    return data.rows;
  }

  static async getAll() {
    const data = await pool.query(
      `
      SELECT * FROM tasks
      `,
    );

    return data.rows;
  }

  static async getById({ id }) {
    return await pool.query(
      `
      SELECT * FROM tasks 
      WHERE id = $1
      `,
      [id]
    );
  }

  static async updateById({ id, projectId, title, description, status, priority, dueDate }) {
    const data = await pool.query(
      `
      UPDATE tasks 
      SET project_id = $1, 
          title = $2,
          description = $3,
          status = $4,
          priority = $5,
          due_date = $6
      WHERE id = $7 
      RETURNING *
      `,
      [projectId, title, description, status, priority, dueDate, id]
    );

    return data.rows;
  }

  static async deleteById({ id }) {
    return await pool.query(
      `
      DELETE FROM tasks 
      WHERE id = $1
      `,
      [id]
    );
  }
}

export default TaskSchema;