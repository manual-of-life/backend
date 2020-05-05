import { Test, TestingModule } from '@nestjs/testing';
import request from 'supertest';
import { MongooseModule } from '@nestjs/mongoose';
import { GraphQLModule } from '@nestjs/graphql';

import { Scripture } from '../src/scripture/interfaces/scripture.interface';
import { ScriptureModule } from '../src/scripture/scripture.module';

import { ETypeScripture, ETypeRainbow } from '../src/scripture/scripture.constants';

describe('ScriptureController (e2e)', () => {
  let app;

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [
        ScriptureModule,
        MongooseModule.forRoot('mongodb://localhost/graphql'),
        GraphQLModule.forRoot({
          autoSchemaFile: 'schema.gql',
        }),
      ],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  afterAll(async () => {
    await app.close();
  });

  const scripture: Scripture = {
    title: 'John',
    type: ETypeScripture.Gospel,
    chapter: [{
      idx: 3,
      verse: [{
        idx: 16,
        type: ETypeRainbow.Love,
        words: [{
          word: "Denn so grossartig hat Gott die Welt geliebt und sie fuer so teuer und wichtig erachtet, dass er",
        }, {
          word: "[sogar]",
        }, {
          word: "sogar seinen einzigen eingeborenen Sohn gab und fuer uns aufgab,",
        }, {
          word: "damit jeder der an Ihn glaubt",
        }, {
          word: "(Ihm vertraut; an Ihm festhaltet; sich auf Ihn verlaesst;),",
        }, {
          word: "nicht verlorengehe",
        }, {
          word: " (zur Zerstoerung komme),"
        }, {
          word: "sondern ewiges Leben habe.",
        }],
      }],
    }],
  } as Scripture;

  let id = '';

  const updatedScripture: Scripture = {
    title: 'John',
    type: ETypeScripture.Gospel,
    chapter: [{
      idx: 3,
      verse: [{
        idx: 17,
        type: ETypeRainbow.Love,
        words: [{
          word: "Denn Gott hat den Sohn nicht in die Welt gesandt um zu richten"
        }, {
          word: "(abzuweisen, verdammen, oder eine Verurteilung zu bestimmen),",
        }, {
          word: "sondern damit die Welt Erloesung finden moege und sie durch Ihn sicher und gesund werde."
        }],
      }],
    }],
  } as Scripture;

  const createscriptureObject = JSON.stringify(scripture).replace(
    /\"([^(\")"]+)\":/g,
    '$1:',
  );

  const createScriptureQuery = `
  mutation {
    createScripture(input: ${createscriptureObject}) {
      title
      type
      chapter
      id
    }
  }`;

  it('createScripture', () => {
    return request(app.getHttpServer())
      .post('/graphql')
      .send({
        operationName: null,
        query: createScriptureQuery,
      })
      .expect(({ body }) => {
        const data = body.data.createScripture;
        id = data.id;
        expect(data.title).toBe(scripture.title);
        expect(data.type).toBe(scripture.type);
        expect(data.chapter).toBe(scripture.chapter);
      })
      .expect(200);
  });

  it('getScripture', () => {
    return request(app.getHttpServer())
      .post('/graphql')
      .send({
        operationName: null,
        query: '{scripture{title, price, description, id}}',
      })
      .expect(({ body }) => {
        const data = body.data.scripture;
        const scriptureResult = data[0];
        expect(data.length).toBeGreaterThan(0);
        expect(scriptureResult.title).toBe(scripture.title);
        expect(scriptureResult.type).toBe(scripture.type);
        expect(scriptureResult.chapter).toBe(scripture.chapter);
      })
      .expect(200);
  });

  const updateScriptureObject = JSON.stringify(updatedScripture).replace(
    /\"([^(\")"]+)\":/g,
    '$1:',
  );

  it('updateScripture', () => {
    const updateScriptureQuery = `
    mutation {
      updateScripture(id: "${id}", input: ${updateScriptureObject}) {
        title
        price
        description
        id
      }
    }`;

    return request(app.getHttpServer())
      .post('/graphql')
      .send({
        operationName: null,
        query: updateScriptureQuery,
      })
      .expect(({ body }) => {
        const data = body.data.updateScripture;
        expect(data.title).toBe(updatedScripture.title);
        expect(data.type).toBe(updatedScripture.type);
        expect(data.chapter).toBe(updatedScripture.chapter);
      })
      .expect(200);
  });

  it('deleteScripture', () => {
    const deleteScriptureQuery = `
      mutation {
        deleteScripture(id: "${id}") {
          title
          price
          description
          id
        }
      }`;

    return request(app.getHttpServer())
      .post('/graphql')
      .send({
        operationName: null,
        query: deleteScriptureQuery,
      })
      .expect(({ body }) => {
        const data = body.data.deleteScripture;
        expect(data.title).toBe(updatedScripture.title);
        expect(data.type).toBe(updatedScripture.type);
        expect(data.chapter).toBe(updatedScripture.chapter);
      })
      .expect(200);
  });
});
