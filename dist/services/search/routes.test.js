"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const request_promise_1 = __importDefault(require("request-promise"));
jest.mock("request-promise");
request_promise_1.default.mockImplementation(() => '{"features": []}');
describe("routes", () => {
    let router;
    // beforeEach(() => {
    //   router = express();
    //   applyMiddleware(middleware, router);
    //   applyRoutes(routes, router, null);
    //   applyMiddleware(errorHandlers, router);
    // });
    // test("a valid string query", async () => {
    //   const response = await request(router).get("/api/v1/search?q=Cham");
    //   expect(response.status).toEqual(200);
    // });
    // test("a non-existing api method", async () => {
    //   const response = await request(router).get("/api/v11/search");
    //   expect(response.status).toEqual(404);
    // });
    // test("an empty string", async () => {
    //   const response = await request(router).get("/api/v1/search?q=");
    //   expect(response.status).toEqual(404);
    // });
});
//# sourceMappingURL=routes.test.js.map