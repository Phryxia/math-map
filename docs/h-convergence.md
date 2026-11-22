# H 수렴

# 개요

**H 수렴(H-convergence)** 은 계수가 바뀌는 확산 방정식의 열에서, 해와 흐름의 극한이 따르는 방정식으로 계수의 극한을 정하는 수렴이다. 전도율 $1$ 인 재료와 $4$ 인 재료를 얇은 칸마다 나누어 채우되 칸 안의 두 재료의 비율이 막대의 위치마다 다르면, 주기가 없어서 [균질화](homogenization.md)의 셀 문제를 세울 수 없다.

H 수렴은 이런 계수의 열에도 극한 계수를 정한다. 칸이 얇아지면 막대는 그 극한 계수를 가진 한 재료처럼 열을 전한다.

# 직관

길이 $1$ 인 막대를 폭 $1/k$ 인 칸으로 나눈다. 위치 $x$ 근처의 칸은 앞쪽 비율 $x$ 만큼을 전도율 $1$ 인 재료로, 나머지를 전도율 $4$ 인 재료로 채운다. 왼쪽 끝의 칸은 거의 전부 전도율 $4$ 이고 오른쪽 끝의 칸은 거의 전부 전도율 $1$ 이다.

이 전도율을 $a_k(x)$ 라 한다. 칸마다 비율이 달라서 $a_k$ 는 주기함수가 아니다.

방정식 $-(a_ku_k')'=f$, $u_k(0)=u_k(1)=0$ 을 본다. 흐름 $\sigma_k=a_ku_k'$ 은 $-\sigma_k'=f$ 를 만족하므로, $F(x)=\int_0^xf(t)\thinspace dt$ 로 두면 $\sigma_k=c_k-F$ 다. 기울기는 $u_k'=(c_k-F)/a_k$ 이고, 양 끝의 경계조건에서 $\int_0^1u_k'=0$ 이므로 상수 $c_k$ 는 다음과 같다.

$$
c_k=\frac{\int_0^1F(x)/a_k(x)\thinspace dx}{\int_0^11/a_k(x)\thinspace dx}
$$

$k$ 가 커지면 $1/a_k$ 는 칸 하나 위의 평균으로 [약하게 수렴](weak-convergence.md)한다. 위치 $x$ 근처의 칸에서 그 평균은 $x\cdot 1+(1-x)\cdot\tfrac14=\tfrac{1+3x}{4}$ 다. 그러므로 $c_k$ 는 어떤 상수 $c$ 로 가고, $\sigma_k$ 는 $\sigma=c-F$ 로 고르게 수렴하고, $u_k'$ 은 $\sigma\cdot\tfrac{1+3x}{4}$ 로 약하게 수렴한다.

극한 $u$ 는 $\sigma=\tfrac{4}{1+3x}u'$ 과 $-\sigma'=f$ 를 만족한다. 막대는 전도율 $a^\ast(x)=4/(1+3x)$ 인 한 재료처럼 행동한다. $x=1/2$ 에서 이 값은 균질화의 층 막대와 같은 $8/5$ 이고, $a_k$ 의 칸 평균 $4-3x$ 와는 다르다.

이 계산은 주기를 쓰지 않았다. 극한 계수는 해의 극한과 흐름의 극한을 잇는 관계로 정해졌다.

# 정의

## 계수의 집합

$\Omega\subset\mathbb R^n$ 은 유계 열린집합이고 $0\lt\alpha\le\beta$ 다. $M(\alpha,\beta;\Omega)$ 는 다음을 거의 모든 $x\in\Omega$ 와 모든 $\xi\in\mathbb R^n$ 에서 만족하는 가측 행렬값 함수 $A:\Omega\to\mathbb R^{n\times n}$ 의 집합이다.

$$
A(x)\xi\cdot\xi\ge\alpha\vert\xi\vert^2,\qquad A(x)\xi\cdot\xi\ge\beta^{-1}\vert A(x)\xi\vert^2
$$

둘째 조건에서 $\vert A(x)\xi\vert\le\beta\vert\xi\vert$ 가 나온다. 대칭인 $A$ 에서는 두 조건이 고윳값이 $\lbrack\alpha,\beta\rbrack$ 에 든다는 것과 동치다. 직관 절의 $a_k$ 는 값이 $1$ 과 $4$ 사이이므로 $M(1,4;(0,1))$ 에 든다.

## H 수렴

$A_k,A^\ast\in M(\alpha,\beta;\Omega)$ 라 하자. 모든 $f\in H^{-1}(\Omega)$ 에서 다음이 성립하면 $A_k$ 가 $A^\ast$ 로 **H 수렴한다** 고 한다[^1]. $u_k\in H^1_0(\Omega)$ 는 $-\mathrm{div}(A_k\nabla u_k)=f$ 의 해이고, $u$ 는 $-\mathrm{div}(A^\ast\nabla u)=f$ 의 $H^1_0(\Omega)$ 해다. 두 해는 [Lax–Milgram 정리](lax-milgram.md)로 하나씩 있다.

$$
u_k\rightharpoonup u\ \text{ in } H^1_0(\Omega),\qquad A_k\nabla u_k\rightharpoonup A^\ast\nabla u\ \text{ in } L^2(\Omega)^n
$$

$A^\ast$ 를 $A_k$ 의 **H 극한(H-limit)** 이라 한다. 직관 절의 계산은 $a_k$ 가 $a^\ast(x)=4/(1+3x)$ 로 H 수렴한다는 것을 보인다. $f\in H^{-1}(0,1)$ 은 $g\in L^2$ 에 대해 $f=-g'$ 꼴이므로 $F$ 자리에 $-g$ 를 넣으면 같은 계산이 된다.

# 성질

## 콤팩트성 정리

정리(Murat–Tartar). $M(\alpha,\beta;\Omega)$ 의 모든 열은 H 수렴하는 부분열을 가지고, 그 H 극한은 $M(\alpha,\beta;\Omega)$ 에 든다[^1].

증명의 요지. 해 $u_k$ 와 흐름 $A_k\nabla u_k$ 의 노름은 $f$ 의 노름의 상수배로 유계다. $H^{-1}(\Omega)$ 가 가분이므로 대각선 논법으로 모든 $f$ 에서 해와 흐름이 함께 약하게 수렴하는 부분열을 고른다. 전치 계수 $A_k^\top$ 의 방정식을 풀어 $\nabla w_k^j\rightharpoonup e_j$ 인 시험 함수 $w_k^j$ 를 만들고, 그 흐름 $A_k^\top\nabla w_k^j$ 의 약극한 $\eta^j$ 를 $A^\ast$ 의 $j$ 번째 행으로 둔다. [div–curl 보조정리](div-curl-lemma.md)를 $A_k\nabla u_k\cdot\nabla w_k^j=\nabla u_k\cdot A_k^\top\nabla w_k^j$ 의 두 쪽에 쓰면 흐름의 극한의 $j$ 성분이 $\eta^j\cdot\nabla u$ 다.

## 유일성과 국소성

H 극한은 하나다. $A_k$ 와 $B_k$ 가 각각 $A^\ast$ 와 $B^\ast$ 로 H 수렴하고 열린집합 $\omega\subset\Omega$ 에서 $A_k=B_k$ 이면 $\omega$ 에서 $A^\ast=B^\ast$ 다[^1]. 그러므로 H 극한은 $\Omega$ 와 경계조건에 의존하지 않고, 점 근처의 계수만으로 정해진다.

## 에너지의 수렴

$A_k$ 가 $A^\ast$ 로 H 수렴하면 해의 에너지가 수렴한다.

$$
\int_\Omega A_k\nabla u_k\cdot\nabla u_k\thinspace dx\to\int_\Omega A^\ast\nabla u\cdot\nabla u\thinspace dx
$$

증명. 방정식에 $u_k$ 를 시험 함수로 넣으면 왼쪽은 $\langle f,u_k\rangle$ 이다. $u_k\rightharpoonup u$ 이므로 이 값은 $\langle f,u\rangle$ 로 가고, 그것은 극한 방정식에 $u$ 를 넣은 오른쪽이다.

## 1차원의 H 극한

$n=1$ 에서 $a_k$ 가 H 수렴할 필요충분조건은 $1/a_k$ 가 $L^\infty$ 에서 약별 수렴하는 것이고, H 극한은 그 약별 극한의 역수다.

$$
a^\ast=\Bigl(\mathop{\mathrm{w^\ast\text{-}lim}}\_{k\to\infty}\frac{1}{a_k}\Bigr)^{-1}
$$

충분조건은 직관 절의 계산이다. $1/a_k$ 는 $L^\infty$ 에서 $1/\alpha$ 로 유계이므로 [Banach–Alaoglu 정리](banach-alaoglu.md)로 약별 수렴하는 부분열을 가지고, 1차원의 콤팩트성 정리는 여기서 바로 나온다. $a_k$ 자신의 약별 극한은 H 극한이 아니다. 직관 절에서 앞의 것은 $4-3x$ 이고 뒤의 것은 $4/(1+3x)$ 다.

## 다른 수렴과의 비교

$A_k$ 가 거의 모든 점에서 $A$ 로 수렴하면 $A_k$ 는 $A$ 로 H 수렴한다[^2]. 계수가 진동하지 않으면 H 극한은 점별 극한이다.

정리. $A_k$ 가 대칭이고 $A_k$ 와 $A_k^{-1}$ 이 각각 $A^+$ 와 $(A^-)^{-1}$ 로 약별 수렴하면, H 극한 $A^\ast$ 는 대칭이고 이차형식의 순서로 다음을 만족한다[^2].

$$
A^-\le A^\ast\le A^+
$$

균질화의 Voigt–Reuss 경계는 주기 계수에서의 이 부등식이다. 1차원에서는 왼쪽이 등호다.

## 주기 계수의 H 극한

$A$ 가 $\lbrack 0,1)^n$ 주기의 $M(\alpha,\beta;\mathbb R^n)$ 원소이면 $A(x/\varepsilon)$ 은 $\varepsilon\to 0$ 에서 셀 문제로 정한 상수 행렬 $A^\ast$ 로 H 수렴한다. 균질화 문서의 균질화 정리가 이 진술이고, 그 증명의 진동 시험 함수 $x_j+\varepsilon\chi_j(x/\varepsilon)$ 이 콤팩트성 정리의 $w_k^j$ 다.

## 대칭 계수와 G 수렴

Spagnolo 는 대칭 계수에서 해의 수렴만으로 **G 수렴(G-convergence)** 을 정의했다[^3]. 대칭 계수에서 G 수렴은 H 수렴과 동치다. De Giorgi 와 Spagnolo 는 이것이 에너지 범함수 $\int A_k\nabla v\cdot\nabla v$ 의 Γ 수렴(Γ-convergence)과도 동치임을 보였다[^4].

비대칭 계수에서는 해의 수렴만으로 극한 계수가 하나로 정해지지 않는다. 상수 반대칭 행렬 $B$ 에서 $\mathrm{div}(B\nabla v)=0$ 이므로 상수 계수 $A^\ast$ 와 $A^\ast+B$ 는 같은 해를 준다. H 수렴의 정의가 흐름의 수렴을 함께 요구하는 것은 이 때문이다.

# 활용

- 최적 설계의 완화. 전도율 $\alpha$ 와 $\beta$ 인 두 재료를 정해진 양만큼 써서 가장 잘 전도하는 구조를 찾는 문제는 최소화 열이 점점 잘게 섞여 최적 모양이 없을 수 있다. 섞인 계수의 H 극한 전체를 허용하면 완화된 문제는 최소점을 가진다. 국소 부피비 $\theta$ 에서 가능한 H 극한의 집합은 Murat–Tartar 와 Lurie–Cherkaev 가 고윳값의 부등식으로 정했고, 그 경계에 [Hashin–Shtrikman 경계](hashin-shtrikman-bounds.md)가 나타난다[^5]. 위상 최적화의 균질화 방법이 이 완화를 쓴다.
- [확률적 균질화](stochastic-homogenization.md). 정상 에르고딕 무작위 계수 $A(x/\varepsilon,\omega)$ 는 거의 모든 $\omega$ 에서 상수 행렬로 H 수렴한다. Papanicolaou–Varadhan 과 Kozlov 의 확률적 균질화(stochastic homogenization)가 이 진술이다.
- 진동 계수의 극한 계산. 층 구조, 적층의 적층, 반복 적층처럼 주기가 없는 미세 구조의 유효 계수를 국소성과 1차원 공식으로 계산한다. 적층 재료의 H 극한은 층에 수직인 방향에서 조화평균, 나란한 방향에서 산술평균을 가진다[^2].

[^1]: F. Murat, L. Tartar, "H-convergence", in A. Cherkaev, R. Kohn (eds.), *Topics in the Mathematical Modelling of Composite Materials*, Birkhäuser (1997), 21–43.

[^2]: L. Tartar, *The General Theory of Homogenization*, Springer (2009).

[^3]: S. Spagnolo, "Sulla convergenza di soluzioni di equazioni paraboliche ed ellittiche", *Annali della Scuola Normale Superiore di Pisa* **22** (1968), 571–597.

[^4]: E. De Giorgi, S. Spagnolo, "Sulla convergenza degli integrali dell'energia per operatori ellittici del secondo ordine", *Bollettino dell'Unione Matematica Italiana* (4) **8** (1973), 391–411.

[^5]: G. Allaire, *Shape Optimization by the Homogenization Method*, Springer (2002).

# 연관 문서

## 선수지식

- [균질화](homogenization.md)

## 더 알아보기

- [확률적 균질화](stochastic-homogenization.md)

#functional_analysis #analysis
