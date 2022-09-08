// -------------------------------------------------------------
// Generated using https://remixfast.com/
// Docs: https://remixfast.com/docs/routes
// App: Infinite Scroll
// -------------------------------------------------------------
import { json, LoaderArgs } from '@remix-run/node';
import { Link, useLoaderData, useSearchParams } from '@remix-run/react';
//
import { Widget } from '@prisma/client';
import * as widgetDb from '~/models/widget.server';
import { useEffect, useState, useCallback } from 'react';

//
export async function loader({ params, request }: LoaderArgs) {
  //
  const url = new URL(request.url);
  const searchParams = url.searchParams;
  const skip = +(searchParams.get?.('skip') as string) || 0;
  const take = +(searchParams.get?.('take') as string) || 20;
  //
  const widgetList: Widget[] = await widgetDb.getWidgetList(skip, take);
  //
  return json({ widgetList });
}

export default function WidgetRoute() {
  const { widgetList } = useLoaderData<typeof loader>();
  //
  const pageSize = 20;
  const [searchParams, setSearchParams] = useSearchParams();
  const skip = +(searchParams?.get?.('skip') || 0);
  //
  const [data, setData] = useState<Widget[]>([]);
  useEffect(() => {
    setData((prev) => {
      const lastWidgetId = widgetList?.length ? widgetList[widgetList?.length - 1]?.widgetId : 0;
      if (prev[prev?.length - 1]?.widgetId === lastWidgetId) return prev;
      return [...prev, ...widgetList];
    });
  }, [widgetList]);
  const [loading, setLoading] = useState(false);
  const [canGetNext, setCanGetNext] = useState(false);
  // if last get list size === pageSize, we can try to get next page
  useEffect(() => {
    setLoading(false);
    setCanGetNext(widgetList.length === pageSize);
  }, [widgetList]);
  // get next page
  const getNext = useCallback(() => {
    if (!canGetNext || loading) return;
    const params = new URLSearchParams(searchParams);
    // skip
    const skip = +(params?.get('skip') || 0);
    params.set('skip', `${skip + pageSize}`);
    //
    setLoading(true);
    setCanGetNext(false);
    setSearchParams(params);
  }, [canGetNext, searchParams, setSearchParams]);
  //
  const handleScroll = useCallback(
    (event: any) => {
      const elem = event.currentTarget;
      if (loading || !canGetNext) return;
      const viewportHeight = elem.clientHeight;
      const contentHeight = elem.scrollHeight;
      if (contentHeight - elem.scrollTop < 1.5 * viewportHeight) {
        if (canGetNext && !loading) {
          getNext();
        }
      }
    },
    [canGetNext, getNext, loading],
  );
  // eagerly load first 3 pages
  useEffect(() => {
    if (data.length <= pageSize * 2 && canGetNext && !loading) {
      getNext();
    }
  }, [canGetNext, data.length, getNext, loading]);
  //
  return (
    <div onScroll={handleScroll} className=" h-full overflow-auto">
      {data.map((w) => (
        <div key={w.widgetId} className="m-4 rounded-md border p-4">
          <div className="text-large font-semibold">{w.widgetName}</div>
          <div>{w.widgetNumber}</div>
        </div>
      ))}
      <Link to={`?skip=${skip + pageSize}`}>Next Page</Link>
    </div>
  );
}
