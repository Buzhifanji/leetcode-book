import{_ as c,W as l,X as i,Y as n,Z as s,$ as a,a1 as u,a0 as t,D as e}from"./framework-ee985c4f.js";const r={},d=t('<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>给你一个下标从 1 开始的整数数组 <code>numbers</code> ，该数组已按 <strong>非递减顺序排列</strong>  ，请你从数组中找出满足相加之和等于目标数 <code>target </code>的两个数。如果设这两个数分别是<code> numbers[index1]</code> 和 <code>numbers[index2]</code> ，则 <code>1 &lt;= index1 &lt; index2 &lt;= numbers.length </code>。</p><p>以长度为 <code>2</code> 的整数数组 <code>[index1, index2] </code>的形式返回这两个整数的下标 <code>index1</code> 和 <code>index2。</code></p><p>你可以假设每个输入 只对应唯一的答案 ，而且你 不可以 重复使用相同的元素。</p><p>你所设计的解决方案必须只使用常量级的额外空间。</p><p><strong>例子</strong></p><div class="hint-container tip"><p class="hint-container-title">提示</p><p>输入：numbers = [2,7,11,15], target = 9</p><p>输出：[1,2]</p><p>解释：2 与 7 之和等于目标数 9 。因此 index1 = 1, index2 = 2 。返回 [1, 2] 。</p></div><h2 id="题目链接" tabindex="-1"><a class="header-anchor" href="#题目链接" aria-hidden="true">#</a> 题目链接</h2>',8),k={href:"https://leetcode.cn/problems/two-sum-ii-input-array-is-sorted/",target:"_blank",rel:"noopener noreferrer"},m=n("h2",{id:"题目大意",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#题目大意","aria-hidden":"true"},"#"),s(" 题目大意")],-1),v=n("p",null,"在数组中找到两个树之和等于给定值的数字，结果返回这两个数字的下标",-1),b=n("h2",{id:"解题思路",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#解题思路","aria-hidden":"true"},"#"),s(" 解题思路")],-1),h=n("code",null,"哈希表",-1),w=t(`<p>因为数组是有序的，所以查找元素的时候可以<code>二分查找</code></p><p>我们题目要求查找两个满足条件的元素，所以可以使用<code>双指针</code>。</p><p>把这两者结合起来，先遍历数组，其中一个指针是对应索引的元素 <code>current</code>，另外一个指针是 <code>target - current</code>,然后利用<code>二分查找</code>查找是否与之相等的元素</p><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">numbers</span>
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> <span class="token parameter">target</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">twoSum</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">numbers<span class="token punctuation">,</span> target</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> result <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> n <span class="token operator">=</span> numbers<span class="token punctuation">.</span>length
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> n<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> p <span class="token operator">=</span> target <span class="token operator">-</span> numbers<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token comment">// 二分查找是否满足条件的元素</span>
    <span class="token keyword">let</span> left <span class="token operator">=</span> i <span class="token operator">+</span> <span class="token number">1</span>
    <span class="token keyword">let</span> right <span class="token operator">=</span> n<span class="token punctuation">;</span>
    <span class="token keyword">while</span><span class="token punctuation">(</span>left <span class="token operator">&lt;=</span> right<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">let</span> middle <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">(</span>right <span class="token operator">-</span> left<span class="token punctuation">)</span> <span class="token operator">&gt;&gt;</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">+</span> left<span class="token punctuation">;</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>numbers<span class="token punctuation">[</span>middle<span class="token punctuation">]</span> <span class="token operator">===</span> p<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        result<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>i<span class="token punctuation">,</span> middle<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">break</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span><span class="token punctuation">(</span>numbers<span class="token punctuation">[</span>middle<span class="token punctuation">]</span> <span class="token operator">&lt;</span> p<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        right <span class="token operator">=</span> middle <span class="token operator">-</span> <span class="token number">1</span>
      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        left <span class="token operator">=</span> middle <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> result<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="纯双指针" tabindex="-1"><a class="header-anchor" href="#纯双指针" aria-hidden="true">#</a> 纯双指针</h2><p>上面给出的解法是<code>双指针</code> + <code>二分查找</code>，时间复杂度为 <code>O(nlogn)</code>。由于数组有序的，并且确保有唯一的答案，因此可以只使用双指针找到答案。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">numbers</span>
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> <span class="token parameter">target</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">twoSum</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">numbers<span class="token punctuation">,</span> target</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> result <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> n <span class="token operator">=</span> numbers<span class="token punctuation">.</span>length<span class="token punctuation">;</span>
  <span class="token keyword">let</span> left <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span>
    right <span class="token operator">=</span> n <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span>
  <span class="token keyword">while</span> <span class="token punctuation">(</span>left <span class="token operator">&lt;=</span> right<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> sum <span class="token operator">=</span> numbers<span class="token punctuation">[</span>left<span class="token punctuation">]</span> <span class="token operator">+</span> numbers<span class="token punctuation">[</span>right<span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>sum <span class="token operator">===</span> target<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      result<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>left <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">,</span> right <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">break</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>sum <span class="token operator">&gt;</span> target<span class="token punctuation">)</span> <span class="token punctuation">{</span>\\
      <span class="token comment">// 两数之和太大了，说明结果在左边。</span>
      right<span class="token operator">--</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      <span class="token comment">// 两数之和太小了，说明结果在右边。</span>
      left<span class="token operator">++</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> result<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>只需遍历一次即可，时间复杂度为 <code>O(n)</code></p>`,9);function y(f,g){const p=e("ExternalLinkIcon"),o=e("RouterLink");return l(),i("div",null,[d,n("p",null,[n("a",k,[s("https://leetcode.cn/problems/two-sum-ii-input-array-is-sorted/"),a(p)])]),m,v,b,n("p",null,[s("这题与"),a(o,{to:"/array/1.two-sum.html"},{default:u(()=>[s("两数之和")]),_:1}),s("类似，但要求不一样，要求不使用额外空间，所以"),h,s("是不能使用了。")]),w])}const x=c(r,[["render",y],["__file","167.two-sum-ii-input-array-is-sorted.html.vue"]]);export{x as default};