import React, { useEffect } from "react";
import { api } from "services/api";

function ListMagic() {
  const listMagic = async () => {
    try {
      const resp = await api.get("/spells");

      console.log(resp);
    } catch (error) {}
  };

  useEffect(() => {
    listMagic();
  }, []);
  return <div>index</div>;
}

export { ListMagic };
