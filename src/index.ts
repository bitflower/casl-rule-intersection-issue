import { subject } from '@casl/ability';

import { buildAbility } from './define';
import {
  disallowedDummyWartung,
  dummyWartung,
  disallowedDummyWartungWithFIeld
} from './records';
import { rules } from './rules';

// Build the ability from the rules
const ability = buildAbility(rules);

// Do the checks

// The ability does not allows editing of other subjects then "wartungen"
const canEditDisallowedServiceExpectFalse = ability.can('edit', 'alarme');

// The ability allows editing of subject "wartungen"
const canEditAllowedServiceExpectTrue = ability.can('edit', 'wartungen');

// The ability does not allow editing of "wartungen" that don"t match the conditions
const cannotEditDisallowedRecordExpectFalse = ability.cannot(
  'edit',
  subject('wartungen', disallowedDummyWartung)
);

// The ability allows editing of "wartungen" that match the conditions (_id: ${dummyWartung._id})`
const canEditAllowedRecordExpectTrue = ability.can(
  'edit',
  subject('wartungen', dummyWartung)
);

// The ability does not allow editing of "wartungen" that don't match the conditions (name $eq 'Wartung mit Sound') on field "notificationSoundId"`
const cannotEditDisallowedRecordWithFieldExpectFalse = ability.cannot(
  'edit',
  subject('wartungen', disallowedDummyWartungWithFIeld),
  'notificationSoundId'
);

console.log('RESULT', {
  canEditDisallowedServiceExpectFalse,
  canEditAllowedServiceExpectTrue,
  cannotEditDisallowedRecordExpectFalse,
  canEditAllowedRecordExpectTrue,
  cannotEditDisallowedRecordWithFieldExpectFalse
});
