import pool from "../db/index.js";

class ProjectSchema {
  static async create({ name, description }) {
    const data = await pool.query(
      `
      INSERT INTO projects (
        name, 
        description
        ) 
      VALUES ($1, $2) 
      RETURNING *
      `,
      [name, description]
    );

    return data.rows;
  }

  static async getAll() {
    const data = await pool.query(
      `
      SELECT * FROM projects
      `,
    );

    return data.rows;
  }

  static async getEmpty() {
    return await pool.query(
      `
      SELECT p.*
      FROM projects p
      LEFT JOIN tasks t ON p.id = t.project_id
      WHERE t.id IS NULL
      `
    );
  }

  static async getRecent() {
    return await pool.query(
      `
      SELECT *
      FROM projects
      ORDER BY created_at DESC
      LIMIT 5
      `
    );
  }

  static async getById({ id }) {
    return await pool.query(
      `
      SELECT * FROM projects 
      WHERE id = $1;
      `,
      [id]
    );
  }

  static async getTasks({ id }) {
    return await pool.query(
      `
      SELECT *
      FROM tasks
      WHERE project_id = $1
      `,
      [id]
    );
  }

  static async updateById({ id, name, description }) {
    const data = await pool.query(
      `
      UPDATE projects 
      SET name = $1, 
          description = $2 
      WHERE id = $3 
      RETURNING *
      `,
      [name, description, id]
    );

    return data.rows;
  }

  static async deleteById({ id }) {
    return await pool.query(
      `
      DELETE FROM projects 
      WHERE id = $1
      `,
      [id]
    );
  }
}

export default ProjectSchema;