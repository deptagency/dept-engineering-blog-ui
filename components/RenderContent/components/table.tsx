export const tableStyles = `
  table {
      display: inline-block;
      overflow-x: auto;
      margin: 0.5em 0 2.5em;
      max-width: 100%;
      width: auto;
      border-spacing: 0;
      border-collapse: collapse;
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
      font-size: 1.6rem;
      white-space: nowrap;
      vertical-align: top;
  }

  table {
      -webkit-overflow-scrolling: touch;
      background: radial-gradient(ellipse at left, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0) 75%) 0 center, radial-gradient(ellipse at right, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0) 75%) 100% center;
      background-attachment: scroll, scroll;
      background-size: 10px 100%, 10px 100%;
      background-repeat: no-repeat;
  }

  table td:first-child {
      background-image: linear-gradient(to right, rgba(255,255,255, 1) 50%, rgba(255,255,255, 0) 100%);
      background-size: 20px 100%;
      background-repeat: no-repeat;
  }

  table td:last-child {
      background-image: linear-gradient(to left, rgba(255,255,255, 1) 50%, rgba(255,255,255, 0) 100%);
      background-position: 100% 0;
      background-size: 20px 100%;
      background-repeat: no-repeat;
  }

  table th {
      color: var(--darkgrey);
      font-size: 1.2rem;
      font-weight: 700;
      letter-spacing: 0.2px;
      text-align: left;
      text-transform: uppercase;
      background-color: color-mod(var(--whitegrey) l(+4%));
  }

  table th,
  table td {
      padding: 6px 12px;
      border: color-mod(var(--whitegrey) l(-1%) s(-5%)) 1px solid;
  }
`
