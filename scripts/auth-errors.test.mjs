import assert from 'node:assert/strict';
import {authMessage} from '../lib/auth-errors.ts';
assert.match(authMessage(new DOMException('Aborted','AbortError')),/Unable to complete sign-in/);
assert.match(authMessage({code:20}),/Unable to complete sign-in/);
assert.match(authMessage({code:'over_request_rate_limit'}),/Too many attempts/);
assert.equal(authMessage({code:'invalid_credentials'}),'Invalid login credentials');
assert.match(authMessage(null),/Unable to complete sign-in/);
console.log('Authentication errors handle numeric browser codes, Supabase codes and null.');
