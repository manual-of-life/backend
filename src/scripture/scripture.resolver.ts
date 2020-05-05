import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { ScriptureService } from './scripture.service';
import { ScriptureType } from './dto/create-scripture.dto';
import { ScriptureInput } from './model/input-scripture.model';
import { Scripture } from './interfaces/scripture.interface';

@Resolver()
export class ScriptureResolver {
  constructor(private readonly scriptureService: ScriptureService) {}

  @Query(() => [ScriptureType])
  async items(): Promise<ScriptureType[]> {
    return this.scriptureService.findAll();
  }

  @Mutation(() => ScriptureType)
  async createScripture(@Args('input') input: ScriptureInput): Promise<ScriptureInput> {
    return this.scriptureService.create(input);
  }

  @Mutation(() => ScriptureType)
  async updateScripture(
    @Args('id') id: string,
    @Args('input') input: Scripture,
  ): Promise<ScriptureInput> {
    return this.scriptureService.update(id, input);
  }

  @Mutation(() => ScriptureType)
  async deleteScripture(@Args('id') id: string): Promise<ScriptureInput> {
    return this.scriptureService.delete(id);
  }
}
