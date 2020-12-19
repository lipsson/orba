import { check } from '../public/js/check.js';


//invaild
test('returns invalid for initial open bracat', () => {
    expect(check('cat')).toBe(false);
});

test('returns invalid for initial close bracat', () => {
    expect(check('tac')).toBe(false);
});

test('returns invalid for "catTAC"', () => {
    expect(check('catTAC')).toBe(false);
});

test('returns invalid for "cAtcattActac"', () => {
    expect(check('cAtcattActac')).toBe(false);
});

test('returns invalid for "catcatcattactac"', () => {
    expect(check('catcatcattactac')).toBe(false);
});

test('returns invalid for random string', () => {
    expect(check('random string')).toBe(false);
});



//valid

test('returns invalid for empty string', () => {
    expect(check('')).toBe(true);
});

test('returns valid for "cattac"', () => {
    expect(check('cattac')).toBe(true);
});

test('returns valid for "cattacCATTACcAttAc"', () => {
    expect(check('cattacCATTACcAttAc')).toBe(true);
});

test('returns valid for "CATcattacTAC"', () => {
    expect(check('CATcattacTAC')).toBe(true);
});
