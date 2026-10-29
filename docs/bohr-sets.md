# Bohr 집합

# 개요

**Bohr 집합(Bohr set)** 은 정해 둔 몇 개의 주파수에서 파동의 값이 모두 $1$ 에 가까운 원소들의 집합이다. $\mathbb Z/100$ 에서 $3x$ 를 $100$ 으로 나눈 나머지가 $0$ 에 가까운 $x$ 만 모으면 $0,33,34,66,67$ 과 그 근처의 원소들이 나오고, 두 원소의 합도 대개 다시 이 모양 안에 들어간다. Bohr 집합은 이렇게 등차수열처럼 덧셈에 닫혀 있는 성질을 써서, 등차수열로는 부족한 논증에서 등차수열 대신 쓰인다.

# 직관

Bohr 집합은 유한 Abel 군 $\mathbb Z/N$ 에서 주어진 주파수 몇 개의 파동이 모두 $1$ 에 가까운 원소의 집합이다. 주파수 집합 $R$ 과 반지름 $\rho$ 로 정하고, 크기와 덧셈 구조가 $\lvert R\rvert$ 차원의 상자처럼 행동한다.

[이산 Fourier 변환](fourier.md)에서 큰 계수를 갖는 주파수들을 모으면 Bohr 집합이 나온다. [등차수열의 Roth 정리](roth-theorem-arithmetic-progressions.md)의 Bourgain 이후 상한과 [Freiman 정리](freiman-theorem.md)의 Bogolyubov 보조정리에서 등차수열 대신 쓰인다.

Roth 의 밀도 증가 논법은 큰 Fourier 계수의 주파수 $r$ 하나를 보고, $e^{2\pi irx/N}$ 이 거의 변하지 않는 짧은 등차수열로 전체를 자른다. 그 등차수열의 길이가 $\sqrt N$ 정도로 줄어서 되풀이할수록 길이가 급히 작아진다.

길이를 덜 잃으려면 등차수열 대신 파동이 거의 변하지 않는 원소 전체를 모은다. 주파수 $r$ 에 대해 $\lVert rx/N\rVert\le\rho$ 인 $x$ 는 $2\rho N$ 개 정도이고, 주파수가 $d$ 개이면 조건이 $d$ 개라 $\rho^dN$ 개 정도가 남는다. 이 집합에서는 $N$ 이 거듭제곱근으로 줄지 않고 $\rho^d$ 배로만 준다.

# 정의

$R\subseteq\mathbb Z/N$ 과 $0\lt\rho\le 1/2$ 에 대해

$$
B(R,\rho)=\lbrace x\in\mathbb Z/N : \lVert rx/N\rVert\le\rho\quad(r\in R)\rbrace
$$

를 **계수(rank)** $d=\lvert R\rvert$, 반지름 $\rho$ 의 Bohr 집합이라 한다. $\lVert t\rVert$ 는 [실수](real-numbers.md) $t$ 와 가장 가까운 정수 사이의 거리다. $B(R,\rho)$ 는 $0$ 을 포함하고 $-B(R,\rho)=B(R,\rho)$ 이며, $B(R,\rho)+B(R,\rho')\subseteq B(R,\rho+\rho')$ 이다.

# 성질

## 크기의 하한

정리. $\lvert B(R,\rho)\rvert\ge\rho^dN$ 이다.

증명의 요지. $x\mapsto(rx/N)\_{r\in R}$ 로 $\mathbb Z/N$ 을 원환면 $(\mathbb R/\mathbb Z)^d$ 에 보낸다. 원환면을 한 변이 $\rho$ 인 상자 $\rho^{-d}$ 개로 나누면 [비둘기집 원리](pigeonhole-principle.md)로 한 상자에 $\rho^dN$ 개 이상의 원소가 간다. 그 상자의 원소 $y$ 하나를 고정하면 $x-y$ 는 모두 $B(R,\rho)$ 에 든다.

## 배증

정리. $\lvert B(R,2\rho)\rvert\le 4^d\lvert B(R,\rho)\rvert$ 이다.

증명의 요지. $B(R,2\rho)$ 의 상은 한 변이 $4\rho$ 인 정육면체 안에 있고, 이것을 한 변이 $\rho$ 인 상자 $4^d$ 개로 나눈다. 한 상자에 든 원소들은 서로의 차가 $B(R,\rho)$ 에 들어 $\lvert B(R,\rho)\rvert$ 개 이하다.

## 일반화 등차수열

정리. $N$ 이 소수이면 $B(R,\rho)$ 는 차원 $d$ 이하이고 크기가 $(\rho/d)^dN$ 이상인 고유 일반화 등차수열(generalized arithmetic progression)을 포함한다.

증명의 요지. 정수 $n$ 마다 벡터 $(rn)\_{r\in R}$ 를 잡고 $N\mathbb Z^d$ 를 더한 집합은 행렬식이 $N^{d-1}$ 인 [격자](lattices.md)이고, Bohr 집합은 이 격자와 한 변이 $2\rho N$ 인 정육면체의 교집합에 대응한다. Minkowski 의 둘째 정리(Minkowski's second theorem)로 연속 최소에 맞춘 기저를 잡으면 그 기저가 생성하는 일반화 등차수열이 정육면체 안에 들어간다.

## 정칙 Bohr 집합

반지름을 조금 바꿔도 크기가 거의 변하지 않을 때, 곧 $\lvert\kappa\rvert\le 1/(100d)$ 인 모든 $\kappa$ 에 대해

$$
\lvert B(R,(1+\kappa)\rho)\rvert\le(1+100d\lvert\kappa\rvert)\lvert B(R,\rho)\rvert
$$

이고 반대쪽 부등식도 성립할 때 $B(R,\rho)$ 를 **정칙(regular)** 이라 한다. J. Bourgain 은 모든 $\rho$ 에 대해 $\lbrack\rho,2\rho\rbrack$ 안에 정칙인 반지름이 있음을 보였다[^1]. 정칙 Bohr 집합 $B$ 와 반지름이 아주 작은 $B'$ 에 대해 $B+B'$ 가 $B$ 와 거의 같아서, 등차수열 위에서 하던 평균 계산을 그대로 옮길 수 있다.

# 활용

- 등차수열의 Roth 정리. Bourgain 은 밀도 증가를 정칙 Bohr 집합 위에서 하여 상한 $N(\log\log N/\log N)^{1/2}$ 를 얻었다[^1]. Sanders, Bloom–Sisask, Kelley–Meka 의 상한도 Bohr 집합 위의 밀도 증가다.
- Freiman 정리. Bogolyubov 보조정리가 $2A-2A$ 안에서 찾는 것이 Bohr 집합이고, 위 일반화 등차수열 정리로 Freiman 정리의 일반화 등차수열이 나온다.
- 유한체에서는 Bohr 집합이 부분공간이 된다. $\mathbb F\_3^n$ 에서 $\lbrace x : r\cdot x=0\quad(r\in R)\rbrace$ 이고, [캡 집합](cap-sets.md)의 Meshulam 논법은 이 부분공간 위의 밀도 증가다.

[^1]: J. Bourgain, "On triples in arithmetic progression", Geometric and Functional Analysis 9 (1999), 968–984.

# 연관 문서

## 선수지식

- [등차수열의 Roth 정리](roth-theorem-arithmetic-progressions.md)

## 더 알아보기

아직 연결한 문서가 없다.

#combinatorics #analysis #number_theory
