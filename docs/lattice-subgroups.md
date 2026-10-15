# 격자 부분군

# 개요

격자 부분군은 몫이 유한 부피인 이산 부분군이다. $\mathbb Z^n$ 으로 $\mathbb R^n$ 을 나누면 부피 $1$ 인 환면이 남는다. $\mathrm{SL}\_2(\mathbb Z)$ 로 $\mathrm{SL}\_2(\mathbb R)$ 을 나눈 몫은 콤팩트하지 않지만 [Haar 측도](haar-measure.md)로 재면 부피가 유한하다. 두 경우를 함께 담는 조건이 격자다.

# 직관

평면의 정수점 전체 $\mathbb Z^2$ 로 $\mathbb R^2$ 를 접으면 단위 정사각형 하나가 남고 그 면적은 $1$ 이다. 접힌 결과는 환면이어서 콤팩트하고, 면적도 유한하다.

같은 일을 $2\times 2$ 실행렬의 군에서 해 본다. $G=\mathrm{SL}\_2(\mathbb R)$ 는 상반평면 $\mathbb H=\lbrace z:\mathrm{Im}\thinspace z\gt 0\rbrace$ 에 $z\mapsto(az+b)/(cz+d)$ 로 작용하고, $i$ 를 고정하는 부분군은 회전행렬 전체 $\mathrm{SO}(2)$ 다. 정수 성분 행렬 $\Gamma=\mathrm{SL}\_2(\mathbb Z)$ 는 항등원 근방에 자기 원소를 하나만 담으므로 이산이고, 상반평면에서 $\Gamma$ 로 접은 결과는 다음 영역을 접은 것과 같다.

$$
F=\lbrace x+iy:\vert x\vert\lt 1/2,\thinspace x^2+y^2\gt 1\rbrace
$$

$F$ 는 $y$ 가 커지는 쪽으로 끝없이 뻗으므로 접은 결과는 콤팩트하지 않다. 그래도 면적은 재진다. 상반평면에서 $G$ 의 작용에 변하지 않는 측도는 $y^{-2}\thinspace dx\thinspace dy$ 이고, 이것으로 $F$ 를 재면 다음과 같다.

$$
\int_{-1/2}^{1/2}\int_{\sqrt{1-x^2}}^{\infty}\frac{dy\thinspace dx}{y^2}=\int_{-1/2}^{1/2}\frac{dx}{\sqrt{1-x^2}}=\frac{\pi}{3}
$$

$y$ 가 커지는 쪽에서 $\int dy/y^2$ 가 수렴하므로 뻗은 부분의 면적이 유한하다. 접은 결과가 콤팩트하지 않아도 부피는 유한하다. 그래서 조건을 콤팩트가 아니라 유한 부피로 잡고, 그 조건을 만족하는 이산 부분군을 격자라 부른다.

# 정의

## 격자

국소콤팩트 Hausdorff [위상군](topological-groups.md) $G$ 의 부분군 $\Gamma$ 가 **격자**(lattice)라는 것은 $\Gamma$ 가 이산이고 몫 $G/\Gamma$ 가 유한한 $G$ 불변 Borel 측도를 갖는 것이다.

이산 부분군은 닫혀 있으므로 $G/\Gamma$ 는 Hausdorff 다. 이산군은 유니모듈러이므로, Haar 측도의 몫 조건에 따라 $G$ 의 모듈러 함수 $\Delta_G$ 가 $\Gamma$ 위에서 $1$ 이면 좌 Haar 측도 $\mu_G$ 가 $G/\Gamma$ 의 불변 측도로 내려온다.

## 기본 영역

Borel 집합 $F\subseteq G$ 가 다음을 만족하면 $\Gamma$ 의 **기본 영역**이라 한다.

$$
G=\bigsqcup_{\gamma\in\Gamma}F\gamma
$$

$\mu_G(F)$ 는 $F$ 를 어떻게 잡아도 같고, 그 값을 $\Gamma$ 의 **공부피**라 한다.

## 균질과 비균질

$G/\Gamma$ 가 콤팩트한 격자를 **균질 격자**, 콤팩트하지 않은 격자를 **비균질 격자**라 한다.

| $G$ | $\Gamma$ | 공부피 | 균질 |
| --- | --- | --- | --- |
| $\mathbb R^n$ | $\mathbb Z^n$ | $1$ | 예 |
| $\mathbb R^n$ | $A\mathbb Z^n$, $A\in\mathrm{GL}\_n(\mathbb R)$ | $\vert\det A\vert$ | 예 |
| 아델 환 $\mathbb A\_{\mathbb Q}$ | $\mathbb Q$ | $1$ | 예 |
| $\mathrm{SL}\_2(\mathbb R)$ | $\mathrm{SL}\_2(\mathbb Z)$ | 쌍곡 면적 $\pi/3$ | 아니오 |
| $\mathrm{SL}\_2(\mathbb R)$ | 종수 $g\ge 2$ 곡면의 Fuchs 군 | 쌍곡 면적 $4\pi(g-1)$ | 예 |

# 성질

## 유니모듈러성

**정리.** $G$ 가 격자를 가지면 $G$ 는 유니모듈러다.

증명의 요지. 모듈러 함수 $\Delta_G$ 는 $\Gamma$ 위에서 $1$ 이므로 $G/\Gamma$ 위의 연속함수 $\delta$ 로 내려온다. $c\gt 0$ 에 대해 $E_c=\lbrace x\in G/\Gamma:\delta(x)\le c\rbrace$ 라 하면 $\delta(gx)=\Delta_G(g)\delta(x)$ 에서 $gE_c=E_{c\Delta_G(g)}$ 다. 유한 불변 측도 $\nu$ 가 있으므로 $\nu(E_c)=\nu(E_{c\Delta_G(g)})$ 가 모든 $g$ 와 $c$ 에서 성립한다.

$\Delta_G$ 가 자명하지 않으면 그 상은 $\mathbb R\_{\gt 0}$ 에서 위로도 아래로도 유계가 아닌 부분군이고, 위 등식에서 $\nu(E_c)$ 가 $c$ 에 의존하지 않는 상수가 된다. 그 상수는 $c\to\infty$ 에서 $\nu(G/\Gamma)$ 이고 $c\to 0$ 에서 $0$ 이므로 $\nu(G/\Gamma)=0$ 이다. $\nu$ 가 자명하지 않다는 데 어긋난다.

## 공부피의 유일성

**정리.** 두 기본 영역 $F$ , $F'$ 에 대해 $\mu_G(F)=\mu_G(F')$ 다.

증명의 요지. $F=\bigsqcup_{\gamma}(F\cap F'\gamma)$ 이고 $F'=\bigsqcup_{\gamma}(F'\cap F\gamma)$ 다. 위 정리로 $G$ 가 유니모듈러이므로 $\mu_G(F\cap F'\gamma)=\mu_G(F\gamma^{-1}\cap F')$ 이고, $\gamma$ 에 대해 더하면 두 값이 같다.

## 콤팩트 몫

**정리.** $G$ 가 유니모듈러이고 $\Gamma$ 가 이산 부분군이며 $G/\Gamma$ 가 콤팩트하면 $\Gamma$ 는 격자다.

증명의 요지. $G$ 와 $\Gamma$ 가 모두 유니모듈러이므로 $G/\Gamma$ 에 불변 Radon 측도가 있다. 콤팩트 Hausdorff 공간의 Radon 측도는 전체 측도가 유한하다.

역은 성립하지 않는다. $\mathrm{SL}\_2(\mathbb Z)$ 는 격자이지만 몫이 콤팩트하지 않다. 반단순 Lie 군에서 균질성을 판정하는 것이 Godement 판정이고, 격자가 항등원 아닌 멱단 원소를 갖지 않는 것과 몫의 콤팩트성이 동치라는 진술이다[^1]. $\mathrm{SL}\_2(\mathbb Z)$ 는 멱단 원소 $\begin{pmatrix}1&1\cr 0&1\end{pmatrix}$ 를 가지므로 비균질이다.

## 유한 지표 부분군

**정리.** $\Gamma$ 가 격자이고 $\Gamma'\le\Gamma$ 가 유한 지표이면 $\Gamma'$ 도 격자이고 공부피는 $\lbrack\Gamma:\Gamma'\rbrack$ 배다.

증명의 요지. $\Gamma=\bigsqcup_{i=1}^{n}\Gamma'\gamma_i$ 로 분해하면 $\Gamma$ 의 기본 영역 $F$ 에 대해 $\bigsqcup_{i}F\gamma_i$ 가 $\Gamma'$ 의 기본 영역이다. 조각마다 측도가 같으므로 공부피가 $n$ 배다.

## SL₂(Z)

**정리.** $\mathrm{SL}\_2(\mathbb Z)$ 는 $\mathrm{SL}\_2(\mathbb R)$ 의 비균질 격자다.

증명의 요지. $\mathrm{SL}\_2(\mathbb R)/\mathrm{SO}(2)\cong\mathbb H$ 이고 $\mathrm{SO}(2)$ 는 콤팩트하므로, $\mathrm{SL}\_2(\mathbb Z)$ 의 공부피는 상반평면 쪽 기본 영역의 쌍곡 면적에 $\mathrm{SO}(2)$ 의 부피를 곱한 것이다. 직관 절의 계산으로 그 면적이 $\pi/3$ 이다. 이산성은 정수 성분이라는 조건에서 나온다.

# 활용

- [아델](adeles.md)의 이산성과 콤팩트성 절은 수체 $K$ 가 $\mathbb A_K$ 의 이산 부분군이고 $\mathbb A_K/K$ 가 콤팩트하다는 정리다. $\mathbb A_K$ 가 가환이라 유니모듈러이므로 콤팩트 몫 정리에 따라 $K$ 는 균질 격자이고, 같은 문서의 Poisson 합공식이 이 구조를 쓴다.
- [모듈러 곡선](modular-curves.md)은 합동 부분군 $\Gamma_0(N)$ 으로 상반평면을 나눈 몫이다. $\Gamma_0(N)$ 이 $\mathrm{SL}\_2(\mathbb Z)$ 의 유한 지표 부분군이므로 격자이고, 그 문서가 쓰는 지표 $\lbrack\mathrm{SL}\_2(\mathbb Z):\Gamma_0(N)\rbrack$ 가 공부피의 배수다.
- [Selberg 대각합 공식](selberg-trace-formula.md)은 $L^2(\Gamma\backslash\mathbb H)$ 의 스펙트럼을 켤레류의 합으로 쓴다. 그 $L^2$ 공간을 세우는 측도가 격자의 유한 불변 측도다.
- [격자](lattices.md)의 공부피는 기저 행렬의 행렬식의 절댓값이고, 이것이 $\mathbb R^n$ 에서 위 정의의 공부피와 같다. Minkowski 정리의 부피 비교가 그 값과 대칭 볼록체의 부피를 견주는 것이다.
- [Haar 측도](haar-measure.md)의 불변 측도의 몫 절이 주는 조건이 격자의 정의에서 몫측도의 존재를 보장한다.

[^1]: Raghunathan, *Discrete Subgroups of Lie Groups*, Springer, 1972, Theorem 11.6 과 Corollary 11.8.

# 연관 문서

## 선수지식

- [격자](lattices.md)
- [Haar 측도](haar-measure.md)

## 더 알아보기

아직 연결한 문서가 없다.

#topology #group_theory #measure_theory #number_theory
