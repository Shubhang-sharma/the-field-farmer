---
title: Rationals
layout: default
tags: Analysis
categories: Farm
excerpt: "Last time we constructed integers basically as an extension to Natural numbers although we proceeded abstractly using an auxillary operation between a pair of naturals. We realised it as the familiar subtraction towards the end. The same theme will be continued further."
---

<span class="interest">Hyping pairs of Integers, denseness and a linear order on $\mathbb{Q}$.</span>

* TOC 
{:toc}


Last time we constructed integers basically as an extension to Natural numbers although we proceeded abstractly using an
auxillary operation between a pair of naturals. We realised it as the familiar subtraction towards the end. The same
theme will be continued further.


## Rationals
Rationals occur as *fractions of integers*. The need is clear. People did want to divide things into parts. 5 parts of
3, 2 parts of 1, 3 parts of 10 e.t.c We take the same strategy as in case of integers, by defining rationals abstractly
as a pair of integers *modulo* an equivalence condition i.e. viewed through a lens where some pairs of integers appear
to be
same. Namely, 2 parts of four is basically  the same as 1 part of 2.

<div class="axiom">A rational number is an expression of the form $a//b$, where $a$ and $b$ are integers and $b$ is
  non-zero; $a//0$ is not considered to be a rational number. Two rational numbers are considered to be equal, $a//b =
  c//d,$ if and only if $ad = bc$. The set of all rational numbers is denoted $\mathbb{Q}.$
</div>

<figure>
  <video autoplay muted loop style="width:100%; display:block; margin: 0 auto;">
    <source src="\src\vector\rationals-v0.0.mp4" type="video/mp4">
  </video>
  <figcaption>It should be $\mathbb{Z}\times \mathbb{Z}^\times$ instead of $\mathbb{N}\times \mathbb{N}^*$, where
    $\mathbb{Z}^\times = \mathbb{Z} \setminus \set{0}.$</figcaption>
</figure>

## Architecture of Rationals

We define the addition, multiplication and negation operations on rationals using our framework of rationals as pairs of
integers. The symmetries/properties follow immediately like in integers. The additional structure in rationals
(namely, the reciprocal) helps us define the division operation. There is an order on rationals again. But as we will
see, the rationals behave quite widly compared to naturals and integers, they are *dense*. Spoiler alert - with a
rational between every other rational (that is dense), it isharder to write $\mathbb{Q}$ explicitly showing it's
*linear* order unlike Naturals and Integers where it is quite explicit! This problem ultimately connects to the
*countability* nature of $\mathbb{N}, \mathbb{Z}, \mathbb{Q}$. We will have a more detailed discussion on these aspects
soon! If not, do look forward to an article on - *A linear order on the (countable) Rationals $\mathbb{Q}$*, because
Terry Tao calls it an actually challenging problem and indeed this connects our development of number systems and
it is quite natural to wonder how can one write $\mathbb{Q}$ linearly!

Also, the above animations indicates the denseness of rationals. Perhaps with a linear order, $\mathbb{Q}$ looks just
like $\mathbb{Z}$ in the theme of our animations in this Recounting series.

Let's now start with our standard study of architecture.

<div class="proposition">
  Addition, Multiplication, negation on rationals.
</div>

<div class="proof">
  If $a//b$ and $c//d$ are rational numbers, we define their sum
  $$ \left( a//b \right) + \left( c//d \right) := \left( ad + bc \right) //bd$$
  their product
  $$ \left( a//b \right) \times \left( c//d \right) := \left( ac \right) //\left( bd \right) $$
  and the negation
  $$ -\left( a//b \right) := \left( -a \right)//b. $$
</div>

Given the equivalence condition on the pair of integers, the above definition is subject to a well-definedness check. If
two different representations of the same rationals are chosen, whether the the results of addition, multiplication and
negation are still equivalent. Indeed it turns out that’s the case and can be easily checked.

<div class="proposition">
  Integers are part of Rationals.
</div>
<div class="proof">
  $a//1$ behaves in the same way as the Integer $a$:
  $$ \begin{align*}
  (a//1) + (b//1) &= (a+b)//1 //
  (a//1) \times (b//1) &= (ab//1) //
  -(a//1) &= (-a)//1.
  .\end{align*}$$
  Further, $a//1 = b//1$ if and only if $a = b$. This allows us to identify the integer $a$ with the rational $a//1$! In
  this sense, all integers can be considered rational, $a$. Thus, the same is true for naturals.
</div>

Unlike integers which are a precise extension to Naturals, rationals are not an extension to integers in any linear
sense. Instead, they are like *proliferations* of the integers. As usual to comment on any such extension or here
proliferation, we must establish an order. We will thus continue this discuss after doing so.

We now move towards probing the algebra of Rationals, which turns out to be a little more than integers.

<div class="proposition">
  <b> The laws of algebra for Rationals.</b> Define the operation <em>reciprocal</em> of a non-zero rational $x = a//b$
  (i.e. $a, b\neq 0$) to be the rational $x^{-1}:= b//a$. One can check that this is indeed consistent with the
  degenerate representations of rationals as integer pairs. Withis the following laws hold.
  $$\begin{align}
  x + y &= y + x \\
  (x + y) + z &= x + (y + z) \\
  x + 0 &= 0 + x = x \\
  x + (\setminus x) &= (\setminus x) + x = 0 \\
  xy &= yx \\
  (xy)z &= x(yz) \\
  x1 &= 1x = x \\
  x(y + z) &= xy + xz \\
  (y + z)x &= yx + zx.
  \end{align}$$
  If $x$ is non-zero, we have the additional law,
  $$ xx^{-1}= x^{-1}x = 1. $$

  Further, we define the new operation <em>quotient</em> $\frac{x}{y}$ of two rational numbers $x$ and $y$ ($y \neq 0$)
  by,

  $$ \frac{x}{y} := x \times y^{-1}. $$
</div>

<div class="proof">
  It is now trivial to see that, $\frac{a}{b} = a//b!$ We now forgo the auxilliary $//$ for the customary
  division/quotient symbol "$/$". With the above mostly familiar algebra, subtraction on rationals can be defined in a
  similar way to that of integers.
</div>

This makes rational into what is called a *field* over a ring which the integers were. Note that Integers and Rationals
also form a group under addition, (and for rationals even multioplication when non-zero numbers are only considered).
Refer to the article on <em>Grouping symmetries - An Introduction to Abstract Algebra</em> for discussion on groups!
Indeed, this dual operative structure (or dual group structure for rationals) together with the above algebraic laws, is
the content of the algebraic objects - Rings and Fields. Studying just these objects on their own takes up significant
chunk of one's math undergraduate/graduate education.

<div class="proposition">
  The same <b>order</b> rules from Naturals and Integers follows for Rationals. And there is again a <b>trichotomy</b>
  of Rationals between $0$, <em>positive rational</em>, and <em>negative rational</em>. Where, by positive rational we
  mean, $\frac{a}{b}$ with $a,b > 0 \left( \mathrm{in}~ \mathbb{Z} \right).$ And by negative we mean a rational of form
  $- \frac{a}{b} = \frac{-a}{b}$ with $\frac{a}{b}$ being a positive rational.
</div>
<div class="proof">
  For completeness, here are the basic properties of order on rationals, which were also true for Naturals and Integers.

  <ol style="margin-left: 20px;">
    <li> <em style = "font-weight:bold;">Order trichotomy</em>: Exactly one of the three statements $x =
      y, x < y$ or $x> y$ is true.</li>
    <li> <em style = "font-weight:bold;">Order is anti-symmetric</em>: One has $ x < y$ if and only if $y> x$.</li>
    <li> <em style = "font-weight:bold;">Order is transitive</em>: If $x < y$ and $y < z$, then $x < z$.</li>
    <li> <em style = "font-weight:bold;">Addition preserves order</em>: If $x < y$, then $x + z < y + z$.</li>
    <li> <em style = "font-weight:bold;">Positive multiplication preserves order</em>: If $x < y$ and $z$ is positive, then $xz < yz$.</li>
  </ol>

</div>

We will now embark on mathematics beyond just counting, towards <em>measuring</em>. For example, we might want to measure how close two rational numbers are. We can do the same for naturals or integers, and let's consider that to be done once we do it for rationals, because we have already seen integers, and naturals are part of rationals. Through this, we officially begin our pursuits towards  asking deeper questions about the existing strucutres and create new structures along the way. We enter some territories which are unfamiliar from what we have done so far. This is the beginning of the real analysis in some sense. So far we have defined the objects with which we want to anlyse things, we now introduce abstract notions on these numbers which will help us reveal more secrets! Of course, the Real ($\mathbb{R}$) stuff is yet to come - but the most fundamental ideas of real numbers come from the Rationals. With that foray, let's begin.  

<div class="proposition">
  Defining the <em>absolute value</em> of a rational to be its positive (counter) part (i.e.  $ \mid x \mid = -x$ if $x < 0$ and $= x$ if $x \ge 0$), we can give the <em>notion of distance</em> between two rationals $x,y$ to be $d(x,y) : =  \mid  x-y\mid$. For example, $d\left( 1,7 \right) = 6. $   
</div>
<div class="proof">
    We can immediately prove some fundamental properties of absolute values and distance. This is the first time one encounters these facts formally! And note them here only for completeness.  Let $x,y,z$ be arbitrary rational numbers.

<br>

<ol style="margin-left:20px;">
        <li>
            <strong>(Non-degeneracy of absolute value)</strong> We have $|x| \ge 0$. Also, $|x| = 0$ if and only if $x$ is 0.
        </li>
        <li>
            <strong>(Triangle inequality for absolute value)</strong> We have $|x + y| \le |x| + |y|$.
        </li>
        <li>
            We have the inequalities $-y \le x \le y$ if and only if $y \ge |x|$. In particular, we have $-|x| \le x \le |x|$.
        </li>
        <li>
            <strong>(Multiplicativity of absolute value)</strong> We have $|xy| = |x| |y|$. In particular, $|-x| = |x|$.
        </li>
        <li>
            <strong>(Non-degeneracy of distance)</strong> We have $d(x,y) \ge 0$. Also, $d(x,y) = 0$ if and only if $x = y$.
        </li>
        <li>
            <strong>(Symmetry of distance)</strong> $d(x,y) = d(y,x)$
        </li>
        <li>
            <strong>(Triangle inequality for distance)</strong> $d(x,z) \le d(x,y) + d(y,z)$.
        </li>
    </ol>
<p class="author"><em>Terence Tao</em>, Analysis I.</p>

</div>

These properties are the beignning tools for studying the abstract *metric spaces* where any set (regardless of them being *numbers*) has a notion of distance in the above sense! This allows us to define a very convenient notion of <em>closeness</em>, which Terry uses it as a <em>scaffolding</em> for the further theory of Real numbers.

<div class="axiom">
    Let $\epsilon>0$ be a rational number, and let $x,y$ be rational numbers. We say that $y$ is $\epsilon$-close to $x$ iff we have $d(x,y) \le \epsilon$. 
</div>

This is a handy statement to define, mostly for brevity. And in the language of this brevity, it's nice to note some intuitive properties like the following. (Again, these are here for completeness, for they hold some key results -- but I won't bother talking about them.)
<div class="proposition not"> Properties of closeness.
<ol style="margin-left: 20px;">
        <li>
            If $x = y$, then $x$ is $\epsilon$-close to $y$ for every $\epsilon > 0$. Conversely, if $x$ is $\epsilon$-close to $y$ for every $\epsilon > 0$, then we have $x = y$.
        </li>
        <li>
            Let $\epsilon > 0$. If $x$ is $\epsilon$-close to $y$, then $y$ is $\epsilon$-close to $x$.
        </li>
        <li>
            Let $\epsilon, \delta > 0$. If $x$ is $\epsilon$-close to $y$, and $y$ is $\delta$-close to $z$, then $x$ and $z$ are $(\epsilon + \delta)$-close.
        </li>
        <li>
            Let $\epsilon, \delta > 0$. If $x$ and $y$ are $\epsilon$-close, and $z$ and $w$ are $\delta$-close, then $x+z$ and $y+w$ are $(\epsilon + \delta)$-close, and $x-z$ and $y-w$ are also $(\epsilon + \delta)$-close.
        </li>
        <li>
            Let $\epsilon > 0$. If $x$ and $y$ are $\epsilon$-close, they are also $\epsilon'$-close for every $\epsilon' > \epsilon$.
        </li>
        <li>
            Let $\epsilon > 0$. If $y$ and $z$ are both $\epsilon$-close to $x$, and $w$ is between $y$ and $z$ (i.e., $y \le w \le z$ or $z \le w \le y$), then $w$ is also $\epsilon$-close to $x$.
        </li>
        <li>
            Let $\epsilon > 0$. If $x$ and $y$ are $\epsilon$-close, and $z$ is non-zero, then $xz$ and $yz$ are $\epsilon|z|$-close.
        </li>
        <li>
            Let $\epsilon, \delta > 0$. If $x$ and $y$ are $\epsilon$-close, and $z$ and $w$ are $\delta$-close, then $xz$ and $yw$ are $(\epsilon|z| + \delta|x| + \epsilon\delta)$-close.
        </li>
    </ol>
    
</div>

At the edge of rationals is the exponentiation operation. It gives us a way to reach the <em>boundaries</em> of rationals. To probe what numbers it <em>doesn't contain.</em> For now, we don't really know any numbers apart from rationals, but the last statement basically manifests as - "no number in rational behaving in a certain way under a certain exponentiation". 

(We are familiar with this ofcourse. I'm refering to the rational whose squared is $2$, which basically doesn't exist. Anyway, the way we lead up to this is to define exponentiation by a natural number, negative number and then basically integers. What we don't however is define exponentiation by a rational number. Instead, we give an example which intuitively forbids us from defining a rational exponent. And that's where the story of Reals ($\mathbb{R}$) begins, for which a loads of interesting structures need to be developed, built on top of rationals, which will be the topic of the next part in this series.)

<div class="proposition not">
    <em>Let the rationals be exponentiated by the integers.</em>
</div>

The rules of exponentiating are quite familiar, be it the very definition (which we can, using induction) or the behavior w.r.t order between two rationals. 

Now, let's come back to the wilderness of Rationals. They are dense!
<div class="proposition">
  Rationals are dense. Between any two rationals, we can find another rational.
</div>
<div class="proof">
   If $x,y$ are rationals, and $x < y$, then there is $z = \left( x + y \right) /2$ such that $x < z < y.$ This is true because, $x /2 < y /2  \implies x /2 + y /2 < y /2 + y /2 \implies z < y$! Similarly the other ineqaulity. This simple recipe gives atleast one another rational between $x$ and $z$ - namely,  $(x+z) /2$. We thus have a proliferation of rationals between any two rationals, something which I tried to capture in the animation.    
</div> 

This is why it's hard to write rationals linearly! Once you write two rationals in an order, there is another which you are missing between them - not just another but an <em>infinitely</em> many of them. But the situation is not worse, $\mathbb{Q}$ is countable! 
The article on linear order on $\mathbb{Q}$ should complement this section very well. Do check out :). 
<br>

It's also good to note the following result!

<div class="proposition">
    Let $x$ be a rational number. Then there exists an integer $n$ such that $n \le x < n+1.$ This is of course the <em>greatest integer part of $x$! </em>
</div>

And now to the most interesting aspect of rationals. The cracks in them.

## The Cracks in Rationals

<div class="proposition">
    There is no rational number $x \in \mathbb{Q}$ such that $x^2 \equiv  x \cdot x = 2$.  
</div>
<div class="proof">
    Let's assume there is a positive rational (without loss of generality) $\frac{p}{q}.$ Then, $p^2 = 2 q^2.$ $p$ must necessarily be even (i.e. $p = 2k, k \in \mathbb{N}\setminus \left\{0\right\}$) for this to happen! So this means, $q^2 = 2k^2!$ So, we have another rational $\frac{p'}{q'} := \frac{q}{k}$ which squares to 2! Note that $q < p.$ We thus have an infinite descent of positive integers (positive naturals), $p, p', \ldots$, which is a contradiction! 
</div>

The story is not that simple however.

<div class="proposition">
    There is a non-negative rational arbitrarily (rationally) close to being squared to 2! That is, for every rational $\epsilon > 0,$ there exists a non-negative rational number $x$ such that $x^2 < 2 < \left( x+\epsilon \right) ^2.$   
</div>
<div class="proof">
 We proceed by contradiction again. Let $\epsilon>0$ be a rational such that there is no such non-negative rational. Then for any $x$ non-negative and $x^2 <2,$ we must have $\left( x+ \epsilon \right)^2 < 2.$ In particular since $0^2 <2$, we must have $\epsilon^2 < 2$. This further means $\left( 2\epsilon \right) ^2 <2, \left( 3\epsilon \right) ^2 < 2$ and any $\left( n\epsilon \right) ^2<2$ (through induction) for any $n \in \mathbb{N}$. But we know that, there is an integer $n > \frac{2}{\epsilon}$! Meaning $n\epsilon > 2$. Thus, $(n\epsilon)^2 > 2!$ A clear contradiction to the above hypothesis.    
</div>

So rationals are wild and good, yet they have some basic cracks in them. Of course, integers and naturals have more gaps than rationals, there is no notion of reciprocal or quotient in them. But the story of rationals takes us very far --  although there is no $x^2 = 2$, there are rationals arbitrarilty close to this behavior!

Our efforts in the next article would be to probe these gaps. How can we understand all the gaps? Our attempts would be fill these gaps. We will formalise this notion of arbitrary closenss to some particular behavior and then complete the number system by defining new numbers - <em>completing</em> the said behavior! 

This will initiate the $\mathbb{R}$-analysis, and a formal entry to the subject of sequences, series and functions. 

However this also raises more questions (atleast personally). Other ways to complete rationals? Can we also complete Reals by finding some behavior it lacks? One can concoct new scenarios where the number systems might fail indeed (probably? It would be a rather powerful mathematical object which would be complete* in every* sense...). For example Reals fail the rational exponentiation of negative numbers too. And there is a birth of Complex numbers. But yet, the Rational to Real transition is more fundamental than this. There are numbers which are arbitrarily close to the said behavior and yet do not <em>reach</em> it. 

In mathematics, by completetion we mean to correct this behavior. Asking whether a sequence of seemingly <em>converging</em> numbers, does indeed converge to a number within the system? Not just a number, completetion is also defined in the more abstract <em>metric spaces</em> where there is a notion of distance, with the laws we indicated earlier axiomatized.


That was a small foray into some questions one can ask. I will perhaps sit through these questions and write about it in the post script sometime soon. It's worth having a narrative about these aspects. One narrative I do believe in is -- although mathematics is powerful enough to be concocting its own game and players, it's still guided by the human needs. One such important nurturer of mathematics is physics! So many abstract concepts are motivated by the nature of physics, to code them precisely and write them in a langauge which can be extended, and solved to predict and understand the nature. One can observe that mathematics does take this direction of nature even in the most abstract of places. So sometimes steering away from this narrative, and finding deficiencies in a theory could be just a personal/mad indulgence :). I say that to be aware and concious to not fall into the spiral of meta-mathematics. So I will sit with some questions and see if it's legit to wonder about them -- exploring through the available literature and if  they can be made precise?
 
I must say however, in the late 19th and early 20th century, mathematics and physics have been diverging a lot globally. Mathematicians were able to go so deep with just the abstraction and asking their own questionsabout the strucutre and the working of the theory. So yes, mathematics is mostly being mad and personally indulgent in the structure of theories. That's how one ends up developing the field further, regardless of its potential applications elsewhere. 

(After that brief divergence since the 20th century, Mathematics and physics are now closer to each other than ever!)

It's good however, to ground ourselves once in a while to the roots :).

So I guess, this field farm is also about that, <em>grounding oneself</em> amidst the depths of math and physics. 


-----------

PS-1: It's hard being vulnerable about the questions I want to ask and sit through. I want to make them precise and yet human. I feel a little uncomfortable putting unprocessed thoughts on rationals-to-reals here. But I guess that's okay! I am taking my journey public and learning in public. I will come back with new thoughts next week :D.  