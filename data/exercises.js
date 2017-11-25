/**
 * Gym app
 * @autor suslov
 * @created 2017-11-25
 */

import Db from './firebase.js';

const tableName = 'exercises';

export function saveById(id, member) {
  return Db.ref(`${tableName}/` + id).set(member);
}

export function getAll(filter) {
  return Db.ref(`${tableName}`);
}

getAll().on('value', snapshot => console.log(snapshot.val()));

export function getById(id) {
  return Db.ref(`${tableName}/${id}`);
}

export default Db;
