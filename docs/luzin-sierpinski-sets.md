# Luzin 집합과 Sierpiński 집합

# 개요

Luzin 집합은 실직선의 비가산 부분집합 가운데 모든 제1범주 집합과 가산으로만 만나는 것이고, Sierpiński 집합은 모든 영집합과 가산으로만 만나는 것이다. 연속체 가설 아래에서 둘 다 존재한다.

Luzin 집합은 측도가 $0$ 이면서 제1범주가 아니고, Sierpiński 집합은 제1범주이면서 측도가 양이다. 두 집합은 [Erdős–Sierpiński 쌍대성](erdos-sierpinski-duality.md)의 쌍대 사상으로 서로 옮겨진다.

# 직관

실직선의 부분집합 가운데 어디에도 빽빽하지 않은 것을 셀 수 있는 개수만큼 모으면 제1범주 집합이 되고, [Baire 범주 정리](baire-category.md)는 이런 집합이 실직선 전체가 되지 못한다고 한다. 그러면 제1범주 집합을 하나 잡을 때마다 그 밖에 점이 남는다. 남는 점을 계속 집어 모으면 무엇이 되는지 본다.

제1범주 집합 $M\_0$ 밖에서 점 $x\_0$ 을 집는다. 다음으로 $M\_1$ 을 잡아도 $M\_0\cup M\_1$ 이 제1범주라 그 밖에서 $x\_1$ 을 집는다. 셀 수 있는 개수의 제1범주 집합을 합쳐도 제1범주이므로 이 절차는 셀 수 있는 단계 동안 막히지 않는다. 제1범주 집합 전부를 줄 세울 수 있으면 절차가 끝까지 간다.

제1범주 집합은 실수 개만큼 있고, 연속체 가설은 실수의 개수가 $\aleph\_1$ 이라고 한다. 그래서 제1범주 집합을 $M\_\alpha$ $(\alpha\lt \omega\_1)$ 로 줄 세운다. 단계 $\alpha$ 에서 $\bigcup\_{\beta\le\alpha}M\_\beta$ 는 가산 개의 합집합이라 제1범주이므로 그 밖에서 $x\_\alpha$ 를 집는다.

이렇게 모은 $L=\lbrace x\_\alpha : \alpha\lt \omega\_1\rbrace$ 는 크기가 $\aleph\_1$ 이라 비가산이다. 제1범주 집합 $M$ 을 아무거나 잡으면 $M=M\_\gamma$ 인 $\gamma$ 가 있고, $\alpha\gt \gamma$ 인 $x\_\alpha$ 는 $M\_\gamma$ 밖에서 집었으므로 $L\cap M$ 에 남는 것은 $\gamma$ 이하 단계의 점뿐이라 가산이다.

# 정의

$L\subseteq\mathbb R$ 이 **Luzin 집합**이라 함은 $L$ 이 비가산이고 모든 제1범주 집합 $M$ 에 대해 $L\cap M$ 이 가산인 것이다.

$S\subseteq\mathbb R$ 이 **Sierpiński 집합**이라 함은 $S$ 가 비가산이고 모든 Lebesgue 영집합 $N$ 에 대해 $S\cap N$ 이 가산인 것이다.

제1범주 집합의 족을 $\mathcal M$, 영집합의 족을 $\mathcal N$ 이라 쓴다. 두 정의는 $\mathcal M$ 과 $\mathcal N$ 을 맞바꾼 꼴이다.

# 성질

## 존재 정리

**정리**(Luzin, Sierpiński)**.** 연속체 가설 아래에서 Luzin 집합과 Sierpiński 집합이 존재한다.[^1]

증명의 요지는 직관 절의 초한귀납이다. $\mathcal M$ 은 $\sigma$ 아이디얼이고 $\mathbb R\notin\mathcal M$ 이므로 각 단계에서 집을 점이 남고, 연속체 가설이 $\lvert\mathcal M\rvert=\aleph\_1$ 을 주어 열거가 길이 $\omega\_1$ 로 끝난다. $\mathcal N$ 도 $\sigma$ 아이디얼이고 $\mathbb R\notin\mathcal N$ 이므로 같은 귀납이 Sierpiński 집합을 준다. ∎

## 측도와 범주

**정리.** Luzin 집합은 영집합이면서 제1범주가 아니고, Sierpiński 집합은 제1범주이면서 측도가 양이다.

$L$ 이 제1범주이면 정의를 $M=L$ 에 적용해 $L=L\cap L$ 이 가산이 되어 모순이다. 측도 쪽은 쌍대성 문서의 분해 $\mathbb R=A\sqcup B$ 를 쓴다. $A$ 가 영집합이고 $B$ 가 제1범주이므로 $L\cap B$ 는 가산이고 $L\subseteq A\cup(L\cap B)$ 이라 $L$ 은 영집합이다. $S$ 에 대해서는 같은 분해에서 $S\cap A$ 가 가산이고 $S\subseteq B\cup(S\cap A)$ 이라 $S$ 가 제1범주이며, $S=S\cap S$ 가 가산이 아니므로 $S$ 는 영집합이 아니다. ∎

## 강 측도 영집합

[강 측도 영집합](strong-measure-zero.md)은 양수열 $(\varepsilon\_n)$ 이 무엇이든 길이 $\varepsilon\_n$ 인 구간 $I\_n$ 을 잡아 $X\subseteq\bigcup\_n I\_n$ 으로 덮을 수 있는 집합 $X$ 다.

**정리.** Luzin 집합은 강 측도 영집합이다.

$(\varepsilon\_n)$ 이 주어지면 유리수 열거 $(q\_n)$ 을 잡고 홀수 번째 첨자로 $q\_n$ 을 중심에 둔 길이 $\varepsilon\_{2n+1}$ 인 구간을 만든다. 그 합집합 $G$ 는 빽빽한 열린집합이라 $\mathbb R\setminus G$ 가 제1범주이므로 $L\setminus G$ 는 가산이고, 그 가산 집합의 점마다 짝수 번째 첨자의 구간을 하나씩 준다. ∎

## 쌍대 사상 아래의 상

**정리.** $f$ 가 $f=f^{-1}$ 인 쌍대 사상이고 $L$ 이 Luzin 집합이면 $f(L)$ 은 Sierpiński 집합이다.

영집합 $N$ 을 잡으면 $f(N)$ 은 제1범주이고 $f(L)\cap N=f(L\cap f(N))$ 이다. $L\cap f(N)$ 이 가산이므로 그 상도 가산이다. 반대 방향도 같은 계산으로 나온다. ∎

## Martin 의 공리 아래의 부재

Luzin 집합의 비가산 부분집합은 다시 Luzin 집합이므로, Luzin 집합이 있으면 크기 $\aleph\_1$ 인 것이 있다. 그 집합이 제1범주가 아니므로 제1범주가 아닌 집합의 최소 크기 $\mathrm{non}(\mathcal M)$ 이 $\aleph\_1$ 이다. [Martin 의 공리](martins-axiom.md)와 연속체 가설의 부정을 함께 가정하면 $\mathrm{non}(\mathcal M)=\mathfrak c\gt \aleph\_1$ 이므로 Luzin 집합이 존재하지 않는다.[^2]

같은 논법이 Sierpiński 집합에 $\mathrm{non}(\mathcal N)=\aleph\_1$ 을 주고, Martin 의 공리는 $\mathrm{non}(\mathcal N)=\mathfrak c$ 를 준다. 두 집합의 존재는 연속체 가설에서 따라 나오지만 [ZFC 공리계](zfc-axioms.md)(Zermelo–Fraenkel with choice)에서 따라 나오지 않는다.

# 활용

- 측도와 범주가 서로 다른 뜻임을 보이는 반례를 준다. Luzin 집합은 영집합이면서 제1범주가 아니고 Sierpiński 집합은 그 반대라, [Erdős–Sierpiński 쌍대성](erdos-sierpinski-duality.md)의 활용 절이 말하는 반례 옮기기의 구체적인 예가 된다.
- [기수 불변량](cardinal-characteristics.md)의 값을 정한다. Luzin 집합의 존재가 $\mathrm{non}(\mathcal M)=\aleph\_1$ 을, Sierpiński 집합의 존재가 $\mathrm{non}(\mathcal N)=\aleph\_1$ 을 준다.
- Borel 추측의 반증에 쓴다. Borel 추측은 모든 강 측도 영집합이 가산이라는 명제이고, 연속체 가설 아래의 Luzin 집합이 비가산인 강 측도 영집합이므로 이 추측이 거짓이 된다.[^3]

[^1]: John C. Oxtoby, *Measure and Category*, Springer Graduate Texts in Mathematics 2 (1980), 19장. 두 집합의 초한귀납 구성과 쌍대 사상 아래의 대응이 이 장에 있다.

[^2]: Tomek Bartoszyński and Haim Judah, *Set Theory: On the Structure of the Real Line*, A K Peters (1995), 2.5절과 7.3절. Luzin 집합과 Sierpiński 집합의 존재를 $\mathrm{non}(\mathcal M)$ 과 $\mathrm{non}(\mathcal N)$ 으로 특징짓는다.

[^3]: Richard Laver, "On the consistency of Borel's conjecture", *Acta Mathematica* 137 (1976), 151–169. Borel 추측이 ZFC 와 무모순임을 반복 강제법으로 보인 논문이며, 연속체 가설 아래에서 그 추측이 거짓임을 서론에서 든다.

# 연관 문서

## 선수지식

- [Erdős–Sierpiński 쌍대성](erdos-sierpinski-duality.md)

## 더 알아보기

아직 연결한 문서가 없다.

#set_theory #measure_theory #logic #topology
