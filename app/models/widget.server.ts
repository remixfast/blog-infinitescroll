// -------------------------------------------------------------
// Generated using https://remixfast.com/
// Docs: https://remixfast.com/docs/models
// App: Infinite Scroll
// -------------------------------------------------------------
import { Widget, Prisma, PrismaClient } from "@prisma/client";
import { prisma } from "~/db.server";

// offset based
export async function getWidgetList(
  skip: number = 0,
  take: number = 20
): Promise<Widget[] | []> {

  // query
  const data = await prisma.widget.findMany({
    skip,
    take,
    
  });
  return data;
}

// get details by Id
export async function getWidgetById(
  widgetId: number,
  
): Promise<Widget | null> {
  
  
  //
  return prisma.widget.findUnique({
    where: {
        widgetId,
    },
    
  });
}
// create widget
export async function createWidget(widget: Partial<Widget>): Promise<Widget> {
  const { widgetId, ...widgetToAdd } = widget;
  //
  let data: Prisma.WidgetCreateInput = widgetToAdd as Prisma.WidgetCreateInput;
  //
  return prisma.widget.create({
    data,
  });
}
// update widget
export async function updateWidget(widget: Partial<Widget>): Promise<Widget> {
  const { widgetId, ...widgetToUpdate } = widget;
  //
  let data: Prisma.WidgetUpdateInput = widgetToUpdate;
  //
  return prisma.widget.update({
    where: {
      widgetId,
    },
    data,
  });
}

// delete widget
export async function deleteWidget(
  widgetId: number
): Promise<Widget> {

  return prisma.widget.delete({
    where: {
        widgetId,
    },
  });
}
