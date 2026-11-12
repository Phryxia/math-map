# Kimura 2 모수 모형

# 개요

**Kimura 2 모수 모형(Kimura two-parameter model)** 은 염기 치환을 두 종류로 나누어 서로 다른 빈도를 주는 DNA(deoxyribonucleic acid) 치환 모형이다. 두 종의 같은 유전자 $100$ 자리를 맞대 보니 $30$ 자리가 다르고, 그 가운데 $20$ 자리는 A 와 G 사이 또는 C 와 T 사이의 차이다. [Jukes–Cantor 모형](jukes-cantor-model.md)은 모든 치환을 같은 빈도로 두므로 이 비율을 설명하지 못한다.

Kimura 2 모수 모형은 두 종류의 차이 비율을 따로 세어 자리당 치환 수를 추정한다. 위 예에서 추정값은 $0.402$ 이다.

# 직관

A 와 G 는 퓨린(purine), C 와 T 는 피리미딘(pyrimidine)이다. 같은 무리 안의 치환(A 와 G, C 와 T)을 **전이(transition)**, 무리를 넘는 치환을 **전환(transversion)** 이라 한다. 한 염기에서 전이로 갈 곳은 하나, 전환으로 갈 곳은 둘이다. 빈도가 모두 같으면 차이 가운데 전이는 $1/3$ 정도여야 하는데, 위 예에서는 $30$ 가운데 $20$ 이 전이다.

그래서 전이의 빈도를 $\alpha$, 전환 하나의 빈도를 $\beta$ 로 따로 둔다. 자리의 염기가 퓨린인지 피리미딘인지만 보면, 이 구분은 전환에서만 바뀌고 빈도는 어느 쪽에서든 $2\beta$ 다. [연속시간 Markov 연쇄](continuous-time-markov-chains.md) 문서의 두 상태 닫힌 꼴에 $a=b=2\beta$ 를 넣으면, 시간 $t$ 뒤에 무리가 바뀌어 있을 확률은 다음이다.

$$
\frac12\Bigl(1-e^{-4\beta t}\Bigr)
$$

무리가 같은 경우 가운데 염기까지 같은지 다른지는 $\alpha$ 에 따라 갈린다. 두 종류의 차이 비율을 따로 관측하면 $\alpha$ 와 $\beta$ 를 따로 추정할 수 있다.

# 정의

## 치환 연쇄

상태 순서를 A, G, C, T 로 둔 연속시간 Markov 연쇄로, 전이율 행렬이 다음인 것을 **Kimura 2 모수 모형** 이라 한다[^1].

$$
Q=\begin{pmatrix}-\alpha-2\beta&\alpha&\beta&\beta\cr \alpha&-\alpha-2\beta&\beta&\beta\cr \beta&\beta&-\alpha-2\beta&\alpha\cr \beta&\beta&\alpha&-\alpha-2\beta\end{pmatrix}
$$

$\alpha=\beta$ 이면 Jukes–Cantor 모형이다. 전이 빈도와 전환 빈도의 비 $\kappa=\alpha/\beta$ 를 전이·전환 비(transition/transversion ratio)라 한다.

## 진화 거리

두 서열이 갈라진 뒤 경로 길이가 $2T$ 이면 자리당 치환 수의 평균은 $d=2T(\alpha+2\beta)$ 이고, 이것을 **진화 거리** 라 한다. 두 서열에서 전이로 다른 자리의 비율을 $P$, 전환으로 다른 자리의 비율을 $R$ 로 적는다. 개요의 예에서 $P=0.2$, $R=0.1$ 이다.

# 성질

## 전이확률

정리. 한 염기가 시간 $t$ 뒤에 같은 염기, 전이 상대, 전환 상대 둘 가운데 하나에 있을 확률은 다음이다[^1].

$$
\begin{aligned}
p_{\mathrm{same}}(t)&=\tfrac14+\tfrac14e^{-4\beta t}+\tfrac12e^{-2(\alpha+\beta)t}\cr
p_{\mathrm{ts}}(t)&=\tfrac14+\tfrac14e^{-4\beta t}-\tfrac12e^{-2(\alpha+\beta)t}\cr
p_{\mathrm{tv}}(t)&=\tfrac12-\tfrac12e^{-4\beta t}
\end{aligned}
$$

증명의 요지. $Q$ 의 고윳값은 $0$, $-4\beta$, $-2(\alpha+\beta)$ 이고 마지막 것은 중복도 $2$ 다. 고유벡터는 모든 성분이 $1$ 인 벡터, 퓨린에서 $1$ 이고 피리미딘에서 $-1$ 인 벡터, A 와 G 의 차, C 와 T 의 차다. $e^{tQ}$ 의 첫 행을 이 기저로 풀어 쓰면 위 식이 나온다. $p_{\mathrm{tv}}$ 는 직관 절의 두 상태 계산과 같다.

## Kimura 거리

정리. 다음 식이 성립한다[^1].

$$
d=-\frac12\ln(1-2P-R)-\frac14\ln(1-2R)
$$

증명의 요지. 연쇄가 가역적이고 정상분포가 균등하므로 두 서열의 차이는 한 서열이 시간 $2T$ 동안 바뀐 것과 분포가 같다. 위 정리에서 $1-2R=e^{-8\beta T}$ 이고 $1-2P-R=e^{-4(\alpha+\beta)T}$ 이므로 두 로그 항은 다음 값이다.

$$
-\tfrac14\ln(1-2R)=2\beta T,\qquad -\tfrac12\ln(1-2P-R)=2(\alpha+\beta)T
$$

두 값의 합이 $2T(\alpha+2\beta)=d$ 다.

개요의 예에서 첫 항은 $-\tfrac12\ln 0.5\approx 0.347$, 둘째 항은 $-\tfrac14\ln 0.8\approx 0.056$ 이므로 $d\approx 0.402$ 다. 같은 자료에 Jukes–Cantor 거리를 쓰면 이보다 작은 $0.383$ 이 나온다.

## 전이·전환 비의 추정

두 로그 항의 비에서 $\kappa$ 를 얻는다. 개요의 예에서 $2\beta T=0.056$, $2(\alpha+\beta)T=0.347$ 이므로 $\alpha T\approx 0.146$, $\beta T\approx 0.028$ 이고 $\kappa\approx 5.2$ 다.

# 활용

- 거리 행렬에 기반한 계통수 추정에서 Jukes–Cantor 거리 대신 쓴다.
- 전이·전환 비 $\kappa$ 의 추정. 코돈 모형과 가능도 기반 계통 추정의 모수로 쓰인다.
- 염기 빈도와 여섯 치환 빈도를 모두 모수로 둔 일반 시간 가역 모형(general time-reversible model)의 특수 사례다.

[^1]: M. Kimura, "A simple method for estimating evolutionary rates of base substitutions through comparative studies of nucleotide sequences", *Journal of Molecular Evolution* 16 (1980), 111–120.

# 연관 문서

## 선수지식

- [Jukes–Cantor 모형](jukes-cantor-model.md)

## 더 알아보기

아직 연결한 문서가 없다.

#probability #statistics
