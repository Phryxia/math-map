# Haar 측도

# 개요

Haar 측도는 군 위의 평행이동 불변 측도다. 유한군 $G$ 에서 함수의 평균은 $\frac1{\vert G\vert}\sum_{g\in G}f(g)$ 이고 이 값은 $f$ 를 $f(h\thinspace\cdot)$ 로 바꿔도 변하지 않는다. 원소가 무한히 많은 군에서 같은 평균을 쓰려면 합을 적분으로 바꿔야 하고, 그 적분이 불변이 되는 측도가 Haar 측도다. 국소콤팩트 위상군이면 그런 측도가 상수배까지 하나뿐이다.

# 직관

양의 실수 전체를 곱셈으로 묶은 군 $(\mathbb R_{\gt 0},\times)$ 에서 함수의 평균을 내려 한다. 유한군에서 하던 대로 하면 $a$ 를 곱해 옮긴 함수의 평균이 원래 평균과 같아야 한다. 이미 아는 적분은 [Lebesgue 적분](lebesgue-integral.md)이므로 그것으로 계산해 본다.

$$
\int_0^\infty f(ax)\thinspace dx=\frac1a\int_0^\infty f(y)\thinspace dy
$$

$y=ax$ 로 바꾸면 $dy=a\thinspace dx$ 라서 $1/a$ 가 남는다. $a$ 를 곱해 옮기기만 했는데 값이 $a$ 에 따라 달라지므로 이 적분은 평균이 아니다.

$1/a$ 가 남은 것은 길이를 재는 자가 곱셈에 늘어나기 때문이다. $x$ 근처의 짧은 구간에 $a$ 를 곱하면 길이가 $a$ 배가 된다. 그러면 구간마다 길이를 그 위치의 $x$ 로 나눠 두면 늘어난 만큼이 상쇄된다.

$$
\int_0^\infty f(ax)\thinspace\frac{dx}x=\int_0^\infty f(y)\thinspace\frac{dy}y
$$

$y=ax$ 로 바꾸면 $dy/y=a\thinspace dx/(ax)=dx/x$ 이므로 두 적분이 같다. 무게 $1/x$ 를 준 이 측도가 $(\mathbb R_{\gt 0},\times)$ 의 Haar 측도다.

# 정의

**위상군**은 곱 $(g,h)\mapsto gh$ 와 역원 $g\mapsto g^{-1}$ 이 연속인 위상공간 $G$ 다. $G$ 가 국소콤팩트 Hausdorff 일 때, Borel 집합 위의 측도 $\mu$ 가 다음을 만족하면 **좌 Haar 측도**라 한다.

- 콤팩트 집합의 측도가 유한하고 공집합이 아닌 열린집합의 측도가 양이다.
- 모든 $g\in G$ 와 Borel 집합 $A$ 에 대해 $\mu(gA)=\mu(A)$ 다.

$\mu(Ag)=\mu(A)$ 를 만족하는 것은 **우 Haar 측도**다. 좌불변이면서 우불변인 군을 **유니모듈러**라 한다.

## 예

| 군 | 좌 Haar 측도 |
| --- | --- |
| $(\mathbb R,+)$ | Lebesgue 측도 $dx$ |
| $(\mathbb R_{\gt 0},\times)$ | $dx/x$ |
| 원 $\mathbb T=\lbrace z\in\mathbb C:\vert z\vert=1\rbrace$ | $d\theta/2\pi$ |
| 유한군 $G$ | 계량측도의 $1/\vert G\vert$ 배 |
| $\mathrm{GL}\_n(\mathbb R)$ | $\vert\det X\vert^{-n}\thinspace dX$ |
| $p$ 진체 $\mathbb Q\_p$ | $\mathbb Z\_p$ 의 측도가 $1$ 인 측도 |

아핀 변환군 $G=\lbrace x\mapsto ax+b: a\gt 0,\thinspace b\in\mathbb R\rbrace$ 은 좌 Haar 측도가 $a^{-2}\thinspace da\thinspace db$ 이고 우 Haar 측도가 $a^{-1}\thinspace da\thinspace db$ 다. 둘이 다르므로 유니모듈러가 아니다.

# 성질

## 존재와 유일성

**정리**(Haar, Weil)**.** 국소콤팩트 Hausdorff 위상군에는 좌 Haar 측도가 존재하고, 두 좌 Haar 측도는 양의 상수배로 서로 옮겨진다.

존재의 요지는 콤팩트 집합을 작은 열린집합의 평행이동으로 덮는 개수를 재는 것이다. 콤팩트 $K$ 와 공집합이 아닌 열린 $U$ 에 대해 $K$ 를 덮는 데 필요한 $U$ 의 좌평행이동의 최소 개수를 $(K:U)$ 라 하면, 기준 콤팩트 집합 $K\_0$ 을 하나 고정한 비 $(K:U)/(K\_0:U)$ 가 $U$ 를 항등원 쪽으로 줄일 때 갖는 극한값이 $\mu(K)$ 다. 각 $U$ 마다 이 비는 $(K:U)/(K\_0:U)\le(K:K\_0)$ 로 유계이고 좌평행이동에 불변이므로, 유계 구간의 곱공간에서 Tychonoff 정리로 극한을 하나 잡는다.

유일성의 요지는 좌 Haar 측도 $\mu$ , $\nu$ 에 대해 Fubini 정리로 $\int f\thinspace d\mu\cdot\int g\thinspace d\nu$ 를 두 순서로 계산하는 것이다. 두 값이 같다는 데서 비 $\int f\thinspace d\mu/\int f\thinspace d\nu$ 가 $f$ 에 의존하지 않는 상수임이 나온다.

## 모듈러 함수

$\mu$ 가 좌 Haar 측도이면 $A\mapsto\mu(Ag)$ 도 좌 Haar 측도다. 유일성에서 양수 $\Delta(g)$ 가 있어

$$
\mu(Ag)=\Delta(g)\thinspace\mu(A)
$$

가 성립한다. $\Delta:G\to\mathbb R_{\gt 0}$ 은 연속 준동형이고 **모듈러 함수**라 한다. 유니모듈러인 것은 $\Delta\equiv1$ 인 것과 같다. 콤팩트군, 아벨군, 이산군, 반단순 [Lie 군](lie-groups.md)이 유니모듈러다. 콤팩트군에서는 $\Delta$ 의 상이 $\mathbb R_{\gt 0}$ 의 콤팩트 부분군이어서 $\lbrace 1\rbrace$ 뿐이다.

## 정규화

콤팩트군은 $\mu(G)\lt\infty$ 이므로 $\mu(G)=1$ 로 맞추면 좌 Haar 측도가 하나로 정해진다. 이 측도에 대한 적분이 유한군의 평균 $\frac1{\vert G\vert}\sum_g$ 를 대신한다. 콤팩트 열린 부분군 $K$ 를 갖는 군에서는 $\mu(K)=1$ 로 맞춘다. $p$ 진군에서 쓰는 정규화가 이것이다.

## 불변 측도의 몫

닫힌 부분군 $H\le G$ 에 대해 몫공간 $G/H$ 위에 $G$ 불변 측도가 있는 것은 $G$ 와 $H$ 의 모듈러 함수가 $H$ 위에서 일치하는 것과 같다. $G$ 와 $H$ 가 모두 유니모듈러이면 조건이 성립한다.

# 활용

- [Peter–Weyl 정리](peter-weyl.md)는 콤팩트군 $G$ 의 정규화된 Haar 측도로 $L^2(G)$ 를 만들고, 그 공간이 기약표현의 행렬성분으로 분해된다는 진술이다. 유한군 표현론의 평균 논법을 콤팩트군으로 옮기는 자리가 이 측도다.
- [Weyl 지표 공식](weyl-character-formula.md)의 해석적 증명은 콤팩트 연결 Lie 군의 Haar 측도를 극대원환면으로 밀어낸다. 그 [상측도](pushforward-measure.md)가 Weyl 적분 공식의 야코비안 $\frac1{\vert W\vert}\vert\Delta\vert^2$ 를 준다.
- [Sato–Tate 분포](sato-tate.md)는 정규화된 Frobenius 각이 $\mathrm{SU}(2)$ 의 켤레류에서 Haar 측도로 등분포한다는 진술이다. 그 측도를 각으로 읽은 것이 반원 분포다.
- [아델](adeles.md)의 제한직적은 국소콤팩트라서 Haar 측도를 갖는다. [질량 공식](mass-formula.md)은 이중잉여류의 부피를 이 측도로 재어 격자류의 개수 대신 부피를 센다.
- [Satake 동형](satake-isomorphism.md)은 $\mathrm{vol}(K)=1$ 로 정규화한 Haar 측도의 합성곱으로 비분기 Hecke 대수를 정의한다.

# 연관 문서

## 선수지식

- [측도](measure.md)
- [Lie 군](lie-groups.md)

## 더 알아보기

- [Peter–Weyl 정리](peter-weyl.md)

#measure_theory #group_theory #functional_analysis #number_theory
