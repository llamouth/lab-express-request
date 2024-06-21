const request = require("supertest");

const app = require("../server/app");
const pokemon = require("../models/pokemon.json");

describe("app", () => {
  describe("/", () => {
    it("sends a welcome message", async () => {
      const response = await request(app).get("/");

      expect(response.text).toEqual("Welcome 99 Pokemon");
    });
  });

  describe("/bugs", () => {
    it("sends an h1 message", async () => {
      const response = await request(app).get("/bugs");

      expect(response.text).toContain("99 little bugs in the code");
    });
  });

  describe("/bugs/:numberOfBugs", () => {
    it("sends an error link when too many bugs are requested", async () => {
      const response = await request(app).get(`/bugs/200`);

      expect(response.text).toContain("Too many bugs!! <a href=\"/bugs\">Start over!</a>");
    });

    it("sends a 'next' link when a small enough number of bugs is requested", async () => {
      const response = await request(app).get(`/bugs/199`);

      expect(response.text).toContain("199 little bugs in the code");
      expect(response.text).toMatch(/href.*201.*Pull one down\, patch it around/);
    });
  });

  describe("/pokemon", () => {
    it("sends the list of Pokemon", async () => {
      const response = await request(app).get("/pokemon");

      expect(JSON.parse(response.text)).toEqual(pokemon);
    });
  });

  describe("/pokemon/search", () => {
    it("sends an empty array when the Pokemon isn't found", async () => {
      const response = await request(app).get("/pokemon/search?name=missingno");

      expect(JSON.parse(response.text)).toEqual([]);
    });

    it("sends the Pokemon when the name exactly matches", async () => {
      const response = await request(app).get(`/pokemon/search?name=${pokemon[0].name}`);

      expect(JSON.parse(response.text)).toEqual([pokemon[0]]);
    });

    it("sends the Pokemon when the name matches ignoring case", async () => {
      const response = await request(app).get(
        `/pokemon/search?name=${pokemon[0].name.toUpperCase()}`
      );

      expect(JSON.parse(response.text)).toEqual([pokemon[0]]);
    });
  });

  describe("/pokemon/:index", () => {
    it("sends a match when the index matches a Pokemon", async () => {
      
      const response = await request(app).get("/pokemon/123");

      expect(JSON.parse(response.text)).toEqual(pokemon[123]);

    });

    it("sends a sorry message when no Pokemon is found at the index", async () => {
      const response = await request(app).get("/pokemon/9001");

      expect(response.text).toEqual("Sorry, no pokemon found at 9001");
    });
  });

  describe("/:verb/:adjective/:noun", () => {
    it("sends a congratulations adjective", async () => {
      const response = await request(app).get("/run/runny/runner");

      expect(response.text).toEqual(
        "Congratulations on starting a new project called run-runny-runner!"
      );
    });
  });
});
