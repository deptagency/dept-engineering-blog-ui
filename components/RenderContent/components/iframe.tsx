import { spaces } from "@components/common/spaces";

/* Override third party iframe styles */
export const iframeStyles = `
  iframe {
    margin: 0 auto !important;
  }

  iframe+p,
  iframe+h3,
  iframe+h4,
  iframe+h5,
  iframe+h6 {
    margin-top: ${spaces.md}px;
  }
`
