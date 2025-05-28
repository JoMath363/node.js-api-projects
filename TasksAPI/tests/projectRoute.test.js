import request from "supertest";
import app from "../server.js";
import { describe, it, expect } from "@jest/globals";

describe("Project Routes", () => {
  let projectId = null;

  it("should create a new project", async () => {
    const newProject = {
      name: "Test Project",
      description: "This is a test project"
    };

    const response = await request(app)
      .post("/project")
      .send(newProject);

      
    expect(response.statusCode).toBe(200);
    expect(response.body).toHaveProperty("data");
    expect(response.body.data).toHaveProperty("name", newProject.name);
    expect(response.body.data).toHaveProperty("description", newProject.description);
    
    projectId = response.body.data.id;
  });

  it("should return a project by id", async () => {
    const response = await request(app).get(`/project/${projectId}`);

    expect(response.statusCode).toBe(200);
    expect(response.body).toHaveProperty("data");
    expect(response.body.data).toHaveProperty("id", projectId);
  });

  it("should return all projects", async () => {
    const response = await request(app).get("/project");

    expect(response.statusCode).toBe(200);
    expect(response.body).toHaveProperty("data");
    expect(Array.isArray(response.body.data)).toBe(true);
  });

  it("should update a project", async () => {
    const updated = {
      name: "Updated Name",
      description: "Updated Description"
    };

    const response = await request(app)
      .put(`/project/${projectId}`)
      .send(updated);

    expect(response.statusCode).toBe(200);
    expect(response.body).toHaveProperty("data");
    expect(response.body.data).toHaveProperty("name", updated.name);
    expect(response.body.data).toHaveProperty("description", updated.description);
  });

  it("should delete a project", async () => {
    const response = await request(app).delete(`/project/${projectId}`);

    expect(response.statusCode).toBe(200);
    expect(response.body).toHaveProperty("message");
  });
});