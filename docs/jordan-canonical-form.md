# Jordan 표준형

# 개요

**Jordan 표준형(Jordan canonical form)** 은 대수적으로 닫힌 체 위의 정사각행렬을 유사변환으로 바꿔 얻는, 대각선 바로 위에 $1$ 이 놓인 블록들의 직합이다. [행렬](matrices.md) $\begin{pmatrix}1&1\cr 0&1\end{pmatrix}$ 은 고윳값이 $1$ 뿐인데 고유벡터가 $(1,0)$ 의 상수배뿐이라 대각행렬로 바꿀 수 없다. Jordan 표준형은 모자란 기저를 $(A-\lambda I)v_2=v_1$ 꼴의 사슬로 채워 이런 행렬도 블록 꼴로 바꾸고, 두 행렬이 유사한지를 블록의 크기 비교로 판정한다.

# 직관

개요의 $A=\begin{pmatrix}1&1\cr 0&1\end{pmatrix}$ 에서 $A-I=\begin{pmatrix}0&1\cr 0&0\end{pmatrix}$ 은 $(x,y)$ 를 $(y,0)$ 으로 보낸다. 고유벡터 $v\_1=(1,0)$ 하나로는 기저가 모자라므로 $(A-I)v\_2=v\_1$ 인 $v\_2$ 를 찾으면 $v\_2=(0,1)$ 이다. $v\_2$ 는 $A-I$ 를 한 번 곱하면 $v\_1$ 이 되고 두 번 곱하면 $0$ 이 된다.

기저 $v\_1,v\_2$ 에서 $Av\_1=v\_1$ 이고 $Av\_2=v\_2+v\_1$ 이므로, $A$ 는 대각선에 $1$, 그 바로 위에 $1$ 이 있는 꼴로 적힌다. 고유벡터에서 시작해 $A-I$ 를 거슬러 올라가는 사슬이 대각행렬의 축을 대신한다.

$3\times3$ 에서 $B=\begin{pmatrix}1&1&0\cr 0&1&0\cr 0&0&1\end{pmatrix}$ 와 $C=\begin{pmatrix}1&1&0\cr 0&1&1\cr 0&0&1\end{pmatrix}$ 는 같은 [특성다항식](eigenvalues.md) $(x-1)^3$ 을 갖는다. $B-I$ 의 핵은 $(1,0,0)$, $(0,0,1)$ 이 생성하는 평면이고 $C-I$ 의 핵은 $(1,0,0)$ 이 생성하는 직선이다. $B$ 의 사슬은 길이 $2$ 와 $1$ 이고 $C$ 의 사슬은 길이 $3$ 하나다.

# 정의

크기 $k$ 의 **Jordan 블록(Jordan block)** 은 다음 $k\times k$ 행렬이다.

$$
J_k(\lambda)=\begin{pmatrix}\lambda&1&&\cr&\lambda&\ddots&\cr&&\ddots&1\cr&&&\lambda\end{pmatrix}
$$

대각 성분이 모두 $\lambda$ 이고 대각 바로 위가 모두 1 이며 나머지는 0 이다. 개요의 $A$ 는 $J_2(1)$ 이고, $1\times1$ 블록 $J_1(\lambda)$ 는 $(\lambda)$ 다.

**Jordan 행렬(Jordan matrix)** 은 Jordan 블록들의 블록대각 직합 $J\_{k\_1}(\lambda\_1)\oplus\cdots\oplus J\_{k\_r}(\lambda\_r)$ 이다. 고윳값 $\lambda\_i$ 는 서로 같아도 된다. 직관 절의 $B$ 는 $J_2(1)\oplus J_1(1)$, $C$ 는 $J_3(1)$ 이고, 대각행렬 $\mathrm{diag}(3,1)$ 은 $J_1(3)\oplus J_1(1)$ 이다.

행렬 $A$ 의 **Jordan 표준형(Jordan canonical form)** 은 $P^{-1}AP=J$ 를 만족하는 Jordan 행렬 $J$ 다. $\begin{pmatrix}2&1\cr 1&2\end{pmatrix}$ 는 고유벡터 $(1,1)$, $(1,-1)$ 을 열로 하는 $P$ 로 $\mathrm{diag}(3,1)$ 이 되므로, Jordan 표준형이 $J_1(3)\oplus J_1(1)$ 이다.

$T$ 를 $V$ 위의 [선형사상](linear-maps.md)이라 할 때 $\lambda$ 의 **일반화 고유공간(generalized eigenspace)** 은 다음이다.

$$
V\_\lambda=\ker(T-\lambda\thinspace\mathrm{id})^{\dim V}
$$

개요의 $A$ 에서 $(A-I)^2=0$ 이므로 $V\_1$ 은 평면 전체이고, 고유공간 $\ker(A-I)$ 는 직선이다.

# 성질

## 멱영 부분

$J_k(\lambda)=\lambda I+N$ 으로 쓰면 $N$ 은 $N^k=0$ 인 멱영(nilpotent) 행렬이다.

## 존재와 유일성

*정리.* $k$ 가 대수적으로 닫힌 체이고 $V$ 가 $k$ 위의 유한차원 [벡터 공간](vector-spaces.md)이면, 각 선형사상 $T\colon V\to V$ 에 대해 $T$ 의 행렬이 Jordan 행렬이 되는 기저가 존재한다. 블록의 다중집합은 블록의 순서를 빼고 유일하다[^1].

*증명의 요지.* 특성다항식을 $\prod\_i(x-\lambda\_i)^{a\_i}$ 로 인수분해하면 $V=\bigoplus\_i V\_{\lambda\_i}$ 다. 이 분해는 $(x-\lambda\_i)^{a\_i}$ 들이 서로소라는 점에서 나오고, 각 $V\_{\lambda\_i}$ 는 $T$ 불변이다. $V\_{\lambda\_i}$ 위에서 $T-\lambda\_i$ 는 nilpotent 이므로, nilpotent 사상이 순환 부분공간의 직합으로 분해된다는 사실만 남는다. 그 분해는 $\ker N\subset\ker N^2\subset\cdots$ 의 차원 증가분에서 사슬을 길이별로 뽑아 얻는다.

## 블록 크기와 계수

$r\_j=\mathrm{rank}(A-\lambda I)^j$ 라 하고 $r\_0=n$ 이라 하자. 고윳값 $\lambda$ 에 대한 Jordan 블록 가운데 크기가 $j$ 이상인 것의 개수는 다음과 같다.

$$
r\_{j-1}-r\_j
$$

크기가 정확히 $j$ 인 것의 개수는 $r\_{j-1}-2r\_j+r\_{j+1}$ 이다. $j=1$ 을 넣으면 블록의 총 개수가 $n-r\_1=\dim\ker(A-\lambda I)$ , 곧 기하적 중복도다. 블록 크기의 합은 대수적 중복도다.

## 다항식 불변량

특성다항식과 최소다항식이 Jordan 형에서 바로 읽힌다.

| 불변량 | Jordan 형에서 |
| --- | --- |
| 특성다항식 | $\prod\_\lambda(x-\lambda)^{a\_\lambda}$ , $a\_\lambda$ 는 $\lambda$ 블록들의 크기 합 |
| 최소다항식 | $\prod\_\lambda(x-\lambda)^{e\_\lambda}$ , $e\_\lambda$ 는 $\lambda$ 블록 중 최대 크기 |
| 대각화 가능 | 모든 $e\_\lambda=1$ |

최소다항식이 특성다항식을 나누므로 Cayley–Hamilton 정리가 따라 나온다.

## 유사 판정

두 행렬 $A,B\in M\_n(k)$ 가 유사할 필요충분조건은 Jordan 표준형이 블록의 순서를 빼고 같은 것이다. 특성다항식과 최소다항식이 모두 같아도 유사하지 않은 예는 $n\ge4$ 에서 나온다. $J\_2(0)\oplus J\_2(0)$ 과 $J\_2(0)\oplus J\_1(0)\oplus J\_1(0)$ 은 최소다항식이 둘 다 $x^2$ 이고 특성다항식도 둘 다 $x^4$ 이지만 계수 $r\_1$ 이 각각 2 와 1 이다.

## 가군 구조정리와의 관계

$k[x]$ [가군](modules.md) 구조를 $x\cdot v=Tv$ 로 주면 $V$ 는 [PID 위의 유한생성 가군](finitely-generated-modules.md)(principal ideal domain, PID)(principal ideal domain)이 된다. 초등인자 분해 $V\cong\bigoplus\_i k[x]/(x-\lambda\_i)^{k\_i}$ 의 각 인자가 Jordan 블록 $J\_{k\_i}(\lambda\_i)$ 이고, 구조정리의 유일성이 Jordan 형의 유일성이다. 불변인자 분해를 쓰면 대수적으로 닫히지 않은 체에서도 쓸 수 있는 유리 표준형이 나온다.

## 실 Jordan 형

$k=\mathbb R$ 에서는 특성다항식이 일차식으로 쪼개지지 않을 수 있다. 켤레쌍 $\lambda=a\pm bi$ 에 대응하는 블록을 [실수](real-numbers.md) 성분만으로 쓰면 대각 자리에 $2\times2$ 블록

$$
C=\begin{pmatrix}a&-b\cr b&a\end{pmatrix}
$$

가 놓이고 그 바로 위 자리에 $I\_2$ 가 놓인 꼴이 된다.

# 활용

- 행렬 지수의 계산. $J\_k(\lambda)=\lambda I+N$ 에서 $e^{tJ\_k(\lambda)}=e^{\lambda t}\sum\_{i=0}^{k-1}\frac{t^i}{i!}N^i$ 이므로 유한합으로 끝난다. [상미분방정식](ordinary-differential-equations.md)의 상수계수 선형계 $x'=Ax$ 의 해가 $e^{tA}x\_0$ 이고, 블록 크기 $k$ 가 해에 붙는 다항식 인자의 차수 $t^{k-1}$ 을 준다.
- 거듭제곱의 점근. $A^m$ 의 각 블록은 $\binom{m}{i}\lambda^{m-i}$ 꼴 성분을 가지므로, $|\lambda|\lt 1$ 인 블록은 크기와 무관하게 0 으로 가고 $|\lambda|=1$ 이면서 크기가 2 이상인 블록이 있으면 $A^m$ 은 발산한다. [Markov 연쇄](markov-chains.md)의 전이행렬이 수렴하는지 판정할 때 쓰인다.
- 유사 불변량의 완전 목록. 두 행렬이 켤레인지 묻는 문제가 블록 크기의 비교로 끝난다.
- 수치 계산에서의 제약. Jordan 형은 성분의 미소 섭동에 불연속이다. 대각화 불가능한 행렬도 임의로 작은 섭동으로 서로 다른 고윳값 $n$ 개를 갖게 되어 대각화 가능해지므로, 부동소수점 계산에서는 Jordan 형 대신 유니터리 유사변환으로 얻는 Schur 삼각화를 쓴다[^2].

[^1]: R. A. Horn and C. R. Johnson, *Matrix Analysis*, 2nd ed., Cambridge University Press, 2013, 3.1 절. 존재와 유일성의 증명, 블록 개수의 계수 공식을 함께 다룬다.

[^2]: G. H. Golub and C. F. Van Loan, *Matrix Computations*, 4th ed., Johns Hopkins University Press, 2013, 7.1 절. Jordan 형의 섭동 민감성과 Schur 분해를 쓰는 이유를 설명한다.

# 연관 문서

## 선수지식

- [고윳값](eigenvalues.md)
- [최소다항식](minimal-polynomial.md)
- [PID 위의 유한생성 가군](finitely-generated-modules.md)

## 더 알아보기

- [유리 표준형](rational-canonical-form.md)

#linear_algebra #algebra #ring_theory
