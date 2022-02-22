import { IDragon } from "models/IDragon";
import { useCallback, useEffect, useState } from "react";
import { dragonsApi } from "services/DragonsApi";

export const useDragons = () => {
  const [items, setItems] = useState<IDragon[]>();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const getAll = useCallback(async () => {
    try {
      const { data } = await dragonsApi.get();
      data.sort((a: any, b: any) => a.name.localeCompare(b.name));
      console.log({ data });
      setItems(data);
    } catch (error: any) {
      setError(error);
    }
  }, []);

  const add = useCallback(
    async (dragon: IDragon) => {
      await dragonsApi.post(dragon);
      // setItems((items) => (items ? [...items, dragon] : [dragon]));
      await getAll();
    },
    [getAll]
  );

  const update = useCallback(
    async (dragon: IDragon) => {
      await dragonsApi.put(dragon.id!, dragon);
      // setItems(
      //   (items) =>
      //     items?.map((item) => (item.id === dragon.id ? dragon : item)) ||
      //     undefined
      // );
      await getAll();
    },
    [getAll]
  );

  const remove = useCallback(
    async (id: string) => {
      await dragonsApi.remove(id);
      // setItems(
      //   (items) => items?.filter((item: IDragon) => item.id !== id) || undefined
      // );
      await getAll();
    },
    [getAll]
  );

  useEffect(() => {
    if (!items || !items.length) {
      setLoading(true);
      getAll().then(() => setLoading(false));
    }
  }, [getAll, items]);

  return {
    items,
    loading,
    error,
    add,
    update,
    remove,
    getAll,
  };
};
