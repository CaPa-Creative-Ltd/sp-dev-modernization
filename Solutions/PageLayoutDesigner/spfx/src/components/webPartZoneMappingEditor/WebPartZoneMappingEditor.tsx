import * as React from 'react';
import { IWebPartZoneMappingEditorProps } from './IWebPartZoneMappingEditorProps';

export class WebPartZoneMappingEditor extends React.Component<IWebPartZoneMappingEditorProps>{


  /**
   * Constructor for the class
   * @param props
   */
  constructor(props: IWebPartZoneMappingEditorProps) {
    super(props);


  }


  /**
   *  Render method for the component
   */
  public render(): React.ReactElement<IWebPartZoneMappingEditorProps> {
    return (
      <div>
        Web Part Zone Mapping Editor
      </div>
    );
  }

}
