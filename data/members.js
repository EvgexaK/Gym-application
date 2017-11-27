import uuidv1 from "uuid/v1";

import Db from './firebase.js';

const tableName = 'Members';

export function getById(id) {
  return Db.ref(`${tableName}/${id}`);
}

export function saveById(id, member) {
  return Db.ref(`${tableName}/${id}`).set(member);
}

export async function create(data) {
  let id = uuidv1();
  let member = await getById(id);
  while (!member){
    id = uuidv1();
    member = await getById(id);
  };
  await saveById(id, data);
  console.log({id, data})
  return getById(id);
}

export default {
  getById,
  saveById,
  create,
};



