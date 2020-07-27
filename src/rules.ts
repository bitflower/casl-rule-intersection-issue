export const rules = [
  {
    action: ['edit', 'create'],
    subject: 'wartungen',
    conditions: { name: { $eq: 'Wartung mit Sound' } }, // Disallow property "notificationSoundId" for records matching the "name"
    fields: ['notificationSoundId'],
    reason: '',
    inverted: true
  },
  {
    action: ['edit', 'create'],
    subject: 'wartungen',
    conditions: { _id: { $nin: ['xxxx', 'anotherid'] } }, // Disallow these ids
    reason: '',
    inverted: false
  }
];
