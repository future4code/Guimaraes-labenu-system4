import { Request, Response } from "express";
import { connection } from "../../data/connection";
import { Estudante} from "../../classes/Estudante";
import { v4 as generateId } from "uuid";

export async function postEstudante(req: Request, res: Response): Promise<any> {
  const { nome, email, data_nasc, turma_id } = req.body;
  const id = generateId();
  try {
    const estudante = new Estudante(id, nome, email, data_nasc, turma_id);
    await connection("Estudante").insert(estudante).into("Estudante");
    res.status(200).send("Cadastro de aluno realizado com sucesso!");
  } catch (error: any) {
    res.status(400).send(error.message);
  }
}
