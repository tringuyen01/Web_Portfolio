import React from "react";
import { Stack } from "react-bootstrap";
import { faFacebook, faTelegram,faTwitter } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Social() {
  return (
    <Stack className="position-fixed start-0 bottom-0 mb-2">
        <a href="https://www.facebook.com/profile.php?id=100046047560589"><FontAwesomeIcon icon={faFacebook} size='2x' className="p-3"/></a>
        <a href="https://twitter.com/ndtri_web_dev"><FontAwesomeIcon icon={faTwitter} size='2x' className="p-3"/></a>
        <a href="https://t.me/ndtri_web_dev"><FontAwesomeIcon icon={faTelegram} size='2x' className="p-3"/></a>
    </Stack>
  );
}
