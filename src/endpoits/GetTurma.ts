import { connection } from "../data/connection";
import { Request, Response } from "express";


export async function getTurma(req: Request, res: Response): Promise<any> {
    try {
      const turmas = await connection("Turma").select("*").from("Turma");
      res.status(200).send(turmas);
    } catch (error: any) {
      res.status(400).send(error.message)
    }}