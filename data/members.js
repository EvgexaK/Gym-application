import Db from './firebase.js';

const tableName = 'Members';

export function saveById(id, member) {
  return Db.ref(`${tableName}/${id}`).set(member);
}

export function getById(id) {
  return Db.ref(`${tableName}/${id}`);
}

const test = Db.ref('/');

test.on('value', console.log);



