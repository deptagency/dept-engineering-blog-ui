/**
 * Full bleed images (#full)
 * Super neat trick courtesy of @JoelDrapper
 * Usage (In Ghost edtior):
 * ![img](/some/image.jpg#full)
*/
export const fullBleedImageStyles = `
  img[src$="#full"] {
    max-width: none;
    width: 100vw;
  }
`;

/**
 * Image captions
 * Usage (In Ghost editor):
 * ![img](/some/image.jpg)
 * <small>Your image caption</small>
 * */
export const imageCaptionStyles = `
  img + br + small {
    display: block;
    margin-top: -3em;
    margin-bottom: 1.5em;
    text-align: center;
  }
`;
