# Gauss–Lucas 정리

# 개요

**Gauss–Lucas 정리(Gauss–Lucas theorem)** 는 복소 다항식을 미분한 다항식의 근이 원래 다항식의 근들로 둘러싼 볼록 다각형 안에 있다는 정리다. 실수 다항식의 그래프에서 두 근 사이에는 기울기가 $0$ 인 점이 있다. 근이 복소평면에 흩어져 있으면 "두 근 사이" 를 말할 수 없으므로, 미분의 근이 어디에 있는지 다른 방법으로 정해야 한다. Gauss–Lucas 정리는 그 자리를 근들의 볼록 껍질로 답한다.

# 직관

$p(z)=z(z-1)(z-i)$ 의 근은 $0,1,i$ 이고 이 세 점은 직각삼각형을 이룬다. 미분은 $p'(z)=3z^2-2(1+i)z+i$ 이고 근의 공식으로 근을 구하면 다음과 같다.

$$
z=\frac{1+i}3\pm\frac{\sqrt2}6(1-i)\approx0.569+0.098i,\quad 0.098+0.569i
$$

두 점 모두 실수부와 허수부가 양수이고 그 합이 $0.667$ 이어서 삼각형 안에 있다.

이유는 로그 미분에서 나온다. $p(z)=(z-z_1)\cdots(z-z_n)$ 이면 $p'(z)/p(z)=\sum_k\frac1{z-z_k}$ 다. $p'(w)=0$ 이고 $w$ 가 $p$ 의 근이 아니면 이 합이 $0$ 이다.

$\frac1{z-z_k}$ 는 켤레를 취하면 $z-z_k$ 와 같은 방향의 벡터이므로, $w$ 에서 각 근으로 가는 벡터에 양수를 곱해 더한 것이 $0$ 이다. $w$ 가 근들의 볼록 껍질 밖에 있으면 모든 근이 $w$ 를 지나는 어떤 직선의 한쪽에 있어 이런 합이 $0$ 이 될 수 없다.

# 정의

## 볼록 껍질

복소평면의 점 $z_1,\dots,z_n$ 의 **볼록 껍질(convex hull)** 은 다음 집합이다.

$$
\mathrm{conv}\lbrace z_1,\dots,z_n\rbrace=\Bigl\lbrace\sum_k\lambda_kz_k : \lambda_k\ge0,\ \sum_k\lambda_k=1\Bigr\rbrace
$$

[볼록성](convexity.md)의 볼록집합 가운데 $z_1,\dots,z_n$ 을 모두 포함하는 가장 작은 것이다. 직관 절의 세 근의 볼록 껍질은 꼭짓점이 $0,1,i$ 인 삼각형과 그 내부다.

## 임계점

다항식 $p$ 의 **임계점(critical point)** 은 $p'(w)=0$ 인 점 $w$ 다. [대수학의 기본정리](fundamental-theorem-of-algebra.md)에 따라 차수 $n\ge2$ 인 $p$ 는 중복도를 세어 임계점을 $n-1$ 개 갖는다.

# 성질

## Gauss–Lucas 정리

상수가 아닌 복소 다항식 $p$ 의 모든 임계점은 $p$ 의 근들의 볼록 껍질에 속한다[^1].

증명. $w$ 가 $p$ 의 근이면 끝이다. 아니면 직관 절의 식에서 $\sum_k\frac1{w-z_k}=0$ 이고, 각 항에 분모의 켤레를 곱하면 다음이 된다.

$$
\sum_k\frac{\overline{w-z_k}}{\vert w-z_k\vert^2}=0
$$

켤레를 취하고 $\lambda_k=\vert w-z_k\vert^{-2}/\sum_j\vert w-z_j\vert^{-2}$ 로 두면 $w=\sum_k\lambda_kz_k$ 이고 $\lambda_k\gt0$, $\sum_k\lambda_k=1$ 이다.

## 실근 다항식

$p$ 의 근이 모두 실수이면 볼록 껍질은 가장 작은 근과 가장 큰 근 사이의 선분이므로 임계점도 모두 실수다. 이웃한 두 근 사이마다 Rolle 정리(Rolle's theorem)로 임계점이 하나씩 있고, 개수가 $n-1$ 로 맞으므로 임계점과 근이 번갈아 놓인다.

## 볼록 영역의 보존

$p$ 의 근이 모두 볼록집합 $K$ 에 있으면 $p'$ 의 근도 $K$ 에 있다. $K$ 를 닫힌 하반평면 $\lbrace\mathrm{Im}\thinspace z\le0\rbrace$ 로 잡으면, 열린 상반평면에 근이 없는 다항식을 미분해도 상반평면에 근이 생기지 않는다. 이 성질이 [실안정 다항식](real-stable-polynomials.md)이 미분에 닫혀 있다는 사실의 한 변수 판본이다.

## Marden 정리

근이 한 직선 위에 있지 않은 삼차 다항식의 두 임계점은, 근을 꼭짓점으로 하는 삼각형에 내접하고 세 변의 중점에서 변에 접하는 타원(Steiner 내접 타원, Steiner inellipse)의 두 초점이다[^2]. 이것을 Marden 정리(Marden's theorem)라 한다. 직관 절의 두 임계점은 삼각형 $0,1,i$ 의 Steiner 내접 타원의 초점이다.

# 활용

- 정전기적 해석. 근마다 같은 크기의 전하를 두고 평면에서 거리에 반비례하는 힘을 주면, 한 점이 받는 힘의 켤레가 $\sum_k\frac1{w-z_k}$ 다. 임계점은 힘이 $0$ 인 평형점이고, 정리는 평형점이 전하들의 볼록 껍질 밖에 없다는 진술이다.
- 근의 위치 추정. 다항식의 근이 원판 안에 있으면 미분과 그 이후 모든 도함수의 근이 같은 원판 안에 있다. 반복 미분으로 정하는 근의 위치에 관한 여러 부등식이 이 사실에서 출발한다.
- Sendov 추측(Sendov's conjecture)은 근이 모두 단위 원판에 있으면 각 근에서 거리 $1$ 이내에 임계점이 있다는 진술이다. Tao 는 차수가 충분히 큰 다항식에서 이 추측을 증명했다[^3].

[^1]: M. Marden, *Geometry of Polynomials*, 2nd ed., American Mathematical Society, 1966, 6절.
[^2]: D. Kalman, "An elementary proof of Marden's theorem", *American Mathematical Monthly* 115 (2008).
[^3]: T. Tao, "Sendov's conjecture for sufficiently high degree polynomials", *Acta Mathematica* 229 (2022).

# 연관 문서

## 선수지식

- [대수학의 기본정리](fundamental-theorem-of-algebra.md)

## 더 알아보기

아직 연결한 문서가 없다.

#complex_analysis #algebra
