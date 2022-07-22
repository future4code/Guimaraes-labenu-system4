import { Request, Response } from 'express'
import { connection } from '../../data/connection'


export const GetAllDocente = async (req: Request, res: Response): Promise<any> => {

    let statusCode = 400

    try {
        
        const result = await connection('Docente')
        .select('nome')

        res.status(200).send(result)

    } catch (error: any) {
        res.status(statusCode).send(error.message)
    }
}