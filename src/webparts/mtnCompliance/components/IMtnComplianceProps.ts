import { WebPartContext } from "@microsoft/sp-webpart-base"; 

export interface IMtnComplianceProps {
  Name: string;
  description: string;
  context:WebPartContext;
}
