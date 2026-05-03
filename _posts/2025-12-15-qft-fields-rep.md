---
title: Fields & Representations
layout: default
tags: QFT
categories: Farm
---

The story starts from Lorentz Lie Algebra.

Under Lorentz transformations we have  

$$
x^{'\mu} = \Lambda^\mu_{\ \nu} x^\nu
$$

where,

$$
\Lambda^\alpha_{\ \mu}\,\eta_{\alpha\beta}\,\Lambda^\beta_{\ \nu}
= \eta_{\mu\nu}
\qquad (\Lambda^T \eta \Lambda = \eta)
$$

We then have,

![Classification of the Lorentz Transformation](lgclass.jpg)

*Classification of the Lorentz Transformation based on two features. Clearly, the Proper and Improper, similarly Orthochronous and Non-Orthochronous L.T.s are disconnected subsets of the total Lorentz transformations.*

<div class="proposition"> Every Improper and/or Non-Orthochronous Lorentz transformation can be expressed in terms of Proper and/or Orthochronous Lorentz transformations together with a Space (P) or Time (T) inversion operator,

$$
P =
\begin{pmatrix}
1 & 0 & 0 & 0 & 0 \\
0 & -1 & 0 & 0 & 0 \\
0 & 0 & -1 & 0 & 0 \\
0 & 0 & 0 & -1 & 0 \\
0 & 0 & 0 & 0 & -1
\end{pmatrix},
\qquad
T =
\begin{pmatrix}
-1 & 0 & 0 & 0 & 0 \\
0 & 1 & 0 & 0 & 0 \\
0 & 0 & 1 & 0 & 0 \\
0 & 0 & 0 & 1 & 0 \\
0 & 0 & 0 & 0 & 1
\end{pmatrix}
$$
</div>

For a P.O.L.T,

$$
\Lambda^\mu_{\ \nu} = \delta^\mu_{\ \nu} + \omega^\mu_{\ \nu}
$$

$$
\omega^\mu_{\ \nu} \rightarrow 0
\quad \Rightarrow \quad
\Lambda^\mu_{\ \nu} \rightarrow \delta^\mu_{\ \nu}
$$

And indeed  
$\det(\delta) = +1$ and $\delta^0_{\ 0} = 1$ as it should be for a P.O.L.T.

Using the defining relation of $\Lambda$, we have

$$
(\delta^\alpha_{\ \mu} + \omega^\alpha_{\ \mu})
\bigl(\eta_{\alpha\beta}(\delta^\beta_{\ \nu} + \omega^\beta_{\ \nu})\bigr)
= \eta_{\mu\nu}
$$

which gives

$$
\omega_{\mu\nu} = -\,\omega_{\nu\mu}
$$

That is, an antisymmetric tensor  
(rank $4 \Rightarrow 6$ independent elements). We thus write,

$$
\omega^\mu_{\ \nu}
= \frac{1}{2}\,\Omega_A (M^A)^\mu_{\ \nu}
\equiv
\frac{1}{2}\,\Omega_{\rho\sigma}(M^{\rho\sigma})^\mu_{\ \nu}
$$

where $A$ labels the six basis elements to write a general antisymmetric matrix,  
$(M^A)^\mu_{\ \nu}$, $A=1,\ldots,6 \equiv (M^{\rho\sigma})^\mu_{\ \nu}$,  
antisymmetric in $\rho,\sigma$.

Such an $(M^{\rho\sigma})^{\mu\nu}$, antisymmetric under  
$\rho \leftrightarrow \sigma$ and $\mu \leftrightarrow \nu$, can be written as

$$
(M^{\rho\sigma})^{\mu\nu}
= \eta^{\rho\mu}\eta^{\sigma\nu}
- \eta^{\nu\rho}\eta^{\mu\sigma}
$$

i.e.,

$$
(M^{\rho\sigma})^\mu_{\ \nu}
= \eta^{\rho\mu}\delta^\sigma_{\ \nu}
- \eta^{\sigma\mu}\delta^\rho_{\ \nu}
$$

Further we have,

$$
[M^{\rho\sigma}, M^{\tau\nu}]
= \eta^{\sigma\tau} M^{\rho\nu}
- \eta^{\rho\tau} M^{\sigma\nu}
- (\tau \leftrightarrow \nu)
$$

<span style="color:purple"><strong>This is called the Lorentz Lie Algebra!</strong></span>  
$M^{\rho\sigma}$ are called the generators of the Lorentz group and are said to
satisfy the above Lie algebra. $\Lambda$ is called the *fundamental representation*
of the Lorentz Lie algebra and leads to classifications such as scalars, vectors,
or general tensors under Lorentz transformations.

---

*Example:* Consider a spacetime vector $T^\mu$. It transforms as

$$
T'^\mu = \Lambda^\mu_{\ \nu} T^\nu
$$

$$
\Lambda^\mu_{\ \nu} =
\begin{cases}
\displaystyle
\left(1+\frac{1}{2}\Omega_{\alpha\beta}(M^{\alpha\beta})^\mu_{\ \nu}\right),
& \text{for infinitesimal transformations} \\[1em]
\displaystyle
e^{\frac{1}{2}\Omega_{\alpha\beta}(M^{\alpha\beta})^\mu_{\ \nu}},
& \text{for finite transformations}
\end{cases}
$$

---

These objects are different from fields. How are they different? Can we say
four-velocity, which is a four-vector, is a field? But it does not transform as a
vector field, rather as a four-vector. Is a vector field said to transform like a
four-vector? That internal $x$-transformation subtlety...

### Fields mathematically manifest as representations

_More representations $\iff$ more QFTs to study..._ 


<div class="axiom"> We say a set of matrices represents the Lorentz group if the operations between the matrices preserve the Lorentz group operation, i.e $\Lambda_1\Lambda_2 = \Lambda_3 \implies D(\Lambda_1)D(\Lambda_2) = D(\Lambda_3)$, where $D(\Lambda)$ is a representation of $\Lambda$ that satisfies the Lorentz Lie Algebra.</div>

Consider a scalar field; after the Canonical Quantization, we achieve the particle states with spin 0! Starting from the Vector Field, we have particle states with spin 1! Clearly, these are not the only spins that we observe in reality and we thus look for other kinds of fields, characterized by their behavior under the Lorentz Transformations. Thus the motivation to look for different representations of the Lorentz Lie Algebra comes from the fact that, in QFT we aim to study all those fields that are physically relevant. The physical relevance of these fields is captured by definition 2.1, the way they transform under the L.Ts obeying the Lorentz Lie Algebra.

_Why is Lorentz Lie Algebra considered the fundamental physical relation that needs to be obeyed by any representation?_ One answer could be that such an algebra results in representations (thus fields) that give out all the physically observed spin particles upon quantization. (With great advantages come the great troubles of having mathematically infinitely many fields that might have not been observed yet in their quantized forms viz. particles, like say gravitino?). 

_As we saw in the Special Theory of Relativity Course of Fall 2022, there's a way to directly see all the finite dimensional representations of the Lorentz Lie Algebra labeled by their resultant quantum spins. See Chapter-33, Pg-211, QFT by Srednicki._

Let's study the fields we already know, and place them in the picture of representation theory.

### The Fundamental Representation of the Lorentz Group

---

#### Scalar Fields.

Under  
$x'^\mu \rightarrow x^\mu = \Lambda^\mu_{\ \nu} x'^\nu$

$$
\phi'(x) = \phi(\Lambda^{-1}x)
$$

i.e. the scalar field essentially follows the same old field, hence called scalar.

$$
\begin{aligned}
\phi'(x^\mu)
&= \phi\bigl((\delta^\mu_{\ \nu}-\omega^\mu_{\ \nu})x^\nu\bigr) \\
&= \phi(x^\mu - \omega^\mu_{\ \nu}x^\nu) \\
&= \phi(x^\mu) - \omega^\mu_{\ \nu}x^\nu \partial_\mu \phi(x) \\
\delta\phi
&= -\omega^\rho_{\ \nu} x^\nu \partial_\rho \phi(x)
\end{aligned}
$$

Using the generators, write,

$$
\begin{aligned}
\omega^\rho_{\ \nu}
&= \frac{1}{2}\Omega_{\alpha\beta}(M^{\alpha\beta})^\rho_{\ \nu} \\
\delta\phi
&= \frac{1}{2}\Omega_{\alpha\beta}
\left(x^\beta\partial^\alpha - x^\alpha\partial^\beta\right)\phi
\end{aligned}
$$

Define,

$$
L^{\alpha\beta}
= x^\alpha\partial^\beta - x^\beta\partial^\alpha
$$

Thus,

$$
\phi'(x)
= \left(1+\frac{1}{2}\Omega_{\alpha\beta}L^{\alpha\beta}\right)\phi(x)
$$

<span style="color:purple"><strong>$L^{\alpha\beta}$ satisfies the Lorentz Lie Algebra!</strong></span>

$$
\phi'(x) = D(\Lambda)\phi(x)
$$

with,

$$
D(\Lambda)=
\begin{cases}
\displaystyle
\left(1+\frac{1}{2}\Omega_{\alpha\beta}L^{\alpha\beta}\right),
& \text{infinitesimal transformations} \\[1em]
\displaystyle
e^{\frac{1}{2}\Omega_{\alpha\beta}L^{\alpha\beta}},
& \text{finite transformations}
\end{cases}
$$

<span style="color:purple"><strong>
We thus realize the scalar representation of the Lorentz group (which is infinite
dimensional) on the space of fields, with generators $L^{\alpha\beta}$ that satisfy
the Lorentz Lie Algebra.
</strong></span>

---

#### Vector Fields

Under Lorentz transformations,

$$
A'^{\mu}(x) = \Lambda^\mu_{\ \nu} A^\nu(\Lambda^{-1}x)
$$

From the fundamental and scalar representations we have,

$$
\begin{aligned}
A'^\mu(x)
&=
\left(\delta^\mu_{\ \nu}
+ \frac{1}{2}\Omega_{\alpha\beta}(M^{\alpha\beta})^\mu_{\ \nu}\right)
\left(1+\frac{1}{2}\Omega_{\alpha\beta}L^{\alpha\beta}\right)
A^\nu(x) \\[0.5em]
&=
\delta^\mu_{\ \nu}
+ \frac{1}{2}\Omega_{\alpha\beta}
\left((M^{\alpha\beta})^\mu_{\ \nu}
+ L^{\alpha\beta}\delta^\mu_{\ \nu}\right)
+ \mathcal{O}(\Omega^2) \\[0.5em]
&\equiv
\delta^\mu_{\ \nu}
+ \frac{1}{2}\Omega_{\alpha\beta}(J^{\alpha\beta})^\mu_{\ \nu}
\end{aligned}
$$

where,

$$
(J^{\alpha\beta})^\mu_{\ \nu}
= (M^{\alpha\beta})^\mu_{\ \nu}
+ L^{\alpha\beta}\delta^\mu_{\ \nu}
$$

We write,

$$
A'^\mu(x) = D(\Lambda)^\mu_{\ \nu} A^\nu(x)
$$

with,

$$
D(\Lambda)=
\begin{cases}
\displaystyle
\left(1+\frac{1}{2}\Omega_{\alpha\beta}J^{\alpha\beta}\right),
& \text{infinitesimal transformations} \\[1em]
\displaystyle
e^{\frac{1}{2}\Omega_{\alpha\beta}J^{\alpha\beta}},
& \text{finite transformations}
\end{cases}
$$

<span style="color:purple"><strong>
We thus realize the vector representation of the Lorentz group on the space of
fields with generators $J^{\alpha\beta}$ satisfying the Lorentz Lie Algebra.
</strong></span>

From the previous two sections we deduce a (one-to-one?) correspondence between
representations of the Lorentz group and the physical fields we wish to study.

This motivates the search for further representations. In such a hunt, Dirac made
use of the Clifford algebra to obtain the *spinor representation*, giving rise to
a new class of QFTs (historically the order may be reversed).

---

#### Spinor Fields

Introduce the $\gamma$-matrices satisfying

$$
\{\gamma^\mu,\gamma^\nu\} = 2\eta^{\mu\nu}I
$$

Define

$$
S^{\mu\nu}
:= \frac{i}{4}[\gamma^\mu,\gamma^\nu]
$$

<span style="color:purple"><strong>
$S^{\mu\nu}$ satisfies the Lorentz Lie Algebra!
</strong></span>

This gives a finite-dimensional representation of the Lorentz group.

Spinor (Dirac) fields in four dimensions are written as

$$
\Psi =
\begin{pmatrix}
\psi_1 \\
\psi_2 \\
\psi_3 \\
\psi_4
\end{pmatrix}
$$

Under Lorentz transformations,

$$
\Psi'(x) = S[\Lambda]\Psi(\Lambda^{-1}x)
$$

with,

$$
S[\Lambda]=
\begin{cases}
\displaystyle
\left(1+\frac{1}{2}\Omega_{\alpha\beta}S^{\alpha\beta}\right),
& \text{infinitesimal transformations} \\[1em]
\displaystyle
e^{\frac{1}{2}\Omega_{\alpha\beta}S^{\alpha\beta}},
& \text{finite transformations}
\end{cases}
$$

Thus,

$$
\Psi'(x) = D(\Lambda)\Psi(x)
$$

with,

$$
D(\Lambda)=
\begin{cases}
\displaystyle
\left(1+\frac{1}{2}\Omega_{\alpha\beta}\Xi^{\alpha\beta}\right),
& \text{infinitesimal transformations} \\[1em]
\displaystyle
e^{\frac{1}{2}\Omega_{\alpha\beta}\Xi^{\alpha\beta}},
& \text{finite transformations}
\end{cases}
$$

where,

$$
(\Xi^{\alpha\beta})^\mu_{\ \nu}
= (S^{\alpha\beta})^\mu_{\ \nu}
+ L^{\alpha\beta}\delta^\mu_{\ \nu}
$$

<span style="color:purple"><strong>
We thus realize the spinor (Dirac) representation of the Lorentz group on the space
of fields with generators $\Xi^{\alpha\beta}$ satisfying the Lorentz Lie Algebra.
</strong></span>