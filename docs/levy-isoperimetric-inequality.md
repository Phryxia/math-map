# Lévy 등주부등식

# 개요

**Lévy 등주부등식(Lévy's isoperimetric inequality)** 은 구면 위에서 넓이가 정해진 집합 가운데, 집합을 일정한 폭만큼 넓혔을 때 넓이가 가장 적게 늘어나는 것이 구면 모자라는 정리다. 지구본에서 북반구와, 넓이가 같은 다른 집합(두 극 둘레의 작은 모자 두 개)을 같은 폭만큼 넓혀 비교하면 북반구가 덜 늘어난다. 이 정리로 넓이가 절반인 집합의 확대를 반구의 확대와 비교하면, 차원이 큰 구면에서는 반구를 조금만 넓혀도 구면 거의 전체를 덮는다는 것이 어떤 집합에서나 성립한다.

# 직관

보통의 구면 $S^2$ 에서 높이 $x_3\ge h$ 인 모자의 넓이는 전체의 $(1-h)/2$ 다. 남반구 $\lbrace x_3\le 0\rbrace$ 를 구면 위 거리 $r$ 만큼 넓히면 $\lbrace x_3\le\sin r\rbrace$ 이고 넓이는 $(1+\sin r)/2$ 다. $r=0.5$ 이면 $\sin 0.5\approx 0.479$ 이므로 넓이가 $0.740$ 이다.

넓이가 같은 다른 집합으로 두 극 둘레의 모자 $\lbrace\vert x_3\vert\ge 1/2\rbrace$ 를 잡는다. 모자 하나의 넓이가 $1/4$ 이고 둘을 합치면 $1/2$ 이다. 모자의 경계는 극에서 각도 $60°$ 에 있고, $r=0.5$ 만큼 넓히면 경계가 각도 약 $88.6°$ 로 내려가 모자 하나의 넓이가 $(1-\cos 88.6°)/2\approx 0.488$, 합이 $0.976$ 이다. 같은 폭으로 넓혔을 때 반구는 $0.240$ 늘고 두 모자는 $0.476$ 늘었다.

차원을 올린다. $\mathbb R^n$ 의 단위구면에서 $x_1\ge\varepsilon$ 인 모자의 넓이는 전체의 $e^{-n\varepsilon^2/2}$ 이하다. 반구 $\lbrace x_1\le 0\rbrace$ 에서 거리 $r$ 보다 먼 점은 $x_1\gt\sin r$ 인 점이므로, $n=1000$, $r=0.1$ 이면 반구의 확대 바깥 넓이가 $e^{-1000\cdot 0.0998^2/2}\approx 0.007$ 이하다. 반구가 가장 적게 늘어나므로 넓이가 절반인 모든 집합이 거리 $0.1$ 만큼 넓혀 구면의 $99.3$% 이상을 덮는다.

# 정의

## 구면 위의 거리와 측도

$S^{n-1}=\lbrace x\in\mathbb R^n:\vert x\vert=1\rbrace$ 위의 거리 $d(x,y)$ 는 두 점 사이 대원 호의 길이, 곧 $\arccos\langle x,y\rangle$ 이다. $\sigma$ 는 전체가 $1$ 이 되도록 정규화한 넓이 측도다. 집합 $A\subset S^{n-1}$ 과 $r\gt 0$ 에 대해 $A$ 의 **$r$ 확대($r$-enlargement)** 는 다음이다.

$$
A_r=\lbrace x\in S^{n-1}:d(x,A)\le r\rbrace
$$

## 구면 모자

점 $x_0\in S^{n-1}$ 과 $0\le\rho\le\pi$ 에 대해 $C(x_0,\rho)=\lbrace x:d(x,x_0)\le\rho\rbrace$ 를 **구면 모자(spherical cap)** 라 한다. 모자의 $r$ 확대는 반지름이 $\rho+r$ 인 모자다. 직관 절의 남반구는 $C(-e_3,\pi/2)$ 이고 그 $0.5$ 확대는 $C(-e_3,\pi/2+0.5)$ 다.

# 성질

## Lévy 의 정리

$A\subset S^{n-1}$ 이 닫힌 집합이고 모자 $C$ 가 $\sigma(C)=\sigma(A)$ 를 만족하면 모든 $r\gt 0$ 에서 다음이 성립한다[^1].

$$
\sigma(A_r)\ge\sigma(C_r)
$$

평면의 [등주부등식](isoperimetric-inequality.md)에서 원판이 갖는 성질을 구면에서는 모자가 갖는다. Lévy 가 진술하고 증명을 적었고, 모든 차원의 엄밀한 증명은 E. Schmidt 가 처음 냈다[^1].

## 두 점 대칭화

증명 방법 하나는 두 점 대칭화(two-point symmetrization)다. 원점을 지나는 초평면 $L$ 과 그 한쪽 반구를 고르고, $L$ 에 대한 거울상인 두 점 $x,x'$ 마다 $A$ 가 둘 가운데 하나만 포함하면 그 점을 고른 반구 쪽으로 옮긴다. 이 조작은 넓이를 바꾸지 않고 확대의 넓이를 늘리지 않는다. 조작을 되풀이한 집합들의 극한이 모자임을 콤팩트성으로 보인다[^2].

## 모자의 넓이

$\mathbb R^n$ 의 단위구면에서 $0\le\varepsilon\lt 1$ 이면 다음이 성립한다[^3].

$$
\sigma\bigl(\lbrace x\in S^{n-1}:x_1\ge\varepsilon\rbrace\bigr)\le e^{-n\varepsilon^2/2}
$$

증명의 요지. $\varepsilon\le 1/\sqrt2$ 이면 원점과 모자를 이은 원뿔이 중심 $\varepsilon e_1$, 반지름 $\sqrt{1-\varepsilon^2}$ 인 공에 들어간다. 모자의 넓이 비율은 이 원뿔의 부피가 단위 공에서 차지하는 비율과 같으므로 $(1-\varepsilon^2)^{n/2}\le e^{-n\varepsilon^2/2}$ 이하다. $\varepsilon\gt 1/\sqrt2$ 이면 반지름 $1/(2\varepsilon)$ 인 공으로 같은 비교를 한다.

## 측도 집중

$\sigma(A)\ge 1/2$ 이면 Lévy 의 정리를 반구와 비교하고 모자의 넓이를 쓰면 다음이 나온다.

$$
\sigma(S^{n-1}\setminus A_r)\le e^{-n\sin^2r/2}
$$

$F:S^{n-1}\to\mathbb R$ 가 1-Lipschitz 이고 $M$ 이 중앙값이면 $A=\lbrace F\le M\rbrace$ 에 이것을 써서 $\sigma(F\gt M+r)\le e^{-n\sin^2r/2}$ 를 얻는다. 차원이 커지면 구면 위의 Lipschitz 함수는 거의 상수다. 이것을 측도 집중(concentration of measure)이라 한다.

## Gauss 공간으로의 극한

반지름 $\sqrt N$ 인 구면 위의 균등분포를 처음 $n$ 좌표로 사영한 분포는 $N\to\infty$ 에서 $\mathbb R^n$ 의 표준 정규분포로 수렴한다. 이 극한에서 구면 모자는 반공간으로 가고, Lévy 의 정리는 [Gauss 등주부등식](gaussian-isoperimetric-inequality.md)이 된다.

# 활용

- [Dvoretzky 정리](dvoretzky-theorem.md)의 Milman 증명은 측도 집중으로, 고차원 노름 공간에 Euclid 공간에 가까운 부분공간이 있음을 보인다.
- [Johnson–Lindenstrauss 보조정리](johnson-lindenstrauss-lemma.md)는 고정한 벡터를 무작위 $k$ 차원 부분공간에 사영하는 문제로도 쓸 수 있고, 사영 길이의 집중을 구면 위 함수 $x\mapsto\vert(x_1,\dots,x_k)\vert$ 의 집중으로 얻는다.
- [Gauss 등주부등식](gaussian-isoperimetric-inequality.md)의 Sudakov–Tsirelson 증명이 이 정리를 Poincaré 극한으로 옮긴 것이다.

[^1]: P. Lévy, *Problèmes concrets d'analyse fonctionnelle*, Gauthier-Villars, 1951. E. Schmidt, "Die Brunn-Minkowskische Ungleichung und ihr Spiegelbild sowie die isoperimetrische Eigenschaft der Kugel in der euklidischen und nichteuklidischen Geometrie I", *Mathematische Nachrichten* 1 (1948), 81–157.
[^2]: Y. Benyamini, "Two point symmetrization, the isoperimetric inequality on the sphere and some applications", *Longhorn Notes, University of Texas Functional Analysis Seminar* (1983–84), 53–76.
[^3]: Keith Ball, "An elementary introduction to modern convex geometry", *Flavors of Geometry*, MSRI Publications 31, Cambridge University Press, 1997, 보조정리 2.2.

# 연관 문서

## 선수지식

- [등주부등식](isoperimetric-inequality.md)

## 더 알아보기

- [Gauss 등주부등식](gaussian-isoperimetric-inequality.md)
- [Dvoretzky 정리](dvoretzky-theorem.md)

#analysis #probability #differential_geometry
