# Balog–Szemerédi–Gowers 정리

# 개요

**Balog–Szemerédi–Gowers 정리(Balog–Szemerédi–Gowers theorem)** 는 같은 합을 내는 쌍이 많은 집합이, 두 수의 합이 적게 나오는 큰 부분집합을 포함한다는 정리다. $\lbrace 1,\dots,n\rbrace$ 에 아주 큰 범위의 무작위 정수 $n$ 개를 더한 집합은 두 수의 합이 $n^2$ 가지쯤 나오지만, 그 절반인 $\lbrace 1,\dots,n\rbrace$ 은 합이 $2n-1$ 가지뿐이다. 이 정리는 같은 합을 내는 쌍의 개수에서 그런 부분집합을 찾아내, 합이 적은 집합에만 적용되는 [Freiman 정리](freiman-theorem.md)를 쓸 수 있게 한다.

# 직관

Balog–Szemerédi–Gowers 정리는 덧셈 에너지가 큰 집합이 합집합이 작은 큰 부분집합을 포함한다는 정리다. A. Balog 와 E. Szemerédi 가 1994 년에 증명했고[^1], W. T. Gowers 가 상수를 다항식으로 줄였다[^2].

Freiman 정리는 합집합이 작은 집합에만 적용된다. 이 정리는 그보다 약한 정보인 "같은 합을 갖는 쌍이 많다" 에서 Freiman 정리를 쓸 수 있는 부분집합을 꺼낸다.

$A$ 를 $\lbrace 1,\dots,n\rbrace$ 과, 그보다 훨씬 큰 범위에서 고른 무작위 정수 $n$ 개의 합집합이라 하자. 무작위 부분의 두 수의 합은 대개 서로 달라 $\lvert A+A\rvert$ 가 $n^2$ 에 비례하고, Freiman 정리는 아무것도 말하지 않는다.

같은 합을 갖는 쌍의 쌍을 세면 다르다. $a_1+b_1=a_2+b_2$ 인 네 원소 $(a_1,a_2,b_1,b_2)$ 는 $\lbrace 1,\dots,n\rbrace$ 안에서만 $n^3$ 에 비례하는 개수가 나온다. 이 개수가 크다는 정보에서 등차수열 부분 $\lbrace 1,\dots,n\rbrace$ 을 찾아내는 것이 이 정리다.

# 정의

아벨 군의 유한부분집합 $A,B$ 의 **덧셈 에너지(additive energy)** 는

$$
E(A,B)=\char35{}\lbrace (a_1,a_2,b_1,b_2)\in A^2\times B^2 : a_1+b_1=a_2+b_2\rbrace
$$

이다. $r(x)$ 를 $x=a+b$ ($a\in A$, $b\in B$) 로 쓰는 방법의 수라 하면 $E(A,B)=\sum_xr(x)^2$ 이다. 언제나 $\lvert A\rvert\lvert B\rvert\le E(A,B)\le\lvert A\rvert\lvert B\rvert\min(\lvert A\rvert,\lvert B\rvert)$ 이다.

# 성질

## 합집합 크기와 에너지의 부등식

정리. $E(A,A)\ge\lvert A\rvert^4/\lvert A+A\rvert$ 이다.

증명의 요지. $\sum_xr(x)=\lvert A\rvert^2$ 이고 $r$ 의 받침은 $A+A$ 이므로 [Cauchy–Schwarz 부등식](cauchy-schwarz.md)으로 $\lvert A\rvert^4\le\lvert A+A\rvert\sum_xr(x)^2$ 이다.

그래서 $\lvert A+A\rvert\le K\lvert A\rvert$ 이면 $E(A,A)\ge\lvert A\rvert^3/K$ 이다. 직관 절의 집합은 역이 성립하지 않는 예다.

## Balog–Szemerédi–Gowers 정리

정리. $E(A,A)\ge\lvert A\rvert^3/K$ 이면

$$
\lvert A'\rvert\ge cK^{-C}\lvert A\rvert,\qquad\lvert A'-A'\rvert\le CK^C\lvert A'\rvert
$$

인 $A'\subseteq A$ 가 존재한다. $c,C$ 는 절대상수다[^1][^2].

증명의 요지.

1. 표현 수 $r(x)\ge\lvert A\rvert/(2K)$ 인 합 $x$ 를 인기 있는 합(popular sum)이라 한다. 에너지 가정에서 $a+b$ 가 인기 있는 합인 쌍 $(a,b)\in A^2$ 이 $\lvert A\rvert^2/(2K)$ 개 이상이다. 이 쌍들을 간선으로 하는 이분그래프 $G$ 를 만든다.
2. 그래프 보조정리. 간선 밀도가 $\delta$ 인 이분그래프에서, $\lvert A'\rvert\ge c\delta\lvert A\rvert$ 이고 $\lvert B'\rvert\ge c\delta\lvert A\rvert$ 인 $A'$, $B'$ 를 골라 모든 $a'\in A'$, $b'\in B'$ 가 길이 $3$ 의 경로 $c\delta^C\lvert A\rvert^2$ 개 이상으로 이어지게 할 수 있다. 증명은 무작위로 고른 정점의 이웃을 $A'$ 의 후보로 잡고, 공통 이웃이 적은 쌍을 지우는 것이다.
3. 경로 $a'-b-a-b'$ 하나마다 $a'-b'=(a'+b)-(a+b)+(a+b')$ 이고 괄호 셋은 모두 인기 있는 합이다. 인기 있는 합 하나는 $\lvert A\rvert/(2K)$ 가지 이상으로 쓰이므로, $a'-b'$ 하나를 $A$ 의 원소 여섯 개로 쓰는 방법이 $K^{-C}\lvert A\rvert^5$ 개 이상이다. 전체 방법의 수는 $\lvert A\rvert^6$ 이하이므로 $\lvert A'-B'\rvert\le K^C\lvert A\rvert$ 다.
4. Ruzsa 삼각부등식(Ruzsa triangle inequality) $\lvert X\rvert\lvert Y-Z\rvert\le\lvert X-Y\rvert\lvert X-Z\rvert$ 에 $X=B'$, $Y=Z=A'$ 을 넣으면 $\lvert A'-A'\rvert\le\lvert A'-B'\rvert^2/\lvert B'\rvert$ 이고, 3 단계와 $\lvert B'\rvert$ 의 하한에서 $\lvert A'-A'\rvert\le K^C\lvert A'\rvert$ 이다.

Balog 와 Szemerédi 의 원래 증명은 정칙성 보조정리를 써서 상수가 $K$ 의 탑 함수였다. Gowers 는 2 단계의 경로 세기로 다항식 상수를 얻었다.

## Freiman 정리와의 결합

이 정리로 얻은 $A'$ 에 Freiman 정리를 적용하면, $E(A,A)\ge\lvert A\rvert^3/K$ 인 집합은 크기 $K^{-C}\lvert A\rvert$ 이상인 부분이 차원 $d(K)$ 의 일반화 등차수열에 들어 있다. 덧셈 에너지가 큰 집합의 구조가 이렇게 정해진다.

# 활용

- Gowers 의 [Szemerédi 정리](szemeredi-theorem.md) 상한. [Gowers 균등 노름](gowers-norms.md)이 큰 함수 $f$ 에서, 차분 $\Delta_hf$ 의 큰 Fourier 계수의 위치 $\xi(h)$ 가 $\xi(h_1)+\xi(h_2)=\xi(h_3)+\xi(h_4)$ 를 자주 만족한다. 그래프 $\lbrace(h,\xi(h))\rbrace$ 의 덧셈 에너지가 크므로 이 정리와 Freiman 정리로 $\xi$ 가 큰 부분에서 일차함수에 가깝다는 것이 나온다.
- $U^3$ 역정리. Green 과 Tao 의 증명이 같은 단계를 거쳐 이차 위상을 만든다.

[^1]: A. Balog, E. Szemerédi, "A statistical theorem of set addition", Combinatorica 14 (1994), 263–268.
[^2]: W. T. Gowers, "A new proof of Szemerédi's theorem for arithmetic progressions of length four", Geometric and Functional Analysis 8 (1998), 529–551.

# 연관 문서

## 선수지식

- [Freiman 정리](freiman-theorem.md)

## 더 알아보기

아직 연결한 문서가 없다.

#combinatorics #number_theory #graph_theory
