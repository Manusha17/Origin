// "use client";

// import Button from "@/app/enterprise/addons/Button/Button";
import { conditionalImport } from "@/app/util/conditionalImport";
import dynamic from "next/dynamic";

const DynamicButton = dynamic(() => {
  console.log("Client");
  return conditionalImport(
    "enterprise/addons/Button/Button",
    "open/addons/openButton"
  );
});
export default function Leave() {
  console.log("Client");
  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <h2>This is Leave module modified</h2>
      {/* <Button /> */}
      <DynamicButton />
    </div>
  );
}
