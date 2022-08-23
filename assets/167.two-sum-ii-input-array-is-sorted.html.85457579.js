import{_ as c}from"./plugin-vue_export-helper.21dcd24c.js";import{o as l,c as i,a as n,b as a,w as u,d as t,e as s,r as e}from"./app.492496be.js";const r={},d=t('<h2 id="\u9898\u76EE" tabindex="-1"><a class="header-anchor" href="#\u9898\u76EE" aria-hidden="true">#</a> \u9898\u76EE</h2><p>\u7ED9\u4F60\u4E00\u4E2A\u4E0B\u6807\u4ECE 1 \u5F00\u59CB\u7684\u6574\u6570\u6570\u7EC4\xA0<code>numbers</code> \uFF0C\u8BE5\u6570\u7EC4\u5DF2\u6309 <strong>\u975E\u9012\u51CF\u987A\u5E8F\u6392\u5217</strong>\xA0 \uFF0C\u8BF7\u4F60\u4ECE\u6570\u7EC4\u4E2D\u627E\u51FA\u6EE1\u8DB3\u76F8\u52A0\u4E4B\u548C\u7B49\u4E8E\u76EE\u6807\u6570\xA0<code>target </code>\u7684\u4E24\u4E2A\u6570\u3002\u5982\u679C\u8BBE\u8FD9\u4E24\u4E2A\u6570\u5206\u522B\u662F<code> numbers[index1]</code> \u548C <code>numbers[index2]</code> \uFF0C\u5219 <code>1 &lt;= index1 &lt; index2 &lt;= numbers.length </code>\u3002</p><p>\u4EE5\u957F\u5EA6\u4E3A <code>2</code> \u7684\u6574\u6570\u6570\u7EC4 <code>[index1, index2] </code>\u7684\u5F62\u5F0F\u8FD4\u56DE\u8FD9\u4E24\u4E2A\u6574\u6570\u7684\u4E0B\u6807 <code>index1</code> \u548C <code>index2\u3002</code></p><p>\u4F60\u53EF\u4EE5\u5047\u8BBE\u6BCF\u4E2A\u8F93\u5165 \u53EA\u5BF9\u5E94\u552F\u4E00\u7684\u7B54\u6848 \uFF0C\u800C\u4E14\u4F60 \u4E0D\u53EF\u4EE5 \u91CD\u590D\u4F7F\u7528\u76F8\u540C\u7684\u5143\u7D20\u3002</p><p>\u4F60\u6240\u8BBE\u8BA1\u7684\u89E3\u51B3\u65B9\u6848\u5FC5\u987B\u53EA\u4F7F\u7528\u5E38\u91CF\u7EA7\u7684\u989D\u5916\u7A7A\u95F4\u3002</p><p><strong>\u4F8B\u5B50</strong></p><div class="custom-container tip"><p class="custom-container-title">\u63D0\u793A</p><p>\u8F93\u5165\uFF1Anumbers = [2,7,11,15], target = 9</p><p>\u8F93\u51FA\uFF1A[1,2]</p><p>\u89E3\u91CA\uFF1A2 \u4E0E 7 \u4E4B\u548C\u7B49\u4E8E\u76EE\u6807\u6570 9 \u3002\u56E0\u6B64 index1 = 1, index2 = 2 \u3002\u8FD4\u56DE [1, 2] \u3002</p></div><h2 id="\u9898\u76EE\u94FE\u63A5" tabindex="-1"><a class="header-anchor" href="#\u9898\u76EE\u94FE\u63A5" aria-hidden="true">#</a> \u9898\u76EE\u94FE\u63A5</h2>',8),k={href:"https://leetcode.cn/problems/two-sum-ii-input-array-is-sorted/",target:"_blank",rel:"noopener noreferrer"},m=s("https://leetcode.cn/problems/two-sum-ii-input-array-is-sorted/"),v=n("h2",{id:"\u9898\u76EE\u5927\u610F",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u9898\u76EE\u5927\u610F","aria-hidden":"true"},"#"),s(" \u9898\u76EE\u5927\u610F")],-1),b=n("p",null,"\u5728\u6570\u7EC4\u4E2D\u627E\u5230\u4E24\u4E2A\u6811\u4E4B\u548C\u7B49\u4E8E\u7ED9\u5B9A\u503C\u7684\u6570\u5B57\uFF0C\u7ED3\u679C\u8FD4\u56DE\u8FD9\u4E24\u4E2A\u6570\u5B57\u7684\u4E0B\u6807",-1),h=n("h2",{id:"\u89E3\u9898\u601D\u8DEF",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u89E3\u9898\u601D\u8DEF","aria-hidden":"true"},"#"),s(" \u89E3\u9898\u601D\u8DEF")],-1),w=s("\u8FD9\u9898\u4E0E"),_=s("\u4E24\u6570\u4E4B\u548C"),y=s("\u7C7B\u4F3C\uFF0C\u4F46\u8981\u6C42\u4E0D\u4E00\u6837\uFF0C\u8981\u6C42\u4E0D\u4F7F\u7528\u989D\u5916\u7A7A\u95F4\uFF0C\u6240\u4EE5"),f=n("code",null,"\u54C8\u5E0C\u8868",-1),g=s("\u662F\u4E0D\u80FD\u4F7F\u7528\u4E86\u3002"),x=t(`<p>\u56E0\u4E3A\u6570\u7EC4\u662F\u6709\u5E8F\u7684\uFF0C\u6240\u4EE5\u67E5\u627E\u5143\u7D20\u7684\u65F6\u5019\u53EF\u4EE5<code>\u4E8C\u5206\u67E5\u627E</code></p><p>\u6211\u4EEC\u9898\u76EE\u8981\u6C42\u67E5\u627E\u4E24\u4E2A\u6EE1\u8DB3\u6761\u4EF6\u7684\u5143\u7D20\uFF0C\u6240\u4EE5\u53EF\u4EE5\u4F7F\u7528<code>\u53CC\u6307\u9488</code>\u3002</p><p>\u628A\u8FD9\u4E24\u8005\u7ED3\u5408\u8D77\u6765\uFF0C\u5148\u904D\u5386\u6570\u7EC4\uFF0C\u5176\u4E2D\u4E00\u4E2A\u6307\u9488\u662F\u5BF9\u5E94\u7D22\u5F15\u7684\u5143\u7D20 <code>current</code>\uFF0C\u53E6\u5916\u4E00\u4E2A\u6307\u9488\u662F <code>target - current</code>,\u7136\u540E\u5229\u7528<code>\u4E8C\u5206\u67E5\u627E</code>\u67E5\u627E\u662F\u5426\u4E0E\u4E4B\u76F8\u7B49\u7684\u5143\u7D20</p><h2 id="\u4EE3\u7801" tabindex="-1"><a class="header-anchor" href="#\u4EE3\u7801" aria-hidden="true">#</a> \u4EE3\u7801</h2><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">numbers</span>
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> <span class="token parameter">target</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">twoSum</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">numbers<span class="token punctuation">,</span> target</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> result <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> n <span class="token operator">=</span> numbers<span class="token punctuation">.</span>length
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> n<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> p <span class="token operator">=</span> target <span class="token operator">-</span> numbers<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token comment">// \u4E8C\u5206\u67E5\u627E\u662F\u5426\u6EE1\u8DB3\u6761\u4EF6\u7684\u5143\u7D20</span>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u7EAF\u53CC\u6307\u9488" tabindex="-1"><a class="header-anchor" href="#\u7EAF\u53CC\u6307\u9488" aria-hidden="true">#</a> \u7EAF\u53CC\u6307\u9488</h2><p>\u4E0A\u9762\u7ED9\u51FA\u7684\u89E3\u6CD5\u662F<code>\u53CC\u6307\u9488</code> + <code>\u4E8C\u5206\u67E5\u627E</code>\uFF0C\u65F6\u95F4\u590D\u6742\u5EA6\u4E3A <code>O(nlogn)</code>\u3002\u7531\u4E8E\u6570\u7EC4\u6709\u5E8F\u7684\uFF0C\u5E76\u4E14\u786E\u4FDD\u6709\u552F\u4E00\u7684\u7B54\u6848\uFF0C\u56E0\u6B64\u53EF\u4EE5\u53EA\u4F7F\u7528\u53CC\u6307\u9488\u627E\u5230\u7B54\u6848\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
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
      <span class="token comment">// \u4E24\u6570\u4E4B\u548C\u592A\u5927\u4E86\uFF0C\u8BF4\u660E\u7ED3\u679C\u5728\u5DE6\u8FB9\u3002</span>
      right<span class="token operator">--</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      <span class="token comment">// \u4E24\u6570\u4E4B\u548C\u592A\u5C0F\u4E86\uFF0C\u8BF4\u660E\u7ED3\u679C\u5728\u53F3\u8FB9\u3002</span>
      left<span class="token operator">++</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> result<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u53EA\u9700\u904D\u5386\u4E00\u6B21\u5373\u53EF\uFF0C\u65F6\u95F4\u590D\u6742\u5EA6\u4E3A <code>O(n)</code></p>`,9);function j(I,S){const p=e("ExternalLinkIcon"),o=e("RouterLink");return l(),i("div",null,[d,n("p",null,[n("a",k,[m,a(p)])]),v,b,h,n("p",null,[w,a(o,{to:"/array/1.two-sum.html"},{default:u(()=>[_]),_:1}),y,f,g]),x])}var V=c(r,[["render",j],["__file","167.two-sum-ii-input-array-is-sorted.html.vue"]]);export{V as default};