import { connection } from "../../data/connection";
import { Request, Response } from "express";


export async function getEstudantes(req: Request, res: Response): Promise<any> {
    try {
      const estudantes = await connection("Estudante").select("*").from("Estudante");
      res.status(200).send(estudantes);
    } catch (error: any) {
      res.status(400).send(error.message)
    }}
