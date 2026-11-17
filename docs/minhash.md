# MinHash

# 개요

**MinHash(min-wise hashing)** 는 두 집합이 얼마나 겹치는지를, 원소에 무작위 순서를 매긴 뒤 각 집합에서 가장 앞선 원소가 같은지로 추정하는 방법이다. 웹 문서 수십억 개에서 거의 같은 문서의 쌍을 찾으려면, 문서를 단어 묶음의 집합으로 보고 모든 쌍의 교집합을 세야 해서 쌍의 수와 문서 길이에 비례하는 시간이 든다. MinHash 는 문서마다 수백 개의 수로 된 짧은 요약을 만들고, 두 요약에서 같은 자리의 수가 일치하는 비율로 겹침을 추정한다.

# 직관

두 집합 $A=\lbrace 1,2,3,4\rbrace$ 와 $B=\lbrace 3,4,5,6\rbrace$ 은 합집합 $6$ 개 가운데 $2$ 개를 함께 갖는다. 겹치는 정도를 이 비율 $2/6=1/3$ 로 잰다.

$1$ 부터 $6$ 까지를 무작위로 줄 세우고, $A$ 와 $B$ 에서 각각 줄의 가장 앞에 선 원소를 본다. 합집합의 원소 가운데 가장 앞에 선 것은 여섯 가운데 하나가 같은 확률로 정해진다. 그 원소가 $3$ 이나 $4$ 이면 $A$ 와 $B$ 의 맨 앞 원소가 같고, $1,2,5,6$ 가운데 하나이면 다르다.

그러므로 두 맨 앞 원소가 같을 확률은 $2/6=1/3$ 로, 처음에 잰 비율과 같다. 줄 세우기를 $100$ 번 따로 하고 맨 앞 원소가 같았던 비율을 보면 이 확률의 추정값이 나온다.

# 정의

## Jaccard 유사도

유한집합 $A,B$ 가 공집합이 아닐 때 **Jaccard 유사도(Jaccard similarity)** 는 다음 값이다.

$$
J(A,B)=\frac{\vert A\cap B\vert}{\vert A\cup B\vert}
$$

예. 직관 절의 $A,B$ 는 $J(A,B)=2/6=1/3$ 이다.

## MinHash 요약

전체집합 $U$ 위의 순열 $\pi$ 에 대해 $h\_\pi(A)=\min\_{a\in A}\pi(a)$ 를 $A$ 의 **MinHash 값** 이라 한다. 순열 $\pi\_1,\dots,\pi\_k$ 를 독립으로 균등하게 뽑아 만든 벡터 $(h\_{\pi\_1}(A),\dots,h\_{\pi\_k}(A))$ 를 $A$ 의 **MinHash 요약(MinHash signature)** 이라 한다. 두 요약에서 같은 자리의 값이 일치하는 비율이 $J(A,B)$ 의 추정값이다. Broder 가 1997 년에 웹 문서의 중복 판정에 썼다[^1].

예. $\pi$ 가 $1,\dots,6$ 을 $5,3,6,1,4,2$ 로 보내면 $h\_\pi(A)=\min(5,3,6,1)=1$ 이고 $h\_\pi(B)=\min(6,1,4,2)=1$ 이라 일치한다. 두 값 모두 원소 $4$ 에서 나왔다.

실제로는 순열 대신 [범용 해시족](universal-hashing.md)에서 뽑은 해시 함수로 원소에 값을 매기고 그 최솟값을 쓴다.

# 성질

## 일치 확률

$\pi$ 가 $U$ 위의 균등한 무작위 순열이면 다음이 성립한다.

$$
\Pr\lbrack h\_\pi(A)=h\_\pi(B)\rbrack=J(A,B)
$$

*증명의 요지.* $A\cup B$ 의 원소 가운데 $\pi$ 값이 가장 작은 것을 $x$ 라 하면, $x$ 는 $A\cup B$ 에서 균등하게 정해진다. $h\_\pi(A)=h\_\pi(B)$ 인 것은 $x\in A\cap B$ 인 것과 동치다.

## 추정의 오차

요약 길이 $k$ 에서 일치 비율 $\hat J$ 는 성공 확률 $J$ 인 독립 시행 $k$ 번의 비율이므로, 기댓값이 $J$ 이고 분산이 $J(1-J)/k$ 다. [집중부등식](concentration-inequalities.md)의 Hoeffding 부등식으로 다음이 나온다.

$$
\Pr\bigl\lbrack\vert\hat J-J\vert\ge\varepsilon\bigr\rbrack\le 2e^{-2k\varepsilon^2}
$$

$k=O(\varepsilon^{-2}\log(1/\delta))$ 이면 오차가 $\varepsilon$ 이하일 확률이 $1-\delta$ 이상이다. 요약 길이는 집합의 크기와 상관없다.

## 최소 독립 해시족

균등한 순열 대신 쓰는 함수족 $\mathcal F$ 가 모든 $X\subseteq U$ 와 $x\in X$ 에 대해 $\Pr\_{\pi\in\mathcal F}\lbrack\min\pi(X)=\pi(x)\rbrack=1/\vert X\vert$ 를 만족하면 **최소 독립(min-wise independent)** 이라 한다. 일치 확률의 증명은 이 성질만 쓴다. 정확히 최소 독립인 순열족은 크기가 $e^{n-o(n)}$ 이상이어야 하므로, 실제로는 이 확률이 $1/\vert X\vert$ 에 가까운 근사 족을 쓴다[^2].

## 띠 나누기

**띠 나누기(banding)** 는 길이 $br$ 인 요약을 $r$ 개씩 $b$ 개의 띠로 나누고, 어느 한 띠의 $r$ 값이 모두 일치하는 쌍만 후보로 내놓는 방법이다. 유사도 $J$ 인 쌍이 후보가 될 확률은 다음과 같다.

$$
1-(1-J^r)^b
$$

예. $r=5$, $b=20$ 이면 $J=0.8$ 인 쌍은 확률 약 $0.9996$ 으로, $J=0.3$ 인 쌍은 약 $0.048$ 로 후보가 된다. 띠마다 $r$ 값을 해시 테이블의 키로 넣으면 같은 칸에 든 쌍만 비교하므로 모든 쌍을 비교하지 않는다.

# 활용

- 거의 같은 문서 찾기. 문서를 연속한 단어 $w$ 개의 묶음(shingle)의 집합으로 보고 MinHash 요약을 비교해 웹 검색의 중복 문서를 거른다[^1].
- 유전체 비교. 염기서열을 길이 $k$ 인 부분 문자열의 집합으로 보고 MinHash 요약으로 두 유전체의 거리를 빠르게 추정한다.
- 추천과 군집. 사용자를 본 항목의 집합으로 보고 띠 나누기로 비슷한 사용자의 후보를 찾는다.

[^1]: A. Z. Broder, "On the resemblance and containment of documents", Proceedings of Compression and Complexity of Sequences (1997), 21–29.
[^2]: A. Z. Broder, M. Charikar, A. M. Frieze, M. Mitzenmacher, "Min-wise independent permutations", Journal of Computer and System Sciences 60 (2000), 630–659.

# 연관 문서

## 선수지식

- [범용 해시족](universal-hashing.md)

## 더 알아보기

아직 연결한 문서가 없다.

#algorithms #probability #data_structures
