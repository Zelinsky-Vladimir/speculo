export const download = (data: string, filename: string, ) => {
  const url = data;
  const link = document.createElement('a');

  link.href = url;
  link.setAttribute('download', filename);
  document.body.appendChild(link);

  link.click();

  document.body.removeChild(link);
};
