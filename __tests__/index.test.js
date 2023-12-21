// @ts-check

import { test } from 'node:test';
import assert from 'assert/strict';
import * as funcs from '../index.js';

test('step1', () => {
  assert.strictEqual(funcs.multiplyTwoNumbers(5, 4), 20);
  assert.strictEqual(funcs.multiplyTwoNumbers(-3, 10), -30);
  assert.strictEqual(funcs.multiplyTwoNumbers(7, 0), 0);
});

test('step2', () => {
  assert.strictEqual(funcs.getMaxNumber(25, 10), 25);
  assert.strictEqual(funcs.getMaxNumber(73, 73), 73);
  assert.strictEqual(funcs.getMaxNumber(-8, -15), -8);
});

test('step3', () => {
  assert.strictEqual(funcs.castReversedBoolean(true), false);
  assert.strictEqual(funcs.castReversedBoolean(false), true);
  assert.strictEqual(funcs.castReversedBoolean(0), true);
});

test('step4', () => {
  assert.strictEqual(funcs.determineEntrance(10), 1);
  assert.strictEqual(funcs.determineEntrance(50), 3);
  assert.strictEqual(funcs.determineEntrance(100), 0);
});

test('step5', () => {
  assert.strictEqual(funcs.getSum(111), 3);
  assert.strictEqual(funcs.getSum(8), 8);
  assert.strictEqual(funcs.getSum(0), 0);
});
