"use server";
// import fs from "fs";
import Button from "../enterprise/addons/Button/Button";
async function directoryExists(pathParam) {
  const fs = require("fs");
  const path = require("path");
  const filePath = path.join(process.cwd(), "src/app", pathParam);
  console.log(filePath);
  if (
    fs.existsSync(
      `/Users/manushachethiyawardhana/Documents/Origin/my-app/src/app/enterprise/addons`
    )
  ) {
    console.log("file exists");
  } else {
    console.log(`${filePath}.tsx`);
  }

  console.log(path);
  try {
    await fs.promises.access(`${filePath}.tsx`);
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
}

export async function conditionalImport(conditionPath, fallbackPath) {
  const condition = await directoryExists(`${conditionPath}`);
  console.log(condition);
  if (condition) {
    return import(`../${conditionPath}`);
  } else {
    return import(`../${fallbackPath}`);
  }
}
