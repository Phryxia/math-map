# Triebel–Lizorkin 공간

# 개요

**Triebel–Lizorkin 공간(Triebel–Lizorkin space)** 은 함수의 주파수 띠 조각들을 점마다 먼저 모은 뒤 그 결과의 적분 크기로 매끄러움을 재는 함수공간이다. 높이가 같은 진동 조각 $N$ 개를 한 자리에 겹쳐 놓은 함수와 서로 먼 자리에 흩어 놓은 함수는 조각마다의 크기가 같다. 그런데 $L^p$ 노름은 두 함수에서 $N^{1/2}$ 과 $N^{1/p}$ 의 상수배로 다르다.

조각마다의 크기만 보는 [Besov 공간](besov-spaces.md)은 이 차이를 보지 못한다. Triebel–Lizorkin 공간은 조각들이 어느 자리에 겹쳐 있는지까지 재므로 $L^p$ 와 Sobolev 공간을 정확히 포함한다.

# 직관

$\eta$ 가 [Fourier 변환](fourier-transform.md)의 받침이 작고 크기가 빠르게 줄어드는 함수이고, $\xi_j$ 가 $j$ 번째 띠의 가운데 주파수라 하자. 진동 조각 $f_j(x)=\eta(x-x_j)e^{2\pi ix\xi_j}$ 는 $j$ 번째 띠에만 주파수가 있고, 모든 $j$ 에서 $\Vert f_j\Vert\_{L^p}=\Vert\eta\Vert\_{L^p}$ 다. [Littlewood–Paley 이론](littlewood-paley.md)의 부등식으로 $f=f_1+\dots+f_N$ 의 $L^p$ 노름은 제곱함수 $(\sum_j\vert f_j\vert^2)^{1/2}$ 의 $L^p$ 노름과 상수배 안에서 같다.

모든 $x_j$ 가 $0$ 이면 조각이 한 자리에 겹쳐 제곱함수는 $N^{1/2}\vert\eta\vert$ 이고, $\Vert f\Vert\_{L^p}$ 는 $N^{1/2}$ 의 상수배다. $x_j$ 를 서로 멀리 두면 각 점에서 조각 하나만 크므로 제곱함수의 $p$ 제곱 적분은 조각마다의 적분을 더한 것에 가깝고, $\Vert f\Vert\_{L^p}$ 는 $N^{1/p}$ 의 상수배다.

$B^0_{p,q}$ 노름은 조각 크기의 수열 $(\Vert\eta\Vert\_{L^p},\dots,\Vert\eta\Vert\_{L^p})$ 만 보므로 두 경우 모두 $N^{1/q}$ 의 상수배다. 겹친 경우에 맞추려면 $q=2$, 흩어진 경우에 맞추려면 $q=p$ 여야 하므로, $p\ne 2$ 이면 어느 $q$ 도 $L^p$ 노름과 맞지 않는다. 제곱함수처럼 점마다 조각을 먼저 모으면 두 경우가 모두 맞는다.

# 정의

## Triebel–Lizorkin 노름

Besov 공간 문서의 비동차 이진 분해 $(\Delta_j)\_{j\ge 0}$ 를 쓴다. $s\in\mathbb R$, $1\le p\lt\infty$, $1\le q\le\infty$ 에서 완만 분포 $f$ 의 **Triebel–Lizorkin 노름(Triebel–Lizorkin norm)** 은 다음이다.

$$
\Vert f\Vert\_{F^s_{p,q}}=\Bigl\Vert\Bigl(\sum_{j\ge 0}\bigl(2^{js}\vert\Delta_jf\vert\bigr)^q\Bigr)^{1/q}\Bigr\Vert\_{L^p}
$$

$q=\infty$ 이면 합 대신 $j$ 에 대한 상한을 점마다 취한다. 이 노름이 유한한 $f$ 전체를 $F^s_{p,q}(\mathbb R^n)$ 이라 한다[^1]. Besov 노름은 조각마다 $L^p$ 노름을 먼저 취하고 수열의 $\ell^q$ 노름을 취하는데, 이 노름은 점마다 $\ell^q$ 노름을 먼저 취하고 $L^p$ 노름을 취한다.

직관 절의 함수는 $s=0$, $q=2$ 이면 겹친 경우 $N^{1/2}$, 흩어진 경우 $N^{1/p}$ 의 상수배인 노름을 가진다.

# 성질

## 분해 함수에 대한 무관성

정리. $1\lt p\lt\infty$, $1\lt q\le\infty$ 이면 $\chi$ 를 바꾸어 얻는 Triebel–Lizorkin 노름은 원래 노름과 동치다[^1].

증명의 요지. 새 조각 $\tilde\Delta_jf$ 는 옛 조각 셋을 반지름 방향으로 감소하는 적분 가능한 함수가 위에서 누르는 핵과 합성곱한 것이다. 그러므로 점마다 다음이 성립한다. $M$ 은 [Hardy–Littlewood 극대함수](hardy-littlewood-maximal-function.md)다.

$$
\vert\tilde\Delta_jf(x)\vert\le C\sum_{\vert i-j\vert\le 1}M(\Delta_if)(x)
$$

여기에 Fefferman–Stein 의 벡터값 극대 부등식(vector-valued maximal inequality)을 $g_j=2^{js}\Delta_jf$ 로 두고 쓴다[^2].

$$
\Bigl\Vert\Bigl(\sum_j\vert Mg_j\vert^q\Bigr)^{1/q}\Bigr\Vert\_{L^p}\le C\Bigl\Vert\Bigl(\sum_j\vert g_j\vert^q\Bigr)^{1/q}\Bigr\Vert\_{L^p}
$$

이 부등식이 $1\lt p\lt\infty$, $1\lt q\le\infty$ 에서 성립하므로 같은 범위에서 정리가 나온다. Besov 노름은 조각마다 [Young 의 합성곱 부등식](young-convolution-inequality.md)만 쓰면 되므로 이 단계가 필요 없다.

## Besov 공간과의 포함

$q=p$ 이면 [Fubini–Tonelli 정리](fubini-tonelli.md)로 합과 적분의 순서를 바꿀 수 있어 $F^s_{p,p}=B^s_{p,p}$ 다. 일반적으로 다음이 성립한다.

$$
B^s_{p,\min(p,q)}\subset F^s_{p,q}\subset B^s_{p,\max(p,q)}
$$

증명의 요지. $p\ge q$ 이면 [Minkowski 적분 부등식](minkowski-integral-inequality.md)을 $L^{p/q}$ 에 써서 $F$ 노름이 $\ell^q$ 합 쪽 $B$ 노름 이하이고, 점마다 $\ell^q$ 합이 $\ell^p$ 합 이상이므로 $B^s_{p,p}$ 노름 이상이다. $p\lt q$ 이면 두 부등식의 방향이 바뀐다. 직관 절의 겹친 경우와 흩어진 경우가 두 끝의 등호에 가깝다.

## Sobolev 공간과의 일치

정리. $1\lt p\lt\infty$ 와 정수 $k\ge 0$ 에서 [Sobolev 공간](sobolev-spaces.md)은 Triebel–Lizorkin 공간이다[^1].

$$
W^{k,p}(\mathbb R^n)=F^k_{p,2}(\mathbb R^n)
$$

$k=0$ 이면 $L^p=F^0_{p,2}$ 이고 이것이 Littlewood–Paley 부등식이다. $k\ge 1$ 이면 $\partial^\alpha$ 와 $(1+\vert\xi\vert^2)^{k/2}$ 를 서로 바꾸는 심볼이 Littlewood–Paley 이론 문서의 Mikhlin 승수 정리를 만족하므로 $k=0$ 의 경우로 줄어든다. 실수 $s$ 에서 $F^s_{p,2}$ 는 $(1+\vert\xi\vert^2)^{s/2}\hat f$ 의 역변환이 $L^p$ 에 드는 Bessel 퍼텐셜 공간(Bessel potential space) $H^s_p$ 다.

Besov 공간 문서의 포함 $B^k_{p,\min(p,2)}\subset W^{k,p}\subset B^k_{p,\max(p,2)}$ 은 위의 포함에 $q=2$ 를 넣은 것이다.

## Jawerth 매장

정리. $s_0-n/p_0=s_1-n/p_1$ 이고 $p_0\lt p_1$ 이면 모든 $q_0$, $q_1$ 에서 $F^{s_0}\_{p_0,q_0}\subset F^{s_1}\_{p_1,q_1}$ 이다[^3].

Besov 공간의 같은 매장 $B^{s_0}\_{p_0,q}\subset B^{s_1}\_{p_1,q}$ 은 두 공간의 $q$ 가 같아야 한다. Triebel–Lizorkin 공간에서는 적분 지수를 올릴 때 $q$ 가 상관없다. $1\lt p\lt n$ 과 $1/p^\ast=1/p-1/n$ 에서 $q_1=2$ 로 두면, Sobolev 매장 $W^{1,p}\subset L^{p^\ast}$ 이 더 큰 공간 $F^1_{p,\infty}$ 에서 출발해도 성립한다.

## 흔적 정리

정리. $1\le p\lt\infty$, $s\gt 1/p$ 이면 초평면 $\mathbb R^{n-1}$ 로의 제한이 $F^s_{p,q}(\mathbb R^n)$ 에서 $B^{s-1/p}\_{p,p}(\mathbb R^{n-1})$ 위로 가는 유계 전사로 연장된다. 경계값 공간은 $q$ 에 의존하지 않는다[^1].

$W^{1,p}=F^1_{p,2}$ 를 넣으면 Besov 공간 문서의 경계값 공간 $B^{1-1/p}\_{p,p}$ 가 나온다.

# 활용

- 분수 차수의 곱과 교환자 추정. [Paraproduct](paraproducts.md) 분해의 세 항을 $F^s_{p,2}=H^s_p$ 노름으로 재면 Kato–Ponce 부등식이 $L^p$ 기반의 분수 Sobolev 노름으로 나온다.
- 국소 Hardy 공간. 정의를 $0\lt p\le 1$ 로 넓히면 $F^0_{p,2}$ 는 실변수 국소 Hardy 공간(local Hardy space) $h^p$ 이고, $p=\infty$ 의 알맞은 변형은 국소 BMO(bounded mean oscillation) 공간이다[^1]. $L^p$, Sobolev 공간, Hardy 공간이 한 척도 안에 들어간다.
- 웨이블릿 계수. 충분히 매끄러운 웨이블릿 기저에서 Triebel–Lizorkin 노름은 계수에 척도마다 무게를 주어 점마다 $\ell^q$ 로 모은 함수의 $L^p$ 노름과 동치다[^4]. [웨이블릿 변환](wavelet-transform.md)의 계수로 $L^p$ 와 Sobolev 노름을 재는 근거가 이것이다.
- 경계값 문제. 흔적 정리에서 경계값 공간이 $q$ 에 무관하므로, $W^{k,p}$ 해의 경계값 조건은 Besov 공간 $B^{k-1/p}\_{p,p}$ 하나로 적힌다.

[^1]: H. Triebel, *Theory of Function Spaces*, Birkhäuser (1983), Chapter 2. 정의와 분해 함수에 대한 무관성은 §2.3, Sobolev 공간과 Hardy 공간과의 일치는 §2.5, 흔적 정리는 §2.7 에 있다.

[^2]: C. Fefferman, E. M. Stein, "Some maximal inequalities", American Journal of Mathematics **93** (1971), 107–115.

[^3]: B. Jawerth, "Some observations on Besov and Lizorkin–Triebel spaces", Mathematica Scandinavica **40** (1977), 94–104.

[^4]: Y. Meyer, *Ondelettes et opérateurs I*, Hermann (1990), Chapitre 6.

# 연관 문서

## 선수지식

- [Besov 공간](besov-spaces.md)

## 더 알아보기

아직 연결한 문서가 없다.

#functional_analysis #analysis
