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
const canEditDisallowedService = ability.can('edit', 'alarme');
// 'The ability allows editing of other subjects'

const canEditAllowedService = ability.can('edit', 'wartungen');
// 'The ability does not allow editing of subject "wartungen"'

const canEditDisallowedRecord = ability.cannot(
  'edit',
  subject('wartungen', disallowedDummyWartung)
);
// `The ability allows editing of "wartungen" that don"t match the conditions (_id: ${disallowedDummyWartung._id})`

const canEditAllowedRecord = ability.can(
  'edit',
  subject('wartungen', dummyWartung)
);
// `The ability does not allow editing of "wartungen" that match the conditions (_id: ${dummyWartung._id})`

const canEditDisallowedRecordWithField = ability.cannot(
  'edit',
  subject('wartungen', disallowedDummyWartungWithFIeld),
  'notificationSoundId'
);
// `The ability does allow editing of "wartungen" that don't match the conditions (name: ${disallowedDummyWartungWithFIeld.name}) on field "notificationSoundId"`

console.log('RESULT', {
  canEditDisallowedService,
  canEditAllowedService,
  canEditDisallowedRecord,
  canEditAllowedRecord,
  canEditDisallowedRecordWithField
});
