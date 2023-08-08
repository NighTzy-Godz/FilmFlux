export default function (currPage, pageSize, totalSize) {
  const calculations = currPage * pageSize;
  let startResult = calculations - pageSize + 1;
  let endResult = calculations;
  return `${startResult} - ${endResult} of ${totalSize}`;
}
