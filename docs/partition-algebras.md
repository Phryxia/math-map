# 분할 대수

# 개요

분할 대수 $P_k(n)$ 은 대칭군 $S_n$ 이 $V^{\otimes k}$ 에 작용할 때의 중심화대수다. $V=\mathbb C^n$ 이고 $S_n$ 은 기저 $e_1,\dots,e_n$ 을 치환한다.

$$
\mathrm{End}\_{S_n}\bigl(V^{\otimes k}\bigr)=P_k(n)\qquad (n\ge 2k)
$$

기저는 $2k$ 개 점의 집합 분할이고 차원은 [Bell 수](bell-numbers.md) $B(2k)$ 다. [Brauer 대수](brauer-algebras.md)는 $\mathrm{GL}(V)$ 를 직교군으로 줄였을 때의 중심화대수이고, 분할 대수는 직교군을 다시 치환행렬만 남기고 줄였을 때의 중심화대수다.

차원이 $n$ 에 의존하지 않는다. $n\ge 2k$ 인 동안 $\mathrm{End}\_{S_n}(V^{\otimes k})$ 의 차원은 언제나 $B(2k)$ 다.

# 직관

$S_n$ 불변인 $M\colon V\otimes V\to V\otimes V$ 를 전부 찾는다. $M$ 을 성분으로 적으면 $M^{i_1i_2}\_{j_1j_2}$ 이고, $S_n$ 이 기저를 치환하므로 불변 조건은 모든 $\sigma\in S_n$ 에 대한 다음 등식이다.

$$
M^{\sigma(i_1)\sigma(i_2)}\_{\sigma(j_1)\sigma(j_2)}=M^{i_1i_2}\_{j_1j_2}
$$

$\sigma$ 를 아무것으로나 잡을 수 있으므로 성분은 네 첨자의 값이 무엇인지에 의존하지 못하고, 어느 첨자끼리 값이 같은지에만 의존한다.

네 첨자를 값이 같은 것끼리 묶으면 네 원소의 집합 분할이 하나 나오고, 그런 분할은 $15$ 개다. $n\ge 4$ 이면 $15$ 개가 모두 실제로 나타나므로 자유로운 성분이 $15$ 개이고 불변 사상의 공간은 $15$ 차원이다. $\mathrm{GL}(V)$ 불변 사상은 $2$ 차원, $\mathrm O(V)$ 불변 사상은 $3$ 차원이었다. 위 두 점과 아래 두 점을 블록으로 묶은 그림으로 이 분할들을 적으면, 블록의 크기에 제약이 없다는 점만 짝짓기 도형과 다르다.

# 정의

## 집합 분할 도형

$\lbrace 1,\dots,k\rbrace\cup\lbrace 1',\dots,k'\rbrace$ 의 집합 분할 $d$ 를 도형으로 그린다. 위줄에 $1,\dots,k$ 를, 아래줄에 $1',\dots,k'$ 를 놓고 같은 블록에 든 점을 선으로 잇는다. 블록의 크기와 위아래 분포에 제약이 없고, 그런 분할은 $B(2k)$ 개다.

## 곱셈

$d_1$ 을 $d_2$ 위에 쌓고 $d_1$ 의 아래줄과 $d_2$ 의 위줄을 같은 점으로 본다. 세 줄의 점이 블록으로 묶이면, 가운데 줄에만 든 블록의 개수를 $c$ 라 하고 위줄과 아래줄에 남은 분할을 $d_3$ 라 하여

$$
d_1d_2=n^{c}\thinspace d_3
$$

로 정의한다. 이 곱으로 $B(2k)$ 차원 $\mathbb C$ 대수가 되고 이것이 $P_k(n)$ 이다. 매개변수를 복소수 $\delta$ 로 바꿔도 같은 식이 대수를 정의한다.

## 텐서 공간 위의 작용

도형 $d$ 에 선형사상 $\Phi(d)\in\mathrm{End}(V^{\otimes k})$ 를 성분으로 대응시킨다.

$$
\Phi(d)^{i_1\dots i_k}\_{j_1\dots j_k}=1
$$

첨자 함수 $r\mapsto i_r$ , $r'\mapsto j_r$ 가 $d$ 의 모든 블록 위에서 상수일 때 성분이 $1$ 이고 그렇지 않으면 $0$ 이다. $\Phi$ 는 대수 준동형이고 상은 $\mathrm{End}\_{S_n}(V^{\otimes k})$ 안에 있다.

# 성질

## 중심화대수 정리

> **정리 (Jones).** $\Phi\colon P_k(n)\to\mathrm{End}\_{S_n}(V^{\otimes k})$ 는 전사이고, $n\ge 2k$ 이면 동형이다[^1].

증명의 요지. $S_n$ 은 $2k$ 짝 $(i_1,\dots,i_k,j_1,\dots,j_k)$ 에 성분별로 작용하고, 두 짝이 같은 궤도에 드는 것은 자리끼리의 일치 관계가 같은 것과 같다. 불변 행렬은 궤도마다 상수 하나를 갖고, 궤도는 블록이 $n$ 개 이하인 $2k$ 점의 집합 분할과 일대일이다. $n\ge 2k$ 이면 블록 수 조건이 저절로 성립하므로 궤도가 $B(2k)$ 개이고 $\Phi$ 의 상이 전체 차원을 채운다. $n\lt 2k$ 이면 블록이 $n$ 개를 넘는 도형이 $0$ 으로 가서 핵이 생긴다.

## 쌍대 분해

$n\ge 2k$ 이면 $P_k(n)$ 이 반단순이고 $V^{\otimes k}$ 가 두 작용에 대해 겹침 없이 쪼개진다[^1].

$$
V^{\otimes k}\cong\bigoplus\_{\lambda} S^{\lambda(n)}\otimes P^{\lambda}
$$

$\lambda$ 는 $\vert\lambda\vert\le k$ 인 [분할](partitions.md)을 전부 지난다. $\lambda(n)=(n-\vert\lambda\vert,\lambda_1,\lambda_2,\dots)$ 가 $S_n$ 의 기약표현을 가리키는 분할이고 $P^{\lambda}$ 가 $P_k(n)$ 의 기약표현이다. 차원을 세면 다음이 나온다.

$$
\sum\_{\vert\lambda\vert\le k}\bigl(\dim P^{\lambda}\bigr)^2=B(2k)
$$

## 도형 대수의 사슬

$\mathbb C\lbrack S_k\rbrack\subset B_k(n)\subset P_k(n)$ 이 부분대수의 사슬이다. 치환 도형은 위아래를 잇는 선만 쓰고, Brauer 도형은 크기 $2$ 의 블록만 쓰고, 분할 도형은 제약을 받지 않는다. 차원이 $k!$ , $(2k-1)!!$ , $B(2k)$ 로 커진다.

## 반쪽 단계

$P_k(n)$ 과 $P_{k+1}(n)$ 사이에 중간 대수 $P_{k+1/2}(n)$ 이 있다. 아래줄에 점 하나를 더하고 그 점이 $k+1$ 번째 위쪽 점과 같은 블록에 들도록 제한한 도형들이 만든다. 이렇게 끼우면 사슬의 한 단계마다 기약표현의 분기가 중복 없이 일어나고, 분기 규칙이 분할에 상자 하나를 더하거나 빼는 것이 된다. 기약표현의 차원을 상자 더하기와 빼기를 번갈아 센 경로의 개수로 계산한다[^1].

# 활용

## 동변 선형사상의 나열

$(\mathbb R^n)^{\otimes k}$ 에서 자신으로 가는 $S_n$ 동변 선형사상의 공간은 $n\ge 2k$ 인 동안 $B(2k)$ 차원이고 기저가 분할 도형이다[^2]. $k=1$ 이면 $2$ 차원으로 항등과 모든 성분이 $1$ 인 행렬이며, $k=2$ 이면 $15$ 차원이다. 인접행렬을 입력으로 받는 동변 신경망의 층 하나가 이 $15$ 개 도형의 선형결합이고, 매개변수 개수가 $n$ 과 무관하므로 한 크기에서 학습한 층을 다른 크기의 [그래프](graphs.md)에 쓸 수 있다.

## 그래프 구별 능력

$k$ 차 텐서 위에 동변 층을 쌓은 신경망이 구별하는 그래프의 범위는 $k$ 차 Weisfeiler–Leman 색 세분이 구별하는 범위와 같다[^2]. $k$ 를 올리면 구별 능력이 올라가고 층의 매개변수 개수가 $B(2k)$ 로 늘어난다.

## Potts 모형

분할 대수는 Potts 모형의 전달행렬 대수로 처음 나왔다[^1]. $n$ 은 스핀의 상태 수이고 도형의 블록은 같은 상태로 묶인 자리를 적는다. 곱셈 규칙이 $n$ 을 정수로 가정하지 않으므로 상태 수를 연속 매개변수로 다룰 수 있다.

## 불변론의 계산

$S_n$ 불변 텐서를 전부 적는 문제의 답 목록이 분할 도형이다. Brauer 대수가 직교군 불변 텐서를 짝짓기 도형으로 적는 것과 같은 구조이고, 두 경우 모두 차원 공식이 매개변수의 개수를 준다.

[^1]: 원논문은 P. Martin, *Temperley–Lieb algebras for nonplanar statistical mechanics — the partition algebra construction*, J. Knot Theory Ramifications **3** (1994), 51–82. 중심화대수 정리는 V. F. R. Jones, *The Potts model and the symmetric group*, in Subfactors (1994), 259–267. 쌍대 분해, 반쪽 단계, 분기 규칙은 T. Halverson, A. Ram, *Partition algebras*, European J. Combin. **26** (2005), 869–921.

[^2]: 동변 층의 차원이 $B(2k)$ 라는 계산은 H. Maron, H. Ben-Hamu, N. Shamir, Y. Lipman, *Invariant and equivariant graph networks*, ICLR 2019. Weisfeiler–Leman 과의 동등성은 W. Azizian, M. Lelarge, *Expressive power of invariant and equivariant graph neural networks*, ICLR 2021.

# 연관 문서

## 선수지식

- [Brauer 대수](brauer-algebras.md)

## 더 알아보기

아직 연결한 문서가 없다.

#algebra #combinatorics #group_theory #machine_learning
