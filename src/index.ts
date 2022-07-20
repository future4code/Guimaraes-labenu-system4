import { app } from "./app";
import { getEstudanteNome } from "./endpoits/Estudante/GetEstudanteNome";
import { getEstudantes } from "./endpoits/Estudante/GetEstudantes";
import { postEstudante } from "./endpoits/Estudante/PostEtudante";
import { putEstudanteTurma } from "./endpoits/Estudante/PutEstudanteTurma";
import { getTurma } from "./endpoits/GetTurma";
import { postTurma } from "./endpoits/PostTurma";

app.post("/turma", postTurma);
app.post("/estudante", postEstudante);

app.put("/estudante/turma", putEstudanteTurma );

app.get("/turma", getTurma); 
app.get("/estudante", getEstudantes);
app.get("/estudante/nome", getEstudanteNome);
