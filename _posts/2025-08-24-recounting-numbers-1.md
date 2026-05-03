---
title: Naturals
layout: default
tags: Analysis
categories: Farm
excerpt: "Math is not about numbers, or heavy calculations. It's essentially a way to think."
---


<span class="interest">Hyping Peano axioms</span>



> Math is not about numbers, or heavy calculations. It's essentially a way to think.

 With time we realize everything is an abstraction. A careful and dedicated work of decades bring humans to a place where
they can understand and communicate that abstraction. The idea of *abstraction (/əbˈstrakʃn/
)* is an abstraction. The *idea (/ʌɪˈdɪə/
)* is an abstraction. We took years to learn these, but now we just breathe them every moment. The effort of mathematics
is to study and develop one such technical class of abstract objects. The basic example of abstract thought that belongs
to this mathematical class of objects is *the number system*. *Counting* is an abstraction that we learn from
kindergarten. When one embarks on a journey to learn college level mathematics, one of the first exercises is to study
this abstraction formally or rigorously. Only when one understands this rigorously can one proceed to ask more
interesting questions about the
behavior of these numbers, and other objects that are built on top of these numbers -- or of course to very *build* new
technical objects useful for the society.

The number systems are born out of counting needs, keeping track of iterations, things we owe each other, and everything
that involves multiple *objects*. This is an article to provide an elementary exposure to what mathematics is about
while also communicating the formal development of number systems as an interesting piece of math in its own right. I
would like to thank Terence Tao for his beautiful set of books on Analysis. This article is an expression followed by
the consumption of the art that this theory is. Start your trackers, as we now explore the trail from *Naturals* to the
*Reals*.


<figure>
    <img style="width:80%" src="\src\images\Bundle\number-terrain.png" alt="">
    <figcaption>A glimpse of the terrain. Naturals & Integers, Rationals and Reals from left to right.</figcaption>
</figure>



In what follows, we will regard many things to be true, i.e. directly to be true, unshakably true - but what we essentially do is use our intuition to *establish* them as truths. We will call them *axioms.* One needs to establish certain *axioms* in order to have working moving parts for developing the subject. It's like the batter for those Dosas and Idlis. Ingredient and fermentation both are the key.

## Campsite A: *Naturals* | Trail: *Peano*

The two fundamental aspects of natural numbers are the $0$ (zero) and the *increment operation* ($++$). We all have the counting intuition at the fore front of our minds. Let's distill the *structural aspects* of these numbers which we use for counting.

The journey of science is usually a long and painstaking process. Countless iterations of trial and error make us realize the structure of a particular topic under study. There was a time in the ages ago, where philosophers were on the verge of becoming *Scientists* -- deep rigorous thought about things. May be the *zero* has the story close to this transition. Since Analysis is the first subject one encounters in their math education, it is worth noting these historical aspects of science.

<figure>
    <img style="width:70%" src="\src\images\Bundle\recounting-numbers\sanskrit.png" alt="">
    <figcaption></figcaption>
</figure>

Numbers are ancient piece of tools. Indeed humans have realized counting a long time ago, and the first usage of notations for numbers (as opposed to finger counting or tally marks) is believed to have emerged around 5000 years ago. Countless philosophers might have indulged in understanding these numbers for both curiosity and development. The starting point of modern mathematics is however the number *śūnya* (*zero* in English) believed to be first introduced by the 5th century mathematician and astronomer **Aryabhatta**, and then later in 7th century the arithmetic using this number was developed by **Bramhaguptha**. The word *śūnya* means emptiness or nothingness in sanskrit. The idea of nothingness was already quiet prevalent in the Indian philosophy, and it might have inspired Aryabhatta to adopt such a concept in the number system. As we now note very naturally, the uses of such an abstract entity are remarkable.  Through this article, the role of zero will be more concretely clear in the context of *number systems*. Other fundamental roles of zero for example in abstract algebra, will be discussed in the end. 

<p style="">Peano Axioms (1889) $\dashleftarrow $Zero (c. 1598) $\overset{English}{\leftarrow}$ zephyrum (c. 1200) $\overset{Italian}{\leftarrow}$ ṣifr ( < c. 7th century CE) $\overset{Arabic}{\leftarrow}$ śūnya (c. 5th Centure CE)</p>

Our first goal is to define what Natural numbers are rigorously. We establish some intuitive axioms and then realize the structure of naturals emerging out of them *naturally* ;). These rules are called Peano axioms in the mathematics literature.

<div class="axiom"> It all starts somewhere. Zero $(0)$, is a natural number. </div>

There is nothing special about this entity in itself. We are just defining some abstract entity from which we wish to *generate* a number system. Indeed we can start from something else, we could draw it differently or call it differently, but the *structure* of naturals is still dictated by some rules which we discuss below. So let's start somewhere, let's call it zero - the nothingness. According to the above rule, zero is the only natural number we have so far.
<figure>
    <img style="width:100%" src="\src\images\Bundle\recounting-numbers\a1.jpg" alt="">
    <figcaption></figcaption>
</figure>


<div class="axiom" > If you have a number, go ahead - *increment* it, and you have another. If $n$ is a natural number, so is $n++$. </div>

This is the most basic aspect of counting. If we have a number $n$, we also have another, defined abstractly as $n++$. It doesn't matter what we call this new number or how we draw it, but there is some entity associated with the already present number. 
<figure>
    <img style="width:100%" src="\src\images\Bundle\recounting-numbers\a2.jpg" alt="">
    <figcaption></figcaption>
</figure>


This makes zero immediately proliferate into all the natural numbers we *know* of. If one is living on Earth, it's not just the zero that's named and also drawn -- it's the increments of zero too. For example we define $1 \equiv 0++$, $2 \equiv 1++ \equiv (0++)++$, ... and we thus have a plethora of human design and naming - $1,2,3,\ldots,7,\ldots, 275,\ldots, 98262531, \ldots...$ all are natural numbers.

<div class="axiom"> No respawn allowed! If $n$ is a natural number, $n++$ is never $0$.</div>

  Is this new entity which is associated to an already present number allowed to be zero? No! It is anything other than zero. Philosophically, let's put it this way -- *it's not nothing, because it is coming from **something**, even if that something is nothing.* It speaks about the nature of increment operation. 

  For example what this says in our Earthling design is that, $1 = 0++$ is a natural number and $1++ \neq 0$ i.e $2 \neq 0$!. 

<figure>
    <img style="width:100%" src="\src\images\Bundle\recounting-numbers\a3.jpg" alt="">
    <figcaption></figcaption>
</figure>

<div class="axiom"> No looping, always go ahead. If $n \neq m$ then $n++ \neq m++$.</div>

Talking about the nature of increment operation further, two different numbers cannot have same entity associated to them via increment operation. This is a very crucial aspect of naturals. For example, $1 \equiv 0++ \neq 0$ from the last rule, so $1 \neq 0.$ In particular this means $2 \neq 1$, because $2 \equiv 1++$, and $1 \equiv 0++$ but $1 \neq 0 \implies 1++ \neq 0++$. 

Hence, this rule is important to yield the structural information that, the Earthling numbers 3,0,2,9,1,... are all distinct!

<figure>
    <img style="width:100%" src="\src\images\Bundle\recounting-numbers\a4.jpg" alt="">
    <figcaption></figcaption>
</figure>

So, that's it, these are the only elements we use to count and these must be all the natural numbers. And all these numbers behave well with increment operation -- no respwan, no looping. How do we put it more rigorously that, there no more rogue elements in the collection of natural numbers? 

To our Earthling design of numbers, no rule is stopping a rogue element like $@$ to be a natural number. If $@$ is a natural number, then so is $@++$, and thus begins another series of numbers alien to $3,0,1,2...$ included in our natural numbers i.e. $3,1,@,@++,0,@+++,...$. 

To avoid these new rogue elements, we define a rule which essentially tells us that, the only numbers which are naturals are the ones which are obtained by incrementing $0$! 

<div class="axiom"> No rogue objects viz. Principle of mathematical induction. Let $P(n)$ be any property pertaining to a natural number $n$. Suppose that $P(0)$ is true, and suppose that whenever $P(n)$ is true, $P(n++)$ is also true. Then, $P(n)$ is true for every natural number $n$.</div>

Take the property $P(n)$ as *n is a natural number*. Then, clearly any rogue element $@$ can't be a natural number, because $P(@)$ is true can't be implied from the collection of naturals $3,0,1,2,9,@,7,@++,\dots$ since $@ \neq n++$ where $n$ is our Earthling number design. So, yes. this powerful principle is indeed encoded in our Earthling design of natural numbers ${0,1,2,3...}$.

If one choses to start with $@$ as the 'zero' of their numbers, then the above principle says that, the numbers are then the form of -- $$@, @++,(@++)++, ((@++)++)++, \ldots, ((\cdots(@++)\cdots )++)++, \ldots$$.

<figure>
    <img style="width:100%" src="\src\images\Bundle\recounting-numbers\a5.jpg" alt="">
    <figcaption></figcaption>
</figure>

Thus all the above abstraction collapses indeed to what we intuitively know from our early education -- the natural numbers are: 

$\{0, 0++, 0++++, \ldots, 0++\ldots++,\ldots\}$ i.e. $\{0,1,2.3,\ldots, 785,\ldots\}$

The beauty of the above abstract axioms is that, using just these, all the properties of naturals follow! In particular the above structure of natural numbers yields the following appealing architecture: 

Symmetries or architecture of counting structure:

<div class="proposition not"> Addition is associative and commutative.</div>

Since there is no wrapping-around involved in our set of natural number, it is possible to define an object recursively, indexed by the very naturals. For example it is possible to assign a unique natural number to $a_n$, using functions $f_n:\mathbb{N} \to \mathbb{N}$ via first setting $a_0 = c$ and then *recursively* defining $a_{n++} = f_n(a_n).$ THe no-wrapping nature precisely prohibits from conflict of defining a particular $a_k$ multiple times.

Using a function as simple as an increment operation, we can define addition of two natural numbers! We define, $0 + m := m$ and then let $(n++) + m = (n+m)++$, supposing we have inductively defined $n + m$, just like $a_n$ was used in $f_n(a_n)$. 
Note that this is example, *addition* is a very uniform kind of recursive definition. Irrespective of the number to which you are adding $m$, the function is the same, a simple increment operation -- namely incrementing the previous added value. This translates to considering a single function $f:\mathbb{N} \to \mathbb{N}$ as opposed to having a family of functions $f_n:\mathbb{N} \to \mathbb{N}$ dictating the recursion.

In this sense, addition is the most basic iterative/recursive operation on naturals. Here are some properties which flow from the Peano axioms -- induction being the key to show them all. Let $a,b,c,n,m$ be arbitrary natural numbers.
- $n + 0 = n $.
- $n + (m++) = (n+m)++ $.
- $a + b = b + a $.
- $(a + b) + c = a + (b + c) $.
- If $a + b = a + c$, then $b = c$.
  
<p></p>


<div class="proposition not">There exists an order between natural numbers.</div>

A natural number is called *positive* if and only if it is not equal to $0$. Given any two natural numbers $a,b$ we necessarily have either $a \le b$ or $a > b$ in the sense that $a \le b$ means $a = b + n$ for some positive $n$. Note that any positive number n can be written uniquely as $k++$. 

<div class="proposition not">Multiplication is associative and commutative.</div>

Multiplication of natural numbers is another *uniform* recursive definition like addition, and it's built on top of the addition. The defining function for the recursion is basically addition here rather than increment operation. Because as we know intuitively, multiplication is exactly that, repeated addition. Define, $0\times m := 0$, and $(n++) \times m = (n\times m) + m$. 

This again satisfies basic properties like $a\times b = b\times a$ and $a\times (b\times c) = (a\times b)\times c.$ And then together with addition, there is a calming distribution -- $a(b+c) = ab + ac = (b+c)a = ba + ca.$ 

<div class="proposition not">Induction forms.</div>
Due to the existence of an order in the natural numbers (which is a crucial content of induction) there are other forms of principles of induction. For example, one can start from a base case $n_0$ instead of $0$ and show that a property is true for all $n \ge n_0$. And then there is *backward induction* and *strong induction* too. 

And finally, the lemma which initiates the rich *results* about these numbers -- a branch towards number theory. 
<div class="proposition not">Euclid's Division Lemma.</div>
Let $n$ be a natural number, and let $q$ be a positive number. Then there exists natural numbers $m, r$ such that $0 \le r < q$ and $n = mq + r.$ This is again proved using induction.

So, indeed any property which is to be checked to be held true for any general natural number can be attempted to be proven using induction. Because there are no rogue elements in naturals, and they have a clean order:

$$\mathbb{N} = \set{0,1,2,3,\ldots}, 0 < 1 < 2 < 3 < \cdots$$






-----------------------------------


PS: Some topics to include in a revised version of this article include role of zero in abstract algebra, examples of some abstract questions... The main goal to write such an article on recounting numbers was to cover this abstract way of defining numbers and the process of proving basic facts about these numbers in that setting. The main goal of such an abstraction is to allow further thought, ask other questions about naturals. That level of abstract questioning is something I want to cover in the revised version. For example, asking if there is natural number grater than all other natural numbers (obviously not, because if $k$ is such a number, there immediately exists $k++$ which is $> k$) is an important and equally abstract question in our setting.

I have been working on this article (including the integers and real numbers which are in line for the next couple of weeks) since a month or so and this is a huge commitment amidst my general core study sessions of math. This is definitely not something that can be done in a week. But I want to build this momentum and be okay with some imperfection, because the extent to which this article can be made perfect demands a larger commitment - in which I don't want to dive in without a healthy reward. This is an ongoing experiment/pact of weekly articles on math and physics. This is Week 1 - The Abstraction of Natural Numbers.  

 Temporarily, this is the only place I shall post. Substack doesn't support in-line math, so it's out :/. So, yeah I need to figure the socials yet. The idea is to beautify this personal webpage and build a sci-art portfolio with all the articles and other experiences, after 3-4 months. 

--------------------

