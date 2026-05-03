---
title: Adherence-Limit Points
layout: default
tags: Analysis
categories: Farm
---

Terence Tao defines limit points the following way --

<p class="def"> Let $(a_n)_{n = m}^\infty$ be a sequence of real number, let $x$ be a rea l number, and let $\epsilon >
    0$ be real number. We say that $x$ is $\epsilon-adherent$ to $\left( a_n \right) _{n=m}^\infty$ iff there exists an
    $n \ge m$ such that $a_n$ is $\epsilon-close$ to $x$. We say that $x$ is <i>continually</i> $\epsilon-adherent$ to
    $\left( a_n \right) _{n = m}^\ infty$ iff it is $\epsilon-adherent$ to $\left( a_n \right) _{n=m}^\infty $ for every
    $N \ge m.$ We say that $x$ is a limit point or adherent point of $\left( a_n \right) _{n=m}^\infty$ iff it is
    continually $\epsilon-adherent$ to $\left( a_n \right) _{n=m}^\infty$ for every $\epsilon > 0$.</p>

When I read this, there was something unsettling about it. It's related to the property of $\epsilon$-adherence for all
$\epsilon > 0$. If such a property indeed holds, isn't it continually adherent automatically? It was unsettling to know
that for all $\epsilon > 0$, there is eventually some $a_k$ which is $\epsilon$-close to $x$. But is it still not the
case that, we can find such an $a_k$ for a given N, such that $k \ge N$? In my notes I wrote,

<blockquote>
    But $\mathbb{R}$ is not countable. So isn't it the case that $\epsilon$-adherence for all $\epsilon > 0$ is
    equivalent to continual $\epsilon$-adherence?
</blockquote>

Honestly, I am not able to go back to that unsettling intuition, perhaps because it has already settled? I am not able
to
justify the intuition I had to work towards proving the above fact. But nevertheless, I did and here's a potential
proof.

Before we begin, let me at least describe the context which motivated this train of thought. I was proving the fact --
if all the elements of a sequence are non-zero and converge to a non-zero real, then the sequence is bounded away from
zero. There's a simple way to prove this,

<p class="pf">Let $(b_n)_{n=m}^\infty$ be a sequence of real numbers such that $b_n \ne 0$, and let $y$ be the non-zero
    real number it converges to. Then
    there exists an $N \ge m$ such that for all $n \ge N$, $|a_n - y| \le |y|/2$. Thus, for all $n \ge N$, we have
    $|y| \le |a_n - y| + |a_n|$ and thus $|a_n| \ge |y|/2 > 0$. Hence, the sequence is bounded away from zero.</p>

But this is not how I approached at the beginning. I tried to assume on the contrary that the sequence is not bounded
away from zero, i.e.

<p class="pf">for every $\epsilon > 0$ (which fails to bound the sequence from below), there is an $n \ge 1$ such that
    $|b_n| < \epsilon$. We know that there is an $N \ge 1$ s.t. $|b_n - y| < \epsilon$ for all $n \ge N$. There is
        already a problem recipe in sight. There is always a $b_n$ arbitrarily close to $0$! But then, $b_n$ is
        eventually, arbitrarily close to $y$. So is it unreasonable to expect that this means $y=0$? Or probing directly
        the roots, is it unreasonable to ask whether it is even possible to have such a $|b_n| < \epsilon$ for arbitrary
        $\epsilon$ such that, it's always the case that $n < N$? Doesn't this unsettlingly question the infiniteness of
        reals (since $\epsilon \in \mathbb{R}$)? (And perhaps the countability?) If we indeed find a $k \ge N$ for all
        $N \ge 1$ s.t. $|b_k| < \epsilon$, then we immediately see that $|y| \le 2\epsilon$. We could have started with
        $\epsilon=|y|/2$ and we see the contradiction. </p>

We now give the proof for the anticipated claim.
<p class="claim">$\epsilon$-adherence for all $\epsilon > 0 \iff$ continually $\epsilon$-adherence for all
$\epsilon > 0$. Adherence for all $\epsilon$ is the crucial part of this result. Speaking for each
$\epsilon$, continual adherence is of course stronger.</p>
The proof precisely speaks rigorously about the intuition I had, and it is as follows.
<p class="pf">There is an $\epsilon > 0$ such that for some $N \ge 1$, $|a_n - x| > \epsilon$ for all $n \ge N$. That
is we assume on the contrary, $x$ is not continually $\epsilon$-adherent to $(a_n)_1^\infty$. Let $\epsilon' = min(|a_1 - x|, \ldots, |a_{N-1} - x|)$. Since $x$ is $\epsilon$ adherent, we have $|a_j - x| \le \epsilon$ for some $j \le N -1$. That is, $\epsilon' \le |a_j - x| \le \epsilon$. So, $\epsilon' \le \epsilon$. Then $\frac{\epsilon'}{M} < \epsilon$ for all positive integers $M > 1$. So, we have, $|a_i - x| \ge \epsilon' > \frac{\epsilon'}{M} \forall i = 1, \ldots, N-1 $ and $  |a_i - x| > \epsilon > \frac{\epsilon'}{M} \forall i \ge N.$ That means, $x$ is not $\frac{\epsilon'}{M}$-adherent to $(a_n)_1^\infty$, and we arrive at a contradiction.</p>

What we saw is, $x$ must be continually adherent in order to be arbitrarily adherent. Otherwise, we will find a huge collection of reals for which it is not adherent. Basically  such a finite restriction ($N$) cannot accommodate to a very dense and arbitrary adherence! That's the intuition we had, and we made it rigorous. The finiteness played a role in obtaining the contradiction by giving us the $\epsilon'$ (if it was infinite, then we wouldn't know if it's bounded)  which we used to bound the sequence from below and prevent the arbitrary-adherence! 