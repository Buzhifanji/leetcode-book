import{_ as e,W as p,X as t,Y as n,Z as o,$ as c,a0 as s,D as l}from"./framework-ee985c4f.js";const i={},u=s('<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>给定两个大小分别为 m 和 n 的正序（从小到大）数组 nums1 和 nums2。请你找出并返回这两个正序数组的 中位数 。</p><p>算法的时间复杂度应该为 O(log (m+n)) 。</p><p><strong>例子</strong></p><div class="hint-container tip"><p class="hint-container-title">提示</p><p>输入：nums1 = [1,3], nums2 = [2]</p><p>输出：2.00000</p><p>解释：合并数组 = [1,2,3] ，中位数 2</p></div><div class="hint-container tip"><p class="hint-container-title">提示</p><p>输入：nums1 = [1,2], nums2 = [3,4]</p><p>输出：2.50000</p><p>解释：合并数组 = [1,2,3,4] ，中位数 (2 + 3) / 2 = 2.5</p></div><h2 id="题目链接" tabindex="-1"><a class="header-anchor" href="#题目链接" aria-hidden="true">#</a> 题目链接</h2>',7),r={href:"https://leetcode.cn/problems/median-of-two-sorted-arrays/",target:"_blank",rel:"noopener noreferrer"},d=s(`<h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">/*
 * @lc app=leetcode.cn id=4 lang=javascript
 * @lcpr version=
 *
 * [4] 寻找两个正序数组的中位数
 */</span>

<span class="token comment">// @lc code=start</span>
<span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">nums1</span>
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">nums2</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">findMedianSortedArrays</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">nums1<span class="token punctuation">,</span> nums2</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> totalLength <span class="token operator">=</span> nums1<span class="token punctuation">.</span>length <span class="token operator">+</span> nums2<span class="token punctuation">.</span>length<span class="token punctuation">;</span>

  <span class="token comment">// 先处理特殊的情况</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>totalLength <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">undefined</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// 先假定 nums1 和 muns2 合并成一个数组，然后找到中位数的索引</span>
  <span class="token keyword">const</span> mediumRankedIndex <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">floor</span><span class="token punctuation">(</span><span class="token punctuation">(</span>totalLength <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">/</span> <span class="token number">2</span> <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token comment">// 如果是偶数，则需要获取两位数字，反之一位即可</span>
  <span class="token keyword">const</span> isOld <span class="token operator">=</span> totalLength <span class="token operator">%</span> <span class="token number">2</span> <span class="token operator">===</span> <span class="token number">0</span> <span class="token operator">?</span> <span class="token boolean">true</span> <span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">;</span>

  <span class="token keyword">let</span> m <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token comment">// 记录 num1 查找的索引</span>
    n <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span>  <span class="token comment">// 记录 mun2 查找的索引</span>
    index <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token comment">// 记录假定合并数组 查找的索引</span>
    mediumRanked <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token comment">// 中位数</span>
    flag <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>

  <span class="token keyword">const</span> <span class="token function-variable function">findIndex</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">val</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>flag<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      mediumRanked <span class="token operator">=</span> <span class="token punctuation">(</span>mediumRanked <span class="token operator">+</span> val<span class="token punctuation">)</span> <span class="token operator">/</span> <span class="token number">2</span><span class="token punctuation">;</span>
      <span class="token keyword">return</span> <span class="token boolean">true</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">let</span> result <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span>index <span class="token operator">===</span> mediumRankedIndex<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      mediumRanked <span class="token operator">=</span> val<span class="token punctuation">;</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>isOld<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 继续查找下一位</span>
        flag <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        <span class="token comment">// 结束查找</span>
        result <span class="token operator">=</span> <span class="token boolean">true</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    index<span class="token operator">++</span>
    <span class="token keyword">return</span> result
  <span class="token punctuation">}</span>

  <span class="token keyword">while</span> <span class="token punctuation">(</span>m <span class="token operator">&lt;</span> nums1<span class="token punctuation">.</span>length <span class="token operator">||</span> n <span class="token operator">&lt;</span> nums2<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> m1 <span class="token operator">=</span> nums1<span class="token punctuation">[</span>m<span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> n1 <span class="token operator">=</span> nums2<span class="token punctuation">[</span>n<span class="token punctuation">]</span><span class="token punctuation">;</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span>m1 <span class="token operator">===</span> <span class="token keyword">undefined</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">findIndex</span><span class="token punctuation">(</span>n1<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token keyword">break</span><span class="token punctuation">;</span>

      n<span class="token operator">++</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>n1 <span class="token operator">===</span> <span class="token keyword">undefined</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">findIndex</span><span class="token punctuation">(</span>m1<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token keyword">break</span><span class="token punctuation">;</span>

      m<span class="token operator">++</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>m1 <span class="token operator">&lt;</span> n1<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">findIndex</span><span class="token punctuation">(</span>m1<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token keyword">break</span><span class="token punctuation">;</span>

        m<span class="token operator">++</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">findIndex</span><span class="token punctuation">(</span>n1<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token keyword">break</span><span class="token punctuation">;</span>

        n<span class="token operator">++</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">return</span> <span class="token operator">+</span>mediumRanked<span class="token punctuation">.</span><span class="token function">toFixed</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token comment">// @lc code=end</span>



<span class="token comment">/*
// @lcpr case=start
// [1,3]\\n[2]\\n
// @lcpr case=end

// @lcpr case=start
// [1,2]\\n[3,4]\\n
// @lcpr case=end

 */</span>

<span class="token comment">// @after-stub-for-debug-begin</span>
module<span class="token punctuation">.</span>exports <span class="token operator">=</span> findMedianSortedArrays<span class="token punctuation">;</span>
<span class="token comment">// @after-stub-for-debug-end</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2);function k(m,v){const a=l("ExternalLinkIcon");return p(),t("div",null,[u,n("p",null,[n("a",r,[o("https://leetcode.cn/problems/median-of-two-sorted-arrays/"),c(a)])]),d])}const f=e(i,[["render",k],["__file","4.median-of-two-sorted-arrays.html.vue"]]);export{f as default};
