import Db from './firebase.js';

const tableName = 'exercises';
const Ref = Db.ref(`${tableName}`);

export function all() {
  return new Promise((res, rej) => {
    try {
      Ref.on('value', data => {
        const items = data.val();
        res(Object.keys(items).map(id => ({ ...items[id], id })));
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

export async function saveById(id, tmp) {
  const data = { ...tmp };
  delete data.id;
  await Db.ref(`${tableName}/${id}`).set(data);
  return getById(id);
}


export async function create(data) {
  const newItem = Ref.push();
  await newItem.set(data);
  return {...data, id: newItem.getKey()};
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
