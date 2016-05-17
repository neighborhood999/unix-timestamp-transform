const test = require('ava');
const transform = require('./');

const fakeUnixTimestamp = 1453040186;

test('should get transform unix timestamp', t => {
  const expected = { y: 2016, m: 1, d: 17 };
  const time = transform.transformUnixTime(fakeUnixTimestamp);

  t.is(time.getFullYear(), expected.y);
  t.is(time.getMonth() + 1, expected.m);
  t.is(time.getDate(), expected.d);
});

test('should transform unix timestamp to string', t => {
  const expectedType = 'string';

  t.is(typeof transform.toStringTransformUnixTime(fakeUnixTimestamp), expectedType);
});

test('should get between timestamp and now days', t => {
  const fakeTime = 1577836800;

  t.is(transform.fromNow(fakeTime), 'Wed Jan 01 2020');
  t.truthy(transform.fromNow(fakeUnixTimestamp), 'Get between days');
});

test('should get the number of days difference', t => {
  t.is(transform.daysBetween(1), 'a day ago');
  t.is(transform.daysBetween(25), '25 days ago');
  t.is(transform.daysBetween(30), '1 month ago');
});
