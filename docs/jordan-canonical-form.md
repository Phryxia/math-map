# Jordan 표준형

# 개요

대수적으로 닫힌 체 위의 정사각행렬은 유사변환으로 Jordan 블록의 직합까지 간다. 대각행렬은 모든 블록의 크기가 1 인 경우이고, 대각화가 안 되는 행렬도 대각선 바로 위에 1 이 놓인 블록 꼴로는 반드시 갈 수 있다. 블록의 크기와 개수는 행렬마다 유일하게 정해지므로, 이 자료가 유사변환에 대한 완전 불변량이 된다. 같은 [특성다항식](eigenvalues.md)을 가진 두 행렬이 유사하지 않을 수 있다는 결함을 Jordan 형이 메운다.

# 직관

$\lambda$ 의 고유공간 $\ker(A-\lambda I)$ 의 차원이 $\lambda$ 의 대수적 중복도보다 작으면 고유벡터만으로는 기저가 모자란다. 모자란 자리는 $(A-\lambda I)v\_2=v\_1$ 을 만족하는 $v\_2$ 로 채운다. $v\_1$ 이 고유벡터일 때 $v\_2$ 는 한 번 더 곱해야 0 이 되는 벡터이고, 이렇게 이어진 사슬 $v\_1,\dots,v\_k$ 위에서 $A$ 는 크기 $k$ 의 블록으로 작용한다.

사슬의 길이 분포가 곧 블록의 크기 분포다. $(A-\lambda I)$ 를 거듭 곱할 때 핵이 얼마나 빨리 커지는지가 그 분포를 결정한다.

# 정의

크기 $k$ 의 **Jordan 블록**은 다음 $k\times k$ 행렬이다.

$$
J_k(\lambda)=\begin{pmatrix}\lambda&1&&\cr&\lambda&\ddots&\cr&&\ddots&1\cr&&&\lambda\end{pmatrix}
$$

대각 성분이 모두 $\lambda$ 이고 대각 바로 위가 모두 1 이며 나머지는 0 이다. $J_k(\lambda)=\lambda I+N$ 으로 쓰면 $N$ 은 $N^k=0$ 인 nilpotent 행렬이다.

**Jordan 행렬**은 Jordan 블록들의 블록대각 직합 $J\_{k\_1}(\lambda\_1)\oplus\cdots\oplus J\_{k\_r}(\lambda\_r)$ 이다. 고윳값 $\lambda\_i$ 는 서로 같아도 된다.

행렬 $A$ 의 **Jordan 표준형**은 $P^{-1}AP=J$ 를 만족하는 Jordan 행렬 $J$ 다.

$T$ 를 $V$ 위의 [선형사상](linear-maps.md)이라 할 때 $\lambda$ 의 **일반화 고유공간**은 다음이다.

$$
V\_\lambda=\ker(T-\lambda\thinspace\mathrm{id})^{\dim V}
$$

# 성질

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

$k[x]$ [가군](modules.md) 구조를 $x\cdot v=Tv$ 로 주면 $V$ 는 [PID 위의 유한생성 가군](finitely-generated-modules.md)(principal ideal domain)이 된다. 초등인자 분해 $V\cong\bigoplus\_i k[x]/(x-\lambda\_i)^{k\_i}$ 의 각 인자가 Jordan 블록 $J\_{k\_i}(\lambda\_i)$ 이고, 구조정리의 유일성이 Jordan 형의 유일성이다. 불변인자 분해를 쓰면 대수적으로 닫히지 않은 체에서도 쓸 수 있는 유리 표준형이 나온다.

## 실 Jordan 형

$k=\mathbb R$ 에서는 특성다항식이 일차식으로 쪼개지지 않을 수 있다. 켤레쌍 $\lambda=a\pm bi$ 에 대응하는 블록을 실수 성분만으로 쓰면 대각 자리에 $2\times2$ 블록

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

- [고윳값과 고유벡터](eigenvalues.md)
- [PID 위의 유한생성 가군](finitely-generated-modules.md)

## 더 알아보기

아직 연결한 문서가 없다.

#linear_algebra #algebra #ring_theory
