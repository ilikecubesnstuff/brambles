---
format: hugo-md
parent: null
title: Initial Bramblings
deck: >-
  May the wary but courageous wanderer, through the brambled bed of the forest
  of knowledge, find and savour the sweetest berries.
date: '2025-09-16T10:22:28+02:00'
lastmod: '2025-09-17T19:04:49+02:00'
tags: []
---


Hello!
This is my first blogpost.

Hopefully this post serves as a time capsule of sorts.
The extent to which I will produce a steady flow of output, or maintain consistent motivation to, I do not know.
But in the spirit of action in defiance of perfectionism, something shall reign over nothing.
Thus, here we are.

## Seedlings

I was inspired to start this blog by the author of [Thoughts From A Lake](https://lekhbhatia.github.io/){{% sidenote %}}The post on [Inkscape](https://lekhbhatia.github.io/blog/posts/inkscapelove/) here inspired me to use it for the Brambles logo!{{% /sidenote %}}, a friend of mine that studies mathematics and is generally willing to entertain capricious, impulsive treks through the forest of knowledge. It's a captivating pastime, with friends or alone, that all too often yields beautiful nuggets of knowledge worth sharing.

I haven't considered starting a blog before.
Not seriously, anyway.
Sharing a message to the world in this format a presupposes belief that such a message contains substance, that it's worth sharing, that it does some good.
That is, well... a difficult lemma to prove.

I suppose sharing pieces of knowledge is a start, since that's a method of disconnecting myself from the product I ship to the world.
But, it is still *my* telling of the journey that gets shipped.
That's what has to be perfected, and the perfectionist in me would ne'er dare unveil that which it cannot impose a metric for perfection upon.

Man, I don't even like writing.

## Prickles

Come to think of it, feeling that I don't like writing is a weird thing to say.
I guess it's an extension of me not liking reading, but it's still weird.
I like *films*.
I can appreciate a well-written story conveyed through film.
Communication, in general, lends itself to fun puzzles aplenty.
The projection of thoughts, concepts, stories, onto any medium, linguistic or otherwise, is art worth creating and digesting.
Why, then, does the *written* medium give me such indigestion?

I like to theorize about the ways in which all the joy of reading and writing were systematically shut off from me by the systems around me built to do the opposite.
It gives the perfectionist purpose, I suppose.
But that doesn't make the theories more than what they are: a distraction.
As much as I want to know the *why* and want it to be true, the perfectionist and I still end up with nothing---far from the outcome we want.
How do I step towards perfection without fighting the perfectionist along the way?

Well... I suppose this, as anything, can be framed as a "fun" puzzle.

## Berries

I guess the most important step was that before the first.
I have to frame this blog as a draft, as a whole.
It is not meant to be perfect.
That is not to say that I can't strive for perfection, but rather that the mechanism for achieving perfection is not aiming for it, but practice.
After some practice, what I produce will feel "ready" for the world to me, even if the future me that produces it doesn't think so.
Readiness for the world constructs a false dichotomy, and my perception of it is independent of where I am along the continuum.

At least, that is easy to say at a cognitive level.
The perfectionist would appreciate a distraction, though.
Programming is a good start.

### Quarto

To generate a blog, I need a tool that can take human-readable input files and generate less-readable-but-web-browser-displayable output files.

[Thoughts From A Lake](https://lekhbhatia.github.io/) is built using a publishing system called [**Quarto**](https://quarto.org/).
Quarto can accept Jupyter notebooks (`.ipynb`) as well as computational markdown documents (`.qmd`) as input. `.qmd` is a special markdown format that directs Quarto to execute code cells within the document and include its artefacts in the final output (in effect, a markdown Jupyter notebook). It is purpose-built for technical documents, which is pretty neat. Seeing that I would mostly write about code-adjacent and math-adjacent things, it is important that code/math is formatted/typeset properly.

For code, I do not tinker much with Quarto's defaults beyond setting the color scheme to `dracula`. Code sample below:{{% sidenote %}}Code excerpt from a Python script for generating secret Santa pairings.{{% /sidenote %}}

``` python
def random_derangement(seq: list[str]):
    """
    Sample uniformly from derangements of a sequence.
    """
    new_seq = seq.copy()
    random.shuffle(new_seq)
    while any(item == new_item for item, new_item in zip(seq, new_seq)):
        random.shuffle(new_seq)
    return new_seq


def get_pairings(users: list[str]):
    """
    Get parallel lists for the user pairings.
    """
    allocs = random_derangement(users)
    return users, allocs
```

For math, I am using Quarto's default [MathJax](https://www.mathjax.org/) for rendering math in a \\(\\rm\\LaTeX\\) style.
Math sample below:{{% sidenote %}}Math excerpt from some old coursework on [smoothed-particle hydrodynamics](https://en.wikipedia.org/wiki/Smoothed-particle_hydrodynamics).{{% /sidenote %}}

$$
\begin{aligned}
    \frac{{\rm d}v_a}{{\rm d}t} &= -\frac{1}{\rho_a} \nabla P_a \\\\
    &= -\frac{1}{\rho_a} \left( 2\sqrt{P_a} \nabla\sqrt{P_a} \right) \\\\
    &= -\frac{2\sqrt{P}_a}{\rho_a} \left( \sum_bm_b\frac{\sqrt{P_b}}{\rho\_{b}}\nabla W\left(r\_{ab}, h_a\right) \right) \\\\
    &= -2\sum\_{b}m_b\frac{\sqrt{P_aP_b}}{{\rho_a\rho_b}}\left(\nabla_aW\left(r\_{ab}, h_a\right)\right)
\end{aligned}
$$

Is that pretty neat? Yeah.

Is the perfectionist pacified? Not just yet.

Quarto can use this to generate a static site, but the customization options are limited compared to a full-fledged static site generator.
I suppose it's calming for the perfectionist if the tools I use have *capacity* for more "perfection", even if I don't use them to their full extent.
In any case, the next step is to integrate Quarto with...

### Hugo

To create a static website, which this blog is, I need a tool that can take human-readable input files and generate all the pages of the website as output files. Such a tool is a static site generator, and it achieves modularity through a templating system.

[**Hugo**](https://gohugo.io/) is a popular static site generator written in Go.
I have never used Go before, but hey, it can't be that bad, right?

With a non-trivial amount of wrangling (and the help of LLMs), I managed to get some web pages up and running that looked quite nice. Hugo does have a lot of theming options, and although I was not particularly happy with any of them, I heavily based the look of this blog on the [HugoTeX](https://github.com/kaisugi/HugoTeX) theme.
It uses [LaTeX.css](https://latex.vercel.app/) for the classic \\(\\rm\\LaTeX\\) look, which I have adopted here.
*Unsurprisingly, I am a fan of \\(\\LaTeX\\) and Computer Modern.
Sue me.*

I had a couple of reasons to put in this extra effort, but as an example, I desired the modularity to make blog posts as *responses* or *follow-ups* to previous posts. I don't know how much effort it would have been to implement in Quarto alone, but Hugo's templating system certainly made it easier. This feature is excellent for the perfectionist, since publishing posts has an otherwise looming finality that the flexibility of follow-ups wonderfully enervate.

Here is an example of a Hugo template. The Go scripts are contained within the `{{ }}` delimiters, which provides the templating logic for the surrounding HTML. This specific template is used for each blogpost's page on this website.

``` go-html-template
{{- $lastmod := .Lastmod.Format ( .Site.Params.dateformat | default "Jan 2, 2006") }}
{{- $pubdate := .PublishDate.Format ( .Site.Params.dateformat | default "Jan 2, 2006") }}
<article class="article" class="blog-post">
<div class="frontmatter">
    <h1 class="title">{{ .Title }}</h1>
    <p class="deck">{{ .Params.deck }}</p>
    <p class="author">{{ .Site.Params.Author.name }}</p>
    <p class="pubdate">{{ $pubdate }}</p>
    {{- if ne $lastmod $pubdate }}
    <p class="lastmod">Last modified on {{ $lastmod }}.</p>
    {{- end }}
</div>

{{- if .Params.tags }}
<p class="tags">
    {{- range .Params.tags }}
    <span class="post-tag {{ . }}">{{ . }}</span>
    {{- end }}
</p>
{{- end }}

{{ .Content }}
</article>
```

The benefit of generating the entire website in a static way is that it can be hosted on [GitHub Pages](https://pages.github.com/) for *free*. With this project uploaded to [GitHub](https://github.com/ilikecubesnstuff/brambles/), I'm basically at the finish line. I just need to think of a name.

*Oh for f--*

## Brambles!

Brambles are a prickly shrub, typically bearing blackberries or raspberries. In the spirit of embracing imperfection, I imagine reading a post from this blog akin to picking berries from a bramble. The imperfections, the *prickles*, will always be part of it, but my hope is that the yield is nonetheless something fruitful.

In any case, this is just a **b**log of **rambles**.
