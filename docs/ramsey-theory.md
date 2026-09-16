# Ramsey 이론

# 개요

Ramsey 이론은 "충분히 큰 구조는 완전한 무질서일 수 없다"는 명제를 정리들로 구체화한 분야다. 대표적인 진술은 다음이다. 완전그래프의 간선을 두 색으로 아무렇게나 칠해도, 정점 수가 충분히 크면 한 색으로만 칠해진 완전부분그래프가 반드시 생긴다.

[비둘기집 원리](pigeonhole-principle.md)가 "정점을 색칠하면 같은 색 정점이 여럿 있다"는 진술이라면, Ramsey 정리는 이를 간선, 나아가 $k$ 원소 부분집합의 색칠로 올린 것이다. 존재를 보장하는 문턱값(Ramsey 수)은 지수적으로 커진다. 두 색 대각선 값 가운데 확정된 것은 $R(4,4)=18$ 까지다.

Erdős 의 확률적 방법(probabilistic method)이 이 분야에서 나왔다. 무작위 색칠이 좋은 부분구조를 피할 확률을 셈으로 눌러 하한을 얻는 기법은 이후 조합론 전반의 표준이 되었다.

# 직관

여섯 사람이 모이면 서로 아는 세 사람 또는 서로 모르는 세 사람이 반드시 있다. 다섯 사람으로는 반례가 있다. 다섯 정점을 오각형으로 놓고 변을 빨강, 대각선을 파랑으로 칠하면 두 색 모두 오각형과 오각별이라 삼각형이 없다.

여섯 명일 때 한 사람 $v$ 를 고정하면 $v$ 가 그은 간선이 다섯 개다. 두 색이므로 어느 한 색이 세 개 이상이다. 그 세 사람 사이의 세 간선 중 하나라도 그 색이면 $v$ 와 함께 단색 삼각형이 되고, 셋 다 다른 색이면 그 세 사람 자체가 단색 삼각형이다.

# 정의

완전그래프 $K_n$ 의 간선 집합을 $r$ 개의 색으로 칠하는 것을 다음과 같이 쓴다. [그래프](graphs.md)의 간선 집합은 정점의 2원소 부분집합의 집합이다.

$$
c:\binom{V}{2}\longrightarrow\lbrace 1,\dots,r\rbrace,\qquad |V|=n
$$

부분집합 $S$ 가 색 $i$ 에 대해 **단색**(monochromatic)이라는 것은 $S$ 안의 모든 간선이 색 $i$ 라는 뜻이다.

## Ramsey 수

$$
R(s_1,\dots,s_r)=\min\Bigl\lbrace\thinspace n\ \Bigm|\ \forall c:\binom{[n]}{2}\to[r],\ \exists\thinspace i,\ \exists\thinspace S,\ |S|=s_i,\ S\text{가 색 }i\text{로 단색}\Bigr\rbrace
$$

두 색 대각선 경우는 $R(k)=R(k,k)$ 로 줄여 쓴다. 하이퍼그래프 버전은 2원소 부분집합을 $k$ 원소 부분집합으로 바꾼 것이다.

$$
R^{(k)}(s_1,\dots,s_r):\quad c:\binom{[n]}{k}\to[r]
$$

## 무한 Ramsey 정리

가산 무한집합의 $k$ 원소 부분집합을 유한 개의 색으로 칠하면, 모든 $k$ 원소 부분집합이 같은 색인 무한 부분집합이 존재한다[^1].

$$
c:\binom{\mathbb{N}}{k}\to[r]\ \Longrightarrow\ \exists\thinspace M\subseteq\mathbb{N}\ \text{무한},\ c\bigl|_{\binom{M}{k}}\ \text{상수}
$$

# 성질

## Ramsey 수 $R(3,3)$

상한 $R(3,3)\le 6$ 은 직관 절의 논증이다. 하한은 $K_5$ 의 간선을 5-순환과 그 여집합 5-순환으로 두 색 칠하면 단색 삼각형이 없다는 데서 나온다.

## 유한 Ramsey 정리와 점화 상한

Erdős와 Szekeres의 증명이 상한 점화식을 준다.

$$
R(s,t)\ \le\ R(s-1,t)+R(s,t-1)
$$

*증명.* $n=R(s-1,t)+R(s,t-1)$ 개 정점에서 $v$ 를 고정한다. 남은 $n-1$ 개 정점을 $v$ 와의 간선 색에 따라 $A$ (빨강)와 $B$ (파랑)로 나누면 다음이 성립한다.

$$
|A|+|B|=R(s-1,t)+R(s,t-1)-1\ \Longrightarrow\ |A|\ge R(s-1,t)\ \text{또는}\ |B|\ge R(s,t-1)
$$

전자면 $A$ 안에서 크기 $s-1$ 의 빨간 단색집합($v$ 를 더해 $s$ 개)이나 크기 $t$ 의 파란 단색집합이 나온다. 후자는 대칭이다. 양변이 모두 짝수일 때는 부등식을 1만큼 개선할 수 있다.

점화식과 $R(s,1)=1$ 을 이항계수로 풀면 다음 상한을 얻는다.

$$
R(s,t)\le\binom{s+t-2}{s-1},\qquad\text{특히}\quad R(k,k)\le\binom{2k-2}{k-1}\le 4^{k}
$$

## 확률적 하한

Erdős(1947)의 논증이다. $K_n$ 의 각 간선을 독립적으로 확률 $1/2$ 로 빨강 또는 파랑으로 칠한다. 고정된 $k$ 원소 집합이 단색일 확률은 다음과 같다.

$$
P\bigl[S\text{가 단색}\bigr]=2\cdot 2^{-\binom{k}{2}}=2^{1-\binom{k}{2}}
$$

union bound 로 단색 $k$ 집합이 하나라도 존재할 확률을 누른다.

$$
P\bigl[\exists\text{ 단색 }k\text{집합}\bigr]\ \le\ \binom{n}{k}2^{1-\binom{k}{2}}
$$

이 값이 1보다 작으면 단색 $k$ 집합이 없는 색칠이 존재하므로 $R(k)>n$ 이다. 계산하면 다음 하한이 나온다[^2].

$$
R(k)\ >\ 2^{k/2}\qquad (k\ge 3)
$$

이 논증은 색칠을 하나도 제시하지 않고 존재만 준다.

## 알려진 값과 간극

$$
R(3,3)=6,\quad R(3,4)=9,\quad R(3,5)=14,\quad R(4,4)=18,\quad R(3,6)=18,\quad R(4,5)=25
$$

$R(5,5)$ 의 값은 확정되지 않았고, 2026년 9월 기준 최선의 범위는 다음과 같다[^3].

$$
43\ \le\ R(5,5)\ \le\ 46
$$

하한 43은 Exoo(1989), 상한 46은 Angeltveit 와 McKay 다. 대각선 상한은 1935년부터 $4^k$ 형태에 머물렀으나 2023년 Campos, Griffiths, Morris, Sahasrabudhe 가 처음으로 지수적 개선을 얻었다[^4].

$$
R(k)\ \le\ (4-\varepsilon)^{k}\quad(\exists\thinspace\varepsilon>0)
$$

파라미터를 최적화하면 $3.8^{k+o(k)}$ 까지 내려간다[^4]. 하한 쪽은 $2^{k/2}$ 의 상수배 개선에 머물러 있어 상한의 밑 $3.8$ 과 하한의 밑 $\sqrt2$ 사이에 간극이 남는다.

## Schur 정리

양의 정수를 유한 개의 색으로 칠하면 $x+y=z$ 를 만족하는 단색 삼중쌍이 존재한다[^5]. 정확히는 임의의 $r$ 에 대해 다음 수가 존재한다.

$$
S(r)=\min\bigl\lbrace N\ \bigm|\ \forall c:[N]\to[r],\ \exists\thinspace x,y,z\ \text{같은 색},\ x+y=z\bigr\rbrace
$$

*증명.* Ramsey 정리로 환원한다. $r$ 색 삼각형 Ramsey 수로 $N=R_r(3)-1$ 이라 두고 색칠 $c$ 가 주어지면, 완전그래프 $K_{N+1}$ 의 간선 $\lbrace i,j\rbrace$ 에 색 $c(\vert i-j\vert)$ 를 부여한다. Ramsey 정리가 단색 삼각형 $\lbrace i<j<k\rbrace$ 를 주므로 $x=j-i,\ y=k-j,\ z=k-i$ 로 두면 $x+y=z$ 이고 세 수의 색이 같다. 알려진 Schur 수는 $S(1)=2,\ S(2)=5,\ S(3)=14,\ S(4)=45$ 이고, $S(5)=161$ 은 2017년에 SAT 풀이기로 확정되었다.

Schur 정리는 van der Waerden 정리(색칠하면 단색 등차수열이 생긴다)와 함께 산술적 Ramsey 이론을 이루고, 둘을 포괄하는 Rado 정리가 어떤 선형 방정식계가 "분할 정칙적(partition regular)"인지 완전히 판정한다.

## 무한과 유한의 관계

무한 Ramsey 정리에서 콤팩트성 논증으로 유한 버전을 얻을 수 있다. 반대로 유한 버전들의 모음에서 무한 버전을 얻는 것은 자동이 아니다. Paris–Harrington 정리는 유한 Ramsey 정리의 어떤 강화가 Peano 산술에서 증명 불가능함을 보였고, 이것이 [Gödel 불완전성](godel-incompleteness.md)의 조합론적 예다.

# 활용

## 반례 탐색과 계산

Ramsey 수의 하한은 단색 부분그래프가 없는 명시적 색칠(Ramsey 그래프)을 찾는 문제다. 대칭성을 이용한 순환 그래프 탐색과 SAT 풀이기가 쓰인다. $n$ 정점 두 색 색칠의 수가 $2^{\binom{n}{2}}$ 이므로 대칭 축약이 필수다. $S(5)=161$ 과 $R(5,5)\le46$ 이 그런 계산의 결과다.

## 다른 분야에서의 쓰임

계산 복잡도에서 Ramsey류 정리는 결정 트리와 통신 복잡도의 하한 논증에 쓰인다. 단색 구조를 피하는 색칠을 명시적으로 구성하기 어렵다는 점이 [P 대 NP 문제](p-np.md) 주변의 명시적 구성 문제에서 표준 예로 인용된다.

기하에서는 Erdős–Szekeres 의 볼록 다각형 문제가 하이퍼그래프 Ramsey 정리의 응용이다. 일반 위치의 점이 충분히 많으면 그중 $n$ 개가 볼록 $n$ 각형을 이룬다는 진술이다. 위상적 동역학에서는 무한 Ramsey 정리가 극소 동역학계의 구조 정리로 다시 나타난다.

## 확률적 방법의 확장

union bound 로 존재를 증명하는 기법은 [포함배제 원리](inclusion-exclusion.md)의 절단 부등식을 한 번 적용한 것이다. 같은 논법이 Lovász 국소 보조정리, 알고리즘적 무작위화, 확장 그래프(expander)의 존재 증명으로 이어진다. [그래프 Laplacian](graph-laplacian.md)과 [Spectral sparsification](spectral-sparsification.md)의 무작위 표본 논증도 여기서 갈라진다.

[^1]: F. P. Ramsey, "On a problem of formal logic", Proc. London Math. Soc. 30 (1930), 264–286. 진술 정리: https://en.wikipedia.org/wiki/Ramsey%27s_theorem
[^2]: P. Erdős, "Some remarks on the theory of graphs", Bull. Amer. Math. Soc. 53 (1947), 292–294.
[^3]: V. Angeltveit and B. D. McKay, "R(5,5) ≤ 46", arXiv:2409.15709. 하한 43은 G. Exoo (1989). 2026년 9월 확인. https://arxiv.org/abs/2409.15709
[^4]: M. Campos, S. Griffiths, R. Morris, J. Sahasrabudhe, "An exponential improvement for diagonal Ramsey", Annals of Mathematics 203 (2026), 869–932. arXiv:2303.09521. https://arxiv.org/abs/2303.09521
[^5]: Schur's theorem (1916)과 Schur 수: https://en.wikipedia.org/wiki/Schur%27s_theorem

# 연관 문서

## 선수지식

- [비둘기집 원리](pigeonhole-principle.md)
- [그래프](graphs.md)

## 더 알아보기

- [확률적 방법](probabilistic-method.md)

#combinatorics
