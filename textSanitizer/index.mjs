export const sanitizeText = (text) => {
  text = text.toLowerCase();
  const regExpBlank =
    /\?|\!|\.|\’|\,|\“|\”|\%|\$|\%|\&|\/|\*|\´|\`|\'|\;|\:|\\n|\\r|\r\n/g;
  const regExpSpace = /—|-/g;
  text = text.replace(regExpBlank, "");
  text = text.replace(regExpSpace, " ");
  return text;
};
