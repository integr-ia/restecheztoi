import { defineCliConfig } from "sanity/cli";

export default defineCliConfig({
  api: {
    projectId:
      process.env.SANITY_STUDIO_PROJECT_ID ||
      "j8331158",
    dataset: process.env.SANITY_STUDIO_DATASET || "production",
  },
  deployment: {
    appId: 'd27dutz7zsvp97midfw81oj6',
    autoUpdates: true,
  },
});