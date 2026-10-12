# Poincaré 쌍대성

# 개요

Poincaré 쌍대성은 닫힌 유향 $n$ 차원 [다양체](manifolds.md)에서 $k$ 차 [코호몰로지](cohomology.md)와 $n-k$ 차 [호몰로지](homology.md)가 동형이라는 정리다. 동형은 기본류와의 cap 곱으로 주어진다.

이 동형 아래 컵곱이 부분다양체의 교차에 대응하고, 차수의 합이 $n$ 인 두 코호몰로지류의 곱을 기본류에서 값매김한 정수가 교차수다.

# 직관

닫힌 유향 다양체의 Betti 수를 차수 순으로 적으면 양끝에서 같은 수가 나온다. 2 차원 토러스는 $1,2,1$ 이고 구면 $S^2$ 는 $1,0,1$ 이다. 3 차원 토러스는 $1,3,3,1$ 이고 $S^1\times S^2$ 는 $1,1,1,1$ 이다.

이유는 삼각분할의 쌍대 분할에 있다. 토러스를 정사각형 격자로 자르고, 면마다 중심을 찍어 새 꼭짓점으로 삼고 변을 가로지르는 선분을 새 변으로 삼으면 다시 격자가 나온다. 원래 꼭짓점은 새 격자의 면이 되고 변은 변이 된다. 일반적으로 $k$ 차원 조각이 $n-k$ 차원 조각에 대응하고 포함 관계가 뒤집히므로, 쌍대 분할의 사슬 복합체는 원래 사슬 복합체의 쌍대를 차수 번호만 뒤집어 놓은 것이 된다.

# 정의

## 기본류

$M$ 이 연결된 닫힌 유향 $n$ 차원 다양체이면 $H_n(M;\mathbb Z)\cong\mathbb Z$ 다. 방향이 생성원 하나를 고르고, 그 생성원을 **기본류** $\lbrack M\rbrack$ 이라 한다.[^1]

유향이 아니면 $H_n(M;\mathbb Z)=0$ 이고, $\mathbb Z/2$ 계수에서는 방향 없이 $H_n(M;\mathbb Z/2)\cong\mathbb Z/2$ 의 생성원이 기본류를 준다.

## cap 곱

특이 단체 $\sigma\colon\Delta^n\to X$ 와 $\varphi\in C^k(X;R)$ 에 대해 **cap 곱**을 다음으로 정의한다.

$$
\varphi\frown\sigma=\varphi\bigl(\sigma\vert\lbrack v_0,\dots,v_k\rbrack\bigr)\thinspace\sigma\vert\lbrack v_k,\dots,v_n\rbrack
$$

경계 공식 $\partial(\varphi\frown\sigma)=(-1)^k(\delta\varphi\frown\sigma-\varphi\frown\partial\sigma)$ 가 성립하므로 이 연산이 호몰로지로 내려와 $H^k(X;R)\otimes H_n(X;R)\to H\_{n-k}(X;R)$ 을 준다.

## 쌍대성 사상

닫힌 유향 $n$ 차원 다양체 $M$ 의 **쌍대성 사상**은 기본류와의 cap 곱이다.

$$
D\colon H^k(M;R)\to H\_{n-k}(M;R),\qquad D(\alpha)=\alpha\frown\lbrack M\rbrack
$$

# 성질

## 쌍대성 정리

**정리.** $M$ 이 닫힌 유향 $n$ 차원 다양체이면 모든 $k$ 와 모든 계수환 $R$ 에서 $D$ 가 동형이다.

증명의 요지. 콤팩트 지지 코호몰로지로 진술을 넓혀 열린 부분집합마다 같은 사상을 세운다. $\mathbb R^n$ 에서 직접 확인하고, 두 열린 집합과 그 교집합의 Mayer–Vietoris 열이 사상들을 가환으로 잇는다. 다섯 보조정리가 합집합으로 결론을 옮기고, 증가하는 열린 집합의 합집합은 직접극한으로 처리한다. 다양체를 좌표 근방의 증가하는 합집합으로 적으면 전체가 따라온다. ∎

## Betti 수의 대칭

계수가 체이면 $H^k(M)$ 이 $H_k(M)$ 의 쌍대공간이므로 차원이 같고, 쌍대성 정리가 $b_k(M)=b\_{n-k}(M)$ 을 준다.

$n$ 이 홀수이면 이 대칭이 짝수 차수와 홀수 차수의 Betti 수를 짝지으므로 [Euler 표수](euler-characteristic.md)가 $0$ 이다.

## 교차수

차수의 합이 $n$ 인 $\alpha\in H^k$ 와 $\beta\in H^{n-k}$ 에 대해 $\langle\alpha\cup\beta,\lbrack M\rbrack\rangle$ 을 **교차수**라 한다. 쌍대성 정리는 이 쌍이 비퇴화임을 준다. 곧 $\alpha\ne 0$ 이면 $\langle\alpha\cup\beta,\lbrack M\rbrack\rangle\ne 0$ 인 $\beta$ 가 있다.

$M$ 이 $4$ 차원이면 $k=2$ 에서 이 쌍이 $H^2(M;\mathbb Z)$ 위의 대칭 쌍선형형식이 되고, 이것을 **교차형식**이라 한다. 닫힌 단연결 4 차원 다양체의 위상형은 이 형식으로 정해진다.

## 경계와 비유향

경계가 있는 콤팩트 유향 다양체에서는 $H^k(M,\partial M;R)\cong H\_{n-k}(M;R)$ 과 $H^k(M;R)\cong H\_{n-k}(M,\partial M;R)$ 이 성립한다. 이것을 Lefschetz 쌍대성이라 한다.

유향이 아닌 닫힌 다양체에서는 $\mathbb Z/2$ 계수로 같은 동형이 성립한다. $\mathbb Z$ 계수에서는 비틀림 계수다발로 꼬아야 한다.

# 활용

- [특성류](characteristic-classes.md)의 값을 수로 읽는 것이 기본류에서의 값매김이다. Chern 수와 Pontryagin 수가 그렇게 정의된다.
- [지표 정리](index-theorem.md)의 위상적 지표가 특성류의 곱을 기본류에서 값매김한 수다.
- [Seiberg–Witten 이론](seiberg-witten-theory.md)과 [Yang–Mills 이론](yang-mills-theory.md)이 교차형식으로 4 차원 다양체를 분류한다. Donaldson 의 대각화 정리가 그 형식에 제약을 준다.
- 닫힌 유향 $n$ 차원 다양체 사이의 사상 $f$ 의 차수는 $f\_\ast\lbrack M\rbrack=\deg(f)\lbrack N\rbrack$ 으로 정의된다.

[^1]: A. Hatcher, *Algebraic Topology*, Cambridge University Press (2002), 3.3절. 기본류의 구성, cap 곱, 쌍대성 정리의 증명과 Lefschetz 쌍대성이 이 절에 있다.

# 연관 문서

## 선수지식

- [코호몰로지](cohomology.md)
- [다양체](manifolds.md)

## 더 알아보기

아직 연결한 문서가 없다.

#algebraic_topology #topology #differential_geometry
