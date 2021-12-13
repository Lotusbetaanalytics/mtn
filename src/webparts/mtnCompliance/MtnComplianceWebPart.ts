import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import {
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';

import * as strings from 'MtnComplianceWebPartStrings';
import MtnCompliance from './components/MtnCompliance';
import { IMtnComplianceProps } from './components/IMtnComplianceProps';

export interface IMtnComplianceWebPartProps {
  description: string;
  Name: string;
}

export default class MtnComplianceWebPart extends BaseClientSideWebPart<IMtnComplianceWebPartProps> {

  public render(): void {
    const element: React.ReactElement<IMtnComplianceProps> = React.createElement(
      MtnCompliance,
      {
        description: this.properties.description,
        Name: this.properties.Name,
        context:this.context
      }
    );

    ReactDom.render(element, this.domElement);
  }

  protected onDispose(): void {
    ReactDom.unmountComponentAtNode(this.domElement);
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: strings.PropertyPaneDescription
          },
          groups: [
            {
              groupName: strings.BasicGroupName,
              groupFields: [
                PropertyPaneTextField('description', {
                  label: strings.DescriptionFieldLabel
                })
              ]
            }
          ]
        }
      ]
    };
  }
}
