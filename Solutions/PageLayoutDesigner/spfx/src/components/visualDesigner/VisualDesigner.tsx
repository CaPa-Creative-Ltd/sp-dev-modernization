import * as React from "react";
import { IVisualDesignerProps } from './IVisualDesignerProps';

// Visual Designer component to show the layout of the page.
export class VisualDesigner extends React.Component<IVisualDesignerProps>{

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
