import React from "react";
import QRCode from "qrcode.react";

export default function QrCodeGenerator(props) {
  const { jsonData } = props;
  return (
    <>
      <QRCode value={JSON.stringify(jsonData)} />
    </>
  );
}
