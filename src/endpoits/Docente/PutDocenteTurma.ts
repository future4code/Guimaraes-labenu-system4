import { Request, Response } from 'express'
import { connection } from '../../data/connection'

export const PutDocenteTurma = async (req: Request, res: Response): Promise<any> => {

    let statusCode = 400

    try {

        const id = req.params.id
        const { turma_id } = req.body

        await connection('Docente')
        .where('id', "=", `${id}`)
        .update({turma_id : turma_id})
        
        res.status(200).send('Mudança de turma com sucesso!')
    } catch (error: any) {
        res.status(statusCode).send(error.message)
    }
}