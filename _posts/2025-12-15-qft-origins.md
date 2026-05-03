---
title: Origins
layout: default
tags: QFT
categories: Farm
---

The goal of this article is to communicate a flavor of Quantum Field theory, while making some crucial technical calculations accessible to a younger audience. This is an article that I would have liked to read back in third year of my integrated master's. One of the most profound ideas in QFT, is that particles are seen as quantized fields, and field are seen as represenations of Lorentz Group in some capacity. There's a great saying by Wigner, which is quite literally true, 
> Particles are the irreducible representation of the Poincare group.

But before we begin to digest the beauty of this, we must confront the challenges amidst which this theory was born as a beacon of hope.

Quantum field theory was introduced a new paradigm in physics in the 20th century. It is a multi-particle, local, quantum mechanical and a lorentz invariant microscopic theory of physics. Let's discuss the origins of these features.

## Special relativity $\times$ Quantum mechanics

$$E = m c^2 \quad\longleftrightarrow ~ \quad \Delta E \ge \frac{\hbar c}{L}$$

Combining mass-energy equivalence and uncertainity principle, means that whenever and wherever the fluctuations in energy are high enough there is a real possibility of particles getting created and annhilated in vacuum. That is, the number of particles need not be conserved in a conventional sense. This is a stark difference from the quantum mechanics we are used to! The use of familiar 1-particle or any fixed particle Schrodinger equation only lead to inconsistent results. For example, we get acausal propagators and an infinite tower of negative energy states. We will describe these failures shortly by indeed brute forcing relativity directly into the fixed particle Quantum Mechanics.

More succinctly, the particles and antiparticles begin to pop up at roughly the length scale of Compton wavelength, $\lambda = \frac{\hbar}{mc}$. The single-particle theory breaks down below this length scale. Just like how the particle nature itself starts to wind down at de Broglie wavelegnth allowing for a wavelike behavior. 

These aspects of particle creations, sometimes practically <em>vritual</em> due their short lifespan ($\Delta E \sim \frac{1}{\Delta t}$) and the existence of anti-particles is predicted quite formally by quantum field theory. Especially through the pertubration theory we see that such a process can be seemingly endless. Although, the results QFT are usually asymptotic, even if they might not converge.

<div class="proposition">
    <p style="margin-left: 10px; margin-top: -30px; font-variant: small-caps ">Acausal propagators.</p>
</div>
<div class="proof">
    One usually doesn't care about this in a Quantum Mechanics course, but in the context of relativistic quantum mechanics, there seem to exist a spaclike propagation of information. Replacing the usual energies with the realtivistic ones doesn't seem to make the problem go away either.
 
For example, consider the amplitude for a free particle to propagate from $x_0$ to $x$: 
$$ U(t) = \braket{x  \mid e^{-iHt} \mid x_0} $$  
with a non-relativistic energy $E = p^2 /2m$ would give us,
$$
U(t) \sim e^{im\left( x-x_0 \right) ^2 /2t}
$$   
which is non-zero for all $x,t$! Changing $E$ to $\sqrt{p^2 + m^2}$ still gives us a non-zero behavior outside the light-cone,
$$ 
U(t) \sim e^{-m\sqrt{x^2-t^2}}.
$$  

This problem infact doesn't go away imemdiately even in QFT, but the existence of <em>anti-matter</em>  cancels out any non-zero amplitude due to the <em>matter</em> . Infact this is one of the ways to theoretically understand the existence of anti-matter, to preserve casuality in Quantum Mechanics.

Infact the principles of causality and locality are quite interconnected in relativity. It's precisely the non-local nature of the above propagator that creates the eventual breakdown in causality. This is why efforts to reconcile Relativity and Quantum mechanics using an Hamiltonian like,
$$ H = \sqrt{p^2+m^2} = m\left( 1+ \frac{p^2}{m^2} \right) ^{1 /2} = m + \frac{p^2}{2m} - \frac{p^4}{8m ^3} + \frac{p^6}{16m^5} + \cdots $$
fail.
</div>
<div class="proposition">
    <p style="margin-left: 10px; margin-top: -30px; font-variant: small-caps "> Infinite negative Energy states.</p>
</div>
<div class="proof">
Instead one can approach using the square of the Hamiltonian to modify the Schrodinger equation, $H^2 = p^2 + m^2$   as:
$$
\begin{align*}
   \frac{\partial ^2}{\partial t^2} \ket{\psi(t)} = H^2\ket{\psi(t)}  \\ 
\left[ \frac{\partial ^2}{\partial t^2} -\nabla ^2+m^2 \right] \Psi\left( \overline{x},t \right) &= 0
.\end{align*}
$$  
But this leads immediately to the possibilities of unbounded negative energy states. However there are some ad-hoc interpretations of such negative energies and even negative probability densitites introdudcing anti-particles, rather than a first-principle solutions.
<br>
<br>

[Expand KG approach, interpretations]
<br>
<br>


Dirac tried to reconcile this more elgantly when he proposed an equation involving Clifford algebra, and proposed the role of anti-particles. These issues are discussed in standard texts like Sakurai's <em>Modern Quantum Mechanics</em>.  
$$ \left( i\gamma^\mu\partial_\mu - m \right) \Psi\left( \overline{x},t \right) = 0. $$ 

[Expand Dirac's approach]
</div>

<div class="proposition">
    <p style="margin-left: 10px; margin-top: -30px; font-variant: small-caps ">Dirac's Blackbody treatment.</p> 
</div>
<div class="proof">
    Dirac also initiated a multi-particle approach to quantum-mechanics (as opposed to a fixed-particle approach) to successfully explain some aspects of Balckbody radiation! This is often credited to intiate the idea of canonical quantization and quantum field theory! The multi-particle approach manifests as treating different frequences as exciations to a single quantum harmonic oscillator!
<br>
<br>

[Expand on the approach]
</div>

<div class="proposition">
    <p style="margin-left: 10px; margin-top: -30px; font-variant: small-caps ">Fields for a local theory.</p>
</div>
<div class="proof">
As we had already noted, locality is almost a prerequisite for causality. We replace wavefunctions with fields, and these will be our dynamical variables. This introduces infintie degrees of freedom into the theory! Further, for each kind of particle in nature, there is a field associated to it. This is more deeply connected to the representation theory as we will see later.
</div>

<div class="proposition">
    <p style="margin-left: 10px; margin-top: -30px; font-variant: small-caps ">Lorentz Invariance -- Space and Time on
        an equal footing.
    </p>
</div>
<div class="proof">
As already learned heavily in special relativity, our theories must be covariant, and much of our efforts would indeed be in this directions. Also, trying to place $x,t$ on an equal footing by introducting a time operator would lead to Hamiltonian being unbounded from below again!     
</div>

Putting all this together, it has been fruitful over the last century to repeat quantum mechanics, perturbative and non-pertubative using the
idea of fields - instead of single particle wavefuntions, while working mostly with Lorentz invaraint equations for their
dynamics. QFT produced some remarkable results over the journey, and here are some fundamental ones:

- <span class="scshape">Scaterring cross-sections </span> <span class="greyed-out">which are HEP's experimental core,
    are calculated upto a remarkable precision. We will indeed discuss in the end of this article, how QFT relates the
    abstract theory and computations to experimental predictions.</span>

- <span class="greyed-out">QFT as a description of the fundamental interactions between elementary particles, when viewed from the naive
perspective of _potentials_, does indeed recover the </span><span class="scshape">Coloumb potential</span><span class="greyed-out">! This will occupy us
in the second article.</span>

- <span class="greyed-out">One of the most accurate predictions of theoretical physics come from the QFT's calculation of the </span><span
    class="scshape">anomalous magnetic moment</span> of electron. <span class="greyed-out">This occurs as a loop corrections inside the realm of feynman
diagrams and perturbation theory. Third article will communicate this from the perspective of</span> <span
    class="scshape">Renormalization</span>.






