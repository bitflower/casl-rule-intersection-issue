# @casl: Combining two rules seems to exclude the other and vice versa

Hi,

thanks for this great lib. I've just started using it and like it's abstraction layer so far.

I've come over a situation where I can't seem to make all permissions to be fullfilled though.

## How to run

```terminal
git clone https://github.com/bitflower/casl-rule-intersection-issue
cd casl-rule-intersection-issue
npm i
npm start
```

## My use case:
- I want to disallow some records based their on `_id` not being present in an array
- I want to disallow some record's fields based on the record's `name`property 

I've created 2 rules to define this scenario but it seems that one over rules the other.

### The records: 
```
  const dummyWartung = {
    _id: 'abc',
    name: 'Wartung 1'
  };
  const disallowedDummyWartung = {
    _id: 'xxxx',
    name: 'Wartung 2'
  };
  const disallowedDummyWartungWithFIeld = {
    _id: 'yyyy',
    name: 'Wartung mit Sound',
    notificationSoundId: 'theSoundfgdfgfd'
  };
```

### The rules (loaded via `JSON`):
```
const rules = [ 
{ 
    action: [ 'edit', 'create' ],
    subject: 'wartungen',
    conditions: { _id: { '$nin': [ 'xxxx', 'anotherid' ] } }, // Disallow these ids
    reason: '',
    inverted: false 
},
{ 
    action: [ 'edit', 'create' ],
    subject: 'wartungen',
    conditions: { name: { '$eq': 'Wartung mit Sound' } }, // Disallow property "notificationSoundId" for records matching the "name"
    fields: [ 'notificationSoundId' ],
    reason: '',
    inverted: true 
}
]
```

Both my test cases and my actual code tell me that the `disallowedDummyWartungWithFIeld` record is allowed to be access though.

I have the feeling that I have  wrong expectation of how rules have to be defiend to fulfill my "excluding thinking". I understand it that way that we can define several rules that will be "run though" when checking a record and if all return `true` the record is allowed. Is that correct?

If not how could I achieve limiting certain records to a property A and some other to a property B but only one having an additional `fields` restricition by doing this in one rule?

Thanks upfront for some input!

## Bug

The 5 rules resolve as seen below:

```terminal
{
canEditDisallowedServiceExpectFalse: false,
canEditAllowedServiceExpectTrue: true,
cannotEditDisallowedRecordExpectTrue: true,
canEditAllowedRecordExpectTrue: true,
cannotEditDisallowedRecordWithFieldExpectTrue: true 
}
```
