// -------------------------------------------------------------
// Generated using https://remixfast.com/
// Docs: https://remixfast.com/docs/models
// App: Infinite Scroll
// -------------------------------------------------------------
import { type Widget  } from "@prisma/client";
import { transformType } from "~/util/typecast";




  export const getNewWidget = () => {
    return {
      widgetId:undefined,
    widgetName:undefined,
    widgetNumber:undefined
    };
  };  
  
export function getWidgetFromForm(formData: FormData) {
  let widget: Partial<Widget> = {
      ...(formData.has('widgetId') && { widgetId: transformType(formData.get('widgetId'),'number')}),
      ...(formData.has('widgetName') && { widgetName: transformType(formData.get('widgetName'),'string')}),
      ...(formData.has('widgetNumber') && { widgetNumber: transformType(formData.get('widgetNumber'),'string')}),
  };
  return widget;
}
type Errors = { [key: string]: string };

export const validateWidget = (formData: FormData, _method?: string): Errors => {
  const errors: Errors = {};
  const method = _method || formData.get("_method");
  // primary key
  const widgetId = formData.get("widgetId");
  // required fields
    const widgetName = formData.get("widgetName");

  //
  if (method === "post") {
    // create, check all required fields
    if (!widgetName) errors.widgetName = "Widget Name is required";
  }
  if (method === "put") {
    // need PK for update 
    if (!widgetId) errors.other = "Missing data, not a valid Widget";
    // required field, if provided, must have a value
        if (formData.has("widgetName") && !widgetName) errors.widgetName = "Widget Name is required";
  }
  if (method === "del") {
    // need PK for delete
    if (!widgetId) errors.other = "Missing data, not a valid Widget";
  }
  //
  return errors;
};
