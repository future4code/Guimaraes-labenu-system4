import { Request, Response } from 'express'
import { Docente } from '../../classes/Docente'
import { connection } from '../../data/connection'
import { v4 as generateId } from 'uuid'

export const PostDocente = async (req: Request, res: Response): Promise<any> => {

    let statusCode = 400

    const newId = generateId()

    const { nome, email, data_nasc, turma_id } = req.body

    const [docente] = await connection('Docente')
    .where({ email: email})

    if(docente) {
        res.statusCode = 409
        throw new Error('Docente já cadastrado.')
    }

    if(!nome || !email || !data_nasc || !turma_id) {
        res.statusCode = 406
        throw new Error("'Nome', 'email', 'Data de nascimento' e 'turma_id' são obrigatórios!")
    }

    if(!email.includes("@") || !email.includes(".com")) {
        res.statusCode = 406
        throw new Error ('O campo do email deve conter um "@" e um ".com"')
    }

    try {

        const docente = new Docente(newId, nome, email, data_nasc, turma_id)
        console.log(docente)
        
        await connection('Docente').insert(docente).into('Docente')

        res.status(200).send('Cadastro de docente realizado com sucesso!')

    } catch (error: any) {
        res.status(statusCode).send(error.message)
    }
}
