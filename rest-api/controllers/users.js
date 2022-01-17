import { v4 as uuid } from 'uuid';

let users = [];

export const getUsers = (req,res) => {
    const user = req.body;
    users.push({...user, id: uuid()});
}