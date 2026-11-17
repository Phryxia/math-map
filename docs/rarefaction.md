# 희박화

# 개요

**희박화(rarefaction)** 는 크기가 다른 표본들을 같은 크기로 줄였을 때 각 표본에서 볼 종류 수의 기댓값을 계산해 종류의 풍부함을 견주는 방법이다. 한 연못에서 물고기 여덟 마리를, 다른 연못에서 백 마리를 잡았다면 두 번째 연못에서 종을 더 많이 본 것은 더 많이 잡아서일 수 있다.

희박화는 큰 표본에서 작은 표본의 크기만큼을 비복원으로 뽑았을 때 나올 종 수의 기댓값을 [초기하분포](hypergeometric-distribution.md)로 계산하고, 같은 크기에서의 종 수끼리 견준다.

# 직관

연못 A 에서 잡은 물고기 여덟 마리의 종이 $a,a,a,b,b,c,d,e$ 다. 이 여덟 마리 가운데 두 마리만 잡았다면 종을 몇 개 보았을지 계산한다.

두 마리를 뽑는 방법은 $\binom82=28$ 가지다. 두 마리가 같은 종인 경우는 $a$ 두 마리를 고르는 $\binom32=3$ 가지와 $b$ 두 마리를 고르는 $1$ 가지로 $4$ 가지다. 같은 종이면 종 하나, 다르면 종 둘을 보므로 기댓값은 $2-4/28=13/7\approx1.86$ 이다.

연못 B 에서 백 마리를 잡아 종 열을 보았어도, 같은 방식으로 두 마리로 줄인 기댓값이 $1.86$ 보다 작으면 두 마리 수준에서는 B 가 A 보다 한 종에 몰려 있다.

# 정의

표본 크기를 $N$, 종류 $s$ 가 표본에 나온 횟수를 $N_s$ 라 한다. 표본에서 $m\le N$ 개를 비복원으로 고르면 종류 $s$ 가 하나도 뽑히지 않을 확률은 $\binom{N-N_s}{m}/\binom Nm$ 이다. 그러므로 $m$ 개에서 볼 종류 수의 기댓값은

$$
E\lbrack S_m\rbrack=\sum_s\Bigl(1-\frac{\binom{N-N_s}{m}}{\binom Nm}\Bigr)
$$

이다[^1]. $m$ 을 $1$ 부터 $N$ 까지 움직여 그린 $E\lbrack S_m\rbrack$ 의 그래프를 **희박화 곡선(rarefaction curve)** 이라 한다.

직관 절에서 $N=8$, $m=2$ 이다. $a$ 는 $1-\binom52/28=18/28$, $b$ 는 $1-\binom62/28=13/28$, 한 마리뿐인 세 종은 각각 $1-\binom72/28=7/28$ 이므로 합이 $52/28=13/7$ 이다.

# 성질

## 곡선의 모양

$E\lbrack S_1\rbrack=1$ 이고 $E\lbrack S_N\rbrack$ 은 표본의 종 수다. 표본을 하나 더할 때 새 종을 볼 확률이 점점 작아져서, 곡선은 증가하고 위로 볼록하다. 곡선의 끝 기울기 $E\lbrack S_N\rbrack-E\lbrack S\_{N-1}\rbrack$ 은 한 번만 나온 종류의 수를 $f_1$ 이라 할 때 $f_1/N$ 이다.

## 표본 덮음률

곡선의 끝 기울기 $f_1/N$ 은 [Good–Turing 추정량](good-turing-estimator.md)이 주는 놓친 질량과 같다. $1-f_1/N$ 을 **표본 덮음률(sample coverage)** 이라 하고, 표본에 나온 종류들이 모집단 확률의 몇 할을 차지하는지 추정한다. 직관 절에서 $1-3/8=5/8$ 이다.

## 크기 대신 덮음률로 견주기

희박화는 모든 표본을 가장 작은 표본의 크기로 줄이므로 큰 표본의 정보를 버린다. Chao 와 Jost 는 표본들을 같은 크기 대신 같은 표본 덮음률로 맞추어 견주는 방법을 제안했다[^2]. 덮음률이 같으면 두 모집단에서 보지 못한 몫이 같으므로 종 수를 직접 견줄 수 있다.

# 활용

- 생태학의 다양성 비교. 조사 노력이 다른 지역이나 시기의 종 수를 같은 표본 크기에서 견준다.
- 미생물 군집의 서열 분석. 시료마다 읽은 서열 수가 다르므로 같은 수로 줄여 종류 수를 견주고, 곡선이 평평해졌는지로 서열을 충분히 읽었는지 판단한다.
- 고생물학. 지층마다 화석 표본 수가 다를 때 같은 수에서의 분류군 수를 견준다.

[^1]: S. H. Hurlbert, "The nonconcept of species diversity: a critique and alternative parameters", *Ecology* 52 (1971), 577–586.
[^2]: A. Chao, L. Jost, "Coverage-based rarefaction and extrapolation: standardizing samples by completeness rather than size", *Ecology* 93 (2012), 2533–2547.

# 연관 문서

## 선수지식

- [초기하분포](hypergeometric-distribution.md)
- [Good–Turing 추정량](good-turing-estimator.md)

## 더 알아보기

아직 연결한 문서가 없다.

#statistics #probability #combinatorics
