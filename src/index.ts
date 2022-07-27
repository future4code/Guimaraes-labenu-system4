// import { Request, Response } from "express";
// import { Character } from "./data/Character";
// import { CharacterDataBase } from "./data/CharacterDataBase";
// import { connection } from "./data/connection";

import { app } from "./app";
import { GetAllDocente } from "./endpoits/Docente/GetAllDocente";
import { PostDocente } from "./endpoits/Docente/PostDocente";
import { postTurma } from "./endpoits/PostTurma";

//Endpoints Turma
app.post("/turma", postTurma);

//Endpoints Docente
app.post('/docente', PostDocente)
app.get('/docente', GetAllDocente)


//Endpoints Estudante
