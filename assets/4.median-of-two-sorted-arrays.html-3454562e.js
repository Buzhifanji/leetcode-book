import{_ as e,W as t,X as p,Y as n,Z as o,$ as c,a0 as s,D as l}from"./framework-ee985c4f.js";const i={},r=s('<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>给定两个大小分别为 m 和 n 的正序（从小到大）数组 nums1 和 nums2。请你找出并返回这两个正序数组的 中位数 。</p><p>算法的时间复杂度应该为 O(log (m+n)) 。</p><p><strong>例子</strong></p><div class="hint-container tip"><p class="hint-container-title">提示</p><p>输入：nums1 = [1,3], nums2 = [2]</p><p>输出：2.00000</p><p>解释：合并数组 = [1,2,3] ，中位数 2</p></div><div class="hint-container tip"><p class="hint-container-title">提示</p><p>输入：nums1 = [1,2], nums2 = [3,4]</p><p>输出：2.50000</p><p>解释：合并数组 = [1,2,3,4] ，中位数 (2 + 3) / 2 = 2.5</p></div><h2 id="题目链接" tabindex="-1"><a class="header-anchor" href="#题目链接" aria-hidden="true">#</a> 题目链接</h2>',7),u={href:"https://leetcode.cn/problems/median-of-two-sorted-arrays/",target:"_blank",rel:"noopener noreferrer"},d=s(`<h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><h3 id="解法一-暴力解法" tabindex="-1"><a class="header-anchor" href="#解法一-暴力解法" aria-hidden="true">#</a> 解法一：暴力解法</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * 暴力解法
 * 时间复杂度： 遍历全部数组 O(m+n)
 * 空间复杂的： 开辟了一个数组，保存合并后的两个数组 O(m+n)
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">nums1</span>
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">nums2</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">findMedianSortedArrays</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">nums1<span class="token punctuation">,</span> nums2</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 合并数组</span>
  <span class="token keyword">const</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token operator">...</span>nums1<span class="token punctuation">,</span> <span class="token operator">...</span>nums2<span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token comment">// 排序</span>
  arr<span class="token punctuation">.</span><span class="token function">sort</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> b</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> a <span class="token operator">-</span> b<span class="token punctuation">)</span>
  <span class="token keyword">const</span> n <span class="token operator">=</span> arr<span class="token punctuation">.</span>length<span class="token punctuation">;</span>
  <span class="token comment">// 获取中位数</span>
  <span class="token keyword">const</span> mediumRankedIndex <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">floor</span><span class="token punctuation">(</span><span class="token punctuation">(</span>n <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">/</span> <span class="token number">2</span> <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> <span class="token function-variable function">toFixed</span> <span class="token operator">=</span> <span class="token parameter">val</span> <span class="token operator">=&gt;</span> <span class="token operator">+</span>val<span class="token punctuation">.</span><span class="token function">toFixed</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>n <span class="token operator">%</span> <span class="token number">2</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 奇数</span>
    <span class="token keyword">return</span> <span class="token function">toFixed</span><span class="token punctuation">(</span>arr<span class="token punctuation">[</span>mediumRankedIndex<span class="token punctuation">]</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    <span class="token comment">// 偶数</span>
    <span class="token keyword">return</span> <span class="token function">toFixed</span><span class="token punctuation">(</span><span class="token punctuation">(</span>arr<span class="token punctuation">[</span>mediumRankedIndex<span class="token punctuation">]</span> <span class="token operator">+</span> arr<span class="token punctuation">[</span>mediumRankedIndex <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">/</span> <span class="token number">2</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3);function k(m,v){const a=l("ExternalLinkIcon");return t(),p("div",null,[r,n("p",null,[n("a",u,[o("https://leetcode.cn/problems/median-of-two-sorted-arrays/"),c(a)])]),d])}const h=e(i,[["render",k],["__file","4.median-of-two-sorted-arrays.html.vue"]]);export{h as default};
