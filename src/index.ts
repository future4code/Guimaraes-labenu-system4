// import { Request, Response } from "express";
// import { Character } from "./data/Character";
// import { CharacterDataBase } from "./data/CharacterDataBase";
// import { connection } from "./data/connection";

import { app } from "./app";
import { GetAllDocente } from "./endpoits/Docente/GetAllDocente";
import { PostDocente } from "./endpoits/Docente/PostDocente";
import { postTurma } from "./endpoits/PostTurma";
import { getEstudanteNome } from "./endpoits/Estudante/GetEstudanteNome";
import { getEstudantes } from "./endpoits/Estudante/GetEstudantes";
import { postEstudante } from "./endpoits/Estudante/PostEtudante";
import { putEstudanteTurma } from "./endpoits/Estudante/PutEstudanteTurma";
import { getTurma } from "./endpoits/GetTurma";
import { PutDocenteTurma } from "./endpoits/Docente/PutDocenteTurma";

//Endpoints Turma
app.get("/turma", getTurma);
app.post("/turma", postTurma);

//Endpoints Docente
app.get('/docente', GetAllDocente)
app.post('/docente', PostDocente)
app.put('/docente', PutDocenteTurma)

//Endpoints Estudante
app.get("/estudante", getEstudantes);
app.get("/estudante/nome", getEstudanteNome);
app.post("/estudante", postEstudante);
app.put("/estudante/turma", putEstudanteTurma );
