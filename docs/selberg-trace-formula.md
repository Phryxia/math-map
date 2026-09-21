# Selberg 대각합 공식

# 개요

$L^2(\Gamma\backslash\mathbb H)$ 의 이산 스펙트럼을 이루는 Maass 형식의 고윳값 $\lambda_j=\tfrac14+r_j^2$ 에는 닫힌 형태의 표현이 없다. $\Gamma=\mathrm{SL}\_2(\mathbb Z)$ 의 첫 고윳값 $r_1\approx9.533$ 도 수치 계산의 결과다.

Selberg 대각합 공식은 개별 고윳값 대신 고윳값 전체에 걸친 합을 곡면의 닫힌 측지선으로 표현한다.

$$
\underbrace{\sum_j h(r_j)}\_{\text{스펙트럼}}\thickspace+\thickspace\text{(연속 기여)}\thickspace=\thickspace\underbrace{\frac{\mathrm{vol}}{4\pi}\int_{-\infty}^\infty h(r)\thinspace r\tanh(\pi r)\thinspace dr+\sum_{\lbrace\gamma\rbrace}\sum_{k\ge1}\frac{\ell_\gamma\thinspace g(k\ell_\gamma)}{2\sinh(k\ell_\gamma/2)}}\_{\text{기하}}
$$

왼쪽은 해석, 오른쪽은 [Riemann 계량](riemannian-metrics.md)이 정하는 측지선의 길이다. 이 등식에서 Weyl 법칙, 소측지선 정리, Maass 형식의 존재가 따라 나온다.

공식의 구조는 소수 정리의 명시공식과 같다. 거기서 $\zeta$ 의 영점과 소수의 거듭제곱이 짝을 이루듯, 여기서는 Laplace 고윳값과 닫힌 측지선이 짝을 이룬다. Selberg 는 이 유비를 따라 [Riemann 가설](riemann-hypothesis.md)이 성립하는 zeta 함수를 만들었다.

# 직관

## Poisson 합 공식

원 $\mathbb R/L\mathbb Z$ 에서 Laplace 고윳값은 $n\in\mathbb Z$ 마다 $(2\pi n/L)^2$ 이고, 닫힌 측지선은 원을 $m$ 바퀴 도는 길이 $mL$ 의 곡선이다. 두 자료를 잇는 등식이 [Poisson 합 공식](poisson-summation.md)이다.

$$
\sum_{n\in\mathbb Z}h\Big(\frac{2\pi n}{L}\Big)=L\sum_{m\in\mathbb Z}g(mL),\qquad
g(u)=\frac1{2\pi}\int h(r)e^{-iru}\thinspace dr
$$

Selberg 공식은 이것을 곡률 $-1$ 의 곡면으로 옮긴 것이고, 평평한 경우에 없던 두 항인 부피 항과 첨점의 연속 기여가 추가된다.

## 열핵 대각합의 두 전개

점 쌍 불변 핵 $k(z,w)$ 에서 자기동형 핵

$$
K(z,w)=\sum_{\gamma\in\Gamma}k(z,\gamma w)
$$

를 만들고 $\int_{\Gamma\backslash\mathbb H}K(z,z)\thinspace d\mu$ 를 두 방식으로 계산한다. $K$ 를 고유함수로 전개하면 $\sum_j h(r_j)$ 가 나오고, 여기서 $h$ 는 $k$ 의 Selberg/Harish-Chandra 변환이다. $\Gamma$ 의 원소를 공액류로 묶어 각 류의 기여를 계산하면 측지선 항이 나온다. 같은 양의 두 표현이므로 등식이 성립한다.

## 공액류와 측지선의 대응

$\Gamma\subset\mathrm{PSL}\_2(\mathbb R)$ 의 원소는 대각합으로 분류된다. $|\mathrm{tr}\gamma|\gt 2$ 인 쌍곡 원소는 $\mathbb H$ 위에서 한 측지선을 따라 평행이동하고, 이동거리 $\ell_\gamma$ 는

$$
2\cosh\frac{\ell_\gamma}2=|\mathrm{tr}\thinspace\gamma|
$$

로 정해진다. 몫 곡면 $\Gamma\backslash\mathbb H$ 에서 이 측지선은 닫힌 고리가 되므로

$$
\lbrace\Gamma\ \text{의 쌍곡 공액류}\rbrace\ \longleftrightarrow\ \lbrace\text{닫힌 측지선}\rbrace
$$

이고, 원시 측지선을 $k$ 바퀴 도는 것이 $\gamma^k$ 에 대응한다. 항등원의 기여가 부피 항, 타원 원소가 유한 위수의 기여, 포물 원소가 첨점의 기여를 준다.

## 첨점의 기여

$\Gamma_0(N)$ 같은 비콤팩트 경우에는 연속 스펙트럼이 있어 두 전개가 각각 발산한다. 발산을 상쇄시키는 정규화를 거치면 공식에

$$
-\frac1{4\pi}\int_{-\infty}^\infty h(r)\thinspace\frac{\varphi'}{\varphi}\Big(\frac12+ir\Big)dr+\frac14h(0)\varphi\Big(\frac12\Big)
$$

가 들어온다. $\varphi$ 는 Eisenstein 급수의 산란 행렬식이고 $\mathrm{SL}\_2(\mathbb Z)$ 에서는 $\varphi(s)=\xi(2s-1)/\xi(2s)$ 다. [Riemann zeta 함수](riemann-zeta.md)가 대각합 공식 안에 직접 등장하는 자리다.

# 정의

## 쌍곡 곡면과 Laplace 작용소

$\Gamma\subset\mathrm{PSL}\_2(\mathbb R)$ 는 유한 공부피 이산군, $X=\Gamma\backslash\mathbb H$ 는 쌍곡 곡면, $\Delta=-y^2(\partial_x^2+\partial_y^2)$ 는 Laplace 작용소다. 이산 스펙트럼을 $\lambda_j=\tfrac14+r_j^2$ 로 쓴다.

검사함수 $h(r)$ 는 $|\mathrm{Im}\thinspace r|\le\tfrac12+\delta$ 에서 정칙이고 $h(r)=O((1+|r|)^{-2-\delta})$ 인 짝함수이며, 그 Fourier 변환은 $g(u)=\frac1{2\pi}\int h(r)e^{-iru}dr$ 다.

## 콤팩트 곡면의 공식

$X$ 가 콤팩트이고 $\Gamma$ 에 타원 원소가 없으면

$$
\sum_{j\ge0}h(r_j)=\frac{\mathrm{vol}(X)}{4\pi}\int_{-\infty}^{\infty}h(r)\thinspace r\tanh(\pi r)\thinspace dr
+\sum_{\lbrace\gamma\rbrace_{\mathrm{prim}}}\sum_{k=1}^{\infty}\frac{\ell_\gamma}{2\sinh(k\ell_\gamma/2)}\thinspace g(k\ell_\gamma)
$$

다[^1]. 첫 항은 항등원의 기여, 둘째 항은 원시 닫힌 측지선 $\gamma$ 와 그 반복의 기여다.

## 첨점이 있는 경우

$\Gamma=\Gamma_0(N)$ 처럼 첨점이 있으면 왼쪽에서 연속 스펙트럼의 기여를 빼고 오른쪽에 포물 원소와 산란 행렬의 항을 더한다.

$$
\sum_jh(r_j)-\frac1{4\pi}\int h(r)\frac{\varphi'}{\varphi}\Big(\tfrac12+ir\Big)dr
=\text{(항등)}+\text{(쌍곡)}+\text{(타원)}+\text{(포물)}
$$

## Selberg zeta 함수

원시 닫힌 측지선 전체에 대해

$$
Z(s)=\prod_{\lbrace\gamma\rbrace_{\mathrm{prim}}}\prod_{n=0}^{\infty}\big(1-e^{-(s+n)\ell_\gamma}\big),\qquad \mathrm{Re}(s)\gt 1
$$

로 정의한다. 측지선이 소수의 자리를, $\ell_\gamma$ 가 $\log p$ 의 자리를 차지한 Euler 곱이다. 대각합 공식은 $Z$ 가 $\mathbb C$ 전체로 해석적 연속되고 함수방정식을 가짐을 준다.

# 성질

## Weyl 법칙

$h$ 를 $[0,T]$ 의 특성함수에 가깝게 잡으면 콤팩트 곡면에서 고윳값 계수함수

$$
\char35{}\lbrace j:\ r_j\le T\rbrace=\frac{\mathrm{vol}(X)}{4\pi}T^2+O(T\log T)
$$

가 나온다. 주항은 부피에만 의존한다. $\Gamma_0(N)$ 같은 산술군에서는 연속 스펙트럼의 기여가 $O(T\log T)$ 에 머물러 이산 스펙트럼이 주항을 차지하므로 Maass 형식이 무한히 많다. 이것이 Maass 형식의 존재를 보이는 거의 유일한 방법이다.

비산술 격자에서는 사정이 다르다. Phillips–Sarnak 은 [Teichmüller 공간](teichmuller-space.md)에서 격자를 변형하면 Maass 형식이 연속 스펙트럼 속으로 녹아 사라진다고 예상했다.

## 소측지선 정리

$h$ 를 반대로 잡아 기하 쪽을 세면

$$
\char35{}\lbrace\text{원시 닫힌 측지선}:\ \ell_\gamma\le L\rbrace\ \sim\ \frac{e^L}{L}
$$

를 얻는다. 소수 정리 $\pi(x)\sim x/\log x$ 에 $x=e^L$ 을 넣은 꼴이며 증명 구조도 같다. $Z(s)$ 의 $s=1$ 에서의 단순 영점이 소수 정리에서 $\zeta(s)$ 의 극점 역할을 한다.

## Selberg zeta 의 영점

$Z(s)$ 의 자명하지 않은 영점은 $s=\tfrac12\pm ir_j$ 에 있다. $\lambda_j\ge0$ 이므로 $r_j$ 는 실수이거나 $|{\rm Im}\thinspace r_j|\le\tfrac12$ 인 순허수이고, 따라서

$$
\lambda_j\ge\tfrac14\ \Longrightarrow\ Z(s)\ \text{의 영점이 }\mathrm{Re}(s)=\tfrac12\ \text{위에 있다}
$$

콤팩트 곡면에서는 $\lambda_1\gt 0$ 만으로 예외 영점이 $[0,1]$ 의 실축 위 유한 개뿐임이 나온다. 영점이 자기수반 작용소의 스펙트럼에서 오므로, Hilbert–Pólya 가 $\zeta$ 에 대해 바라던 구조가 $Z$ 에서는 성립한다.

산술 곡면에서 $\lambda_1\ge\tfrac14$ 인지가 **Selberg 1/4 추측**이고, 증명되지 않았다[^2]. 현재 최선은 $\lambda_1\ge\tfrac{975}{4096}\approx0.238$ 다[^3]. 이 추측은 Ramanujan 추측의 아르키메데스 자리 판본이다.

## 길이 스펙트럼과 동일스펙트럼

공식은 Laplace 스펙트럼과 길이 스펙트럼이 서로를 결정함을 뜻한다. 그러나 어느 쪽도 곡면의 등거리류를 결정하지 못한다. Vignéras 와 Sunada 가 동일스펙트럼이면서 등거리가 아닌 쌍곡 곡면을 만들었고, Gordon–Webb–Wolpert 가 평면 영역에서 같은 예를 만들었다.

# 활용

## Maass 형식의 계산

Weyl 법칙은 고윳값의 개수를 주지만 위치를 주지 않는다. 실제 계산은 Hejhal 알고리즘처럼 Fourier 계수의 정합성을 이용하고, 대각합 공식은 유한 구간의 고윳값 개수를 독립으로 계산해 그 목록이 완전한지 대조하는 데 쓰인다.

## Arthur–Selberg 대각합 공식

$\mathrm{SL}\_2(\mathbb R)$ 를 일반 환원군 $G$ 로, $\Gamma\backslash\mathbb H$ 를 $G(\mathbb Q)\backslash G(\mathbb A)$ 로 바꾼 것이 Arthur–Selberg 대각합 공식이다. 기하 쪽은 궤도적분의 합, 스펙트럼 쪽은 자기동형 표현의 지표의 합이다.

$$
\sum_{\lbrace\gamma\rbrace}\mathrm{vol}\cdot O_\gamma(f)\thickspace=\thickspace\sum_\pi m(\pi)\thinspace\mathrm{tr}\thinspace\pi(f)
$$

두 군 $G,H$ 에 대해 공식을 세우고 기하 쪽을 맞추면 스펙트럼 쪽이 맞아 표현의 대응이 나온다. [Langlands 강령](langlands-program.md)의 함수성을 증명하는 주요 수단이며, 기하 쪽을 맞추는 데 필요한 등식이 기본 보조정리다. 비콤팩트성의 발산을 잘라 내는 Arthur 의 절단은 $\varphi'/\varphi$ 항의 일반화다.

## 양자 혼돈

분모 $\sinh(k\ell_\gamma/2)$ 는 긴 측지선의 기여를 지수적으로 줄이고, 그런 측지선의 개수는 $e^L/L$ 로 지수적으로 는다. 두 지수가 상쇄되어 공식이 수렴하며, 이 균형이 고윳값 통계를 결정한다.

혼돈계의 고윳값 간격은 랜덤 행렬 통계(GOE, Gaussian orthogonal ensemble)를 따르리라 예상되지만 산술 곡면은 Poisson 통계를 보인다. 원인은 Hecke 대칭에서 오는 측지선 길이의 큰 중복도다. Riemann zeta 영점의 간격이 GUE(Gaussian unitary ensemble)를 따른다는 Montgomery–Odlyzko 관측과 대비된다.

[^1]: A. Selberg, *Harmonic analysis and discontinuous groups in weakly symmetric Riemannian spaces*, J. Indian Math. Soc. **20** (1956). 표준 서술은 H. Iwaniec, *Spectral Methods of Automorphic Forms* (2판) 10–11장. 일반화는 J. Arthur, *An introduction to the trace formula* (Clay Math. Proc. 4, 2005).
[^2]: A. Selberg, "On the estimation of Fourier coefficients of modular forms", Proceedings of Symposia in Pure Mathematics VIII (1965), 1–15. $\lambda\_1\ge\tfrac14$ 추측의 원 진술이다.
[^3]: H. Kim, "Functoriality for the exterior square of GL(4) and the symmetric fourth of GL(2)", Journal of the AMS 16 (2003), 139–183. $\tfrac{975}{4096}$ 한계는 H. Kim 과 P. Sarnak 의 부록 2 에 있다.

# 연관 문서

## 선수지식

- [Eisenstein 급수와 스펙트럼 분해](eisenstein-series.md)
- [Maass 형식과 Laplace 스펙트럼](maass-forms.md)
- [Riemann 계량과 측지선](riemannian-metrics.md)

## 더 알아보기

- [기본 보조정리와 대각합 공식의 안정화](fundamental-lemma.md)
- [Jacquet–Langlands 대응과 사원수 대수 위의 형식](jacquet-langlands.md)

#number_theory #analysis #differential_geometry #theorem
