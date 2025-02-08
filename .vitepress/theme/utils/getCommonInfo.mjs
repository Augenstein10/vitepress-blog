//以下接口来自 https://www.mxnzp.com/

const app_id = "zvubgrhpmttzqnll";
const app_secret = "Is4d29W3ywSBMnL4pLpG3S9a84iuKB47";

/**
 * 获取最近前后七个节日信息
 * @param {string} app_id 应用ID
 * @param {string} app_secret 应用密钥
 * @url https://www.mxnzp.com/api/holiday/recent/list
 */
export const getFestival = async () => {
  const response = await fetch(
    `https://www.mxnzp.com/api/holiday/recent/list?app_id=${app_id}&app_secret=${app_secret}`,
  );
  const data = await response.json();
  return data;
};
