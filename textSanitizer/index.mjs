export const sanitizeText = (text) => {
  text = text.toLowerCase();
  const regExpBlank =
    /\?|\!|\.|\’|\,|\“|\”|\%|\$|\%|\&|\/|\*|\´|\`|\‘|\'|\;|\:|_|(\d+)(st|nd|rd|th)|[0-9]/g;
  const regExpSpace = /—|-|\s{2,}|\n\n|\n|\r|\r\n/g;

  text = text.replace(regExpBlank, "");
  text = text.replace(regExpSpace, " ");

  return text;
};
