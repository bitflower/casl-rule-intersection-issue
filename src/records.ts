// Exmaple record that is allowed to be accessed
export const dummyWartung = {
  _id: 'abc',
  name: 'Wartung 1'
};

// Example records with an _id that is not allowed
export const disallowedDummyWartung = {
  _id: 'xxxx',
  name: 'Wartung 2'
};

// Example record that match "name" on a rule that disallows the access to the field "notificationSoundId"
export const disallowedDummyWartungWithFIeld = {
  _id: 'yyyy',
  name: 'Wartung mit Sound',
  notificationSoundId: 'theSoundfgdfgfd'
};
