---
title: Reals ctd.
layout: default
tags: Analysis
categories: Farm
excerpt: "In the last article, we showed that Rational Cauchy sequences are convergent! This was basically a manifestation of a consistent extension of LIMIT on Rationals to the concept of <em>limit</em> on the whole of reals, which are conceptually more tractable to play with. We also saw that any real convergent sequence is Cauchy as well!"
---


<span class="interest"><em>Hyping completeness of Reals.</em></span>


In the last article, we showed that Rational Cauchy sequences are convergent! This was basically a manifestation of a consistent extension of LIMIT on Rationals to the concept of <em>limit</em> on the whole of reals, which are conceptually more tractable to play with. We also saw that any real convergent sequence is Cauchy as well! 

We wanted to understand Real sequences as a whole too. We made some very significant efforts to abstractly capture real sequences. We introduced the notion of supremum and infimum of sequences and saw that the dance of sequences when they are bounded and monotonous is clear, viz. they converge to their suprema or infima! That's a nice result we now have in our bags. 

Next we also introduced the notion of limit points, to capture the points to which the sequence seemigly converges to but need not! The limit of a sequence is a trivial example of a limit point. But the sequence need not be convergent for it to have manyyyyyyy limit points! Next, we also introduced special kind of limit points, the <em>limit superior</em> and the <em>limit inferior</em>.


This is our final move towards understanding the dance of Real sequences. And we ended the last article  with a beautiful encapsulation of behavior of sequences in terms of these limit points. Here, in this article we will talk about this further. We'll also most importantly apply this to show that all the Real Cauchy sequences are convergent!


One shouldn't forget however that its the Least Upper bound property of Reals that leads to all this <em>complete</em> behavior. Rest of the theory of limit points was a just a framework that makes real sequence more directly tractable.


## The dance stage of Real sequences

Here's the result we want to talk about.

<div class="proposition">
   Let $(a_n)_{n=m}^{\infty}$ be a sequence of real numbers, let $L^+$ be the limit superior of this sequence, and let $L^-$ be the limit inferior of this sequence (thus both $L^+$ and $L^-$ are extended real numbers).

<ol class="list" type="a">
    <li>For every $x > L^+$, there exists an $N \ge m$ such that $a_n < x$ for all $n \ge N$. (In other words, for every $x > L^+$, the elements of the sequence $(a_n)_{n=m}^{\infty}$ are eventually less than $x$.) Similarly, for every $y < L^-$ there exists an $N \ge m$ such that $a_n > y$ for all $n \ge N$.</li>
    <li>For every $x < L^+$, and every $N \ge m$, there exists an $n \ge N$ such that $a_n > x$. (In other words, for every $x < L^+$, the elements of the sequence $(a_n)_{n=m}^{\infty}$ exceed $x$ infinitely often.) Similarly, for every $y > L^-$ and every $N \ge m$, there exists an $n \ge N$ such that $a_n < y$.</li>
    <li>We have $\inf(a_n)_{n=m}^{\infty} \le L^- \le L^+ \le \sup(a_n)_{n=m}^{\infty}$.</li>
    <li>If $c$ is any limit point of $(a_n)_{n=m}^{\infty}$, then we have $L^- \le c \le L^+$.</li>
    <li>If $L^+$ is finite, then it is a limit point of $(a_n)_{n=m}^{\infty}$. Similarly, if $L^-$ is finite, then it is a limit point of $(a_n)_{n=m}^{\infty}$.</li>
    <li>Let $c$ be a real number. If $(a_n)_{n=m}^{\infty}$ converges to $c$, then we must have $L^+ = L^- = c$. Conversely, if $L^+ = L^- = c$, then $(a_n)_{n=m}^{\infty}$ converges to $c$.</li>
</ol> 
<figure>
    <img style="width:100%" src="\src\images\Field-Farmer\linsupinf.svg" alt="">
</figure>

</div>













It is good to keep reminding ourelves that, we study sequences, infact all possibel Cauchy sequences, their various
limits and what not as a way to understand Real Numbers! For, Reals are precisely those, the set of all cauchy
sequences, except some Cauchy sequences give the same Real. It is this structure along with the dance of these sequences
between the limsup and liminf that we probed here. So, the question of gaps in Rationals are answered by Cauchy
sequences.


Are there any other gaps in rationals apart from the exponentiation problem? How does one approach such a question? In
this sense our mathematics is limited to what we have found useful or what we have built. Square roots are important for
geometric reasons, and rationals do not contain them. So we need Reals yes. We will complete these Rationals, but in a
very precise sense. I wonder if you could ask other questions on rationals and complete it to get other number systems!
Perhaps the same with Reals, infact, indeed rationals are incomplete in the sense of roots of negative numbers, which
paves way for complex numbers. Is there a way to theorize that? Beyond the cauchy completeness, does there exist other
kind of completetions?

Indeed Cacuhy completeness hold the vital information of seuquences converging. Expand.../ Close with wonder... Beyond
the sqaure roots - towards limits.

What are all the gaps in the rationals? The set of all cauchy sequences answer them. The irrational numbers. The
properties of irrationals.

However this also raises more questions (atleast personally). Other ways to complete rationals? Can we also complete
Reals by finding some behavior it lacks? One can concoct new scenarios where the number systems might fail indeed
(probably? It would be a rather powerful mathematical object which would be complete* in every* sense...). For example
Reals fail the rational exponentiation of negative numbers too. And there is a birth of Complex numbers. But yet, the
Rational to Real transition is more fundamental than this. There are numbers which are arbitrarily close to the said
behavior and yet do not <em>reach</em> it.

In mathematics, by completetion we mean to correct this behavior. Asking whether a sequence of seemingly
<em>converging</em> numbers, does indeed converge to a number within the system? Not just a number, completetion is also
defined in the more abstract <em>metric spaces</em> where there is a notion of distance, with the laws we indicated
earlier axiomatized.


That was a small foray into some questions one can ask. I will perhaps sit through these questions and write about it in
the post script sometime soon. It's worth having a narrative about these aspects. One narrative I do believe in is --
although mathematics is powerful enough to be concocting its own game and players, it's still guided by the human needs.
One such important nurturer of mathematics is physics! So many abstract concepts are motivated by the nature of physics,
to code them precisely and write them in a langauge which can be extended, and solved to predict and understand the
nature. One can observe that mathematics does take this direction of nature even in the most abstract of places. So
sometimes steering away from this narrative, and finding deficiencies in a theory could be just a personal/mad
indulgence :). I say that to be aware and concious to not fall into the spiral of meta-mathematics. So I will sit with
some questions and see if it's legit to wonder about them -- exploring through the available literature and if they can
be made precise?

I must say however, in the late 19th and early 20th century, mathematics and physics have been diverging a lot globally.
Mathematicians were able to go so deep with just the abstraction and asking their own questionsabout the strucutre and
the working of the theory. So yes, mathematics is mostly being mad and personally indulgent in the structure of
theories. That's how one ends up developing the field further, regardless of its potential applications elsewhere.

(After that brief divergence since the 20th century, Mathematics and physics are now closer to each other than ever!)

It's good however, to ground ourselves once in a while to the roots :).

So I guess, this field farm is also about that, <em>grounding oneself</em> amidst the depths of math and physics.
