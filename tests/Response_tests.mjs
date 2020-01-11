import assert from 'assert';
import Response from '../src/data/Response.mjs';


(function testInitialize() {
    let hf = new Response();
    assert.equal(hf.code, null);
    assert.equal(hf.reason, null);
    assert.equal(hf.headers, null);
    assert.equal(hf.body, null);
    hf = new Response('code', 'reason',
            'headers', 'body');
    assert.equal(hf.code, 'code');
    assert.equal(hf.reason, 'reason');
    assert.equal(hf.headers, 'headers');
    assert.equal(hf.body, 'body');
    hf = new Response({ code: 'code',
            reason: 'reason', headers: 'headers', body: 'body' });
    assert.equal(hf.code, 'code');
    assert.equal(hf.reason, 'reason');
    assert.equal(hf.headers, 'headers');
    assert.equal(hf.body, 'body');
})();

(function testExport() {
    let hf = new Response({ body: 'body' });
    assert.equal(JSON.stringify(hf.export()), JSON.stringify({ body: 'body' }));
    hf = new Response({ code: 'code',
            reason: 'reason', headers: 'headers', body: 'body' });
    assert.equal(JSON.stringify(hf.export()), JSON.stringify(
            { code: 'code', reason: 'reason', headers: 'headers', body: 'body' }));
    hf = new Response({ code: 'code',
            reason: 'reason', headers: 'headers', body: Buffer.from('body') });
    assert.equal(JSON.stringify(hf.export()), JSON.stringify(
            { code: 'code', reason: 'reason', headers: 'headers', 'body-bin':
            Buffer.from('body').toString('base64') }));
})();
