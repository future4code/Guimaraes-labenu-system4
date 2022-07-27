import { Request, Response } from "express";
import { connection } from "../data/connection";
import { Turma } from "../classes/Turma";
import { v4 as generateId } from "uuid";

export async function postTurma(req: Request, res: Response): Promise<any> {
  const { nome } = req.body;
  const id = generateId();
  try {
    const turma = new Turma(id, nome);
    // console.log(turma);
    await connection("Turma").insert(turma).into("Turma");
    res.status(200).send("Cadastro de turma com sucesso!");
  } catch (error: any) {
    res.status(400).send(error.message);
  }
}
