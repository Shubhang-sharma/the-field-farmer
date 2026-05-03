---
title: Gauge Fields and Geometry
layout: default
tags: Geometry
categories: 
---

# Definitions

Created: June 7, 2024 4:48 PM
Tags: Extracts
Status: In progress

# Contents

---

# Part I Electromagnetism

---

## Chapter 1 - (the two pairs) Maxwell Equations

---

$$
\nabla.B = 0 \\
\nabla\times E + \frac{\partial B} {\partial t} = 0 \\

$$

$$
\nabla.E = \rho \\
\nabla\times B - \frac{\partial E}{\partial t} = \bar{j}
$$

$$
dF = 0 \\

$$

$$
*d*F =0
$$

## Chapter 2 - Manifolds

---

1. Topological space is a set X together with a family of subsets of X, called the **open sets**, required to satisfy conditions:
    - The empty set and X itself are open,
    - If $U,V \subseteq X$ are open, so is $U\cap V$,
    - If the sets $U_\alpha \subseteq X$ are open, so is the union $\bigcup U_\alpha$.
2. An open set contain a point $x \in X$ is called a **neighborhood** of x.
3. The complement of an open set is called **closed**.
4. A function $f:X \rightarrow Y$ between topological spaces is defined to be **continuous** if, given any open set $U \subseteq Y$, the inverse image $f^{-1}U \subseteq X$ is open. 
5. A collection $U_\alpha$ of open sets **covers** a topological space X if their union is all of X.
6. Given a topological space X and an open set $U \subseteq X$, we define a **chart** to be a continuous function $\varphi:U\rightarrow\mathbb{R}^n$ with a continuous inverse viz. a *homeomorphism*.
7. An **n-dimensional manifold**  is a topological space M equipped with charts $\varphi_\alpha:U\rightarrow \mathbb{R}^n$, where $U_\alpha$ are open sets covering M, such that the **transition function** $\varphi_\alpha\circ\varphi^{-1}_\beta$ is smooth wherever it is defined. Such a collection is called **atlas**.
8. A function $f:M \rightarrow \mathbb{R}$ is **smooth** if for all $\alpha$, $f\circ\varphi_\alpha^{-1}:\mathbb{R}^n \rightarrow \mathbb{R}$ is smooth. (Well defined, since the transition functions are smooth).
9. Given a topological space X and a subset $S \subseteq X,$ define the **induced topology** on S to be the topology in which the open sets are of the form $U \cap S,$ where $U$ is open in $X.$
10.  ****Given topological spaces X and Y, we can give $X \times Y$ 
    1. the **product topology** in which a set is open if and only if it is a union of sets of the form $U \times V$, where $U$ is open in $X$ and $V$  is open in Y. 
    2. the **disjoint union topology**  in which a set is open if and only if it is the union of an open set of $X$ and an open subset of $Y$. 
11. A topological space X is said to be **compact** if for every cover of X by open sets $U_\alpha$ there is a finite collection $U_{\alpha_1}, ..., U_{\alpha_n}$ that covers X. 

## Chapter 3 - Vector Fields

---

### 3.1 Vector Fields

1. The set of smooth (real-valued) functions on a manifold $M$ is written **$C^\infty(M)$**.
2. $(C^\infty(M),+,.)$ is an **algebra (ring)** satisfying the following:
    1. $(C^\infty(M),+)$ is an abelian group:
        
        $$
        f + g = g + f \\
        f + (g+h) = (f+g) + h
        $$
        
    2. The operations $+, .$ additionally obey: Associativity, Distributivity
        
        $$
        f(gh) = (fg)h \\
        f(g+h) = fg + gh \\
        (f+g)h = fh + gh \\
        1f = f \\
        \alpha(\beta f) = (\alpha\beta)f \\
        \alpha(f+g) = \alpha f + \alpha g \\
        (\alpha + \beta)f = \alpha f + \beta f
        
        $$
        
    3. Further, $C^\infty(M)$ has an **identity element** and is also **commutative** (w.r.t $.$ operation).
        
        $$
        fg = gf
        $$
        
        $\forall f,g,h \in C^\infty(M)$ and  $\alpha,\beta \in \mathbb{R}$.
        
3. A **vector field $v$** on $M$ is defined to be a function from $C^\infty(M)$ to $C^\infty(M)$ satisfying the following:  
    1. *Linearity* over $\mathbb{R}$, 
        
        $$
        v(f+g) = v(f) + v(g) \\
        v(\alpha f) = \alpha v(f) \\
        
        $$
        
    2. and *Leibnizarity* over $C^\infty(M)$.
        
        $$
        v(fg) = v(f)g+ fv(g)
        $$
        
4. **$Vect(M)$** - the set of all vector fields is a **$C^\infty(M)$-module**, i.e. $(Vect(M),+)$ is an abelian group defined via
    
    $$
    (v+w)(f) = v(f) + w(f) \\
    
    $$
    
    and module structure is defined using the following operation, 
    
    $$
    (gv)f = gv(f).
    $$
    
    where $g \in C^\infty(M)$.
    
    And the defining properties of module structure are
    
    $$
    f(v+w) = fv +fw \\
    (f+g)v = fv+ gv \\
    (fg)v = f(gv) \\
    1v = v
    $$
    
5. Vector fields $\{\partial_\mu\}$ on $\mathbb{R}^n$ form a **basis of $Vect(R^n)$**.

### 3.2 Tangent Vectors

1. We can define 
    
    $$
    v_p : C^\infty(M) \rightarrow \mathbb{R} \\
    v_p(f) := v(f)(p)
    $$
    
    and think of **$v_p$ as a tangent vector at p**. We call $v_p$ as value of $v$ at $p$.
    
2. Define **tangent vector at $p \in M$** to be a function $C^\infty(M) \rightarrow \mathbb{R}$ satisfying [Linearity](https://www.notion.so/Definitions-5cc8ea60d1574029ac57dd9da7b3bf79?pvs=21) over $\mathbb{R}$ and [Leibnizarity](https://www.notion.so/Definitions-5cc8ea60d1574029ac57dd9da7b3bf79?pvs=21) over $C^\infty(M)$.
3. For each $p \in M$, a vector field $v \in Vect(M)$ determines a tangent vector $v_p \in T_pM$. And also every tangent vector at $p$ is of the form $v_p$ for some vector field or other. 
4. **$T_pM$** - the set of all tangent vectors at $p$ form an $\mathbb{R}$ - **vector space** where the operations are defined as follows 
    
    $$
    (v+w)(f) = v(f) + w(f) \\
    (\alpha v)(f) = \alpha v (f)
    $$
    
    $\forall v,w \in T_pM$ and $\alpha \in \mathbb{R}$. [Set of all *derivations* form a vector space]. [].
    
5. **Curve ($\gamma(t)$)** is a function from $\mathbb{R}$ or some interval of it to $M$ that is smooth, i.e. for any $f \in C^\infty(M),$ $f(\gamma(t))$ is smooth. [$\gamma : \mathbb{R} \rightarrow M$].
6. **Tangent vector to the curve at $\gamma(t)$**, call it $\gamma'(t) \in T_{\gamma(t)}M$ is defined as $\frac{d}{dt}f(\gamma(t)$, i.e $\gamma'(t)$ differentiates the functions in the direction $\gamma$ is moving in at time $t$. [Also denoted by (physically) $\frac{d\gamma}{dt}$].

### 3.3 Covariant Versus Contravariant

Let $\phi: M \rightarrow N$ be a function from one manifold to another.

$$
\phi:M \rightarrow N
$$

1.  We can pullback $f:N \rightarrow R$ from $N$ to $M$ by $\phi$ as 
    
    $$
    \phi^*f = f\circ\phi : M \rightarrow R \\
    
    $$
    
    $\phi^*f$ is called the **pullback of $f$ by** $\phi$. [Such backward behaving functions are called **Contravariant**]. [Pulling back any map by $\phi : M \rightarrow N$ is an operation $\phi^*:C^\infty(N) \rightarrow C^\infty(M)$].
    
2. We say that $\phi$ is smooth if $f \in C^\infty(N) \implies \phi^*f \in C^\infty(M)$. We will call such functions **maps.**
3. We can pushforward tangent vectors $v \in T_pM$ by $\phi$ as 
    
    $$
    \phi_*v(f) = v(\phi^*f)
    $$
    
    $\phi_*v(f)$ is called the **pushforward of $v$ by $\phi$**.
    
4. If $\gamma$  is a curve in $M$ with $\gamma'(t) \in T_{\gamma(t)}M$, the curve $\phi \circ\gamma$ is a curve with tangent vector 

$$
(\phi\circ\gamma)'(t) = \phi_*(\gamma'(t)) \in T_{\phi(p)}N.
$$

### 3.4 Flows and Lie Bracket

1. A curve $\gamma$ starting from a point $p \in M$, i.e. $\gamma(0) = p$ and $\gamma'(t) = v_{\gamma(t)}$ for a vector field $v$, is  called the **Integral curve through $p$ of the vector field $v$**.
2. A vector field $v$ is **integrable** if all the integral curves are defined for all t. 
3. Supposing $v$ is an integrable vector field,  Let $\phi_t(p)$ be the integral curve of $v$ through the point $p \in M.$ For each time $t$, the map $\phi_t : M \rightarrow M$ turns out to be smooth (by smooth dependence of solutions of differential equations on initial conditions). We call the family of maps $\{\phi_t\}$ the **flow generated by $v$.** And the defining equation for the flow is 

    
    $$
    \frac{d}{dt}\phi_t(p) = v_{\phi_t(p)}.
    $$
    
4. The **Lie bracket or commutator** of vector fields $v,w \in Vect(M)$ is defined by 
    
    $$
    [v,w](f) = v(w(f)) - w(v(f)),
    $$
    
    $\forall f \in C^\infty(M)$. Or, for short, $[v,w] = vw - wv$. [This is another vector field viz. satisfies the linearity and leibnizarity all while eating and spitting functions on M].
    
5. The lie bracket has the following more properties:  (Bi-linearity and Jacobi identity)

$$
[u,\alpha v + \beta w] = \alpha[u,v] + \beta[u,w] \\
[u,[v,w]] + [v,[w,u]]+ [w,[u,v]] = 0
$$

## Chapter 4 - Differential Forms

---

### 4.1 1-forms

1. We define a **1-form** on any manifold $M$ to be a map from $Vect(M)$ to $C^\infty(M)$  that is linear over $C^\infty(M)$.  If $w$ is a 1-form, $g \in C^\infty(M)$ and $v, u \in Vect(M)$ then,
    
    $$
    w(v+u) = w(v) + w(u) \\
    w(gv) = gw(v)
    $$
    
    [When in doubt, imagine $w = df$ or $\nabla f$ | $df(v) = v(f)$]
    
2. The 1-form $df$ has a special name - it’s called the **differential of $f$** or **the exterior derivative of $f$**.
3. $\Omega^1(M)$  - space of all 1-forms on a manifold M. This is a **module over $C^\infty(M)$.** Operations are given by 
    
    $$
    (w+\mu)(v) = w(v) + \mu(v) \\
    (fw)(v) = fw(v)
    $$
    
4. $df$ is a descendant of a more general operation on forms. The map $d:C^\infty(M) \rightarrow \Omega^1(M)$ that sends each function $f$ to its differential $df$ is called the **differential** or **exterior derivative**. The following properties hold true -  linearity and leibnizarity [making it deserving to call it a *derivative*]
    
    $$
    d(f+g) = df + dg \\
    d(\alpha f) = \alpha df\\
    (f+g)dh = fdh + gdh \\
    d(fg) = fdg + gdf
    $$
    
5. **Example: $d\sin(x) = \cos(x)dx$!** Check by acting on a general vector field - $v^\mu\partial_\mu$. 
6. Suppose $f(x^1,...,x^n) \in C^\infty(\mathbb{R}^n)$, then $df = \partial_\mu f\ dx^\mu$!
7. In fact **$\{dx^\mu\}$ forms a basis for $\Omega^1(\mathbb{R}^n)$**. The key being, 
    
    $$
    dx^\mu(\partial_\nu) = \partial_\nu x^\mu = \delta^\mu_\nu
    $$
    
    - If we have a 1-form $w$ on $R^n$, then we can define $w_\mu = w(\partial_\mu)$, such that

$$
w = w_\mu dx^\mu
$$

### 4.2 Cotangent Vectors

1. Given a manifold $M$ and a point $p \in M$, a **cotangent vector** $w$ at $p$ is defined to be a linear map from the tangent space $T_pM$ to $R$. 
2. $T_p^*M$ - denotes the space of all cotangent vectors at $p.$
    1. If $w$ is a 1-form on M, we can define a cotangent vector $w_p \in T^*_pM$ by saying that for any vector field $v$ on M, 
    
    $$
    w_p(v_p) = w(v)(p).
    $$
    
3. For any given vector space $V$, the dual vector space $V^*$ is defined to be the space of all linear functionals $w:V \rightarrow R$. $T_p^*M$ is dual to $T_pM$.
4. If we have a linear map from one vector space to another, $f: V \rightarrow W,$ we also have the **dual map of $f$** defined as follows,
    
    $$
    f^*: W^* \rightarrow V^* \\
    (f^*w)(v) := w(f(v)).
    $$
    
    where $w \in W^*, v \in V$.
    
    *[So dual maps are contravariant].* 
    
5. Thus, from the pushforward $\phi_* :T_pM \rightarrow T_pN$, we have the *pullback of cotangent vector* as follows 
    
    $$
    \phi^*:T^*_qN \rightarrow T^*_pM \\
    (\phi^*w)(v) := w(\phi_*v)
    $$
    
    $\phi^*w$ is called the **pullback of $w$ by $\phi$**. [$\phi: M \rightarrow N$ ]
    
6. We can **pullback 1-forms globally** by defining $(\phi^*w)_p = \phi^*(w_q)$ for a given 1-form $w$ on N, where $\phi(p) = q$.
7. Exterior derivative is **natural** -
    
    $$
    \phi^*(df) = d(\phi^*f)
    $$
    

### 4.3 (Change of) Coordinates

1. Suppose $\varphi:U\subset M \rightarrow R^n$ and $x^\mu: R^n \rightarrow R$. We abuse the notation and write $x^\mu \equiv \varphi^*x^\mu = x^\mu\circ\varphi :U \rightarrow R \in C^\infty(M)$; i.e. we pull back the function $x^\mu \in C^\infty(R^n)$  onto $M$, and still write it as $x^\mu$ , known as the **local coordinates on U.** 
2. We push forward the basis vectors $\{\partial_\mu\}$ of $Vect(R^n)$  to (abuse again) $\{\partial_\mu\ \equiv \varphi_*^{-1}\partial_\mu\}$ as basis vectors of $Vect(M)$ using $\varphi^{-1}$. [Note that $\varphi$ is a diffeomorphism]. Thus **the dimension of tangent space at every point is n**.
3. Similarly we pull back the basis of 1-forms on $R^n$ to basis of 1-forms on M using $\varphi$, $\{dx^\mu\} \rightarrow \{dx^\mu \equiv \phi^*dx^\mu\}$ . Thus **the dimension of cotangent space at every point is n**.
4. Under change of coordinates, $x^\mu \rightarrow x'^\mu$: [Passive]
    
    $$
    \partial_\mu' = \frac{\partial x^\nu}{\partial x'^\mu} \partial_\nu; \ \   v'^\mu = \frac{\partial x'^\mu}{\partial x^\nu}v^\nu
    $$
    
    $$
    dx'^\mu = \frac{\partial x'^\mu}{\partial x^\nu} dx^\nu; \ \   w'_\mu = \frac{\partial x^\nu}{\partial x'^\mu}w_\nu
    $$
    
5. A **passive** coordinate transformation is a change of coordinate functions (on $R^n$ or on a chart) . [Not moving points of our space around, just changing the function we use to describe them].
6. An **active** coordinate transformation is just another name for a diffeomorphism $\phi: M\rightarrow M$. 

`Pending`

### 4.4 p-forms

1. The **exterior algebra** over $V$, denoted $\Lambda V$, is the [algebra](https://www.notion.so/Definitions-5cc8ea60d1574029ac57dd9da7b3bf79?pvs=21) generated by V with the relations 
    
    $$
    v\wedge w = -w\wedge v
    $$
    
    $\forall v,w \in V$.
    
    - Suppose $dim(V) = 3$, with basis $dx, dy, dz$. The algebra is generated as follows -
    
    $$
    1 \in \Lambda V \\
    dx, dy, dz \in \Lambda V\\
    dx\wedge dy, dx \wedge dz, dy \wedge dz \in \Lambda V \\
    dx\wedge dy\wedge dz \in \Lambda V
    $$
    
     along with their linear combinations at each stage. [What about the $dx\wedge dy + dz$, does it belong to $\Lambda V$? ] 
    
    - All **higher order wedge products vanish** trivially due to anti-symmetry.
2. If
    
    $$
    v = v_xdx + v_ydy+ v_zdz \\
    w = w_xdx + w_ydy+ w_zdz \\
    u = u_xdx + u_ydy+ u_zdz 
    $$
    
    then we have 
    
    $$
    v\wedge w = (v_xw_y-v_yw_x)dx\wedge dy + (v_yw_z-v_zw_y)dy\wedge dz+ (v_zw_x-v_xw_z)dz\wedge dx \\
    
    $$
    
    $$
    u\wedge v \wedge w = det\begin{pmatrix}u_x & u_y & u_z \\
    v_x& v_y& v_z \\
    w_x& w_y& w_z
    \end{pmatrix} dx\wedge dy\wedge dz
    $$
    
    which just look like cross product and triple product of vectors!
    
3. For any vector space $V$ we define $\Lambda^p V$ to be the subspace of $\Lambda V$ consisting of linear combinations of p-fold products of vectors in $V.$  Elements of which are said to have **degree** $p$.
    1. **$\Lambda^0 V$** is by convention defined to be the field/ring over which the vector space/module is defined.
4. A vector space $V$ is a **direct sum** of subspaces $L_1, ..., L_n$ if every vector $v \in V$ can be uniquely  expressed as $v_1+...+v_n$ where $v_i \in L_i$. We m think of vectors in $V$ as n-tuples $(v_1,...,v_n)$ where $v_i \in L_i$. 
5. Given vector spaces $V_1, ..., V_n$, the **direct sum $\oplus_{i=1}^{n}V_i$ :=  $V_1 \oplus ...\oplus V_n$** is defined as the vector space of all n-tuples $(v_1,...v_n)$  with $v_i \in V_i$, where addition and scalar multiplication are defined component wise. 
6. $\Lambda V$ is the direct sum of subspaces $\Lambda^pV$, i.e. $\Lambda V = \oplus\Lambda^pV$, with $dim(\Lambda V) = 2^n$, if $dim(V) = n$. [What about the mixed form? Can we add 1-form and 2-form? Is it in the exterior algebra?]
7. Notice that the $dim(\Lambda^{dim(V)-1}V = dim(V)$. We define a linear map between these two to recognize the $dim(V)-1$ degree wedge product as a vector in $V$ itself. In 3-dimensions for example,
    
    $$
    *: dx\wedge dy \mapsto dz \\
    *: dy\wedge dz \mapsto dx \\
    *: dz\wedge dx \mapsto dy
    $$
    
    - But this is *right hand* style definition, we could define it the other way too.
8. We define the **differential forms** on $M$, denoted by $\Omega(M)$, to be the algebra generated by $\Omega^1(M)$ over $C^\infty(M)$ with the relations
    
    $$
    w\wedge\mu = -\mu \wedge w
    $$
    
    for all $w, \mu \in \Omega^1(M).$ So, $\Omega(M)$ consists of linear combinations of wedge products of 1-forms with *functions* as coefficients. 
    
9. We allow all **locally finite** linear combinations, that is, those for which every point p in M has a neighborhood where only finitely many terms are nonzero. 
10. Elements that are linear combinations of product of p 1-forms are called p-forms, and we write the space of p-forms as $\Omega^p(M)$. We have 
    
    $$
    \Omega(M) = \oplus \Omega^p(M)
    $$
    
11. For example, suppose $M = \mathbb{R}^n$. 
The 0-forms are just functions $\in$ $C^\infty(M)$
    
    $$
    f
    $$
    
    1-forms all look like 
    
    $$
    w_\mu dx^\mu
    $$
    
    where $w_\mu$ are functions.
    
    2-forms all look like 
    
    $$
    \frac{1}{2}w_{\mu\nu}dx^\mu\wedge dx^\nu
    $$
    
    with $w_{\mu\nu} = -w_{\nu\mu}$.
    
    3-forms all look like 
    
    $$
    \frac{1}{3!}w_{\mu\nu\lambda}dx^\mu\wedge dx^\nu \wedge dx^\lambda
    $$
    
    with $w_{\mu\nu\lambda}$ totally antisymmetric. 
    
    .
    
    .
    
    .
    
12. Given a vector space $V$, $\Lambda V$ is a **graded commutative** or **supercommutative algebra**, that is if $w \in \Lambda^pV$ and $\mu \in \Lambda^qV$, then 

$$
w\wedge \mu = (-1)^{pq}\mu\wedge w.
$$

### 4.5 The Exterior Derivative

---

1. We define the **exterior derivative** or **differential** to be the unique set of maps  
    
    $$
    d:\Omega^p(M) \rightarrow \Omega^{p+1}(M)
    $$
    
    such that the following properties hold:
    
    - $d:\Omega^0(M) \rightarrow \Omega^1(M)$  [ agrees with our [previous definition](https://www.notion.so/Definitions-5cc8ea60d1574029ac57dd9da7b3bf79?pvs=21)].
    - $d(w+\mu) = dw + d\mu$ and $d(cw) = cdw$ for all $w,\mu \in \Omega(M)$, and $c \in \mathbb{R}$.
    - $d(w\wedge \mu) = dw \wedge\mu+(-1)^pw\wedge d\mu$ for all $w \in \Omega^p(M)$ and $\mu \in \Omega(M)$.
    - $d(dw) = 0$ for all $w \in \Omega(M)$.
2. On $\mathbb{R}^n$,
    1.  if $w$ is a 1-form then [**curl!**]
        
        $$
        d(w_\mu dx^\mu) = \partial_\nu w_\mu dx^\nu\wedge dx^\mu
        $$
        
    2. if $w$ is a 2-form then [**divergence!**]
        
        $$
        dw = (\partial_zw_{xy} + \partial_xw_{yz} + \partial_yw_{zx} ) dx\wedge dy \wedge dz
        $$
        
3. Special cases of exterior derivative - 
    1. **Gradient** $d:\Omega^0(R^3) \rightarrow \Omega^1(R^3)$
    2. **Curl $d:\Omega^1(R^3) \rightarrow \Omega^2(R^3)$**
    3. **Divergence $d:\Omega^2(R^3) \rightarrow \Omega^3(R^3)$**
4. Let I stand for **multi-index** that is a $p$-tuple $(i_1,…,i_p)$ of distinct integers between $1$ and $n$. Let $dx^I$ stand for the $p$-form $dx^{i_1}\wedge...\wedge dx^{i_p}$, then any p-form on $R^n$ can be written as 
    
    $$
    w = w_Idx^I
    $$
    
    then we have $dw = dw_Idx^I$ which can be written as
    
    $$
    dw = (\partial_\mu w_I)dx^\mu\wedge dx^I
    $$
    
5. Exterior derivative is **natural** - 
    
    $$
    \phi^*(dw) = d(\phi^*w).
    $$
    

## Chapter 5 - Rewriting Maxwell’s Equations

---

### 5.1 The First Pair of Equations

$$
\nabla.B = 0 \\
\nabla\times E + \frac{\partial B} {\partial t} = 0 \\

$$

1. Static case: Treating E as a 1-form and B as a 2-form we have the maxwell equations as,
    
    $$
    dE = 0, dB =0
    $$
    
2. For the time-dependent case, define **unified Electromagnetic field F**, as a 2-form on  $\mathbb{R}^4$ the Minkowski spacetime. 
    
    $$
    F = B + E\wedge dt
    $$
    
    $$
    F = \frac{1}{2}F_{\mu\nu}dx^\mu \wedge dx^\nu
    $$
    
    with $F_{0i} = -E_i = -F_{i0}$ and $F_{ij} = B_k = -F_{ji}$.
    
3. The first pair of equations simply become, 

$$
dF=0.
$$

1. $dF = d_SB + (\partial_tB+d_SE)\wedge dt$.
2. Any 2-form $F$  on $\mathbb{R}\times S$ can be uniquely expressed as $B + E\wedge dt$ in such a way that for any local coordinates $x^i$ on $S$  we have $E=E_idx^i$ and $B= \frac{1}{2}B_{ij}dx^i\wedge dx^j$.
3. For any form $w$ on $\mathbb{R}\times S$ there is a unique way to write $dw = dt\wedge \partial_tw+d_Sw$ such that for any local coordinate $x^i$ on $S$, and writing $x^0 = t$, we have 
    
    $$
    d_Sw = \partial_iw_Idx^i\wedge dx^I, \\
    dt\wedge\partial_tw = \partial_0w_Idx^0\wedge dx^I.
    $$
    
    where we have considered $w = w_Idx^I$.
    
4. Static Case
    
    $$
    d_SB = 0, d_SE = 0
    $$
    
5. General Case

$$
d_SB = 0, \partial_tB+d_SE = 0.
$$

### 5.2 The Metric

1. Consider a **Minkowski spacetime**, and define the **dot product** as follows (in C = 1 units) [Note the sign convention!]
    
    $$
    v\cdot w = -v^0w^0 + v^1w^1+v^2w^2 + v^3w^3
    $$
    
    then 
    
    1. if $x \in V$ has $x\cdot x >0$, $x$ is called **spacelike.**
        - It points more in space direction than the time direction.
        - If x is spacelike then $\sqrt{x\cdot x}$  represents the length of a straight ruler that stretches from the origin to x.
    2. if  $x\cdot x < 0$, $x$ is called **timelike.**
        - It point more in time direction than the space direction.
        - If x is timelike then $\sqrt{x\cdot x}$ measures the time a clock would tick off as it moved from the origin to x in a straight line.
    3. if  $x\cdot x = 0$, $x$ is called **null** or **lightlike.**
        - It points equally in time and space directions.
2. A **semi-Riemannian metric** (or just ‘metric’) on a vector space V is a map $g:V\times V \rightarrow R,$ that is 
    - **bilinear,** i.e. linear in each slot.
    - **Symmetric: $g(v,w ) = g(w,v).$**
    - and **nondegenerate:** if $g(v,w) =0 \forall w\in V,$ then $v = 0.$
    
    We define v is **spacelike, timelike or null depending on the sign of $g(v,v)$.**
    
3. We say $v,w$ are **orthogonal** if $g(v,w) = 0.$  [*Null vectors are orthogonal to themselves*]!
4. Given a metric on $V$, we can always find an **orthogonal basis** for $V,$ that is, a basis $\{e_\mu\}$ such that $g(e_\mu,e_\nu) =0$ if $\mu \neq\nu$, and $\pm 1$ if $\mu = \nu$.
5. The **signature** of the metric $(p,q)$ indicates the number of $+1's$ $(p)$ and $-1's$ $(q)$. [*The numbers are independent of the choice of orthonormal basis*] !
    
    Minkowski Spacetime has signature (3,1) with **Minkowski metric** given by 
    
    $$
    \eta(v,w) = -v^0w^0 + v^1w^1+v^2w^2 + v^3w^3
    $$
    
6. A **metric g** on M assigns to each point $p\in M$ a metric $g_p$ on the tangent space $T_pM$, in a **smoothly** varying way.
    
    By smoothly varying**,** we mean that if $v, w$ are smooth vector fields on $M$, the inner product $g_p(v,w)$ is a smooth function on $M$. We write this function simply as $g(v,w)$.
    
7. Smoothness condition $\implies$signature of $g_p$ is constant on any connected component of $M$! 
    
    [*This is interesting because, the function is assigned locally, at each point! Yet as we move along different points, not only does the basis change (which doesn’t effect the signature) the very metric function changes - but yet smoothness implies a constant signature! This is non-trivial!*]
    
8. By a **semi-Riemannian manifold** we mean a manifold equipped with a metric.
9. If the signature of $g$ is $(n,0)$ where $dim(M)$ = n, we say that $g$ is a **Riemannian metric.** Manifold equipped with such a metric is called a ***Riemannian manifold**.*
10. If the signature of $g$ is $(n-1,1)$ where $dim(M)$ = n, we say that $g$ is a **Lorentzian** **metric.** Manifold equipped with such a metric is called a ***Lorentzian manifold**.*
11. Easiest way to define a metric on 4-dim Lorentzian manifold M is to take 3-dim manifold $S$ with a Riemannian metric **$^3g$**, and let M be given by  $\mathbb{R}\times S$. Then we can define a Lorentzian Metric as, 

$$
g = -dt^2 +\ ^3g
$$

1. If $\gamma:[0,1] \rightarrow M$ is spacelike, that is if its tangent vector is everywhere spacelike, we define its **arclength** to be 
    
    $$
    \int_0^1\sqrt{g(\gamma'(t),\gamma'(t))} dt
    $$
    
2. If $\gamma$  is timelike, we define the **proper time along $\gamma$ -** that is the time ticked off by a clock moving along $\gamma$ — to be

$$
\int_0^1\sqrt{-g(\gamma'(t),\gamma'(t))} dt
$$

1. There is an isomorphism (one-one and onto) given by the linear functional $g(v,\cdot)$ between $V$ and $V^*$.  i.e $v \mapsto g(v,\cdot)$.

**The language of Indices -** 

15. In a chart, let $e_\mu$ be a basis of vector fields. We can define the **components of the metric** as follows - [$g_{\mu\nu}$  is an $n\times n$ matrix, if M is dim-n. Invertible because of non-degeneracy]

$$
g_{\mu\nu} = g(e_\mu,e_\nu)
$$

1. $g^{\mu\nu}$ denotes the inverse matrix of $g_{\mu\nu}$.
2. Converting between vector fields and 1-forms:
    1. [**Lowering**] Let $v = v^\mu e_\mu$ be a vector field on a chart. Then the corresponding 1-form $g(v,\cdot)$ is $v_\nu f^\nu$, where $f^\nu$ is the dual basis of 1-forms and $v_\nu = g_{\mu\nu}v^\mu$.
    2. [**Raising**] Let $w = w_\mu f^\mu$ be a 1-form on a chart. Then the corresponding vector field is equal to $w^\nu e_\nu$, where $f^\nu$ is the dual basis of vector fields and $w^\nu = g^{\mu\nu}w_\mu$.

18. $g^\mu_\nu = \delta^\mu_\nu$.

**Extending the idea of metric to differential forms [***i.e. not just 1-forms - between any p-forms and linear comb of them!***]**

1. Let $M$ be a semi-Riemannian manifold. If $v,w$ are vector fields on $M$, $g(v,w)$ is a function on $M$ whose value at $p$ is $g_p(v,w)$. This is
    1.  **bilinear**,
    
    $$
    g(fv+v',w) = fg(v,w)+g(v',w) \\
    g(v,fw+w') = fg(v,w)+g(v,w'),
    $$
    
    where now $f \in C^\infty(M).$ 
    
    b. **symmetric,**
    
    $$
    g(v,w) = g(w,v)
    $$
    
    c. **nondegenerate,**
    
    $$
    \forall w\in V g(v,w) = 0 \implies v = 0.
    $$
    
2. Now, for 1-forms on $M$ - Given two 1-forms $w$  and $\mu$, we call the resulting function $\langle w,\mu \rangle,$ the **inner product** of $w$ and $\mu$. In terms of indices, if 
    
    $$
    g(v,w) = g_{\alpha\beta}v^\alpha w^\beta
    $$
    
    then for any 1-forms $w$ and $\mu$ we have
    
    $$
    \langle w,\mu\rangle = g^{\alpha\beta}w_\alpha\mu_\beta.
    $$
    
3. We define inner product of two p-forms $w$ and $\mu$ on M will be a function $\langle w,\mu\rangle$ on M, and bilinear - so just define between p-forms as - 
    
    $$
    \langle e^1\wedge...\wedge e^p,f^1\wedge...\wedge f^p\rangle = det[\langle e^i,f^j\rangle]
    $$
    
    where the RHS is the determinant of $p\times p$ matrix whose elements are $\langle e^i,f^j\rangle$.
    
4. The **inner product of p-forms is nondegenerate** supposing that $(e^1,...e^n)$ is any orthonormal basis of 1-forms in some chart with $g(e^i,e^i) = \epsilon (i)$, where $\epsilon(i) = \pm1$. 
5. The p-fold wedge products $e^{i_1}\wedge...\wedge e^{i_p}$ form an orthonoraml basis of p-forms with 

$$
\langle e^{i_1}\wedge...\wedge e^{i_p},e^{i_1}\wedge...\wedge e^{i_p}\rangle = \epsilon(i_1)...\epsilon(i_p).
$$

1. The quantity $\frac{1}{2}\left(\langle E,E\rangle + \langle B,B\rangle\right)$ is called the **Energy density** of the Electromagnetic field.
2. The quantity $\frac{1}{2}\left(\langle E,E\rangle - \langle B,B\rangle\right)$ is called the **Lagrangian** for the vacuum Maxwell’s equations.

### 5.3 The Volume Form

1. Given an n-dimensional vector space $V$  with two bases $\{e_\mu\}$, $\{f_\mu\}$ **there is always a unique linear transformation $T:V\rightarrow V$ taking one basis to the other:  $Te_\mu = f_\mu.$** This is necessarily invertible and thus determinant is nonzero.
    1. We say $\{e_\mu\} \& \{f_\mu\}$  have **same orientation** if $det(T) >0$ and **opposite orientation** if $det(T)<0$.
2. Define an **orientation on $V$** to be a choice of equivalence class of bases of V, where two bases are deemed equivalent if they have *the same orientation*. [There are always only two orientations on $V$.]
3. Define **volume element** associated to the basis $\{e_\mu\}$ as $e_1\wedge...\wedge e_n$ $\in \Lambda^nV$ , where $dim(V) = n$. [*A parallelopiped in n dimesnions*].
4. If $\{f_\nu\}$ is another basis of $V$ and $f_\nu = T^\mu_\nu e_\mu$, then [ *Volume element versus change of basis - there is a unique linear transformation T, see [[1]](https://www.notion.so/Definitions-5cc8ea60d1574029ac57dd9da7b3bf79?pvs=21)* ]
    
    $$
    f_1\wedge...\wedge f_n = det(T)e_1\wedge...\wedge e_n.
    $$
    
    *Thus two bases have the same orientation if the corresponding volume elements differ by a positive scalar multiple.*
    
    So, we can think of ***orientation as** being a choice of a volume form modulo positive scalar multiples!*
    
5. We define a **volume form $w$** on $M$ to be a nowhere vanishing n-form. Thus for each point $p \in M$, $w_p$ is a volume element on $T_p^*M$. The standard volume form on $R^n$ is 

$$
w = dx^1\wedge...\wedge dx^n.
$$

1. We say $M$ is **orientable**  if there exists a volume form on $M$. 
    
    [By *orientation on $M$*, **we mean a choice of equivalence class of volume forms on $M$, where two volume forms $w$ and $w'$ are equivalent if $w' = fw$ for some positive function $f$].
    
2. Any volume form that is in the chosen equivalence class is said to be **positively oriented**; otherwise it is said to be **negatively oriented**. 
    - [*Yes, it is possible to pick an equivalence class with all left handed bases and still call the elements in them positively oriented, cuz their volume forms are related by positive scalar multiple*].
3. The **Standard Orientation** on $R^n$ is the equivalence class containing the volume form $dx^1\wedge...\wedge dx^n.$
4. Given an orientation on $M$, we can decide unambiguously where any basis $e^\mu$ of a cotangent space $T_p^*M$ is **right-handed** or **left-handed**, as follows - 
    
    Pick a volume form $w$ in the equivalence class, write $e^1\wedge...\wedge e^n$ as a constant (function) times $w$, and check to see whether the constant is positive or negative. 
    
    [*This is how orientation gives a global definition of right vs. left*]
    
    [If I’m not wrong, We will say its right handed if it’s $e^\mu$  is positively oriented? ]
    
5. Any manifold equipped with an orientation is said to be **oriented**.
    
    [*One can also think an oriented manifold as having ‘oriented charts’*].
    
6. Construction of a **canonical volume form on** $M$ given it is an oriented n-dimensional manifold with metric g. 
    - Cover M with oriented charts $\varphi_\alpha:U_\alpha\rightarrow R^n$. In any chart set $g_{\mu\nu} = g(\partial_\mu,\partial_\nu)$, and define
    
    $$
    vol = \sqrt{\mid detg_{\mu\nu}\mid}dx^1\wedge...\wedge dx^n.
    $$
    
    - This is independent of the chart used! And thus gives a global existence of a volume form on all of $M.$
        
        $$
        vol = \sqrt{\mid det\ g\mid}\ d^nx
        $$
        
7. We call $vol$  the **volume form on $M$ associated to the metric g.**
    - It is also common to write it as
    - For Minkowski space - $vol = \sqrt{- det\ g}\ d^nx$.
    - In general relativity, people often write it as $\sqrt{-g}\ d^nx$.

### 5.4 The Hodge Star Operator

1. Let $M$ be an n-dimension oriented semi-Riemannian manifold. Then the inner product of two $p$ forms $w$ and  $\mu$ on $M$ is a function $\langle w,\mu\rangle$ on $M$. We define the **Hodge Star Operator** 
    
    $$
    *:\Omega^p(M) \rightarrow \Omega^{n-p}(M)
    $$
    
    to be the unique linear map from $p$-forms to the $(n-p)$-forms such that for all $w,\mu \in \Omega^p(M)$ 
    
    $$
    w\wedge *\mu = \langle w,\mu\rangle\ vol.
    $$
    
    [both the sides are n-forms! ]
    
2. We (often) call $*\mu$ the **dual of $\mu$.**
3. The Hodge Star formula -
    
    Suppose that $e^1,...e^n$ are positively oriented orthonormal basis pf 1-forms on some chart. Then for any **distinct $1\le i_1,...,i_p\le n$,**
    
    $$
    *(e^{i_1}\wedge...\wedge e^{i_p}) = \pm e^{i_{p+1}}\wedge...\wedge e^{i_n}
    $$
    
    where $\{i_{p+1},...,i_n\}$ consists of the integers from $1$ to $n$ not included in $\{i_1,...,i_p\}$: 
    
    $$
    \{i_{p+1},...,i_n\} = \{1,...n\} - \{i_1,...,i_p\}.
    $$
    
    The sign $\pm$ is given by 
    
    $$
    sign(i_1,...i_n)\epsilon(i_1)...\epsilon(i_p)
    $$
    
    where $sign(i_1,...i_n)$ denotes the sign of the permutation taking $(1,…,n)$ to $(i_1,...,i_n)$ and  $\epsilon(\mu) = \langle w,\mu\rangle = \pm1$.
    
4. Few properties of star operator through exercises.

### 5.5 The Second Pair of Equations

1. The current density vector field is 
    
    $$
    \bar{J} = \rho\partial_0+j^1\partial_1+j^2\partial_2+j^3\partial_3
    $$
    

and converting it to a 1-form [using](https://www.notion.so/Definitions-5cc8ea60d1574029ac57dd9da7b3bf79?pvs=21) Minkowski metric, we have 

$$
J = j -\rho dt
$$

with 

$$
j = j_1dx^1+j_2dx^2+j_3dx^3.
$$

1. The second pair can thus be written as, 
    
    $$
    *d*F = J
    $$
    
    and the first pair was 
    
    $$
    dF = 0.
    $$
    
2. The second pair is simply $*_Sd_S*_SE = \rho$ and $\partial_tE+ *_Sd_S*_SB = j$. Where $*_S$ is the Hodge star operator on  $R^3$ with a Euclidean metric. 
3. Continuity Equation - 
    
    $$
    d*J = 0
    $$
    
4. Vacuum Maxwell Equations
    
    
    $$
    dF = 0, d*F = 0
    $$
    
    These are preserved by duality! $F \mapsto *F.$
    
5. $F = B + E\wedge dt, *F = *_SE-*_SB\wedge dt$. Duality $\implies$$B \mapsto *_SE$ and$E \mapsto -*_SB$. 
6. On a 4-dimensional manifold -
    - equipped with a *Riemannian metric* $F \in \Omega^2(M)$ is called **self-dual** if $*F = F$, and **anti-self-dual**  if $*F=-F$. [$*^2 = 1$ for a Riemannian Metric].
    - equipped with Lorentzian metric $F\in \Omega^2(M)$ is called **self-dual** if $*F = iF$, and **anti-self-dual**  if $*F=-iF$. [$*^2 = -1$ for a Lorentzian Metric].
    
    [*In either case(self-dual or anti-self-dual of both Riemannian/Lorentzian case) one vacuum maxwell equation automatically gives another*]!
    
    ## **The Maxwell Equations - Summary**
    

$$
dF=0.
$$

$$
d_SB = 0, \partial_tB+d_SE = 0.
$$

$$
*d*F = J
$$

$*_Sd_S*_SE = \rho \\
\partial_tE+ *_Sd_S*_SB = j$

$$
d*J = 0
$$

## Chapter 6 - DeRahm Theory in Electromagnetism

---

### 6.1 Closed and Exact 1-forms

1. A differential form is called **closed** if its exterior derivative vanishes i.e. $w \mid dw = 0$.
2. A differential form is called **exact** if it is exterior derivative of some other differential form i.e. $w = d\mu$.
3. $d^2 = 0 \implies$**All exact forms are closed!**
4. In physics we call a 0-form $\phi$ satisfying $E = -d\phi$ a **scaler potential.**
5. And a 1-form $A$ satisfying $B = dA$ a **vector potential.** Similarly for the electromagnetic field $F$, $A$ is called a **vector potential for $F$** if $F = dA$.
6. A **path $\gamma$** in $S$ is a piecewise smooth map $\gamma:[0,T] \rightarrow S$.
7. We say two paths $\gamma_0,\gamma_1:[0,T] \rightarrow S$ from $p$ to $q$ are **homotopic** if there exists a smooth function $\gamma:[0,1]\times[0,T] \rightarrow S$ such that $\gamma(s,\cdot)$ is a path from $p$ to $q$ for each $s$, and 

$$
\gamma(0,t) = \gamma_0(t), \gamma(1,t) = \gamma_1(t)
$$

1. Given a connected manifold $S$, we say that $S$  is **simply connected** if any paths between two points $p,q$ are homotopic. ****
2. **Every closed 1-form on a simply connected manifold is exact!** Given by following:
    
    Given a 1-form $E$ on $S$, define  $\phi(q) = -\int_\gamma E = \int_0^T E_{\gamma{(t)}}(\gamma'(t))dt$ - Indeed this gives $E = -d\phi$.
    
3. A path $\gamma:[0,T] \rightarrow S$ is a **loops**  if it ends where it starts, that is, if $\gamma(0) = \gamma(T) = p$  for some point $p\in S$. We say that $\gamma$ is a loop **based at $p$**, or that $p$ is a **basepoint** of $\gamma$.
4. We say that a loop $\gamma:[0,T] \rightarrow S$ based at $p$ is **contractible** if it is homotopic to a constant loop $\eta$ that just stays at $p$ : $\eta(t) = p$ for all $t \in [0,T]$.
5. If $S$  is simply connected then if $dE = 0$, then $\int_\gamma E =0$ for *all* loops.
6. 1-form $E$ is closed iff $\int_\gamma E = 0$  for *all contractible* loops. (A1)
7. 1-form $E$ is exact iff $\int_\gamma E = 0$ for *all* loops. (A2)

### 6.2 Stokes’ Theorem

1. In physics we call $\int_{\partial R} \bar{A}.\bar{n}$ the **flux** of $\bar{A}$ through the surface $\partial R$. 
2. We define a **n-dimensional manifold with boundary** tp be topological space $M$ equipped with charts of the form $\varphi_\alpha:U_\alpha \rightarrow \mathbb{R}^n$ or $\varphi_\alpha:U_\alpha \rightarrow H^n$, where $U_\alpha$ are open sets covering $M$, such that the transition functions $\varphi_\alpha\circ\varphi_\beta^{-1}$ is smooth wherever it is defined. [Hausdorff and paracompact are assumed.]  
    
    $$
    H^n = \{(x^1,...x^n): x^n \ge 0\}
    $$
    
3. A function on $H^n$ is **smooth** if it extend to a smooth function on the manifold $\{(x^1,...,x^n): x^n > -\epsilon\}$ for some $\epsilon > 0$.
4. We define the **boundary of $M$** to be the set of $p \in M$ such that some chart $\varphi_\alpha : U_\alpha \rightarrow H^n$ maps $p$ to a point in 
    
    $$
    \partial H^n =\{(x^1,...,x^n): x^n=0\}.
    $$
    
    We write $\partial M$ for the boundary of M. 
    
5. We say a function $f:M \rightarrow \mathbb{R}$ is **smooth** if for any chart $\varphi_\alpha$, $f\circ\varphi_\alpha$ is smooth as function on $\mathbb{R}^n$ or $H^n$. 
[*Similarly smooth maps, vector fields, differential forms, and so on are defined just as in the ‘without boundary’ case. Tangent space at a point on the boundary still turns out to be the same n-dimensional vector space.*]
6. Suppose $w$ is any $n$-form on $\mathbb{R}^n$. We can write $w = fdx^1\wedge...\wedge dx^n$. And thus we define on a chart with local coordinates $x^i$ - 
    
    $$
    \int_{\mathbb{R}^n}w = \int_{\mathbb{R}^n} fdx^1\wedge...\wedge dx^n,
    $$
    
    assuming the integral on right side converges. [This is coordinate independent! Orientation enters here]
    
7.  On any manifold $M$, we define $\int_M w$ using **partition of unity** i.e. a collection of smooth functions $\{f_\alpha\}$ on $M$ such that: 
    - **$f_\alpha$ is zero outside $U_\alpha$.**
    - **Any point $p \in M$ has an open set containing it on which only finitely many of the functions $f_\alpha$ are nonzero.**
    - **For any $p \in M$, $\sum_{\alpha}f_\alpha = 1$.**
    
    [Existence proof uses Hausdorff and Paracompact properties]
    
    Using this we write $= \sum_\alpha f_\alpha w$ where $f_\alpha w$ vanishes outside $U_\alpha$. We may thus write $f_\alpha w = g_\alpha(x^1,...,x^n)dx^1\wedge...\wedge dx^n$ where $x^\mu$ are the local coordinates on $U_\alpha$, and the function $g_\alpha$ vanishes outside $U_\alpha$. We thus define 
    
    $$
    \int_M w = \sum_\alpha \int g_{\alpha}(x^1,...,x^n)dx^1\wedge...\wedge dx^n.
    $$
    
    [This is independent of choice of charts and partition of unity!]
    
8. $\partial M$ is an oriented manifold of dimension ($n-1$), where $dim(M) = n$.
9. **Stokes’ Theorem** - Let $M$ be a compact oriented $n$-manifold with boundary and let $w$ be an $(n-1)$-form on $M$. Then
    
    $$
    \int_M dw = \int_{\partial M}w.
    $$
    
    [Alternatively, we can work with a compact subset of M outside which $w$ vanishes.]
    
10. Given a subset $S$ of an n-manifold $M$, we say that $S$ is a **k-dimensional submanifold of $M$** if for each point $p \in S$ there is an open set $U$ of $M$ containing $p$ and a chart $\varphi: U \rightarrow \mathbb{R}^n$ such that $S\cap U = \varphi^{-1}\mathbb{R}^k$.
[If for some points $p \in S$, $S\cap U = \varphi^{-1}H^k$, then we call it a **submanifold with boundary of $M$.** ]
11. If $N$ is a manifold (possibly with boundary) and $\phi:N\rightarrow M$ is a smooth map such that $\phi(N)$ is a submanifold of $M$ (possibly with boundary), we say $\phi$ is an **embedding** of $N$ in $M$, and we say N is **embedded** in $M$.

### 6.3 DeRahm Cohomology

1. $Z^p(M)$ - set of closed p-forms on M.
2. $B^p(M)$ - set of exact p-forms on M. [$B^p(M) \subset Z^p(M)$]
3. $H^p(M) = Z^p(M)/B^p(M)$ is called the **pth deRahm cohomology group** of  ****$M$.
4. An element of $H^p(M)$ is a equivalence class of closed p-forms, where two closed forms $w,w'$  are equivalent if they differ by an exact p-form: $w -w' = d\mu$.
5. When $w$ and $w'$ are equivalent in this way we say they are **cohomologous**, and we call the equivalence class of $w$ its cohomology class:
    
    $$
    [w] = \{w':\exists\mu \ w - w' = d\mu\}.
    $$
    
6. A function is **locally constant** if all of its partial derivatives vanish.
7. Suppose $w = d\mu$ is an exact p-form on M. Then for every compact p-dimensional manifold $S$ and map $\phi:S\rightarrow M$, we have $\int_S \phi^*w =0$ by the facts - $S$ has no boundary, d is natural and stokes’ theorem. 
    
    [So find a compact orinetable p-dim (sub) manifolf of M S with $\int_Sw \ne 0,$ and conclude that $w$ is not exact.]
    
8. [Remarkable Converse] If $\int_S \phi^* = 0$ for evevry map $\phi:S\rightarrow M$ of a p-dimensional manifold $S$ to $M$, then $w$ is exact. 

### 6.4 Gauge Freedom

1. We can change $A$ to $A + df$ for any function f without changing $B$. This way of changing A is called **Gauge Transformation**. The freedom in choosing A is called **Gauge Freedom**.
2. In terms of vector potential A of F, the Maxwell Equations reduce to 
    
    $$
    dF = 0; *d*dA = J
    $$
    
3. Using the freedom we can choose the vector potential to satisfy additional conditions - choosing such condition - **choosing a gauge.**
4. $A(\partial_t)$ - **temporal gauge.** [There exists such a gauge transformation!]
5. In temporal gauge, written in **Cauchy Data** **(A,E)** - the first pair of Maxwell equations become tautologies… and the second pair is 
    
    $$
    *_Sd_S*_SE = \rho, -\partial_tE + *_Sd_S*_SB =j
    $$
    
    First equation is the **Gauss Law** and the second equation together with $\partial_t A = E$  is an **evolutionary equation** of Cauchy data. 
    
    These two along with the continuity equation imply the Gauss law at later times - “**Gauss Law us preserved by time evolution**”.
    

### 6.5 Bohm-Aharonov Effect

-

### 6.6 Wormholes

-

### 6.7 Monopoles

-

# Part II Gauge Fields

---

## Chapter 7 - Symmetry

---

### Lie Groups

1. We define a **group**  G to be a set equipped with a binary operation $\cdot: G\times G\rightarrow G$, often called the product, an operation $^{-1}:G\rightarrow G$, called the **inverse,** and a special element $1 \in G$, called the **identity**, such that for all $g,h,k \in G$ we have 
    1. $(g\cdot h)\cdot k = g\cdot(h\cdot k).$
    2. $g\cdot1 = 1\cdot g = g.$
    3. $g\cdot g^{-1} = g^{-1}\cdot g$ = 1.
2. A **subgroup** of a group is a subset closed under multiplication and inverse, and containing the identity.
3. **Matrix Groups:**
    1. The group of all invertible $n\times n$ matrices with real entries is called the **general linear group $GL(n,\mathbb{R})$.**
    2. Complex Entries - $GL(n,\mathbb{C})$.
    3. The **special linear group** is the set of matrices with determinant 1 -
        1. $SL(n,\mathbb{R})$.
        2. $SL(n,\mathbb{C})$.
4. We define **orthogonal group $O(p,q)$** to be the set of $n\times n$ real matrices $T$ that preserve metric $g$ with signature $(p,q)$ that is,  $g(Tv,Tw) = g(v,w)$ for all $v,w \in \mathbb{R}^n$. The **special orthogonal group $SO(p,q)$**, is the set of matrices in $O(p,q)$ that also have determinant 1. 
5. $SO(3,1)$ - **Lorentz Group**.
6. **Poincare group** - The group of symmetries of Minkowski Space, that is, the group of all diffeomorphisms of Minkowski space that is, the group of all diffeomorphism of Minkowski space that preserve spacetime intervals!
7. **Unitary group $U(n)$** consists of all unitary $n\times n$ complex matrices, that is, those that preserve the usual inner product on $\mathbb{C}^n$ given by $\sum_{i=1}^n\bar{v}^iw^i$. $SU(n)$ denotes the **special unitary group**, denotes the subgroup of $U(n)$ consisting of matrices that have determinant 1. 
8. We say a group  $G$ is a **Lie Group** if it is a manifold, and the product and inverse operations $\cdot : G\times G \rightarrow G$ and $^{-1}:G \rightarrow G$ are smooth maps. 
9. Given a Lie group $G$, define its **identity component $G_0$** to be the connected component containing the identity element. 
10. Given two group $G$ and $H$ , we say a function $\rho:G \rightarrow H$ is a **homomorphism** if $\rho(gh) = \rho(g)\rho(h)$.
11. A homomorphism that is one-to-one and onto is called an **isomorphism**.
12. In physics an element of $U(1)$ is called a **phase**. 
13. We say a group $G$  **acts** on a vector space $V$ if there is a map $\rho$ from $G$ to linear transformations of $V$ such that $\rho(gh)v = \rho(g)\rho(h)v$ for all $v\in V$. We also say that $\rho$  is a **representation** of $G$ on V.
14. We define **general linear group $GL(V)$** to be the group of all invertible linear transformations of $V$. A representation of $G$ on $V$ is nothing but a homomorphism $\rho:G\rightarrow GL(V)$.
15. We say that a group $G$ is **abelian** if $gh = hg$ for all $g,h \in G.$
