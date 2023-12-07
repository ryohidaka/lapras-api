import { config } from "dotenv";
import { fetchLaprasData } from "../src/LaprasApi";
import { LaprasApiResponse } from "../src/types";

// Load environment variables from .env file
config();

describe("fetchLaprasData", () => {
  it("should fetch Lapras data for the provided share ID", async () => {
    // Get shareId from environment variables
    const shareId = process.env.TEST_SHARE_ID || "";

    // Ensure shareId is not an empty string
    expect(shareId).toBeTruthy();

    // Fetch Lapras data
    const res: LaprasApiResponse = await fetchLaprasData(shareId);

    // Add assertions for the structure of the response
    expect(res).toBeDefined();
    expect(res.name).toBeDefined();
    expect(res.description).toBeDefined();
    expect(res.eScore).toBeDefined();
    expect(res.bScore).toBeDefined();
    expect(res.iScore).toBeDefined();
    expect(res.qiitaArticles).toBeDefined();
    expect(res.zennArticles).toBeDefined();
    expect(res.blogArticles).toBeDefined();
    expect(res.noteArticles).toBeDefined();
    expect(res.speakerDeckSlides).toBeDefined();
    expect(res.githubRepositories).toBeDefined();
    expect(res.teratailReplies).toBeDefined();
    expect(res.events).toBeDefined();
    expect(res.activities).toBeDefined();
  });
});
