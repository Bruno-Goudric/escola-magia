interface IEspecificMagicProp {
  createdAt: string;
  id: string;
  name: string;
  type: string;
  version: string;
}

interface IEspecificMagicProps {
  spells: Array<IEspecificMagicProp>;
}

export default IEspecificMagicProps;
