---
layout: layouts/home.njk
eleventyNavigation:
  key: A ode to a mug
  order: 1
numberOfLatestPostsToShow: 3
---
{% set postsCount = collections.posts | length %}
{% set latestPostsCount = postsCount | min(numberOfLatestPostsToShow) %}
<h1>Oh, Sports Direct Mug</h1>

<p>Sturdy and bold, a vessel of stories, both timeless and old.</p>
<p>In the morning's embrace, you stand by my side,</p>
<p>Filled with warmth, you're my daily joyride.</p>

<p>With handle so hearty, a grip firm and true,</p>
<p>You've seen countless coffees, a loyal brew.</p>
<p>Through office commutes or lazy Sunday's glee,</p>
<p>You're the constant companion, mug of loyalty.</p>

<p>Boldly emblazoned, the logo so grand,</p>
<p>A symbol of resilience, across the land.</p>
<p>In meetings and memos, you silently cheer,</p>
<p>A humble companion, year after year.</p>

<p>From steaming hot coffee to soothing tea,</p>
<p>You hold liquid dreams, a vessel of glee.</p>
<p>In your ceramic embrace, memories unfold,</p>
<p>Oh, Sports Direct Mug, a tale to be told.</p>

<p>Through deadlines and triumphs, you've stood the test,</p>
<p>A humble mug, but truly the best.</p>
<p>So here's to you, with a heartfelt salute,</p>
<p>Sports Direct Mug, you're simply astute.</p>


{% if morePosts > 0 %}
<p>{{ morePosts }} more post{% if morePosts != 1 %}s{% endif %} can be found in <a href="/blog/">the archive</a>.</p>
{% endif %}
