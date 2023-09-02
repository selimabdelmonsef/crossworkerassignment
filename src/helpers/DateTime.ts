/** time stamp to i.e Mon Oct 10 2022 13:56:09 */
export function tsToDateTimeFormat(timeStamp: number) {
  return String(new Date(Number(timeStamp))).split("GMT")[0];
}
