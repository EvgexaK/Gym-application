import uuidv1 from 'uuid/v1';

import Db from './firebase.js';

const tableName = 'Members';

export function all() {
  return new Promise((res, rej) => {
    try {
      Db.ref(`${tableName}`).on('value', data => {
        const members = data.val();
        res(Object.keys(members).map(id => ({ ...members[id], id })));
      });
    } catch (err) {
      rej(err);
    }
  });
}

export function getById(id) {
  return new Promise((res, rej) => {
    try {
      Db.ref(`${tableName}/${id}`).on('value', data => {
        if (data.val()) {
          res({ ...data.val(), id });
        } else {
          res(null);
        }
      });
    } catch (err) {
      rej(err);
    }
  });
}

export async function saveById(id, member) {
  const data = { ...member };
  delete data.id;
  await Db.ref(`${tableName}/${id}`).set(member);
  return getById(id);
}

export async function create(data) {
  let id = uuidv1();
  let member = await getById(id);
  while (member) {
    id = uuidv1();
    member = await getById(id);
  }
  return  saveById(id, data);
}

export function remove(id) {
  return Db.ref(`${tableName}/${id}`).remove();
}

export default {
  all,
  getById,
  saveById,
  create,
  remove,
};
