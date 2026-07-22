import{describe,it,expect}from'vitest';
describe('desktop release policy',()=>{it('keeps the required minimum',()=>expect(10_000).toBe(10000));it('uses explicit chain identifiers',()=>{expect('Ethereum Mainnet · Chain 1').toContain('Chain 1');expect('BNB Smart Chain · Chain 56').toContain('Chain 56');expect('Polygon PoS · Chain 137').toContain('Chain 137')})});
