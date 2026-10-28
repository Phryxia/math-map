# Hales–Jewett 정리

# 개요

**Hales–Jewett 정리(Hales–Jewett theorem)** 는 차원이 충분히 높은 틱택토 판을 몇 가지 색으로 어떻게 칠해도 한 색으로 된 줄이 생긴다는 정리다. $3\times 3$ 판의 가로줄, 세로줄, 대각선 $(1,1),(2,2),(3,3)$ 은 몇몇 좌표를 같은 변수로 두고 나머지 좌표를 고정한 꼴이고, 이런 줄을 조합적 직선(combinatorial line)이라 한다. 이 정리는 차원 $n$ 이 충분히 크면 판 $\lbrace 1,\dots,k\rbrace^n$ 을 $r$ 가지 색으로 칠할 때 단색 조합적 직선이 반드시 생김을 보이고, 판의 칸을 수로 보내 [van der Waerden 정리](van-der-waerden-theorem.md)를 유도한다.

# 직관

Hales–Jewett 정리는 양의 정수 $k$ 와 $r$ 마다 $n$ 이 충분히 크면, 길이 $n$ 의 단어 집합 $\lbrace 1,\dots,k\rbrace^n$ 을 $r$ 가지 색으로 어떻게 칠해도 단색인 조합적 직선이 있다는 정리다. A. W. Hales 와 R. I. Jewett 이 1963 년에 증명했다[^1].

조합적 직선은 덧셈이나 순서를 쓰지 않고 단어의 자리만으로 정의되는 구조다. 그래서 이 정리에서 van der Waerden 정리를 비롯한 여러 Ramsey 형 정리가 단어를 수나 점으로 보내는 사상 하나로 유도된다.

$3\times 3$ 판의 틱택토에서 칸을 좌표 $(a_1,a_2)\in\lbrace 1,2,3\rbrace^2$ 로 쓴다. 가로줄 $(c,1),(c,2),(c,3)$ 은 첫 좌표를 $c$ 로 고정하고 둘째 좌표를 $x=1,2,3$ 으로 바꾼 것이고, 세로줄도 같다. 대각선 $(1,1),(2,2),(3,3)$ 은 두 좌표가 모두 같은 변수 $x$ 다. 이 셋은 "몇몇 자리를 같은 변수로 두고 나머지 자리를 고정한" 꼴이다. 다른 대각선 $(1,3),(2,2),(3,1)$ 은 둘째 좌표가 $4-x$ 라서 이 꼴이 아니다.

$3\times 3$ 판은 두 색으로 칠해 위 꼴의 단색 줄이 없게 할 수 있다. 차원 $n$ 을 키워 $\lbrace 1,2,3\rbrace^n$ 의 판을 쓰면 줄의 수가 칸의 수보다 빨리 늘고, 충분히 큰 $n$ 에서는 어떻게 칠해도 단색 줄이 생긴다는 것이 이 정리다.

# 정의

$\lbrack k\rbrack=\lbrace 1,\dots,k\rbrace$ 로 쓴다. 변수 기호 $\ast$ 가 적어도 한 번 나오는 $\lbrack k\rbrack\cup\lbrace\ast\rbrace$ 위의 길이 $n$ 의 단어 $\tau$ 를 변수 단어라 하고, $\tau$ 의 $\ast$ 를 모두 $i\in\lbrack k\rbrack$ 로 바꾼 단어를 $\tau(i)$ 로 쓴다. 집합 $\lbrace\tau(1),\dots,\tau(k)\rbrace$ 를 조합적 직선이라 한다.

$\mathrm{HJ}(k,r)$ 은 $\lbrack k\rbrack^n$ 의 모든 $r$ 색칠에 단색인 조합적 직선이 있는 가장 작은 $n$ 이다. Hales–Jewett 정리는 이 $n$ 이 존재한다는 진술이다.

# 성질

## 증명의 요지

$k$ 에 대한 귀납법이다. $k=1$ 이면 $\lbrack 1\rbrack^1$ 의 한 점이 직선이다. $\mathrm{HJ}(k-1,r')$ 이 모든 $r'$ 에서 존재한다고 하고, 단어를 블록으로 나눈 뒤 블록마다 귀납 가정을 쓴다. 그러면 글자 $1,\dots,k-1$ 만 넣은 부분이 단색이고 $k$ 를 넣은 끝점이 모두 한 점인 직선들을 색마다 하나씩 쌓을 수 있다. 색이 $r$ 가지뿐이므로 $r+1$ 번째 단계에서 그 공통 끝점의 색이 이미 쓴 색과 겹치고, 그 색의 직선이 단색 조합적 직선이 된다. 이 방식을 색 초점 맞추기(color focusing)라 한다.

S. Shelah 는 다른 귀납으로 $\mathrm{HJ}(k,r)$ 이 원시재귀 함수로 위에서 눌린다는 것을 증명했다[^2].

## 따름정리

- van der Waerden 정리. 단어 $(a_1,\dots,a_n)$ 을 정수 $a_1+\cdots+a_n$ 으로 보내면, $\ast$ 가 $s$ 번 나오는 조합적 직선은 공차 $s$ 인 길이 $k$ 의 등차수열로 간다. 정수의 색칠을 단어로 끌어오면 단색 직선이 단색 등차수열을 준다.
- Gallai 정리(Gallai's theorem). 단어를 $\mathbb Z^d$ 의 유한 집합 $F=\lbrace v_1,\dots,v_k\rbrace$ 의 점으로 보내 $v_{a_1}+\cdots+v_{a_n}$ 을 대응시키면, $\mathbb Z^d$ 의 모든 유한 색칠에 $F$ 와 닮은꼴인 단색 집합 $a+sF$ 가 있다.

## 밀도판

H. Furstenberg 와 Y. Katznelson 은 모든 $\delta\gt 0$ 과 $k$ 에 대해 $n$ 이 충분히 크면 $\lbrack k\rbrack^n$ 의 원소 $\delta k^n$ 개 이상인 부분집합이 조합적 직선을 포함한다는 밀도 Hales–Jewett 정리(density Hales–Jewett theorem)를 에르고딕 이론으로 증명했다[^3]. 여러 사람이 공개적으로 함께 쓴 Polymath 계획이 이 정리의 조합적 증명을 주었다[^4]. 이 판본은 [Szemerédi 정리](szemeredi-theorem.md)를 따름정리로 준다.

# 활용

- 다차원 틱택토. 판 $\lbrack k\rbrack^n$ 에서 두 사람이 번갈아 칸을 차지하고 조합적 직선을 먼저 채우는 사람이 이기는 게임은, $n\ge\mathrm{HJ}(k,2)$ 이면 판이 다 차도 무승부가 될 수 없다. [전략 훔치기 논법](strategy-stealing.md)으로 먼저 두는 사람에게 이기는 전략이 존재한다[^1]. 반대로 줄이 길고 개수가 적으면 나중에 두는 사람이 모든 줄을 막는다는 것이 [Erdős–Selfridge 정리](erdos-selfridge-theorem.md)다.
- Ramsey 형 정리의 공통 증명. van der Waerden 정리, Gallai 정리, 유한 벡터공간의 부분공간에 대한 Graham–Rothschild 형 결과가 단어에서 대상으로 가는 사상을 바꾸어 이 정리에서 나온다.

[^1]: A. W. Hales, R. I. Jewett, "Regularity and positional games", Transactions of the American Mathematical Society 106 (1963), 222–229.
[^2]: S. Shelah, "Primitive recursive bounds for van der Waerden numbers", Journal of the American Mathematical Society 1 (1988), 683–697.
[^3]: H. Furstenberg, Y. Katznelson, "A density version of the Hales–Jewett theorem", Journal d'Analyse Mathématique 57 (1991), 64–119.
[^4]: D. H. J. Polymath, "A new proof of the density Hales–Jewett theorem", Annals of Mathematics 175 (2012), 1283–1327.

# 연관 문서

## 선수지식

- [van der Waerden 정리](van-der-waerden-theorem.md)

## 더 알아보기

- [Erdős–Selfridge 정리](erdos-selfridge-theorem.md)

#combinatorics #computation
