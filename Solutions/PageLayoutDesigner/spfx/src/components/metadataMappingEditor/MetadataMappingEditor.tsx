import * as React from 'react';
import { IMetadataMappingEditorProps } from './IMetadataMappingEditorProps';

export class MetadataMappingEditor extends React.Component<IMetadataMappingEditorProps, {}> {

  /**
   * Constructor for the page designer class
   * @param props
   */
  constructor(props: IMetadataMappingEditorProps) {
    super(props);


  }


  /**
   *  Render method for the component
   */
  public render(): React.ReactElement<IMetadataMappingEditorProps> {
    return (
      <div>
        Metadata mapping editor
      </div>
    );
  }
}
