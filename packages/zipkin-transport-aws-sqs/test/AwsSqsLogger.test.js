const AwsSqsLogger = require('../src/AwsSqsLogger');

describe('Aws SQS transport', () => {
  it('Using normal constructor', () => {
    const logger = new AwsSqsLogger({queueUrl: 'http://localhost:4568'});
    expect(logger.encoding.encode({
      traceId: 'a', id: 'b', annotations: [], tags: {}
    }))
      .to.equal('{"traceId":"a","id":"b"}');
  });
});
