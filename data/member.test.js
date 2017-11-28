import 'react-native';
import React from 'react';
import App from '../App';
import renderer from 'react-test-renderer';

import MembersModel from './members';

// let memberId = 'id';
let m;
let memberId = '0c3b0c50-d345-11e7-81bd-0b46042baf2a';

const tmpMember = {
  name: 'test',
};

it('get members', async () => {
  try{

    const members = await MembersModel.all(memberId);
    expect.arrayContaining(members);
    m = members[0];
  } catch (err){
    throw err;
  }
});

it('get member by id', async () => {
  try{
    const member = await MembersModel.getById(m.id);
    expect.objectContaining(member);
  } catch (err){
    throw err;
  }
});

it('create new member', async () => {
  try{
    const member = await MembersModel.create(m);
  } catch (err){
    throw err;
  }
});


it('remove member by id', async () => {
  await MembersModel.remove(m.id);
  const removed = await MembersModel.getById(m.id);
  expect(removed).toBeNull();
});
