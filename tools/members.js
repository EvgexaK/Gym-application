import * as Member from '../data/members'

const demoData = [
  {
    name: 'Alex',
    height: 180,
    days: 134,
    weight: 78,
    email: 'admin@mail.fi',
    fb:null,
    image: null,
    phone: null,
    dig: null,
  }
]

demoData.map((member, i) => {
  Member.saveById(`id${i}`, member);
});
