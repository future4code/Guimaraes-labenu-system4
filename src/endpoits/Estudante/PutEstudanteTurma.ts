import { Request, Response } from "express";
import { Estudante} from "../../classes/Estudante";
import { v4 as generateId } from "uuid";
import { connection } from "../../data/connection";


export async function putEstudanteTurma(req: Request, res: Response): 
Promise<any> {
    const id = req.params.id;
    const {turma_id}= req.body;
    try {
        await connection('Estudante')
        .where('id', "=", `%${id}%`)
        .update({turma_id: turma_id})
        
        res.status(200).send("Mudança de Turma com sucesso!");
    } catch (error: any) {
      res.status(400).send(error.message);
    }
  }
  