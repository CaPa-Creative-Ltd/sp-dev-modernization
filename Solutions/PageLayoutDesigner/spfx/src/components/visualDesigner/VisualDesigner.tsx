import * as React from "react";
import { IVisualDesignerProps } from './IVisualDesignerProps';

// Visual Designer component to show the layout of the page.
export class VisualDesigner extends React.Component<IVisualDesignerProps>{

  /*
      Design Notes

      SharePoint Grid System
      - 3 columns max
      - unless vertical column is enabled this spans all rows
      - content editor could add n number of rows
      - this might have to be community reverse engineered.
      - could use the web part toolbox principle to add web parts and existing detected web parts.

      Important to grab position within columns, rows and order.

  */

  /**
   * Constructor for the page designer class
   * @param props
   */
  constructor(props: IVisualDesignerProps) {
    super(props);


  }


  /**
   *  Render method for the component
   */
  public render(): React.ReactElement<IVisualDesignerProps> {
    return (
      <div>
        Visual Designer Editor
      </div>
    );
  }

}
