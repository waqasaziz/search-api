import request from "request-promise";
import * as provider from "./OpenCageDataProvider";

jest.mock("request-promise");

describe("OpenCageDataProvider", () => {
  test("an empty query string", async () => {
    (request as any).mockImplementation(() => '{"feature":[]}');
    const result = await provider.getPlaces("paris");
    expect(result).toEqual({ feature: [] });
  });

  test("an invalid non-json response", async () => {
    (request as any).mockImplementation(() => "Service unavailable");
    await expect(provider.getPlaces("chamonix")).rejects.toThrow(SyntaxError);
  });
});
