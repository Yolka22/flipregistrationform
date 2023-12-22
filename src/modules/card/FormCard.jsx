import React, { useState } from "react";
import ReactCardFlip from "react-card-flip";
import CardFront from "./CardFront";
import CardBack from "./CardBack";
import { Box } from "@mui/joy";
import ModalWrapper from "../modal wrapper/ModalWrapper";


export default function FormCard() {
  const [isFlipped, setFlip] = useState(false);

  const handleFlip = (e) => {
    e.preventDefault();
    setFlip(!isFlipped);
  };

  return (
    <Box sx={{ background: "#C8D3D5", padding: "10px", borderRadius: "5px" }}>
        <ModalWrapper title={"Log in"}>
        <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
          <CardFront handleFlip={handleFlip} />
          <CardBack handleFlip={handleFlip} />
        </ReactCardFlip>
        </ModalWrapper>
    </Box>
  );
}
