import * as React from 'react';
import { IWebPartMappingEditorProps } from './IWebPartMappingEditorProps';

export class WebPartMappingEditor extends React.Component<IWebPartMappingEditorProps>{

  /**
   * Constructor for the page designer class
   * @param props
   */
  constructor(props: IWebPartMappingEditorProps) {
    super(props);


  }


  /**
   *  Render method for the component
   */
  public render(): React.ReactElement<IWebPartMappingEditorProps> {
    return (
      <div>
        Web Part Mapping Editor
      </div>
    );
  }

}
