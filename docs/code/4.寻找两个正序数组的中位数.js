/*
 * @lc app=leetcode.cn id=4 lang=javascript
 * @lcpr version=
 *
 * [4] 寻找两个正序数组的中位数
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
  const totalLength = nums1.length + nums2.length;

  // 先处理特殊的情况
  if (totalLength === 0) {
    return undefined
  }

  // 先假定 nums1 和 muns2 合并成一个数组，然后找到中位数的索引
  const mediumRankedIndex = Math.floor((totalLength + 1) / 2 - 1);

  // 如果是偶数，则需要获取两位数字，反之一位即可
  const isOld = totalLength % 2 === 0 ? true : false;

  let m = 0, // 记录 num1 查找的索引
    n = 0,  // 记录 mun2 查找的索引
    index = 0, // 记录假定合并数组 查找的索引
    mediumRanked = 0, // 中位数
    flag = false;

  const findIndex = (val) => {
    if (flag) {
      mediumRanked = (mediumRanked + val) / 2;
      return true
    }

    let result = false;

    if (index === mediumRankedIndex) {
      mediumRanked = val;
      if (isOld) {
        // 继续查找下一位
        flag = true;
      } else {
        // 结束查找
        result = true
      }
    }

    index++
    return result
  }

  while (m < nums1.length || n < nums2.length) {
    const m1 = nums1[m];
    const n1 = nums2[n];

    if (m1 === undefined) {
      if (findIndex(n1)) break;

      n++
    } else if (n1 === undefined) {
      if (findIndex(m1)) break;

      m++
    } else {
      if (m1 < n1) {
        if (findIndex(m1)) break;

        m++;
      } else {
        if (findIndex(n1)) break;

        n++;
      }
    }
  }

  return +mediumRanked.toFixed(5)
};
// @lc code=end



/*
// @lcpr case=start
// [1,3]\n[2]\n
// @lcpr case=end

// @lcpr case=start
// [1,2]\n[3,4]\n
// @lcpr case=end

 */

// @after-stub-for-debug-begin
module.exports = findMedianSortedArrays;
// @after-stub-for-debug-end