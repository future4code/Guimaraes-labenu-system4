import { Request, Response } from "express";
import { Estudante} from "../../classes/Estudante";
import { v4 as generateId } from "uuid";
import { connection } from "../../data/connection";


export async function putEstudanteTurma(req: Request, res: Response): Promise<any> {
    const id = req.header;
    const novaTurma_id = req.body;
    try {
        await connection('Estudante').update({turma_id: novaTurma_id}).where('id', '=', id)
        res.status(200).send("Mudança de Turma com sucesso!");
    } catch (error: any) {
      res.status(400).send(error.message);
    }
  }
  