# Borel–Cantelli 보조정리

# 개요

**Borel–Cantelli 보조정리(Borel–Cantelli lemma)** 는 사건열 $A_1,A_2,\dots$ 가운데 무한히 많은 것이 일어나는 사건의 확률을 각 사건의 확률의 합으로 판정한다. 합이 수렴하면 그 확률이 $0$ 이고, 사건들이 서로 독립이고 합이 발산하면 $1$ 이다.

Borel 이 첫째 주장을, Cantelli 가 둘째 주장을 얻었다[^1].

# 직관

동전을 무한히 던져 $n$ 번째에서 앞면이 연속 $n$ 번 나오는 사건을 $A_n$ 이라 한다. 이런 일이 무한히 자주 일어나는지 묻는다. 한 $A_n$ 의 확률은 $2^{-n}$ 으로 작지만 사건이 무한히 많으므로 하나하나의 확률만으로는 답이 나오지 않는다.

무한히 자주 일어난다는 것을 집합으로 적는다. 어느 $N$ 을 잡아도 $N$ 이후에 적어도 하나가 일어나야 하므로, 그 사건은 $N$ 마다 만든 합집합 $\bigcup_{n\ge N}A_n$ 들의 교집합이다. 합집합의 확률은 각 확률의 합을 넘지 않으므로 $N$ 번째 교집합 후보의 확률이 $\sum_{n\ge N}2^{-n}=2^{-N+1}$ 이하다. $N$ 을 키우면 이 값이 $0$ 으로 가고 교집합의 확률도 $0$ 이다. 확률의 합이 수렴하는 것만 썼다.

합이 발산하면 같은 계산이 아무것도 주지 않는다. $A_n$ 을 모두 같은 사건으로 잡으면 합이 발산하면서 상극한의 확률이 그 사건의 확률과 같아 $1$ 보다 작을 수 있다. 사건이 서로 독립이라는 조건을 넣으면 여집합의 확률이 곱으로 쪼개져 $\prod(1-P(A_n))$ 이 되고, $1-x\le e^{-x}$ 로 이 곱이 $0$ 이 된다.

# 정의

## 상극한 사건

사건열 $\lbrace A_n\rbrace$ 에 대해

$$
\limsup_{n}A_n=\bigcap_{N\ge1}\bigcup_{n\ge N}A_n
$$

을 상극한 사건이라 한다. 표본점 $\omega$ 가 이 집합에 드는 것은 $\omega$ 를 포함하는 $A_n$ 이 무한히 많은 것과 같다.

# 성질

## 첫째 보조정리

$\sum_{n}P(A_n)\lt\infty$ 이면 $P(\limsup_n A_n)=0$ 이다. 증명의 요지는 꼬리합이다. 모든 $N$ 에서

$$
P\left(\limsup_n A_n\right)\le P\left(\bigcup_{n\ge N}A_n\right)\le\sum_{n\ge N}P(A_n)
$$

이고 오른쪽이 $N\to\infty$ 에서 $0$ 으로 간다. 독립 조건이 필요하지 않고 확률 측도 대신 임의의 [측도](measure.md)에서도 같은 논증이 성립한다.

## 둘째 보조정리

$A_n$ 이 서로 독립이고 $\sum_n P(A_n)=\infty$ 이면 $P(\limsup_n A_n)=1$ 이다. 증명의 요지는 여집합을 곱으로 쪼개는 것이다. 유한한 $M\gt N$ 에서

$$
P\left(\bigcap_{n=N}^{M}A_n^{c}\right)=\prod_{n=N}^{M}(1-P(A_n))\le\exp\left(-\sum_{n=N}^{M}P(A_n)\right)
$$

이고 합이 발산하므로 $M\to\infty$ 에서 오른쪽이 $0$ 이다. 따라서 각 $N$ 에서 $\bigcup_{n\ge N}A_n$ 의 확률이 $1$ 이고 가산 교집합의 확률도 $1$ 이다.

## 독립 조건의 완화

둘째 보조정리의 독립을 쌍별 조건으로 약하게 바꿀 수 있다. 쌍별 독립이면 결론이 그대로 성립하고, 독립이 전혀 없어도 Kochen–Stone 부등식이

$$
P\left(\limsup_n A_n\right)\ge\limsup_{M\to\infty}\frac{\left(\sum_{n\le M}P(A_n)\right)^2}{\sum_{m,n\le M}P(A_m\cap A_n)}
$$

을 준다[^2]. 사건 쌍의 상관이 작으면 오른쪽이 양수가 되어 상극한이 양의 확률로 일어난다.

## 영일 법칙과의 관계

독립 사건열의 상극한 사건은 어느 유한 개의 사건을 빼도 변하지 않으므로 꼬리 $\sigma$ 대수에 속한다. Kolmogorov 영일 법칙이 그 확률을 $0$ 이나 $1$ 로 정하고, 두 보조정리가 확률의 합으로 어느 쪽인지를 가른다.

# 활용

- **강대수법칙.** [대수법칙](law-of-large-numbers.md)의 거의 확실한 수렴을 증명할 때 Chebyshev 부등식으로 각 사건의 확률을 재고 첫째 보조정리로 예외 사건을 지운다.
- **무작위 모형의 극값.** [Cramér 추측](cramer-conjecture.md)의 모형에서 간격의 상극한이 $(\log n)^2$ 임을 두 보조정리로 양쪽에서 조인다.
- **연분수 계수의 크기.** 거의 모든 실수에서 연분수 계수가 어떤 속도보다 크게 되는 일이 유한 번인지 무한 번인지를 첫째 보조정리와 Gauss 측도로 가른다.
- **무작위 그래프의 성질.** [Erdős–Rényi 그래프](erdos-renyi-graphs.md)에서 부분구조가 나타나는 사건의 확률을 더해 문턱을 넘으면 거의 확실하게 나타남을 얻는다.

[^1]: É. Borel, "Les probabilités dénombrables et leurs applications arithmétiques", Rendiconti del Circolo Matematico di Palermo 27 (1909), 247–271. F. P. Cantelli, "Sulla probabilità come limite della frequenza", Atti della Accademia Nazionale dei Lincei 26 (1917), 39–45.
[^2]: S. Kochen, C. Stone, "A note on the Borel–Cantelli lemma", Illinois Journal of Mathematics 8 (1964), 248–251.

# 연관 문서

## 선수지식

- [확률변수](random-variables.md)

## 더 알아보기

아직 연결한 문서가 없다.

#probability #measure_theory #analysis
