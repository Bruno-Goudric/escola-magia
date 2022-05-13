interface IListMagicProp {
  createdAt: string;
  id: string;
  name: string;
  type: string;
  version: string;
}

interface IListMagic {
  spells: Array<IListMagicProp>;
}

export default IListMagic;
