import React from "react";
import { Button } from "../components/ui/button";

export function actionButton() {
  return (
    <Button
      variants="outline"
      size="lt"
      onClick={() => window.alert("Button Clicked!")}
    >
      수정
    </Button>
  );
}
