/*

  This class will be responsible for manipulating the xml file

*/

/**
 * Helper with general methods to simplify some routines
 */
export class XmlUtility {

  /**
   * Creates Document element based on Xml string
   * @param xmlString XML string to parse
   */
  public static parseXml(xmlString): Document {
    const parser = new DOMParser();
    const xml = parser.parseFromString(xmlString, 'text/xml');
    return xml;
  }

}
