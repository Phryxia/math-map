# 접미사 배열

# 개요

**접미사 배열(suffix array)** 은 본문의 모든 접미사를 사전순으로 정렬해 그 시작 위치를 나열한 배열이다. 길이 $n$ 인 본문에서 정수 $n+1$ 개만 저장하고, 이진 탐색으로 길이 $m$ 인 패턴을 $O(m\log n)$ 시간에 찾는다. Manber 와 Myers 가 1990 년에 제안했다[^1].

[트라이](tries.md)의 접미사 트리를 사전순 깊이 우선으로 돌 때 잎이 나오는 순서가 접미사 배열이다. 만드는 방법은 접미사들의 [비교 정렬](comparison-sorting.md)에서 출발해, 이미 정렬한 짧은 접두사의 순위를 다시 써서 비교를 줄인다.

# 직관

본문 $\mathtt{banana}$ 에서 $\mathtt{ana}$ 가 나타나는 자리를 모두 찾는다. $\mathtt{ana}$ 가 위치 $i$ 에서 나타나는 것은 위치 $i$ 에서 시작하는 접미사가 $\mathtt{ana}$ 로 시작하는 것과 같다. 그래서 접미사 $\mathtt{banana}, \mathtt{anana}, \mathtt{nana}, \mathtt{ana}, \mathtt{na}, \mathtt a$ 를 사전순으로 늘어놓는다.

$$
\mathtt a,\quad \mathtt{ana},\quad \mathtt{anana},\quad \mathtt{banana},\quad \mathtt{na},\quad \mathtt{nana}
$$

$\mathtt{ana}$ 로 시작하는 접미사들은 이 목록에서 붙어 있는 한 구간을 이룬다. 둘째와 셋째 접미사이고 시작 위치는 $3$ 과 $1$ 이다. 구간의 양 끝은 정렬된 목록에서의 이진 탐색으로 찾는다. 접미사들을 따로 저장하지 않고 시작 위치만 저장해도 본문에서 접미사를 읽을 수 있다.

# 정의

## 접미사 배열

본문 $T=t_0t_1\cdots t_{n-1}$ 의 끝에 다른 어느 글자보다 작은 글자 $\char36{}$ 를 붙인다. 위치 $i$ 에서 시작하는 접미사를 $T_i=t_i\cdots t_{n-1}\char36{}$ 라 한다. 접미사 배열 $\mathrm{SA}$ 는 $T_{\mathrm{SA}\lbrack 0\rbrack}\lt T_{\mathrm{SA}\lbrack 1\rbrack}\lt\cdots\lt T_{\mathrm{SA}\lbrack n\rbrack}$ 이 되는 $0,\dots,n$ 의 순열이다. 부등호는 사전순이다. 역순열 $\mathrm{rank}$ 는 $\mathrm{rank}\lbrack\mathrm{SA}\lbrack r\rbrack\rbrack=r$ 로 정의한다.

$T=\mathtt{banana}$ 이면 $\mathrm{SA}=(6,5,3,1,0,4,2)$ 이다.

## 최장 공통 접두사 배열

**최장 공통 접두사 배열(longest common prefix array, LCP 배열)** 은 $1\le r\le n$ 에 대해 $\mathrm{LCP}\lbrack r\rbrack$ 를 $T_{\mathrm{SA}\lbrack r-1\rbrack}$ 과 $T_{\mathrm{SA}\lbrack r\rbrack}$ 의 공통 접두사의 길이로 둔다. $T=\mathtt{banana}$ 이면 $\mathrm{LCP}\lbrack 1\rbrack,\dots,\mathrm{LCP}\lbrack 6\rbrack$ 은 $0,1,3,0,0,2$ 다.

# 성질

## 접두사 배가로 만들기

정리. 접미사 배열은 $O(n\log n)$ 시간에 만들어진다[^1].

증명의 요지. 단계 $j$ 에서 각 접미사의 처음 $2^j$ 글자로 정한 순위를 가진다. 접미사 $T_i$ 의 처음 $2^{j+1}$ 글자는 $T_i$ 의 처음 $2^j$ 글자와 $T_{i+2^j}$ 의 처음 $2^j$ 글자를 이은 것이므로, 순위의 쌍으로 비교된다. 쌍들은 $0$ 부터 $n$ 까지의 정수 쌍이어서 자릿수별로 세어 정렬하는 기수 정렬(radix sort)이 $O(n)$ 시간에 정렬한다. 순위가 모두 달라지면 멈추고, 그때까지 단계는 $\lceil\log_2(n+1)\rceil$ 개 이하다.

Kärkkäinen 과 Sanders 는 위치를 $3$ 으로 나눈 나머지로 접미사를 나눠 재귀하는 방법으로 $O(n)$ 시간에 만들었다[^2].

## 패턴 검색

$P$ 로 시작하는 문자열들은 사전순에서 붙어 있으므로, $T_{\mathrm{SA}\lbrack r\rbrack}$ 가 패턴 $P$ 로 시작하는 $r$ 들은 한 구간을 이룬다. 구간의 양 끝은 이진 탐색으로 찾고, 탐색의 비교마다 글자를 $m$ 개 이하 읽으므로 $O(m\log n)$ 시간이 든다. 탐색 구간의 양 끝과 $P$ 의 공통 접두사 길이를 들고 다니면 $O(m+\log n)$ 시간으로 줄어든다[^1].

## LCP 배열의 선형 시간 계산

정리. $T_i$ 의 앞 접미사와의 공통 접두사 길이를 $h_i=\mathrm{LCP}\lbrack\mathrm{rank}\lbrack i\rbrack\rbrack$ 라 하면 $h_{i+1}\ge h_i-1$ 이다. 그래서 $i=0,1,\dots$ 의 순서로 $h_i$ 를 계산하면 LCP 배열이 $O(n)$ 시간에 나온다[^3].

증명의 요지. $h_i\gt 0$ 이고 정렬된 순서에서 $T_i$ 바로 앞의 접미사를 $T_k$ 라 하면, $T_k\lt T_i$ 이고 둘은 처음 $h_i$ 글자가 같다. 첫 글자를 떼면 $T_{k+1}\lt T_{i+1}$ 이고 둘은 처음 $h_i-1$ 글자가 같다. $T_{i+1}$ 바로 앞의 접미사는 $T_{k+1}$ 과 $T_{i+1}$ 사이에 있으므로 $T_{i+1}$ 과 처음 $h_i-1$ 글자 이상이 같다. 계산에서는 $h_{i+1}$ 을 $h_i-1$ 부터 늘려 가므로, 늘리는 횟수의 합은 $2n$ 이하다.

## 접미사 트리와의 대응

접미사 트리의 마디마다 자식들을 간선의 첫 글자 순서로 놓고 깊이 우선으로 돌면, 잎이 나오는 순서가 접미사 배열이다. $\mathrm{LCP}\lbrack r\rbrack$ 는 $r-1$ 번째와 $r$ 번째 잎의 가장 낮은 공통 조상이 나타내는 문자열의 길이다. 그래서 접미사 배열과 LCP 배열로부터 접미사 트리가 $O(n)$ 시간에 만들어지고, 그 반대도 같다.

# 활용

- 반복되는 부분 문자열. 두 번 이상 나타나는 가장 긴 부분 문자열의 길이는 LCP 배열의 최댓값이다. $\mathtt{banana}$ 에서는 $3$ 이고 그 문자열은 $\mathtt{ana}$ 다.
- 서로 다른 부분 문자열의 수. 비어 있지 않은 서로 다른 부분 문자열은 $n(n+1)/2-\sum\_{r}\mathrm{LCP}\lbrack r\rbrack$ 개다. 정렬된 접미사마다 앞 접미사와 공통인 접두사를 빼고 남은 접두사들이 새 부분 문자열이다. $\mathtt{banana}$ 에서는 $21-6=15$ 개다.
- 압축과 색인. Burrows–Wheeler 변환(Burrows–Wheeler transform)은 접미사 배열의 순서로 각 접미사 바로 앞의 글자를 늘어놓은 문자열이고, bzip2 압축과 유전체 서열의 Ferragina–Manzini 색인(FM-index)이 이 변환을 쓴다[^4].

[^1]: U. Manber, G. Myers, "Suffix arrays: a new method for on-line string searches", SIAM Journal on Computing 22 (1993), 935–948.
[^2]: J. Kärkkäinen, P. Sanders, "Simple linear work suffix array construction", ICALP 2003, Lecture Notes in Computer Science 2719, 943–955.
[^3]: T. Kasai, G. Lee, H. Arimura, S. Arikawa, K. Park, "Linear-time longest-common-prefix computation in suffix arrays and its applications", CPM 2001, Lecture Notes in Computer Science 2089, 181–192.
[^4]: M. Burrows, D. J. Wheeler, "A block-sorting lossless data compression algorithm", Technical Report 124, Digital Equipment Corporation, 1994.

# 연관 문서

## 선수지식

- [트라이](tries.md)
- [비교 정렬](comparison-sorting.md)

## 더 알아보기

아직 연결한 문서가 없다.

#data_structures #algorithms
