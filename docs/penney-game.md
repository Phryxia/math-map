# Penney 게임

# 개요

**Penney 게임(Penney's game)** 은 두 사람이 앞면(H)과 뒷면(T)으로 된 같은 길이의 패턴을 하나씩 고르고, 동전을 계속 던져 자기 패턴이 먼저 나온 사람이 이기는 게임이다. 첫 사람이 HHH 를 고르면 둘째 사람은 THH 를 골라 확률 $7/8$ 로 이긴다. 동전을 던질 때마다 새 도박꾼이 들어와 패턴에 거는 공정한 내기를 세우고 [Martingale](martingales.md)의 선택적 정지 정리를 쓰면, 패턴이 나오기까지의 평균 시간과 한 패턴이 다른 패턴보다 먼저 나올 확률이 패턴끼리 겹치는 방식만으로 계산된다.

# 직관

공정한 동전을 던져 HT 가 처음 나올 때까지 기다리면 평균 $4$ 번이고, HH 가 처음 나올 때까지 기다리면 평균 $6$ 번이다. 두 패턴은 어느 두 자리에서든 확률 $1/4$ 로 나오는데 기다리는 시간이 다르다.

HT 를 기다리다 H 가 나온 뒤 다음이 H 이면 HT 는 실패했지만 마지막 H 가 다시 HT 의 첫 글자가 된다. HH 를 기다리다 H 가 나온 뒤 다음이 T 이면 처음부터 다시 시작해야 한다. HH 는 자기 자신과 한 글자 겹치므로, 나올 때 몰려서 나오고 그 사이는 길다.

기다리는 시간을 계산하려고 동전을 던지기 직전마다 도박꾼 한 명이 $1$ 원을 들고 들어온다고 하자. HH 를 기다릴 때 새 도박꾼은 다음 던지기가 H 라는 데 $1$ 원을 건다. 맞으면 $2$ 원을 받아 그다음 던지기가 H 라는 데 $2$ 원을 다 걸고, 맞으면 $4$ 원을 받아 떠난다. 틀리면 그 자리에서 가진 돈을 잃는다. 내기가 공정하므로 도박꾼 전체의 순이익은 평균이 $0$ 인 martingale 이다.

HH 가 처음 나온 순간 $T$ 에 도박꾼들이 가진 돈은, 마지막 두 번 앞에서 들어온 도박꾼의 $4$ 원과 마지막 한 번 앞에서 들어온 도박꾼의 $2$ 원을 더한 $6$ 원이다. 그때까지 도박꾼 $T$ 명이 $1$ 원씩 냈으므로 순이익은 $6-T$ 이고, 이 평균이 $0$ 이므로 HH 의 평균 대기 시간은 $6$ 이다. HT 에서는 마지막 한 번 앞의 도박꾼이 T 가 아닌 H 에 걸었으므로 잃고, 남는 돈이 $4$ 원뿐이라 평균 대기 시간이 $4$ 다.

# 정의

## 게임

길이 $n$ 인 H 와 T 의 문자열을 **패턴(pattern)** 이라 한다. 첫째 사람이 패턴 $A$ 를 고르고, 둘째 사람이 $A$ 를 본 뒤 다른 패턴 $B$ 를 고른다. 공정한 동전을 계속 던져 지금까지 나온 결과의 끝에 $A$ 가 먼저 나타나면 첫째 사람이, $B$ 가 먼저 나타나면 둘째 사람이 이긴다. 이것이 **Penney 게임** 이다.

W. Penney 가 1969 년에 이 게임을 냈다.[^1]

## 상관수

두 패턴 $A=a_1\cdots a_n$, $B=b_1\cdots b_n$ 에서, $A$ 의 마지막 $k$ 글자가 $B$ 의 처음 $k$ 글자와 같으면 $1$, 아니면 $0$ 인 값을 $c_k$ 라 한다. 다음 수를 $A$ 와 $B$ 의 **상관수(correlation)** 라 한다.

$$
A\ast B=\sum_{k=1}^{n}c_k\thinspace 2^{k-1}
$$

$c_n,c_{n-1},\dots,c_1$ 을 이진수의 자리로 읽은 값이다. HHH 와 THH 에서는 $\mathrm{HHH}\ast\mathrm{HHH}=111_2=7$ 이고, THH 의 끝 HH 와 H 가 HHH 의 처음과 같으므로 $\mathrm{THH}\ast\mathrm{HHH}=011_2=3$ 이다. HHH 의 어느 끝도 T 로 시작하는 THH 의 처음과 같지 않으므로 $\mathrm{HHH}\ast\mathrm{THH}=0$ 이다. $\mathrm{THH}\ast\mathrm{THH}=100_2=4$ 다.

# 성질

## 평균 대기 시간

공정한 동전에서 패턴 $A$ 가 처음 나올 때까지 던지는 횟수 $T_A$ 의 평균은 다음과 같다.

$$
E\lbrack T_A\rbrack=2\thinspace(A\ast A)
$$

증명의 요지는 직관 절의 도박꾼이다. $k$ 번째 던지기 직전에 들어온 도박꾼은 $A$ 의 글자를 차례로 걸어 맞을 때마다 돈을 두 배로 불린다. 시각 $T_A$ 에 살아 있는 도박꾼은 $A$ 의 끝 $j$ 글자가 $A$ 의 처음 $j$ 글자와 같은 $j$ 마다 한 명이고, 그 도박꾼이 가진 돈은 $2^j$ 다. 순이익 $\sum_j c_j 2^j-T_A$ 에 선택적 정지 정리를 쓰면 평균이 $0$ 이다.

$E\lbrack T_A\rbrack\lt\infty$ 이고 증분이 유계이므로 정리의 조건이 성립한다.[^2]

길이 $3$ 인 패턴의 평균 대기 시간은 HHH 와 TTT 가 $14$, HTH 와 THT 가 $10$, 나머지 넷이 $8$ 이다.

## Conway 공식

$A$ 와 $B$ 가 같은 길이의 다른 패턴이고, $A$ 와 $B$ 가 먼저 나올 확률을 각각 $p_A$, $p_B$ 라 하자. 다음이 성립한다.

$$
p_B:p_A=(A\ast A-A\ast B):(B\ast B-B\ast A)
$$

J. H. Conway 가 증명 없이 알린 공식이고, 증명은 두 패턴 각각에 거는 도박꾼 무리를 동시에 세워 선택적 정지 정리를 두 번 쓴다.[^2] HHH 와 THH 에 넣으면 승산이 $(7-0):(4-3)=7:1$ 이고, THH 가 먼저 나올 확률이 $7/8$ 이다. HHH 가 먼저 나오려면 처음 세 번이 모두 H 여야 한다. 처음 세 번 안에 T 가 한 번이라도 나오면 HHH 가 처음 나오기 직전의 글자가 T 이므로 THH 가 먼저 완성된다.

## 둘째 사람의 응답

길이 $3$ 에서 $A=a_1a_2a_3$ 에 대해 둘째 사람이 $B=\bar a_2a_1a_2$ 를 고르면($\bar a$ 는 $a$ 의 반대 면) 이길 확률이 다음과 같다.

| A   | B   | B 가 이길 확률 |
| --- | --- | -------------- |
| HHH | THH | 7/8            |
| HHT | THH | 3/4            |
| HTH | HHT | 2/3            |
| HTT | HHT | 2/3            |
| THH | TTH | 2/3            |
| THT | TTH | 2/3            |
| TTH | HTT | 3/4            |
| TTT | HTT | 7/8            |

어느 $A$ 에도 둘째 사람이 확률 $2/3$ 이상으로 이기는 $B$ 가 있다. 그래서 "더 강하다" 는 관계가 추이적이지 않다. THH 는 HHT 를, HHT 는 HTT 를, HTT 는 TTH 를, TTH 는 THH 를 이긴다. 길이가 $3$ 이상이면 언제나 둘째 사람이 유리한 응답이 있다.[^3]

## 대기 시간과 승부

평균 대기 시간이 긴 패턴이 먼저 나올 수도 있다. THTH 의 평균 대기 시간은 $2\cdot 1010_2=20$, HTHH 는 $2\cdot 1001_2=18$ 이다. 그런데 $\mathrm{THTH}\ast\mathrm{HTHH}=0101_2=5$, $\mathrm{HTHH}\ast\mathrm{THTH}=0$ 이므로 Conway 공식에서 THTH 가 먼저 나올 승산은 $(9-0):(10-5)=9:5$ 이다. 평균 대기 시간은 패턴 하나만 기다릴 때의 값이고, 두 패턴의 승부는 두 패턴 사이의 상관수까지 들어간 Conway 공식으로 정해진다.

# 활용

- 문자열 탐색의 기댓값. 무작위 문자열에서 패턴이 처음 나오는 위치의 평균은 패턴의 자기 겹침, 곧 [Knuth–Morris–Pratt 알고리즘](knuth-morris-pratt.md)의 실패 함수가 가리키는 접두사와 접미사의 일치로 정해진다. 알파벳이 $m$ 글자이면 $2^{k}$ 를 $m^{k}$ 로 바꾼다. 26 글자 알파벳에서 원숭이가 ABRACADABRA 를 처음 칠 때까지의 평균 타자 수는 $26^{11}+26^4+26$ 이다.[^4]
- DNA(deoxyribonucleic acid) 서열 분석. 짧은 염기 서열이 무작위 서열에서 몇 번 나올지의 기댓값을 정할 때 자기 겹침이 큰 서열은 나올 때 몰려서 나오므로, 출현 횟수의 분산이 겹침이 없는 서열보다 크다.
- 비추이적 관계. [비추이적 주사위](nontransitive-dice.md)처럼, 대결마다 이길 확률을 정할 수 있어도 그 관계가 순서를 이루지 않는 예다.

[^1]: W. Penney, "Problem 95: Penney-Ante", Journal of Recreational Mathematics 2 (1969).
[^2]: S.-Y. R. Li, "A martingale approach to the study of occurrence of sequence patterns in repeated experiments", Annals of Probability 8 (1980).
[^3]: L. J. Guibas, A. M. Odlyzko, "String overlaps, pattern matching, and nontransitive games", Journal of Combinatorial Theory Series A 30 (1981).
[^4]: D. Williams, *Probability with Martingales*, Cambridge University Press (1991), 10.12 절.

# 연관 문서

## 선수지식

- [Martingale](martingales.md)

## 더 알아보기

아직 연결한 문서가 없다.

#probability #combinatorics
