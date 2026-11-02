# Fredholm 작용소

# 개요

**Fredholm 작용소(Fredholm operator)** 는 핵과 여핵이 유한차원인 [Banach 공간](banach-spaces.md) 사이의 유계 선형작용소다. 제곱합이 유한한 수열의 공간에서 수열을 한 칸 오른쪽으로 미는 작용소는 핵이 $0$ 이고 여핵이 1 차원이어서, 핵의 차원에서 여핵의 차원을 뺀 값이 $-1$ 이다. 이 작용소를 조금 흔들어도 그 값은 $-1$ 로 남는다. Fredholm 작용소의 이론은 이 차이, 곧 지표를 무한차원 작용소의 위상 불변량으로 다룬다.

# 직관

유한 차원에서 [선형사상](linear-maps.md) $T\colon F^m\to F^n$ 의 계수를 $r$ 라 하면 $\dim\ker=m-r$ , $\dim\mathrm{coker}=n-r$ 이므로 핵의 차원에서 여핵의 차원을 뺀 값이 언제나 $m-n$ 이다. $T$ 를 흔들어도 두 차원이 같이 움직여 차가 고정된다. 무한 차원에서는 이 상쇄가 자동이 아니다. 왼쪽 이동 작용소 $S^\ast$ 와 오른쪽 이동 작용소 $S$ 를 본다.

$$
S(x_0,x_1,\dots)=(0,x_0,x_1,\dots),\qquad S^\ast(x_0,x_1,\dots)=(x_1,x_2,\dots)
$$

$S$ 는 단사이고 상이 여차원 1 이라 $\mathrm{ind}(S)=-1$ 이다. $S^\ast$ 는 전사이고 핵이 1 차원이라 $\mathrm{ind}(S^\ast)=+1$ 이다. 유한 차원에서 같은 말인 단사와 전사가 여기서 갈라지고, 그 갈라짐의 크기가 지표다. $S^\ast S=I$ 이면서 $SS^\ast\ne I$ 인 비대칭은 무한 차원에서만 가능하다.

# 정의

## Fredholm 작용소

[Hilbert 공간](hilbert-spaces.md) 사이의 [유계 작용소](bounded-operators.md) $T\colon H_1\to H_2$ 의 상이 닫혀 있고

$$
\dim\ker T\lt\infty,\qquad \dim\mathrm{coker}\thinspace T=\dim(H_2/\mathrm{ran}\thinspace T)\lt\infty
$$

이면 $T$ 를 **Fredholm 작용소**라 한다. 정수 $\mathrm{ind}(T)=\dim\ker T-\dim\mathrm{coker}\thinspace T$ 를 $T$ 의 **지표(index)** 라 한다. $H_1=H_2=H$ 일 때 Fredholm 작용소 전체를 $\mathcal F(H)$ 라 쓴다.

- 직관 절의 $S$ 는 지표가 $-1$, $S^\ast$ 는 $+1$ 인 Fredholm 작용소다. $S^k$ 는 핵이 $0$, 여핵이 처음 $k$ 좌표가 생성하는 공간이어서 지표가 $-k$ 다.
- 무한차원에서 영작용소는 핵이 무한차원이므로 Fredholm 이 아니다.

## Toeplitz 작용소

$H^2\subset L^2(S^1)$ 을 음의 Fourier 계수가 모두 $0$ 인 함수들의 Hardy 공간(Hardy space)이라 하고, $P\colon L^2\to H^2$ 를 직교사영이라 하자. $a\in C(S^1)$ 에 대해

$$
T_a\colon H^2\to H^2,\qquad T_af=P(af)
$$

를 기호(symbol) $a$ 의 **Toeplitz 작용소(Toeplitz operator)** 라 한다. Fourier 기저 $z^0,z^1,\dots$ 에서 [행렬](matrices.md)이 $(T_a)\_{jk}=\hat a(j-k)$ 이므로 대각선을 따라 상수인 무한 행렬이다.

- $a(z)=z$ 이면 $T_zz^k=z^{k+1}$ 이므로 $T_z$ 는 오른쪽 이동 $S$ 다.
- $a(z)=\bar z$ 이면 $T_{\bar z}z^k=z^{k-1}$ ($k\ge 1$), $T_{\bar z}z^0=0$ 이므로 $T_{\bar z}$ 는 왼쪽 이동 $S^\ast$ 다.

# 성질

## Atkinson 정리

Atkinson 정리(Atkinson's theorem)에 따르면 $T\in\mathcal B(H)$ 가 Fredholm 인 것은 $T$ 의 류가 Calkin 대수(Calkin algebra) $\mathcal B(H)/\mathcal K(H)$ 에서 가역인 것과 동치다. 곧 $ST-I$ 와 $TS-I$ 가 모두 콤팩트인 $S$ 가 존재하는 것과 같고, 이 $S$ 를 유사역원(parametrix)이라 한다. 직관 절에서 $S^\ast S=I$ 이고 $SS^\ast-I$ 는 계수 $1$ 인 사영의 부호를 바꾼 것이므로 $S^\ast$ 가 $S$ 의 유사역원이다.

## 기본 성질

1. $\mathcal F(H)$ 는 $\mathcal B(H)$ 의 열린 부분집합이고 합성에 닫혀 있으며 $\mathrm{ind}(TS)=\mathrm{ind}(T)+\mathrm{ind}(S)$ 다.
2. 모든 콤팩트 $K$ 에 대해 $\mathrm{ind}(T+K)=\mathrm{ind}(T)$ 다.
3. $\mathrm{ind}$ 는 국소상수다. $\Vert T-T'\Vert$ 이 충분히 작으면 $\mathrm{ind}(T)=\mathrm{ind}(T')$ 다. 따라서 지표는 $\mathcal F(H)$ 의 [연결성분](connectedness.md)마다 상수다.
4. $\mathrm{ind}(T^\ast)=-\mathrm{ind}(T)$ 이고, $T$ 가 자기수반이면 지표가 $0$ 이다.
5. $K$ 가 콤팩트면 $I-K$ 는 지표 $0$ 의 Fredholm 작용소다. 따라서 $(I-K)x=y$ 는 유일해를 갖거나, 동차방정식이 유한 차원의 해공간을 갖거나 둘 중 하나다. 이것이 Fredholm 대안(Fredholm alternative)이다.

다섯째는 적분방정식 $u(x)-\int k(x,y)u(y)dy=f(x)$ 가 유일하게 풀리거나 동차해가 있어 가해조건이 붙거나 둘 중 하나라는 이분법이다. Fredholm 이 1903 년에 적분방정식에서 얻었다[^1].

## 연결성분의 분류

$\mathcal F(H)$ 의 연결성분은 정확히 지표의 등위집합이다. 곧 $\mathrm{ind}\colon\pi_0(\mathcal F(H))\to\mathbb Z$ 가 전단사다.

같은 지표를 가진 두 Fredholm 작용소는 Fredholm 을 유지하며 연속적으로 이어지고, 지표가 다르면 이을 수 없다. 지표가 위상적 불변량의 완전한 목록이다.

Atiyah–Jänich 정리(Atiyah–Jänich theorem)는 콤팩트 공간 $X$ 에서 $\mathcal F(H)$ 로 가는 연속 사상의 호모토피류 전체가 $K$ 이론 $K^0(X)$ 와 같다고 진술한다. $\mathcal F(H)$ 가 $K$ 이론의 분류공간이고, 지표는 $X$ 가 한 점인 경우다.

## Toeplitz 작용소의 지표

Gohberg–Krein 정리(Gohberg–Krein theorem)에 따르면 $a\in C(S^1)$ 이 $0$ 을 값으로 갖지 않으면 $T_a$ 는 Fredholm 이고

$$
\mathrm{ind}(T_a)=-\mathrm{wind}(a)
$$

다. $\mathrm{wind}(a)$ 는 곡선 $a$ 가 $0$ 을 감는 [감김수](winding-number.md)다. $a$ 가 $0$ 을 값으로 가지면 $T_a$ 는 Fredholm 이 아니다.

증명의 요지는 $T_aT_b-T_{ab}$ 가 콤팩트라는 것이다. 기호의 곱과 작용소의 곱이 콤팩트 오차 안에서 같으므로 Calkin 대수에서 $a\mapsto\pi(T_a)$ 가 대수 준동형이다. $a$ 가 $0$ 을 지나지 않으면, 곧 $C(S^1)$ 에서 가역이면 $\pi(T_a)$ 가 가역이고 Atkinson 정리가 적용된다.

기호가 $0$ 을 지나지 않는 한 $T_a$ 가 Fredholm 을 유지하고 지표가 연속 변형에 불변이므로, 지표는 기호의 호모토피류에만 의존한다. 원에서 $\mathbb C^\times$ 로 가는 연속 함수의 호모토피류는 $\pi_1(\mathbb C^\times)=\mathbb Z$ 이므로 감김수가 분류한다. 곱셈성 $\mathrm{ind}(T_{ab})=\mathrm{ind}(T_a)+\mathrm{ind}(T_b)$ 에서 그 함수가 선형이고, $a(z)=z$ 에서 $\mathrm{ind}(T_z)=-1$ 이므로 부호가 정해진다.

$a(z)=z-c$ 에서 $T_a=S-c$ 의 핵은 $0$ 이고 여핵은 $\ker(S^\ast-\bar c)=\lbrace(x_0,\bar cx_0,\bar c^2x_0,\dots)\rbrace$ 이다. 이 수열이 $\ell^2$ 에 있으려면 $|c|\lt 1$ 이어야 하므로 지표가 $|c|\lt 1$ 에서 $-1$ , $|c|\gt 1$ 에서 $0$ 이고, 감김수도 같은 값을 준다.

## 지표 정리

닫힌 [다양체](manifolds.md) 위의 타원 미분작용소(elliptic differential operator) $D$ 는 적당한 [Sobolev 공간](sobolev-spaces.md) 사이에서 Fredholm 이다. 타원성에서 콤팩트 오차를 남기는 유사역원이 존재하므로 Atkinson 정리가 적용된다. $\mathrm{ind}(D)$ 가 정의되고 계수를 연속적으로 흔들어도 변하지 않는다.

[지표 정리](index-theorem.md)는 이 정수를 명시적으로 계산한다.

$$
\mathrm{ind}(D)=\int_M\mathrm{ch}(\sigma(D))\thinspace\mathrm{Td}(TM\otimes\mathbb C)
$$

우변은 주기호의 위상적 데이터로만 이루어진다. [Gauss–Bonnet 정리](gauss-bonnet.md)와 [Riemann–Roch 정리](riemann-roch.md)가 이 공식의 특수한 경우다.

# 활용

- Fredholm 대안이 2종 적분방정식의 가해성을 완전히 결정한다. 경계값 문제를 경계적분방정식으로 바꾸어 푸는 수치해석의 기초다.
- 타원 경계값 문제에서 해의 자유도와 가해조건의 개수가 핵과 여핵의 차원이고, 지표가 그 차다.
- [작용소 K 이론](operator-k-theory.md)에서 지표 사상은 $C^\ast$ 대수의 $K_1$ 에서 $K_0$ 으로 가는 연결 준동형(connecting homomorphism)이다. Toeplitz 확대의 지표 계산이 [Bott 주기성](bott-periodicity.md)의 한 증명을 준다.
- 유한 절단 행렬 $T_N(a)$ 의 $\varepsilon$ 의사스펙트럼(pseudospectrum)은 $N\to\infty$, $\varepsilon\to0$ 에서 $T_a$ 의 스펙트럼, 곧 기호의 상과 감김수가 $0$ 이 아닌 점들의 모임으로 수렴한다. 절단 행렬의 고윳값 자체는 이 집합으로 수렴하지 않는다.

[^1]: 기본 성질과 Atkinson 정리는 R. Douglas, *Banach Algebra Techniques in Operator Theory* (2판, 1998) 5장. Toeplitz 작용소의 지표 공식은 같은 책 7장이며 원 결과는 I. Gohberg, M. Krein (1958). 연결성분 분류와 $K$ 이론과의 관계는 M. Atiyah, *K-Theory* (1967) 부록.

# 연관 문서

## 선수지식

- [유계 작용소](bounded-operators.md)

## 더 알아보기

- [Fredholm 행렬식](fredholm-determinant.md)
- [지표 정리](index-theorem.md)
- [작용소 K 이론](operator-k-theory.md)

#functional_analysis #analysis #topology
