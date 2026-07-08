
import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: "./tests",
  timeout: 40*1000,
  expect:{
    timeout: 10*1000
  },
  use:{
    baseURL:"https://naveenautomationlabs.com/opencart/",
    browserName: "chromium",
    actionTimeout: 20*1000,
    headless:false,
    viewport:{width:1920,height:1080}
  }
 
});

