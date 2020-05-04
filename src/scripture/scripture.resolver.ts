import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { ScriptureService } from './scripture.service';
import { ScriptureType } from './dto/create-scripture.dto';
import { ScriptureInput } from './model/input-scripture.model';

@Resolver()
export class ScriptureResolver {
  constructor(private readonly itemsService: ScriptureService) {}

  @Query(() => [ScriptureType])
  async items(): Promise<ScriptureType[]> {
    return this.itemsService.findAll();
  }

  @Mutation(() => ScriptureType)
  async createScripture(@Args('input') input: ScriptureInput): Promise<ScriptureInput> {
    return this.itemsService.create(input);
  }

  @Mutation(() => ScriptureType)
  async updateScripture(
    @Args('id') id: string,
    @Args('input') input: ScriptureInput,
  ): Promise<ScriptureInput> {
    return this.itemsService.update(id, input);
  }

  @Mutation(() => ScriptureType)
  async deleteScripture(@Args('id') id: string): Promise<ScriptureInput> {
    return this.itemsService.delete(id);
  }
}
