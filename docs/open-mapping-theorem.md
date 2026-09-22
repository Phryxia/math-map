# 열린 사상 정리

# 개요

[Banach 공간](banach-spaces.md) 사이의 전사인 유계 선형작용소는 열린 집합을 열린 집합으로 보낸다. 전사성이라는 대수적 조건 하나가 위상적 결론을 준다.

따름정리 둘이 함수해석의 기본 도구다. 전단사 유계 선형작용소의 역이 다시 유계이고, 그래프가 닫힌 선형작용소는 유계다. 증명은 셋 다 [Baire 범주 정리](baire-category.md)를 한 번씩 쓴다.

# 직관

$T:X\to Y$ 가 전사이면 단위공의 상 $T(B_X)$ 가 $Y$ 의 모든 점을 유한 배로 덮는다. 곧 $Y=\bigcup_n nT(B_X)$ 다. $Y$ 가 [완비](completeness.md)이므로 Baire 범주 정리가 어떤 $n\overline{T(B_X)}$ 에 내부가 있다고 말하고, 선형성이 그 내부를 원점 주위로 옮긴다. 여기까지는 폐포의 내부이고 결론은 폐포 없이 성립해야 한다.

폐포를 떼는 것이 증명의 나머지다. $y$ 를 $T(B_X)$ 의 폐포 안에서 잡으면 $\lVert y-Tx_1\rVert$ 를 절반으로 줄이는 $x_1$ 이 있고, 남은 차에 같은 조작을 반복하면 $\sum\lVert x_k\rVert$ 가 수렴하는 급수가 나온다. $X$ 가 완비이므로 $x=\sum x_k$ 가 존재하고 $Tx=y$ 다. 두 공간의 완비성이 각각 다른 자리에서 쓰인다.

# 정의

사상 $T:X\to Y$ 가 **열린 사상**이라는 것은 $X$ 의 모든 열린 집합 $U$ 에 대해 $T(U)$ 가 $Y$ 에서 열린 집합이라는 뜻이다.

선형작용소에서는 원점 근방 하나만 보면 된다. $T$ 가 선형이면 다음 둘이 동치다.

$$
T \thinspace\text{가 열린 사상} \iff \exists\thinspace c\gt 0:\ B_Y(0,c)\subseteq T(B_X(0,1))
$$

작용소 $T:D(T)\subseteq X\to Y$ 의 **그래프**는 곱공간 $X\times Y$ 의 부분집합

$$
\Gamma(T)=\lbrace (x,Tx): x\in D(T)\rbrace
$$

이다. $\Gamma(T)$ 가 $X\times Y$ 에서 닫혀 있으면 $T$ 를 **닫힌 작용소**라 한다. 곧 $x_n\to x$ 이고 $Tx_n\to y$ 이면 $Tx=y$ 다.

# 성질

## 열린 사상 정리

**정리(Banach–Schauder).** $X,Y$ 가 Banach 공간이고 $T\in\mathcal B(X,Y)$ 가 전사이면 $T$ 는 열린 사상이다.[^1]

전사성에서 $Y=\bigcup_{n\ge1}\overline{T(nB_X)}$ 이고 $Y$ 가 완비이므로 Baire 범주 정리가 어떤 $N$ 에 대해 $\overline{T(NB_X)}$ 의 내부가 비어 있지 않다고 준다. 차집합 $\overline{T(B_X)}-\overline{T(B_X)}\subseteq\overline{T(2B_X)}$ 와 대칭성으로 원점을 중심으로 하는 공 $B_Y(0,2c)\subseteq\overline{T(B_X)}$ 를 얻는다.

폐포를 떼려면 $B_Y(0,c)\subseteq T(B_X)$ 를 보여야 한다. $\lVert y\rVert\lt c$ 에 대해 $\lVert y-Tx_1\rVert\lt c/2$ 인 $\lVert x_1\rVert\lt 1/2$ 를 고르고, 같은 논법을 $y-Tx_1$ 에 적용해 $\lVert x_k\rVert\lt 2^{-k}$ 인 열을 얻는다. $X$ 의 완비성이 $x=\sum_k x_k$ 를 주고 $\lVert x\rVert\lt 1$ 이며 $Tx=y$ 다. ∎

## 유계 역작용소 정리

**따름정리.** $T\in\mathcal B(X,Y)$ 가 전단사이면 $T^{-1}\in\mathcal B(Y,X)$ 다.

$T$ 가 열린 사상이므로 $T^{-1}$ 의 역상이 열린 집합이고, [선형사상](linear-maps.md)에서 연속과 유계가 동치다. ∎

두 노름이 같은 [벡터 공간](vector-spaces.md) 위에서 각각 완비이고 한쪽이 다른 쪽을 지배하면 두 노름이 동치라는 진술이 이 따름정리의 흔한 형태다.

## 닫힌 그래프 정리

**정리.** $X,Y$ 가 Banach 공간이고 $T:X\to Y$ 가 전역에서 정의된 선형작용소일 때, $T$ 가 유계일 필요충분조건은 $\Gamma(T)$ 가 닫혀 있는 것이다.

유계이면 닫힌 것은 연속성에서 바로 나온다. 역방향은 $\Gamma(T)$ 가 $X\times Y$ 의 닫힌 부분공간이므로 그 자체가 Banach 공간이라는 데서 시작한다. 사영 $\pi_X:\Gamma(T)\to X$ 는 유계 전단사이고, 유계 역작용소 정리가 $\pi_X^{-1}$ 의 유계성을 준다. $T=\pi_Y\circ\pi_X^{-1}$ 이므로 $T$ 가 유계다. ∎

검증할 조건이 약해지는 것이 이 정리의 쓸모다. 연속성은 $x_n\to x$ 에서 $Tx_n$ 의 수렴과 그 극한값을 모두 보여야 하지만, 닫힌성은 $Tx_n$ 이 수렴한다는 것을 가정으로 받고 극한값만 확인하면 된다.

## 완비성 없는 반례

세 정리 모두 완비성 없이는 깨진다. $c_{00}$ 을 유한 개 항만 $0$ 이 아닌 수열들의 공간에 상한 노름을 준 것이라 하고 $T(x)\_n=x_n/n$ 으로 두면, $T$ 는 유계 전단사이지만 $T^{-1}$ 은 유계가 아니다. $c_{00}$ 이 완비가 아니어서 생기는 현상이다.

# 활용

- **작용소의 역의 존재.** 미분방정식을 $Tu=f$ 로 쓰고 $T$ 의 전단사성을 보이면 해의 존재와 유일성뿐 아니라 자료 $f$ 에 대한 연속 의존성이 따라온다.
- **비유계 작용소의 다룸.** 미분작용소는 $L^2$ 전체에서 정의되지 않고 정의역에서만 닫힌 작용소다. 닫힌 그래프 정리가 전역 정의와 유계성을 묶으므로, 전역에서 정의된 비유계 작용소를 다루려면 [선택공리](axiom-of-choice.md)가 필요하다.
- **노름의 비교.** 한 공간 위의 두 완비 노름이 한쪽 부등식만으로 동치가 된다. Sobolev 공간의 서로 다른 정의가 같은 위상을 준다는 확인이 이 형태다.
- **닫힌 치역 정리.** 열린 사상 정리를 상공간 $Y/\overline{\mathrm{ran}\thinspace T}$ 에 적용해 치역이 닫혀 있을 조건을 작용소의 쌍대 쪽 조건으로 바꾼다. [Fredholm 작용소](fredholm-operators.md)의 이론이 이 위에 선다.

[^1]: Walter Rudin, *Functional Analysis*, 2nd ed., McGraw–Hill, 1991, Theorem 2.11 (열린 사상 정리)과 Theorem 2.15 (닫힌 그래프 정리).

# 연관 문서

## 선수지식

- [Baire 범주 정리](baire-category.md)
- [Banach 공간](banach-spaces.md)

## 더 알아보기

아직 연결한 문서가 없다.

#functional_analysis #analysis #topology
