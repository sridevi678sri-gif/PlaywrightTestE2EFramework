
import { defineConfig, devices } from '@playwright/test';
import dotenv from 'dotenv';
dotenv.config({path:'./globalData.env'});

export default defineConfig({
  workers:2,
  testDir: "./tests",
  timeout: 40*1000,
  reporter:'html',
  expect:{
    timeout: 10*1000
  },
  use:{
    baseURL:"https://naveenautomationlabs.com/opencart/",
    trace:'retain-on-failure',
    browserName: "chromium",
    actionTimeout: 20*1000,
    headless:false,
    viewport:{width:1920,height:1080},
    screenshot:'on'
  }
 
});

