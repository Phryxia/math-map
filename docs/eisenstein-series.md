# Eisenstein 급수

# 개요

**Eisenstein 급수(Eisenstein series)** 는 $(m,n)\ne(0,0)$ 에 대해 $(mz+n)^{-k}$ 를 더해 얻는 [모듈러 형식](modular-forms.md)이다. 무게 $4$ 의 Eisenstein 급수를 정규화하면 $q$ 전개가 $1+240\sum_n\sigma_3(n)q^n$ 이고, 계수가 약수의 세제곱합이라 손으로 계산된다. 일반 모듈러 형식은 계수를 이렇게 적을 수 없다. Eisenstein 급수는 이런 명시적인 형식들을 곱하고 더해 다른 모듈러 형식을 만들게 하고, $E_4^3-E_6^2=1728\Delta$ 처럼 첨점형식까지 그 조합으로 얻는다.

# 직관

상반평면에서 $f(z+1)=f(z)$ 와 $f(-1/z)=z^kf(z)$ 를 함께 만족하는 [정칙함수](holomorphic-functions.md)를 만들려 한다. $e^{2\pi inz}$ 는 첫째 조건만 만족한다. 둘째 조건을 맞추려면 $z\mapsto-1/z$ 로 바꿔도 모양이 같은 식이 있어야 한다.

격자점 $(m,n)\ne(0,0)$ 전체에 대해 $(mz+n)^{-k}$ 를 더한 $G_k(z)$ 가 그런 식이다. $z$ 를 $-1/z$ 로 바꾸면 $(-m/z+n)^{-k}=z^k(nz-m)^{-k}$ 이고, $(m,n)\mapsto(n,-m)$ 은 격자점의 순서를 바꿀 뿐이므로 $G_k(-1/z)=z^kG_k(z)$ 다. $z\mapsto z+1$ 도 $(m,n)\mapsto(m,m+n)$ 으로 순서만 바꾼다. 급수는 $k\ge3$ 에서 절대수렴하고, 홀수 $k$ 에서는 $(m,n)$ 과 $(-m,-n)$ 의 항이 상쇄되어 $0$ 이므로 짝수 $k\ge4$ 만 남는다.

$n$ 에 대한 합을 먼저 하면 $q=e^{2\pi iz}$ 의 급수가 나오고, 상수항이 $1$ 이 되게 나누면

$$
E_4=1+240q+2160q^2+\cdots,\qquad E_6=1-504q-16632q^2-\cdots
$$

이다. $q^n$ 의 계수는 $240\sigma_3(n)$, $-504\sigma_5(n)$ 이고, $\sigma_{k-1}(n)$ 은 $n$ 의 약수의 $k-1$ 제곱의 합이다.

$E_4^3$ 과 $E_6^2$ 은 둘 다 무게 $12$ 이고 상수항이 $1$ 이다. 차를 계산하면 $q$ 의 계수가 $720-(-1008)=1728$, $q^2$ 의 계수가 $179280-220752=-41472=1728\cdot(-24)$ 이다. 그래서 $(E_4^3-E_6^2)/1728=q-24q^2+\cdots$ 이고, 이것이 상수항이 $0$ 인 판별식 $\Delta$ 다. 계수를 손으로 적을 수 있는 형식의 조합으로 계수가 불규칙한 형식이 만들어진다.

# 정의

## 정칙 Eisenstein 급수

짝수 $k\ge4$ 에 대해

$$
G_k(z)=\sum_{(m,n)\ne(0,0)}\frac1{(mz+n)^k},
\qquad
E_k(z)=\frac{G_k(z)}{2\zeta(k)}
$$

를 무게 $k$ 의 Eisenstein 급수라 한다. $E_k\in M_k(\mathrm{SL}\_2(\mathbb Z))$ 이고 $E_k(\infty)=1$ 이다. 직관 절의 $E_4$, $E_6$ 이 $k=4,6$ 의 경우다.

$k=2$ 에서는 합이 조건수렴이고, 합의 순서를 정해 얻은 $E_2=1-24\sum\sigma_1(n)q^n$ 은 $z\mapsto-1/z$ 에서 보정항이 붙는다. 이런 함수를 준모듈러 형식(quasimodular form)이라 한다.

## 실해석적 Eisenstein 급수

$\Gamma=\mathrm{SL}\_2(\mathbb Z)$ 로 두고 $\Gamma_\infty$ 를 $\pm\bigl(\begin{smallmatrix}1&\ast\cr 0&1\end{smallmatrix}\bigr)$ 들의 군이라 하자.

$$
E(z,s)=\sum_{\gamma\in\Gamma_\infty\backslash\Gamma}\mathrm{Im}(\gamma z)^s
=\frac12\sum_{\substack{(c,d)\in\mathbb Z^2\cr \gcd(c,d)=1}}\frac{y^s}{\lvert cz+d\rvert^{2s}}
$$

를 실해석적 Eisenstein 급수(real-analytic Eisenstein series)라 한다. $\Gamma_\infty$ 는 $z\mapsto z+1$ 을 생성하는 군이고 $\mathrm{Im}(z)^s$ 는 이 변환에 불변이므로, 합을 잉여류에 대해서만 해도 잘 정의된다. $\gamma=1$ 의 항이 $y^s$ 다. 이 급수는 $\mathrm{Re}(s)\gt 1$ 에서 절대수렴하고, 완비화는 $\xi(s)=\pi^{-s/2}\Gamma(s/2)\zeta(s)$ 를 써서 $E^\ast(z,s)=\xi(2s)E(z,s)$ 다.

쌍곡 Laplace 작용소는

$$
\Delta_{\mathbb H}=-y^2\bigl(\partial_x^2+\partial_y^2\bigr),
\qquad
\Delta_{\mathbb H}\thinspace y^s=s(1-s)\thinspace y^s
$$

이다. $E(z,s)$ 는 $\Gamma$ 불변이고 $\Delta_{\mathbb H}E=s(1-s)E$ 를 만족하며 $L^2$ 에는 속하지 않는다.

## 상수항과 산란 행렬

$E(z,s)$ 의 Fourier 전개에서 $n=0$ 항은 $y$ 의 함수이고 항이 둘이다.

$$
a_0(y,s)=y^s+\varphi(s)\thinspace y^{1-s},
\qquad
\varphi(s)=\frac{\xi(2s-1)}{\xi(2s)}
$$

$y^s$ 는 $\gamma=1$ 인 항에서 오고 둘째 항은 나머지 항이 모인 것이다. 두 지수 $s$ 와 $1-s$ 는 Laplace [고윳값](eigenvalues.md) $s(1-s)$ 를 주는 두 해이고, $\varphi(s)$ 는 둘째 해의 계수다. $\varphi$ 를 산란 행렬(scattering matrix)이라 부른다.

# 성질

## Fourier 전개

$$
E^\ast(z,s)=\xi(2s)\thinspace y^s+\xi(2s-1)\thinspace y^{1-s}
+4\sqrt y\sum_{n\ge1}n^{s-\frac12}\sigma_{1-2s}(n)\thinspace K_{s-\frac12}(2\pi ny)\cos(2\pi nx)
$$

$K_\nu$ 는 변형 [Bessel 함수](bessel-functions.md)이고 $K_\nu=K_{-\nu}$ 다. 오른쪽 전체가 $s\mapsto1-s$ 에서 대칭이므로 함수방정식이 나오고, $\xi(2s-1)$ 의 극에서 $s=1$ 의 극이 나온다.

## 함수방정식과 극

$E^\ast(z,s)$ 는 $s\in\mathbb C$ 전체로 유리형 접속되고

$$
E^\ast(z,s)=E^\ast(z,1-s)
$$

를 만족한다. 극은 $s=0$ 과 $s=1$ 의 단순극뿐이고 $\mathrm{Res}\_{s=1}E(z,s)=3/\pi$ 다[^1]. 이 대칭은 $\xi(2s)$ 의 함수방정식에서 나온다.

증명의 요지. $E(z,s)$ 와 $E(z,1-s)$ 는 같은 고윳값 $s(1-s)$ 의 $\Gamma$ 불변 고유함수이고 첨점에서 같은 크기로 자라며, 상수항에서 $s$ 와 $1-s$ 의 역할만 바뀐다. 그런 함수의 공간이 1 차원이므로 둘이 상수배이고, 상수항을 견주면 그 상수가 $\varphi(s)$ 다.

정규화하지 않은 꼴로는 $E(z,s)=\varphi(s)E(z,1-s)$ 이고 $\varphi(s)\varphi(1-s)=1$ 이다. 첨점이 여러 개이면 $\varphi$ 가 첨점 개수 크기의 [행렬](matrices.md)이 되고 그 [행렬식](determinants.md)의 극이 잉여 스펙트럼을 준다.

$s=1$ 의 유수는 $z$ 에 의존하지 않는다.

$$
\mathrm{Res}\_{s=1}E(z,s)=\frac1{2\xi(2)}=\frac3\pi=\frac1{\mathrm{vol}(\Gamma\backslash\mathbb H)}
$$

유수도 $\Gamma$ 불변이고 고윳값이 $s(1-s)\to0$ 이라 [조화함수](harmonic-functions.md)이며, 유계인 조화함수는 상수다. [Rankin–Selberg 적분](rankin-selberg.md)이 이 상수가 부피의 역수라는 것을 쓴다. $f\bar gy^k$ 에 $E(z,s)$ 를 곱해 적분한 것의 $s=1$ 유수가 Petersson 내적 $\langle f,g\rangle/\mathrm{vol}$ 이 된다.

## 스펙트럼 분해

$\mathrm{SL}\_2(\mathbb Z)\backslash\mathbb H$ 는 첨점이 하나 뚫려 있어 콤팩트가 아니고 연속 스펙트럼이 생긴다.

$$
L^2(\Gamma\backslash\mathbb H)=
\underbrace{\mathbb C\cdot 1}\_{\text{상수}}
\thickspace\oplus\thickspace
\underbrace{L^2_{\mathrm{cusp}}}\_{\text{Maass 첨점형식}}
\thickspace\oplus\thickspace
\underbrace{\int_{\mathrm{Re}(s)=1/2}^{\oplus}\mathbb C\thinspace E(z,s)\thinspace ds}\_{\text{연속 스펙트럼}}
$$

연속 부분을 만드는 것이 임계선 위의 $E(z,\tfrac12+it)$ 다. 상수항이 $y^{1/2}$ 크기라 $L^2$ 에 속하지 않지만 일반화 고유함수가 된다. 이 분해를 Selberg 의 스펙트럼 분해 정리(spectral decomposition theorem)라 하고, 가운데 성분이 [Maass 형식](maass-forms.md)의 첨점형식이다.

## 정칙 쪽의 첨점형식 구성

$M_{12}$ 는 2 차원이고 $E_4^3$ 과 $E_6^2$ 가 모두 상수항 1 을 가지므로 차가 첨점형식이다. 첨점형식의 공간이 1 차원이므로 $\Delta$ 의 상수배다.

$$
\Delta=\frac{E_4^3-E_6^2}{1728}
$$

Ramanujan 의 합동 $\tau(n)\equiv\sigma_{11}(n)\pmod{691}$ 도 여기서 나오며, $691$ 은 $B_{12}$ 의 분자로 $E_{12}$ 와 $E_4^3$ 의 차이에 나타난다.

## Hecke 고유형식

$E_k$ 도 [Hecke 작용소](hecke-operators.md)의 고유형식이다. $\sigma_{k-1}$ 이 곱셈적이고

$$
T_pE_k=(1+p^{k-1})E_k
$$

이다. $1+p^{k-1}$ 을 $p^{(k-1)/2}$ 로 나누면 $p^{(k-1)/2}+p^{-(k-1)/2}$ 이므로 Satake 매개변수(Satake parameter)는 $p^{\pm(k-1)/2}$ 이고 절댓값이 $1$ 이 아니다. 첨점형식에서는 Ramanujan–Petersson 한계 $\vert a_p\vert\le2p^{(k-1)/2}$ 에 의해 이 절댓값이 $1$ 이다.

## 높은 계수와 Langlands–Shahidi 방법

- $\Gamma_0(N)$ 은 첨점이 여러 개이고 각 첨점마다 Eisenstein 급수가 있다. 산란 행렬이 첨점 개수 크기의 행렬이 된다.
- $\mathrm{GL}\_n$ 에서는 포물 부분군 $P$ 마다, 그 Levi 위의 첨점형식 $\sigma$ 마다 Eisenstein 급수 $E(g,s;\sigma,P)$ 가 있다. Langlands 가 이들의 해석적 접속을 증명했고 그것이 $L^2(\mathrm{GL}\_n(\mathbb Q)\backslash\mathrm{GL}\_n(\mathbb A))$ 의 스펙트럼 분해를 준다.
- Langlands–Shahidi 방법(Langlands–Shahidi method)은 Eisenstein 급수의 상수항에 자기동형 $L$ 함수들이 인자로 나타나는 것을 쓴다. $\varphi(s)=\xi(2s-1)/\xi(2s)$ 에 $\zeta$ 가 나타나는 것이 가장 단순한 경우이고, 상수항의 해석적 성질로부터 $L$ 함수의 해석적 성질이 유도된다.

# 활용

## Rankin–Selberg 의 재료

Rankin–Selberg 적분이 쓰는 것은 $E(z,s)$ 의 세 성질이다.

1. 정의가 $\Gamma_\infty\backslash\Gamma$ 위의 합이라 펼치기가 가능하다.
2. 해석적 접속과 함수방정식이 있어 $L$ 함수가 그것을 물려받는다.
3. $s=1$ 에 극이 있고 유수가 $1/\mathrm{vol}$ 이라 극 판정과 Petersson 내적이 나온다.

$L$ 함수의 해석적 성질이 $\zeta$ 의 함수방정식으로 환원된다.

## Selberg 대각합 공식

[Selberg 대각합 공식](selberg-trace-formula.md)은 $\Gamma\backslash\mathbb H$ 의 Laplace 스펙트럼과 닫힌 [측지선](geodesics.md)의 길이를 잇는다. 좌변에는 이산 스펙트럼과 함께 연속 스펙트럼의 기여가 들어가고 그 기여가 $\varphi'/\varphi(s)$ , 곧 $\zeta'/\zeta$ 로 적힌다.

$$
-\frac1{4\pi}\int_{-\infty}^{\infty}h(t)\thinspace\frac{\varphi'}{\varphi}\Bigl(\tfrac12+it\Bigr)dt
$$

[Weyl 법칙](weyl-law.md)으로 Maass 첨점형식의 개수를 셀 때 이 항을 빼야 하므로, 그 개수의 오차항에 $\zeta'/\zeta$ 의 크기가 들어간다.

## 유수와 부피

$E(z,s)$ 의 유수가 상수라는 사실에서 기본영역의 부피가 계산된다. Langlands 의 Eisenstein 급수 이론에서 잉여 스펙트럼을 계산하면 산술 군의 공부피(covolume)가 나온다. $\mathrm{vol}(\mathrm{SL}\_2(\mathbb Z)\backslash\mathbb H)=\pi/3$ 에 $\zeta(2)=\pi^2/6$ 가 들어 있는 것이 그 예다.

[^1]: 함수방정식과 Fourier 전개는 H. Iwaniec, *Spectral Methods of Automorphic Forms* (2 판, 2002) 3장과 6장. 스펙트럼 분해는 같은 책 4장, 또는 A. Selberg, *Harmonic analysis and discontinuous groups*, J. Indian Math. Soc. **20** (1956). 정칙 쪽과 $691$ 합동은 J.-P. Serre, *A Course in Arithmetic* (1973) 7장. $\mathrm{GL}\_n$ 의 Eisenstein 급수는 R. Langlands, *On the Functional Equations Satisfied by Eisenstein Series*, Lecture Notes in Math. 544 (1976), 해설은 C. Mœglin, J.-L. Waldspurger, *Spectral Decomposition and Eisenstein Series* (1995).

# 연관 문서

## 선수지식

- [모듈러 형식](modular-forms.md)
- [Riemann zeta 함수](riemann-zeta.md)

## 더 알아보기

- [Maass 형식](maass-forms.md)
- [Mock 모듈러 형식](mock-modular-forms.md)
- [Rankin–Selberg 적분](rankin-selberg.md)
- [Selberg 대각합 공식](selberg-trace-formula.md)
- [Siegel–Weil 공식](siegel-weil.md)

#number_theory #complex_analysis #analysis #computation
