import { Test, TestingModule } from '@nestjs/testing';
import { ScriptureResolver } from './scripture.resolver';

describe('ScriptureResolver', () => {
  let resolver: ScriptureResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ScriptureResolver],
    }).compile();

    resolver = module.get<ScriptureResolver>(ScriptureResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
