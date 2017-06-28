import { createUser, getAllUsers } from "./controllers/users"

export default function routes(app) {
  app.get("/users", getAllUsers);
  app.post("/users", createUser);
}
