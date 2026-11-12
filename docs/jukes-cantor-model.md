# Jukes–Cantor 모형

# 개요

**Jukes–Cantor 모형(Jukes–Cantor model)** 은 DNA(deoxyribonucleic acid) 서열의 한 자리에 있는 염기가 시간이 지나며 다른 염기로 바뀌는 과정을 네 상태의 [연속시간 Markov 연쇄](continuous-time-markov-chains.md)로 놓은 모형이다. 두 생물 종의 같은 유전자 $100$ 자리를 맞대 보니 $30$ 자리의 염기가 다르다. 한 자리가 두 번 바뀌었거나 바뀌었다가 원래 염기로 돌아온 경우는 이 $30$ 에 보이지 않으므로, 두 종이 갈라진 뒤 실제로 일어난 치환은 자리당 $0.3$ 번보다 많다.

이 모형은 다른 자리의 비율 $p$ 를 자리당 치환 수의 추정값으로 바꾸는 식을 주어 이 물음에 답한다. $p=0.3$ 이면 추정값은 $0.383$ 이다.

# 직관

염기는 A, C, G, T 넷이다. 한 자리의 염기가 다른 세 염기 각각으로 단위 시간당 빈도 $\alpha$ 로 바뀐다고 놓는다. 이 자리를 처음 염기와 같은지 다른지의 두 상태로만 보면, 같은 상태에서 다른 상태로는 빈도 $3\alpha$ 로 넘어간다. 다른 상태에서 같은 상태로는 세 갈래 가운데 처음 염기로 가는 한 갈래뿐이므로 빈도 $\alpha$ 로 넘어간다.

두 상태 연쇄의 전이확률은 연속시간 Markov 연쇄 문서의 닫힌 꼴로 나온다. 시간 $t$ 뒤에 처음 염기와 같을 확률은 다음이다.

$$
\frac14+\frac34e^{-4\alpha t}
$$

$t$ 가 커지면 이 값은 $1/4$ 로 내려간다. 아무리 많이 바뀌어도 네 염기 가운데 처음 것과 우연히 같을 확률이 $1/4$ 이므로 다른 자리의 비율은 $3/4$ 를 넘지 못한다.

두 종이 시간 $T$ 전에 갈라졌으면 두 서열 사이의 경로 길이는 $2T$ 이고, 그동안 자리당 치환 수의 평균은 $d=3\alpha\cdot 2T$ 다. 위 식에 $4\alpha t=4d/3$ 을 넣으면 다른 자리의 비율 $p$ 와 $d$ 의 관계가 나온다. $p=0.3$ 을 넣고 $d$ 에 대해 풀면 $d=-\tfrac34\ln 0.6\approx 0.383$ 이다.

# 정의

## 치환 연쇄

상태공간 $\lbrace A,C,G,T\rbrace$ 위의 연속시간 Markov 연쇄로, 전이율 행렬이 다음인 것을 **Jukes–Cantor 모형** 이라 한다[^1]. $J$ 는 모든 성분이 $1$ 인 $4\times 4$ 행렬이다.

$$
Q=\begin{pmatrix}-3\alpha&\alpha&\alpha&\alpha\cr \alpha&-3\alpha&\alpha&\alpha\cr \alpha&\alpha&-3\alpha&\alpha\cr \alpha&\alpha&\alpha&-3\alpha\end{pmatrix}=\alpha(J-4I)
$$

자리마다 같은 연쇄가 독립으로 움직인다고 놓는다. 직관 절의 빈도 $\alpha$ 가 이 행렬의 비대각 성분이다.

## 진화 거리

두 서열 사이의 **진화 거리(evolutionary distance)** $d$ 는 두 서열이 공통 조상에서 갈라진 뒤 자리당 일어난 치환 수의 평균이다. 경로 길이가 $2T$ 이면 $d=6\alpha T$ 다. 직관 절의 예에서 $d$ 의 추정값이 $0.383$ 이다.

# 성질

## 전이확률

$J^2=4J$ 이므로 $e^{sJ}=I+\tfrac14(e^{4s}-1)J$ 이고, 다음이 나온다.

$$
P(t)=e^{tQ}=e^{-4\alpha t}I+\frac{1-e^{-4\alpha t}}{4}J
$$

대각 성분은 $\tfrac14+\tfrac34e^{-4\alpha t}$, 비대각 성분은 $\tfrac14(1-e^{-4\alpha t})$ 다. 정상분포는 균등분포 $(1/4,1/4,1/4,1/4)$ 이고, $Q$ 가 대칭이므로 연쇄는 가역적이다.

## Jukes–Cantor 거리

정리. 두 서열에서 염기가 다른 자리의 비율의 기댓값 $p$ 와 진화 거리 $d$ 는 다음 관계를 만족한다[^1].

$$
p=\frac34\Bigl(1-e^{-4d/3}\Bigr),\qquad d=-\frac34\ln\Bigl(1-\frac43p\Bigr)
$$

증명의 요지. 연쇄가 가역적이고 정상분포에서 출발하므로, 두 서열의 차이는 한 서열이 시간 $2T$ 동안 바뀐 것과 분포가 같다. 비대각 성분 셋을 더한 값에 $8\alpha T=4d/3$ 을 넣는다.

$d$ 는 $p$ 의 증가함수이고 $p\to 3/4$ 일 때 무한대로 간다. 관측한 비율이 $3/4$ 이상이면 이 식으로 거리를 정할 수 없다. 이것을 **포화(saturation)** 라 한다.

## 최대가능도와 분산

$n$ 자리 가운데 $k$ 자리가 다르면 가능도는 $p(d)^k(1-p(d))^{n-k}$ 이고, $p(d)$ 가 단조이므로 [최대가능도](maximum-likelihood.md) 추정량은 $\hat p=k/n$ 을 거리 식에 넣은 $\hat d$ 다. 델타 방법(delta method)으로 분산을 근사하면 다음이다[^2].

$$
\mathrm{Var}(\hat d)\approx\frac{p(1-p)}{n\bigl(1-\tfrac43p\bigr)^2}
$$

$n=100$, $p=0.3$ 이면 분산은 $0.21/36\approx 0.0058$ 이고 표준편차는 약 $0.076$ 이다. 분모의 $1-\tfrac43p$ 가 $0$ 에 가까워지므로 $p$ 가 $3/4$ 에 다가갈수록 추정이 불안정하다.

## 확장

[Kimura 2 모수 모형](kimura-two-parameter-model.md)은 퓨린끼리(A, G)와 피리미딘끼리(C, T)의 치환인 전이(transition)와 그 밖의 치환인 전환(transversion)에 다른 빈도를 준다[^3]. 염기 빈도와 여섯 빈도를 모두 모수로 둔 가역 모형이 일반 시간 가역 모형(general time-reversible model)이다. 모두 같은 방식으로 $e^{tQ}$ 에서 거리와 가능도를 얻는다.

# 활용

- 계통수 추정. 서열 쌍마다 Jukes–Cantor 거리를 구해 거리 행렬을 만들고, 이 행렬에서 이웃 결합법(neighbor joining)으로 나무를 세운다.
- 분자 시계(molecular clock). 치환 빈도가 일정하다고 놓으면 $d=6\alpha T$ 에서 두 종이 갈라진 시간 $T$ 를 추정한다.
- 계통수의 가능도. 나무의 가지마다 $P(t)$ 를 놓고 자리마다 가능도를 곱하는 Felsenstein 가지치기 알고리즘(Felsenstein's pruning algorithm)이 이 전이확률을 쓴다[^2].

[^1]: T. H. Jukes, C. R. Cantor, "Evolution of protein molecules", in H. N. Munro (ed.), *Mammalian Protein Metabolism* III, Academic Press (1969), 21–132.
[^2]: J. Felsenstein, *Inferring Phylogenies*, Sinauer (2004), Chapter 11(거리 방법과 Jukes–Cantor 거리의 분산), Chapter 16(가지치기 알고리즘).
[^3]: M. Kimura, "A simple method for estimating evolutionary rates of base substitutions through comparative studies of nucleotide sequences", *Journal of Molecular Evolution* 16 (1980), 111–120.

# 연관 문서

## 선수지식

- [연속시간 Markov 연쇄](continuous-time-markov-chains.md)

## 더 알아보기

- [Kimura 2 모수 모형](kimura-two-parameter-model.md)

#probability #statistics
