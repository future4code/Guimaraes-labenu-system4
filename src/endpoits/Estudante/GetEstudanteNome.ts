import { Request, Response } from "express";
import { connection } from "../../data/connection";

export async function getEstudanteNome(req: Request, res: Response): Promise<any> {
  const nomeEstudante = req.header;
  try {
    const BuscaEstudante = await connection("Estudante").select("*").where({ nome: nomeEstudante }).from("Estudantes");
    res.status(200).send(BuscaEstudante);
  } catch (error: any) {
    res.status(400).send(error.message);
  }
}


