# 일반 시간 가역 모형

# 개요

**일반 시간 가역 모형(general time-reversible model, GTR 모형)** 은 염기 네 개의 빈도와 염기 쌍마다의 치환 빈도를 모두 따로 둔 DNA(deoxyribonucleic acid) 치환 모형이다. G 와 C 가 많은 세균의 유전체에서는 염기 빈도가 A $0.1$, C $0.4$, G $0.4$, T $0.1$ 쯤이다. [Jukes–Cantor 모형](jukes-cantor-model.md)은 오래 치환이 쌓이면 네 염기가 $1/4$ 씩 된다고 놓으므로 이 빈도를 설명하지 못하고, 두 서열의 다른 자리 비율을 진화 거리로 바꾸는 값도 어긋난다. GTR 모형은 관측한 염기 빈도로 정상분포를 맞추고, 상세균형이 성립하도록 치환 빈도를 놓아 전이확률과 거리를 계산한다.

# 직관

염기 빈도가 $\pi_A=\pi_T=0.1$, $\pi_C=\pi_G=0.4$ 인 두 서열이 서로 아무 관계가 없으면, 한 자리에서 두 염기가 같을 확률은 다음과 같다.

$$
\sum_j\pi_j^2=0.01+0.16+0.16+0.01=0.34
$$

그래서 아주 오래전에 갈라진 두 서열도 다른 자리가 66% 를 넘지 않는다. Jukes–Cantor 모형은 이 한계를 $3/4$ 으로 놓는다.

한계를 $0.66$ 으로 맞추려고, 각 자리가 빈도 $\mu$ 로 지금 염기를 잊고 새 염기를 $\pi$ 에 따라 다시 뽑는다고 놓는다. 시간 $t$ 동안 한 번도 다시 뽑지 않을 확률이 $e^{-\mu t}$ 이므로, 두 서열 사이 경로 길이가 $t$ 일 때 다른 자리의 비율은 다음이다.

$$
p=\bigl(1-e^{-\mu t}\bigr)\cdot 0.66
$$

다시 뽑아도 같은 염기가 나올 수 있어서, 실제 치환은 다시 뽑기 가운데 $0.66$ 비율이다. 자리당 치환 수는 $d=0.66\thinspace\mu t$ 이고, 위 식을 풀면 다음이 나온다.

$$
d=-0.66\ln\Bigl(1-\frac p{0.66}\Bigr)
$$

$100$ 자리 가운데 $30$ 자리가 다르면 $d=0.400$ 이다. 같은 자료에 Jukes–Cantor 거리는 $0.383$ 이다. 염기 종류가 사실상 적어 같은 자리에서 치환이 겹쳐 되돌아가는 일이 더 잦으므로, 관측한 차이 뒤에 숨은 치환이 더 많다.

# 정의

## F81 모형

[연속시간 Markov 연쇄](continuous-time-markov-chains.md)로서 $i\ne j$ 일 때 전이율이 $Q\_{ij}=\mu\pi_j$ 인 치환 모형을 **F81 모형(Felsenstein 1981 model)** 이라 한다.[^1] 직관 절의 "잊고 다시 뽑기" 가 이것이고, 전이확률은 다음과 같다.

$$
P\_{ij}(t)=e^{-\mu t}\delta\_{ij}+\bigl(1-e^{-\mu t}\bigr)\pi_j
$$

$\pi_j=1/4$ 이면 Jukes–Cantor 모형이다.

## GTR 모형

대칭인 양수 $r\_{ij}=r\_{ji}$ $(i\ne j)$ 와 확률벡터 $\pi$ 로 전이율을 다음과 같이 놓은 치환 모형을 **GTR 모형** 이라 한다.[^2]

$$
Q\_{ij}=r\_{ij}\pi_j\quad(i\ne j),\qquad Q\_{ii}=-\sum\_{j\ne i}Q\_{ij}
$$

$r\_{ij}$ 를 **교환 빈도(exchangeability)** 라 한다. 보통 $-\sum_i\pi_iQ\_{ii}=1$ 이 되게 $r$ 의 크기를 맞추어, 시간을 자리당 치환 수의 기댓값으로 잰다. 그러면 $r$ 의 자유도 $5$ 와 $\pi$ 의 자유도 $3$ 을 합쳐 모수가 $8$ 개다. F81 모형은 $r$ 이 모두 같은 경우다.

## 특수한 경우

- HKY85 모형(Hasegawa–Kishino–Yano 1985 model). 전이(A 와 G, C 와 T)의 교환 빈도가 $\kappa$, 전환의 교환 빈도가 $1$ 이다.[^3]
- [Kimura 2 모수 모형](kimura-two-parameter-model.md). HKY85 모형에서 $\pi_j=1/4$ 인 경우다.
- Jukes–Cantor 모형. $r$ 이 모두 같고 $\pi_j=1/4$ 인 경우다.

# 성질

## 가역성과 정상분포

$\pi_iQ\_{ij}=\pi_i\pi_jr\_{ij}$ 는 $i$ 와 $j$ 를 바꾸어도 같으므로 GTR 모형은 상세균형을 만족한다. [가역 Markov 연쇄](reversible-markov-chains.md) 문서대로 $\pi$ 가 정상분포이고 연쇄가 가역이다. 반대로 정상분포가 $\pi$ 인 가역 연쇄는 $r\_{ij}=Q\_{ij}/\pi_j$ 로 두면 상세균형에서 $r\_{ij}=r\_{ji}$ 라 GTR 꼴이다. 그래서 GTR 모형은 시간에 따라 바뀌지 않는 네 상태 가역 치환 연쇄 전체와 같다.

## 대칭화와 전이확률

$\Pi=\mathrm{diag}(\pi)$ 로 두면 $S=\Pi^{1/2}Q\Pi^{-1/2}$ 의 $(i,j)$ 성분은 $\sqrt{\pi_i\pi_j}\thinspace r\_{ij}$ 라 $S$ 가 대칭행렬이다. [스펙트럼 정리](spectral-theorem.md)로 $S=U\Lambda U^{\mathsf T}$ 인 직교행렬 $U$ 와 실수 대각행렬 $\Lambda$ 가 존재하고, 전이확률은 다음과 같다.

$$
P(t)=e^{tQ}=\Pi^{-1/2}Ue^{t\Lambda}U^{\mathsf T}\Pi^{1/2}
$$

고윳값은 하나가 $0$ 이고 나머지는 음수다. F81 모형에서는 $0$ 과 $-\mu$ (세 겹)이고, 직관 절의 $e^{-\mu t}$ 가 이 고윳값에서 나온다. 고윳값 분해를 한 번 해 두면 가지 길이 $t$ 마다 $e^{t\Lambda}$ 의 대각성분만 다시 계산한다.

## 뿌리의 위치

가역 모형에서는 계통수의 가능도가 뿌리를 어느 가지에 두어도 같다. 뿌리 양쪽 가지의 길이 $t_1$, $t_2$ 는 합 $t_1+t_2$ 로만 가능도에 들어간다. 이것을 Felsenstein 의 도르래 원리(pulley principle)라 한다.[^1] 그래서 GTR 모형으로는 뿌리 없는 나무를 추정하고, 뿌리는 외군이나 분자 시계로 따로 정한다.

## F81 거리와 GTR 거리

직관 절의 식은 $B=1-\sum_j\pi_j^2$ 로 두면 다음 F81 거리다.

$$
d=-B\ln\Bigl(1-\frac pB\Bigr)
$$

GTR 모형에서는 두 서열의 염기 쌍 빈도로 $4\times 4$ 행렬 $F$ 를 만들고 $\Pi^{-1}F$ 의 [행렬 로그](matrix-logarithm.md)로 $tQ$ 를 추정해 $d=-\mathrm{tr}\bigl(\Pi\log(\Pi^{-1}F)\bigr)$ 로 거리를 얻는다.[^4]

# 활용

- 최대가능도 계통 추정. [Felsenstein 가지치기 알고리즘](felsenstein-pruning-algorithm.md)으로 가지마다 GTR 전이확률을 넣어 가능도를 계산하고, 교환 빈도와 가지 길이를 함께 추정한다. 자리마다 빈도가 다른 것을 감마 분포로 섞은 GTR+Γ 꼴이 흔히 쓰인다.[^1]
- 모형 선택. Jukes–Cantor, Kimura, HKY85, GTR 모형은 차례로 포함 관계이므로 가능도비 검정이나 [정보 기준](information-criteria.md)으로 자료에 맞는 모형을 고른다.
- 거리 방법. GTR 거리로 거리 행렬을 만들고 [이웃 결합법](neighbor-joining.md)으로 나무를 세운다.

[^1]: J. Felsenstein, "Evolutionary trees from DNA sequences: a maximum likelihood approach", *Journal of Molecular Evolution* 17 (1981), 368–376. F81 모형, 도르래 원리. 감마 분포 혼합과 모형의 계층은 J. Felsenstein, *Inferring Phylogenies*, Sinauer (2004), 13 장과 16 장.
[^2]: S. Tavaré, "Some probabilistic and statistical problems in the analysis of DNA sequences", *Lectures on Mathematics in the Life Sciences* 17 (1986), 57–86. GTR 모형의 정의와 대칭화.
[^3]: M. Hasegawa, H. Kishino, T. Yano, "Dating of the human–ape splitting by a molecular clock of mitochondrial DNA", *Journal of Molecular Evolution* 22 (1985), 160–174.
[^4]: F. Rodríguez, J. L. Oliver, A. Marín, J. R. Medina, "The general stochastic model of nucleotide substitution", *Journal of Theoretical Biology* 142 (1990), 485–501.

# 연관 문서

## 선수지식

- [Jukes–Cantor 모형](jukes-cantor-model.md)
- [가역 Markov 연쇄](reversible-markov-chains.md)

## 더 알아보기

아직 연결한 문서가 없다.

#probability #statistics #linear_algebra
