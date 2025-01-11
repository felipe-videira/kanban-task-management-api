import * as Joi from 'joi';
import j2s from 'joi-to-swagger';

export interface BoardSchemaType {
  title: string
}
const schema = Joi.object({
  title: Joi.string().required()
})

export const swBoardSchema = j2s(schema).swagger

export default schema 
