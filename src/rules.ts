export const rules = [
  {
    action: ['edit', 'create'],
    subject: 'wartungen',
    conditions: { _id: { $nin: ['xxxx', 'anotherid'] } }, // Disallow these ids
    inverted: false
  },
  // Refactored order to follow the rules from https://casl.js.org/v4/en/guide/intro#inverted-rules
  {
    action: ['edit', 'create'],
    subject: 'wartungen',
    conditions: { name: { $eq: 'Wartung mit Sound' } }, // Disallow property "notificationSoundId" for records matching the "name"
    fields: ['notificationSoundId'],
    reason: 'You are not allowed to edit the selected sound of this Wartung.',
    inverted: true
  }
];
