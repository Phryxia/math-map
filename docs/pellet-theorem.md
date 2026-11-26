# Pellet 정리

# 개요

**Pellet 정리(Pellet's theorem)** 는 다항식의 계수 하나가 나머지보다 충분히 클 때, 근이 없는 원환과 그 안쪽 원판의 근의 개수를 계수의 절댓값만으로 정하는 정리다. $p(z)=z^3+10z+1$ 의 근이 원점에서 얼마나 떨어져 있는지 알고 싶다. [Cauchy 근 한계](cauchy-root-bound.md)는 모든 근이 원판 $\lvert z\rvert\lt 11$ 안에 있다는 것만 알려 준다. Pellet 정리는 일차항의 계수 $10$ 이 크다는 데서, 원판 $\lvert z\rvert\le0.1001$ 에 근이 정확히 하나 있고 원환 $0.1001\lt\lvert z\rvert\lt3.111$ 에는 근이 없다고 답한다.

# 직관

원 $\lvert z\rvert=r$ 위에서 $p$ 의 세 항의 크기는 $r^3$, $10r$, $1$ 이다. $r=1$ 이면 $10r=10$ 이 나머지 둘의 합 $2$ 보다 크다. 원 위에서 한 항이 나머지를 모두 합친 것보다 크면, $p$ 는 원 위에서 $0$ 이 되지 않고 원 안의 근의 개수가 그 항 $10z$ 하나의 근의 개수와 같다. $10z$ 의 근은 $0$ 하나이므로 $p$ 도 원판 $\lvert z\rvert\lt1$ 에 근이 하나다.

이 논법이 통하는 $r$ 의 범위는 $10r\gt r^3+1$ 인 범위다. 이 부등식의 양변이 같아지는 양수 $0.1001$ 과 $3.111$ 사이의 모든 원에서 같은 결론이 나오므로, 그 사이의 원환에는 근이 없다. 실제 근은 $-0.0999$ 와 절댓값 $3.164$ 인 켤레 쌍 $0.0500\pm3.1635i$ 다.

# 정의

## Pellet 다항식

$p(z)=\sum_{j=0}^na_jz^j$ 는 복소수 계수이고 $a_0a_n\ne0$ 이다. $1\le k\le n-1$ 인 $k$ 에 대해 다음 실수 다항식을 만든다.

$$
q_k(x)=\lvert a_k\rvert x^k-\sum_{j\ne k}\lvert a_j\rvert x^j
$$

$a_k\ne0$ 이면 $q_k$ 의 계수열은 부호 변화가 둘이므로 [Descartes 부호 법칙](descartes-rule-of-signs.md)으로 양의 근이 둘이거나 없다.

직관 절의 예에서 $k=1$ 이고 $q_1(x)=10x-x^3-1$ 이다.

## Pellet 정리

정리. $q_k$ 가 양의 근 $R_1\lt R_2$ 를 가지면, $p$ 는 닫힌 원판 $\lvert z\rvert\le R_1$ 에 근을 정확히 $k$ 개(중복도를 센다) 갖고, 원환 $R_1\lt\lvert z\rvert\lt R_2$ 에는 근이 없다.

직관 절의 예에서 $R_1=0.1001$, $R_2=3.111$ 이다.

# 성질

## Rouché 정리에 의한 증명

증명의 요지. $R_1\lt r\lt R_2$ 이면 $q_k(r)\gt0$ 이다. 그래서 $\lvert z\rvert=r$ 위에서 다음이 성립한다.

$$
\left\lvert\sum_{j\ne k}a_jz^j\right\rvert\le\sum_{j\ne k}\lvert a_j\rvert r^j\lt\lvert a_k\rvert r^k=\lvert a_kz^k\rvert
$$

[Rouché 정리](rouche-theorem.md)로 $p$ 와 $a_kz^k$ 는 $\lvert z\rvert\lt r$ 안에 같은 개수의 근을 갖고, 그 수는 $k$ 다. 원 위에서 $p\ne0$ 이므로 원환의 모든 원에 근이 없다. $r$ 을 $R_1$ 쪽으로 보내면 닫힌 원판 $\lvert z\rvert\le R_1$ 에 근이 $k$ 개다.

## Cauchy 근 한계와의 관계

$k=n$ 으로 놓으면 $q_n$ 은 [Cauchy 근 한계](cauchy-root-bound.md)의 Cauchy 다항식이고, 양근이 하나뿐이라 원환은 무한대까지 뻗는다. 그때의 결론 "모든 $n$ 개의 근이 양근 안에 있다" 가 Cauchy 다항식의 양근에 관한 정리다. $k=0$ 이면 같은 논법이 근의 하한을 준다. Pellet 정리는 그 사이의 $k$ 에서 근을 크기에 따라 두 무리로 가른다.

## 조건이 실패하는 경우

$q_k$ 가 양의 근을 갖지 않으면, 곧 $q_k(x)\le0$ 이 모든 $x\gt0$ 에서 성립하면 정리는 아무것도 말하지 않는다. 직관 절의 예에서 $k=2$ 의 $q_2(x)=-x^3-10x-1$ 은 계수 $a_2=0$ 이라 언제나 음수다.

# 활용

- 근의 무리 나누기. $k=1,\dots,n-1$ 마다 $q_k$ 를 검사하면 근이 크기에 따라 몇 개씩 몇 원판에 모여 있는지 알 수 있고, 근 사이의 간격이 큰 다항식에서는 근을 크기별로 나눈다. [Graeffe 근 제곱법](graeffe-method.md)으로 근의 크기 차를 벌린 다음에 쓰면 조건이 성립하기 쉬워진다.
- 동시 반복의 초깃값. 근의 크기의 무리를 알면 [Durand–Kerner 법](durand-kerner-method.md)과 Aberth 법(Aberth method)의 초깃값을 한 원이 아니라 무리마다 다른 반지름의 원 위에 놓는다.
- 작은 근의 분리. 직관 절의 예처럼 $a_1$ 이 크면 $0$ 근처의 근 하나가 나머지와 떨어져 있다는 것이 보장되므로, 그 근을 $-a_0/a_1$ 에서 시작한 [Newton 법](newton-method.md)으로 구한다.

# 연관 문서

## 선수지식

- [Rouché 정리](rouche-theorem.md)
- [Cauchy 근 한계](cauchy-root-bound.md)

## 더 알아보기

아직 연결한 문서가 없다.

#complex_analysis #algebra #algorithms
