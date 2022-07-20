// import { Request, Response } from "express";
// import { app } from "./app";
// import { Character } from "./data/Character";
// import { CharacterDataBase } from "./data/CharacterDataBase";
// import { connection } from "./data/connection";

import { app } from "./app";
import { postTurma } from "./endpoits/PostTurma";

app.post("/turma", postTurma);
