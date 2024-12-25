/**
 * // 删除属性值为 undefined 的属性
 * @param obj
 */
export const filterUndefined = (obj: { [key: string]: any }): { [key: string]: any } => {
  Object.keys(obj).forEach((key) => {
    if (obj[key] === undefined) {
      delete obj[key];
    }
  });
  return obj;
};
/**
 * 生成随机字符串
 * @param precision 精度
 */
export function getNumberUid(precision = 10000) {
  const rawPre = (Date.now() - new Date(1624206802955).getTime()) / precision;
  const preNumber = Number(rawPre.toFixed()) * precision;
  const randam = Math.floor(Math.random() * precision);
  return preNumber + randam;
}
