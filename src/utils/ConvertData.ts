const ConvertData = (data: string) => {
  const convertDate = new Date(data);
  const formatDate = convertDate.toLocaleDateString('pt-BR');

  return formatDate;
};

export default ConvertData;
